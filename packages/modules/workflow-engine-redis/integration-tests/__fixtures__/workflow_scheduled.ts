import { SchedulerOptions } from "@medusajs/framework/orchestration"
import {
  createStep,
  createWorkflow,
  StepResponse,
} from "@medusajs/framework/workflows-sdk"

export const createScheduled = (
  name: string,
  next: () => void,
  schedule?: SchedulerOptions
) => {
  const workflowScheduledStepInvoke = jest.fn((input, { container }) => {
    next()
    return new StepResponse({
      testValue: container.resolve("test-value"),
    })
  })

  const step = createStep("step_1", workflowScheduledStepInvoke)

  createWorkflow(
    { name, schedule: schedule ?? "* * * * * *" },
    function (input) {
      return step(input)
    }
  )

  return workflowScheduledStepInvoke
}
