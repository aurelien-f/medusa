import { EventEmitter } from "events"
import {
  MigrateOptions,
  MigrationResult,
  UmzugMigration,
} from "@mikro-orm/migrations"
import { MikroORM, MikroORMOptions } from "@mikro-orm/core"
import { PostgreSqlDriver } from "@mikro-orm/postgresql"

/**
 * Events emitted by the migrations class
 */
export type MigrationsEvents = {
  migrating: [UmzugMigration]
  migrated: [UmzugMigration]
  reverting: [UmzugMigration]
  reverted: [UmzugMigration]
}

/**
 * Exposes the API to programmatically manage Mikro ORM migrations
 */
export class Migrations extends EventEmitter<MigrationsEvents> {
  #configOrConnection: Partial<MikroORMOptions> | MikroORM<PostgreSqlDriver>

  constructor(
    configOrConnection: Partial<MikroORMOptions> | MikroORM<PostgreSqlDriver>
  ) {
    super()
    this.#configOrConnection = configOrConnection
  }

  /**
   * Returns an existing connection or instantiates a new
   * one
   */
  async #getConnection() {
    if ("connect" in this.#configOrConnection) {
      return this.#configOrConnection as MikroORM<PostgreSqlDriver>
    }

    return await MikroORM.init({
      ...this.#configOrConnection,
      migrations: {
        ...this.#configOrConnection.migrations,
        silent: true,
      },
    })
  }

  /**
   * Generates migrations for a collection of entities defined
   * in the config
   */
  async generate(): Promise<MigrationResult> {
    const connection = await this.#getConnection()
    const migrator = connection.getMigrator()
    try {
      return await migrator.createMigration()
    } finally {
      await connection.close(true)
    }
  }

  /**
   * Run migrations for the provided entities
   */
  async run(
    options?: string | string[] | MigrateOptions
  ): Promise<UmzugMigration[]> {
    const connection = await this.#getConnection()
    const migrator = connection.getMigrator()

    migrator["umzug"].on("migrating", (event: UmzugMigration) =>
      this.emit("migrating", event)
    )
    migrator["umzug"].on("migrated", (event: UmzugMigration) => {
      this.emit("migrated", event)
    })

    try {
      const res = await migrator.up(options)
      return res
    } finally {
      migrator["umzug"].clearListeners()
      await connection.close(true)
    }
  }

  /**
   * Run migrations for the provided entities
   */
  async revert(
    options?: string | string[] | MigrateOptions
  ): Promise<UmzugMigration[]> {
    const connection = await this.#getConnection()
    const migrator = connection.getMigrator()

    migrator["umzug"].on("reverting", (event: UmzugMigration) =>
      this.emit("reverting", event)
    )
    migrator["umzug"].on("reverted", (event: UmzugMigration) => {
      this.emit("reverted", event)
    })

    try {
      return await migrator.down(options)
    } finally {
      migrator["umzug"].clearListeners()
      await connection.close(true)
    }
  }
}