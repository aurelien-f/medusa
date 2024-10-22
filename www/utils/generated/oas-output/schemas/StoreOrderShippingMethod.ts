/**
 * @schema StoreOrderShippingMethod
 * type: object
 * description: The shipping method's details.
 * x-schemaName: StoreOrderShippingMethod
 * required:
 *   - id
 *   - order_id
 *   - name
 *   - amount
 *   - is_tax_inclusive
 *   - shipping_option_id
 *   - data
 *   - metadata
 *   - original_total
 *   - original_subtotal
 *   - original_tax_total
 *   - total
 *   - subtotal
 *   - tax_total
 *   - discount_total
 *   - discount_tax_total
 *   - created_at
 *   - updated_at
 * properties:
 *   id:
 *     type: string
 *     title: id
 *     description: The shipping method's ID.
 *   order_id:
 *     type: string
 *     title: order_id
 *     description: The ID of the order the shipping method belongs to.
 *   name:
 *     type: string
 *     title: name
 *     description: The shipping method's name.
 *   description:
 *     type: string
 *     title: description
 *     description: The shipping method's description.
 *   amount:
 *     type: number
 *     title: amount
 *     description: The shipping method's amount.
 *   is_tax_inclusive:
 *     type: boolean
 *     title: is_tax_inclusive
 *     description: Whether the shipping method's amount includes applied taxes.
 *   shipping_option_id:
 *     type: string
 *     title: shipping_option_id
 *     description: The ID of the shipping option this method was created from.
 *   data:
 *     type: object
 *     description: The shipping method's data, useful for fulfillment provider handling its fulfillment.
 *     externalDocs:
 *       url: https://docs.medusajs.com/v2/resources/commerce-modules/fulfillment/shipping-option#data-property
 *   metadata:
 *     type: object
 *     description: The shipping method's metadata, can hold custom key-value pairs.
 *   tax_lines:
 *     type: array
 *     description: The shipping method's tax lines.
 *     items:
 *       allOf:
 *         - type: object
 *           description: The tax line's tax lines.
 *           x-schemaName: BaseOrderShippingMethodTaxLine
 *           required:
 *             - shipping_method
 *             - shipping_method_id
 *             - total
 *             - subtotal
 *             - id
 *             - code
 *             - rate
 *             - created_at
 *             - updated_at
 *           properties:
 *             shipping_method:
 *               type: object
 *               description: The tax line's shipping method.
 *               x-schemaName: BaseOrderShippingMethod
 *               required:
 *                 - id
 *                 - order_id
 *                 - name
 *                 - amount
 *                 - is_tax_inclusive
 *                 - shipping_option_id
 *                 - data
 *                 - metadata
 *                 - original_total
 *                 - original_subtotal
 *                 - original_tax_total
 *                 - total
 *                 - subtotal
 *                 - tax_total
 *                 - discount_total
 *                 - discount_tax_total
 *                 - created_at
 *                 - updated_at
 *               properties:
 *                 id:
 *                   type: string
 *                   title: id
 *                   description: The shipping method's ID.
 *                 order_id:
 *                   type: string
 *                   title: order_id
 *                   description: The shipping method's order id.
 *                 name:
 *                   type: string
 *                   title: name
 *                   description: The shipping method's name.
 *                 description:
 *                   type: string
 *                   title: description
 *                   description: The shipping method's description.
 *                 amount:
 *                   type: number
 *                   title: amount
 *                   description: The shipping method's amount.
 *                 is_tax_inclusive:
 *                   type: boolean
 *                   title: is_tax_inclusive
 *                   description: The shipping method's is tax inclusive.
 *                 shipping_option_id:
 *                   type: string
 *                   title: shipping_option_id
 *                   description: The shipping method's shipping option id.
 *                 data:
 *                   type: object
 *                   description: The shipping method's data.
 *                 metadata:
 *                   type: object
 *                   description: The shipping method's metadata.
 *                 tax_lines:
 *                   type: array
 *                   description: The shipping method's tax lines.
 *                   items:
 *                     type: object
 *                     description: The tax line's tax lines.
 *                     x-schemaName: BaseOrderShippingMethodTaxLine
 *                     required:
 *                       - shipping_method
 *                       - shipping_method_id
 *                       - total
 *                       - subtotal
 *                       - id
 *                       - code
 *                       - rate
 *                       - created_at
 *                       - updated_at
 *                     properties:
 *                       shipping_method:
 *                         type: object
 *                         description: The tax line's shipping method.
 *                         x-schemaName: BaseOrderShippingMethod
 *                       shipping_method_id:
 *                         type: string
 *                         title: shipping_method_id
 *                         description: The tax line's shipping method id.
 *                       total:
 *                         type: number
 *                         title: total
 *                         description: The tax line's total.
 *                       subtotal:
 *                         type: number
 *                         title: subtotal
 *                         description: The tax line's subtotal.
 *                       id:
 *                         type: string
 *                         title: id
 *                         description: The tax line's ID.
 *                       description:
 *                         type: string
 *                         title: description
 *                         description: The tax line's description.
 *                       tax_rate_id:
 *                         type: string
 *                         title: tax_rate_id
 *                         description: The tax line's tax rate id.
 *                       code:
 *                         type: string
 *                         title: code
 *                         description: The tax line's code.
 *                       rate:
 *                         type: number
 *                         title: rate
 *                         description: The tax line's rate.
 *                       provider_id:
 *                         type: string
 *                         title: provider_id
 *                         description: The tax line's provider id.
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                         title: created_at
 *                         description: The tax line's created at.
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *                         title: updated_at
 *                         description: The tax line's updated at.
 *                 adjustments:
 *                   type: array
 *                   description: The shipping method's adjustments.
 *                   items:
 *                     type: object
 *                     description: The adjustment's adjustments.
 *                     x-schemaName: BaseOrderShippingMethodAdjustment
 *                     required:
 *                       - shipping_method
 *                       - shipping_method_id
 *                       - id
 *                       - amount
 *                       - order_id
 *                       - created_at
 *                       - updated_at
 *                     properties:
 *                       shipping_method:
 *                         type: object
 *                         description: The adjustment's shipping method.
 *                         x-schemaName: BaseOrderShippingMethod
 *                       shipping_method_id:
 *                         type: string
 *                         title: shipping_method_id
 *                         description: The adjustment's shipping method id.
 *                       id:
 *                         type: string
 *                         title: id
 *                         description: The adjustment's ID.
 *                       code:
 *                         type: string
 *                         title: code
 *                         description: The adjustment's code.
 *                       amount:
 *                         type: number
 *                         title: amount
 *                         description: The adjustment's amount.
 *                       order_id:
 *                         type: string
 *                         title: order_id
 *                         description: The adjustment's order id.
 *                       description:
 *                         type: string
 *                         title: description
 *                         description: The adjustment's description.
 *                       promotion_id:
 *                         type: string
 *                         title: promotion_id
 *                         description: The adjustment's promotion id.
 *                       provider_id:
 *                         type: string
 *                         title: provider_id
 *                         description: The adjustment's provider id.
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                         title: created_at
 *                         description: The adjustment's created at.
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *                         title: updated_at
 *                         description: The adjustment's updated at.
 *                 original_total:
 *                   type: number
 *                   title: original_total
 *                   description: The shipping method's original total.
 *                 original_subtotal:
 *                   type: number
 *                   title: original_subtotal
 *                   description: The shipping method's original subtotal.
 *                 original_tax_total:
 *                   type: number
 *                   title: original_tax_total
 *                   description: The shipping method's original tax total.
 *                 total:
 *                   type: number
 *                   title: total
 *                   description: The shipping method's total.
 *                 detail:
 *                   type: object
 *                   description: The shipping method's detail.
 *                   x-schemaName: BaseOrderShippingDetail
 *                   required:
 *                     - id
 *                     - shipping_method_id
 *                     - shipping_method
 *                     - created_at
 *                     - updated_at
 *                   properties:
 *                     id:
 *                       type: string
 *                       title: id
 *                       description: The detail's ID.
 *                     shipping_method_id:
 *                       type: string
 *                       title: shipping_method_id
 *                       description: The detail's shipping method id.
 *                     shipping_method:
 *                       type: object
 *                       description: The detail's shipping method.
 *                       x-schemaName: BaseOrderShippingMethod
 *                     claim_id:
 *                       type: string
 *                       title: claim_id
 *                       description: The detail's claim id.
 *                     exchange_id:
 *                       type: string
 *                       title: exchange_id
 *                       description: The detail's exchange id.
 *                     return_id:
 *                       type: string
 *                       title: return_id
 *                       description: The detail's return id.
 *                     created_at:
 *                       type: string
 *                       format: date-time
 *                       title: created_at
 *                       description: The detail's created at.
 *                     updated_at:
 *                       type: string
 *                       format: date-time
 *                       title: updated_at
 *                       description: The detail's updated at.
 *                 subtotal:
 *                   type: number
 *                   title: subtotal
 *                   description: The shipping method's subtotal.
 *                 tax_total:
 *                   type: number
 *                   title: tax_total
 *                   description: The shipping method's tax total.
 *                 discount_total:
 *                   type: number
 *                   title: discount_total
 *                   description: The shipping method's discount total.
 *                 discount_tax_total:
 *                   type: number
 *                   title: discount_tax_total
 *                   description: The shipping method's discount tax total.
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                   title: created_at
 *                   description: The shipping method's created at.
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 *                   title: updated_at
 *                   description: The shipping method's updated at.
 *             shipping_method_id:
 *               type: string
 *               title: shipping_method_id
 *               description: The tax line's shipping method id.
 *             total:
 *               type: number
 *               title: total
 *               description: The tax line's total.
 *             subtotal:
 *               type: number
 *               title: subtotal
 *               description: The tax line's subtotal.
 *             id:
 *               type: string
 *               title: id
 *               description: The tax line's ID.
 *             description:
 *               type: string
 *               title: description
 *               description: The tax line's description.
 *             tax_rate_id:
 *               type: string
 *               title: tax_rate_id
 *               description: The tax line's tax rate id.
 *             code:
 *               type: string
 *               title: code
 *               description: The tax line's code.
 *             rate:
 *               type: number
 *               title: rate
 *               description: The tax line's rate.
 *             provider_id:
 *               type: string
 *               title: provider_id
 *               description: The tax line's provider id.
 *             created_at:
 *               type: string
 *               format: date-time
 *               title: created_at
 *               description: The tax line's created at.
 *             updated_at:
 *               type: string
 *               format: date-time
 *               title: updated_at
 *               description: The tax line's updated at.
 *         - type: object
 *           description: The tax line's tax lines.
 *           required:
 *             - shipping_method
 *           properties:
 *             shipping_method:
 *               type: object
 *               description: The tax line's shipping method.
 *               x-schemaName: StoreOrderShippingMethod
 *               required:
 *                 - id
 *                 - order_id
 *                 - name
 *                 - amount
 *                 - is_tax_inclusive
 *                 - shipping_option_id
 *                 - data
 *                 - metadata
 *                 - original_total
 *                 - original_subtotal
 *                 - original_tax_total
 *                 - total
 *                 - subtotal
 *                 - tax_total
 *                 - discount_total
 *                 - discount_tax_total
 *                 - created_at
 *                 - updated_at
 *               properties:
 *                 tax_lines:
 *                   type: array
 *                   description: The shipping method's tax lines.
 *                   items:
 *                     allOf:
 *                       - type: object
 *                         description: The tax line's tax lines.
 *                         x-schemaName: BaseOrderShippingMethodTaxLine
 *                         required:
 *                           - shipping_method
 *                           - shipping_method_id
 *                           - total
 *                           - subtotal
 *                           - id
 *                           - code
 *                           - rate
 *                           - created_at
 *                           - updated_at
 *                         properties:
 *                           shipping_method:
 *                             type: object
 *                             description: The tax line's shipping method.
 *                             x-schemaName: BaseOrderShippingMethod
 *                           shipping_method_id:
 *                             type: string
 *                             title: shipping_method_id
 *                             description: The tax line's shipping method id.
 *                           total:
 *                             type: number
 *                             title: total
 *                             description: The tax line's total.
 *                           subtotal:
 *                             type: number
 *                             title: subtotal
 *                             description: The tax line's subtotal.
 *                           id:
 *                             type: string
 *                             title: id
 *                             description: The tax line's ID.
 *                           description:
 *                             type: string
 *                             title: description
 *                             description: The tax line's description.
 *                           tax_rate_id:
 *                             type: string
 *                             title: tax_rate_id
 *                             description: The tax line's tax rate id.
 *                           code:
 *                             type: string
 *                             title: code
 *                             description: The tax line's code.
 *                           rate:
 *                             type: number
 *                             title: rate
 *                             description: The tax line's rate.
 *                           provider_id:
 *                             type: string
 *                             title: provider_id
 *                             description: The tax line's provider id.
 *                           created_at:
 *                             type: string
 *                             format: date-time
 *                             title: created_at
 *                             description: The tax line's created at.
 *                           updated_at:
 *                             type: string
 *                             format: date-time
 *                             title: updated_at
 *                             description: The tax line's updated at.
 *                       - type: object
 *                         description: The tax line's tax lines.
 *                         required:
 *                           - shipping_method
 *                         properties:
 *                           shipping_method:
 *                             type: object
 *                             description: The tax line's shipping method.
 *                             x-schemaName: StoreOrderShippingMethod
 *                 adjustments:
 *                   type: array
 *                   description: The shipping method's adjustments.
 *                   items:
 *                     allOf:
 *                       - type: object
 *                         description: The adjustment's adjustments.
 *                         x-schemaName: BaseOrderShippingMethodAdjustment
 *                         required:
 *                           - shipping_method
 *                           - shipping_method_id
 *                           - id
 *                           - amount
 *                           - order_id
 *                           - created_at
 *                           - updated_at
 *                         properties:
 *                           shipping_method:
 *                             type: object
 *                             description: The adjustment's shipping method.
 *                             x-schemaName: BaseOrderShippingMethod
 *                           shipping_method_id:
 *                             type: string
 *                             title: shipping_method_id
 *                             description: The adjustment's shipping method id.
 *                           id:
 *                             type: string
 *                             title: id
 *                             description: The adjustment's ID.
 *                           code:
 *                             type: string
 *                             title: code
 *                             description: The adjustment's code.
 *                           amount:
 *                             type: number
 *                             title: amount
 *                             description: The adjustment's amount.
 *                           order_id:
 *                             type: string
 *                             title: order_id
 *                             description: The adjustment's order id.
 *                           description:
 *                             type: string
 *                             title: description
 *                             description: The adjustment's description.
 *                           promotion_id:
 *                             type: string
 *                             title: promotion_id
 *                             description: The adjustment's promotion id.
 *                           provider_id:
 *                             type: string
 *                             title: provider_id
 *                             description: The adjustment's provider id.
 *                           created_at:
 *                             type: string
 *                             format: date-time
 *                             title: created_at
 *                             description: The adjustment's created at.
 *                           updated_at:
 *                             type: string
 *                             format: date-time
 *                             title: updated_at
 *                             description: The adjustment's updated at.
 *                       - type: object
 *                         description: The adjustment's adjustments.
 *                         required:
 *                           - shipping_method
 *                         properties:
 *                           shipping_method:
 *                             type: object
 *                             description: The adjustment's shipping method.
 *                             x-schemaName: StoreOrderShippingMethod
 *                 detail:
 *                   allOf:
 *                     - type: object
 *                       description: The shipping method's detail.
 *                       x-schemaName: BaseOrderShippingDetail
 *                       required:
 *                         - id
 *                         - shipping_method_id
 *                         - shipping_method
 *                         - created_at
 *                         - updated_at
 *                       properties:
 *                         id:
 *                           type: string
 *                           title: id
 *                           description: The detail's ID.
 *                         shipping_method_id:
 *                           type: string
 *                           title: shipping_method_id
 *                           description: The detail's shipping method id.
 *                         shipping_method:
 *                           type: object
 *                           description: The detail's shipping method.
 *                           x-schemaName: BaseOrderShippingMethod
 *                         claim_id:
 *                           type: string
 *                           title: claim_id
 *                           description: The detail's claim id.
 *                         exchange_id:
 *                           type: string
 *                           title: exchange_id
 *                           description: The detail's exchange id.
 *                         return_id:
 *                           type: string
 *                           title: return_id
 *                           description: The detail's return id.
 *                         created_at:
 *                           type: string
 *                           format: date-time
 *                           title: created_at
 *                           description: The detail's created at.
 *                         updated_at:
 *                           type: string
 *                           format: date-time
 *                           title: updated_at
 *                           description: The detail's updated at.
 *                     - type: object
 *                       description: The shipping method's detail.
 *                       required:
 *                         - shipping_method
 *                       properties:
 *                         shipping_method:
 *                           type: object
 *                           description: The detail's shipping method.
 *                           x-schemaName: StoreOrderShippingMethod
 *                 id:
 *                   type: string
 *                   title: id
 *                   description: The shipping method's ID.
 *                 order_id:
 *                   type: string
 *                   title: order_id
 *                   description: The shipping method's order id.
 *                 name:
 *                   type: string
 *                   title: name
 *                   description: The shipping method's name.
 *                 description:
 *                   type: string
 *                   title: description
 *                   description: The shipping method's description.
 *                 amount:
 *                   type: number
 *                   title: amount
 *                   description: The shipping method's amount.
 *                 is_tax_inclusive:
 *                   type: boolean
 *                   title: is_tax_inclusive
 *                   description: The shipping method's is tax inclusive.
 *                 shipping_option_id:
 *                   type: string
 *                   title: shipping_option_id
 *                   description: The shipping method's shipping option id.
 *                 data:
 *                   type: object
 *                   description: The shipping method's data.
 *                 metadata:
 *                   type: object
 *                   description: The shipping method's metadata.
 *                 original_total:
 *                   type: number
 *                   title: original_total
 *                   description: The shipping method's original total.
 *                 original_subtotal:
 *                   type: number
 *                   title: original_subtotal
 *                   description: The shipping method's original subtotal.
 *                 original_tax_total:
 *                   type: number
 *                   title: original_tax_total
 *                   description: The shipping method's original tax total.
 *                 total:
 *                   type: number
 *                   title: total
 *                   description: The shipping method's total.
 *                 subtotal:
 *                   type: number
 *                   title: subtotal
 *                   description: The shipping method's subtotal.
 *                 tax_total:
 *                   type: number
 *                   title: tax_total
 *                   description: The shipping method's tax total.
 *                 discount_total:
 *                   type: number
 *                   title: discount_total
 *                   description: The shipping method's discount total.
 *                 discount_tax_total:
 *                   type: number
 *                   title: discount_tax_total
 *                   description: The shipping method's discount tax total.
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                   title: created_at
 *                   description: The shipping method's created at.
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 *                   title: updated_at
 *                   description: The shipping method's updated at.
 *       description: The tax line's details.
 *   adjustments:
 *     type: array
 *     description: The shipping method's adjustments.
 *     items:
 *       allOf:
 *         - type: object
 *           description: The adjustment's adjustments.
 *           x-schemaName: BaseOrderShippingMethodAdjustment
 *           required:
 *             - shipping_method
 *             - shipping_method_id
 *             - id
 *             - amount
 *             - order_id
 *             - created_at
 *             - updated_at
 *           properties:
 *             shipping_method:
 *               type: object
 *               description: The adjustment's shipping method.
 *               x-schemaName: BaseOrderShippingMethod
 *               required:
 *                 - id
 *                 - order_id
 *                 - name
 *                 - amount
 *                 - is_tax_inclusive
 *                 - shipping_option_id
 *                 - data
 *                 - metadata
 *                 - original_total
 *                 - original_subtotal
 *                 - original_tax_total
 *                 - total
 *                 - subtotal
 *                 - tax_total
 *                 - discount_total
 *                 - discount_tax_total
 *                 - created_at
 *                 - updated_at
 *               properties:
 *                 id:
 *                   type: string
 *                   title: id
 *                   description: The shipping method's ID.
 *                 order_id:
 *                   type: string
 *                   title: order_id
 *                   description: The shipping method's order id.
 *                 name:
 *                   type: string
 *                   title: name
 *                   description: The shipping method's name.
 *                 description:
 *                   type: string
 *                   title: description
 *                   description: The shipping method's description.
 *                 amount:
 *                   type: number
 *                   title: amount
 *                   description: The shipping method's amount.
 *                 is_tax_inclusive:
 *                   type: boolean
 *                   title: is_tax_inclusive
 *                   description: The shipping method's is tax inclusive.
 *                 shipping_option_id:
 *                   type: string
 *                   title: shipping_option_id
 *                   description: The shipping method's shipping option id.
 *                 data:
 *                   type: object
 *                   description: The shipping method's data.
 *                 metadata:
 *                   type: object
 *                   description: The shipping method's metadata.
 *                 tax_lines:
 *                   type: array
 *                   description: The shipping method's tax lines.
 *                   items:
 *                     type: object
 *                     description: The tax line's tax lines.
 *                     x-schemaName: BaseOrderShippingMethodTaxLine
 *                     required:
 *                       - shipping_method
 *                       - shipping_method_id
 *                       - total
 *                       - subtotal
 *                       - id
 *                       - code
 *                       - rate
 *                       - created_at
 *                       - updated_at
 *                     properties:
 *                       shipping_method:
 *                         type: object
 *                         description: The tax line's shipping method.
 *                         x-schemaName: BaseOrderShippingMethod
 *                       shipping_method_id:
 *                         type: string
 *                         title: shipping_method_id
 *                         description: The tax line's shipping method id.
 *                       total:
 *                         type: number
 *                         title: total
 *                         description: The tax line's total.
 *                       subtotal:
 *                         type: number
 *                         title: subtotal
 *                         description: The tax line's subtotal.
 *                       id:
 *                         type: string
 *                         title: id
 *                         description: The tax line's ID.
 *                       description:
 *                         type: string
 *                         title: description
 *                         description: The tax line's description.
 *                       tax_rate_id:
 *                         type: string
 *                         title: tax_rate_id
 *                         description: The tax line's tax rate id.
 *                       code:
 *                         type: string
 *                         title: code
 *                         description: The tax line's code.
 *                       rate:
 *                         type: number
 *                         title: rate
 *                         description: The tax line's rate.
 *                       provider_id:
 *                         type: string
 *                         title: provider_id
 *                         description: The tax line's provider id.
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                         title: created_at
 *                         description: The tax line's created at.
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *                         title: updated_at
 *                         description: The tax line's updated at.
 *                 adjustments:
 *                   type: array
 *                   description: The shipping method's adjustments.
 *                   items:
 *                     type: object
 *                     description: The adjustment's adjustments.
 *                     x-schemaName: BaseOrderShippingMethodAdjustment
 *                     required:
 *                       - shipping_method
 *                       - shipping_method_id
 *                       - id
 *                       - amount
 *                       - order_id
 *                       - created_at
 *                       - updated_at
 *                     properties:
 *                       shipping_method:
 *                         type: object
 *                         description: The adjustment's shipping method.
 *                         x-schemaName: BaseOrderShippingMethod
 *                       shipping_method_id:
 *                         type: string
 *                         title: shipping_method_id
 *                         description: The adjustment's shipping method id.
 *                       id:
 *                         type: string
 *                         title: id
 *                         description: The adjustment's ID.
 *                       code:
 *                         type: string
 *                         title: code
 *                         description: The adjustment's code.
 *                       amount:
 *                         type: number
 *                         title: amount
 *                         description: The adjustment's amount.
 *                       order_id:
 *                         type: string
 *                         title: order_id
 *                         description: The adjustment's order id.
 *                       description:
 *                         type: string
 *                         title: description
 *                         description: The adjustment's description.
 *                       promotion_id:
 *                         type: string
 *                         title: promotion_id
 *                         description: The adjustment's promotion id.
 *                       provider_id:
 *                         type: string
 *                         title: provider_id
 *                         description: The adjustment's provider id.
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                         title: created_at
 *                         description: The adjustment's created at.
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *                         title: updated_at
 *                         description: The adjustment's updated at.
 *                 original_total:
 *                   type: number
 *                   title: original_total
 *                   description: The shipping method's original total.
 *                 original_subtotal:
 *                   type: number
 *                   title: original_subtotal
 *                   description: The shipping method's original subtotal.
 *                 original_tax_total:
 *                   type: number
 *                   title: original_tax_total
 *                   description: The shipping method's original tax total.
 *                 total:
 *                   type: number
 *                   title: total
 *                   description: The shipping method's total.
 *                 detail:
 *                   type: object
 *                   description: The shipping method's detail.
 *                   x-schemaName: BaseOrderShippingDetail
 *                   required:
 *                     - id
 *                     - shipping_method_id
 *                     - shipping_method
 *                     - created_at
 *                     - updated_at
 *                   properties:
 *                     id:
 *                       type: string
 *                       title: id
 *                       description: The detail's ID.
 *                     shipping_method_id:
 *                       type: string
 *                       title: shipping_method_id
 *                       description: The detail's shipping method id.
 *                     shipping_method:
 *                       type: object
 *                       description: The detail's shipping method.
 *                       x-schemaName: BaseOrderShippingMethod
 *                     claim_id:
 *                       type: string
 *                       title: claim_id
 *                       description: The detail's claim id.
 *                     exchange_id:
 *                       type: string
 *                       title: exchange_id
 *                       description: The detail's exchange id.
 *                     return_id:
 *                       type: string
 *                       title: return_id
 *                       description: The detail's return id.
 *                     created_at:
 *                       type: string
 *                       format: date-time
 *                       title: created_at
 *                       description: The detail's created at.
 *                     updated_at:
 *                       type: string
 *                       format: date-time
 *                       title: updated_at
 *                       description: The detail's updated at.
 *                 subtotal:
 *                   type: number
 *                   title: subtotal
 *                   description: The shipping method's subtotal.
 *                 tax_total:
 *                   type: number
 *                   title: tax_total
 *                   description: The shipping method's tax total.
 *                 discount_total:
 *                   type: number
 *                   title: discount_total
 *                   description: The shipping method's discount total.
 *                 discount_tax_total:
 *                   type: number
 *                   title: discount_tax_total
 *                   description: The shipping method's discount tax total.
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                   title: created_at
 *                   description: The shipping method's created at.
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 *                   title: updated_at
 *                   description: The shipping method's updated at.
 *             shipping_method_id:
 *               type: string
 *               title: shipping_method_id
 *               description: The adjustment's shipping method id.
 *             id:
 *               type: string
 *               title: id
 *               description: The adjustment's ID.
 *             code:
 *               type: string
 *               title: code
 *               description: The adjustment's code.
 *             amount:
 *               type: number
 *               title: amount
 *               description: The adjustment's amount.
 *             order_id:
 *               type: string
 *               title: order_id
 *               description: The adjustment's order id.
 *             description:
 *               type: string
 *               title: description
 *               description: The adjustment's description.
 *             promotion_id:
 *               type: string
 *               title: promotion_id
 *               description: The adjustment's promotion id.
 *             provider_id:
 *               type: string
 *               title: provider_id
 *               description: The adjustment's provider id.
 *             created_at:
 *               type: string
 *               format: date-time
 *               title: created_at
 *               description: The adjustment's created at.
 *             updated_at:
 *               type: string
 *               format: date-time
 *               title: updated_at
 *               description: The adjustment's updated at.
 *         - type: object
 *           description: The adjustment's adjustments.
 *           required:
 *             - shipping_method
 *           properties:
 *             shipping_method:
 *               type: object
 *               description: The adjustment's shipping method.
 *               x-schemaName: StoreOrderShippingMethod
 *               required:
 *                 - id
 *                 - order_id
 *                 - name
 *                 - amount
 *                 - is_tax_inclusive
 *                 - shipping_option_id
 *                 - data
 *                 - metadata
 *                 - original_total
 *                 - original_subtotal
 *                 - original_tax_total
 *                 - total
 *                 - subtotal
 *                 - tax_total
 *                 - discount_total
 *                 - discount_tax_total
 *                 - created_at
 *                 - updated_at
 *               properties:
 *                 tax_lines:
 *                   type: array
 *                   description: The shipping method's tax lines.
 *                   items:
 *                     allOf:
 *                       - type: object
 *                         description: The tax line's tax lines.
 *                         x-schemaName: BaseOrderShippingMethodTaxLine
 *                         required:
 *                           - shipping_method
 *                           - shipping_method_id
 *                           - total
 *                           - subtotal
 *                           - id
 *                           - code
 *                           - rate
 *                           - created_at
 *                           - updated_at
 *                         properties:
 *                           shipping_method:
 *                             type: object
 *                             description: The tax line's shipping method.
 *                             x-schemaName: BaseOrderShippingMethod
 *                           shipping_method_id:
 *                             type: string
 *                             title: shipping_method_id
 *                             description: The tax line's shipping method id.
 *                           total:
 *                             type: number
 *                             title: total
 *                             description: The tax line's total.
 *                           subtotal:
 *                             type: number
 *                             title: subtotal
 *                             description: The tax line's subtotal.
 *                           id:
 *                             type: string
 *                             title: id
 *                             description: The tax line's ID.
 *                           description:
 *                             type: string
 *                             title: description
 *                             description: The tax line's description.
 *                           tax_rate_id:
 *                             type: string
 *                             title: tax_rate_id
 *                             description: The tax line's tax rate id.
 *                           code:
 *                             type: string
 *                             title: code
 *                             description: The tax line's code.
 *                           rate:
 *                             type: number
 *                             title: rate
 *                             description: The tax line's rate.
 *                           provider_id:
 *                             type: string
 *                             title: provider_id
 *                             description: The tax line's provider id.
 *                           created_at:
 *                             type: string
 *                             format: date-time
 *                             title: created_at
 *                             description: The tax line's created at.
 *                           updated_at:
 *                             type: string
 *                             format: date-time
 *                             title: updated_at
 *                             description: The tax line's updated at.
 *                       - type: object
 *                         description: The tax line's tax lines.
 *                         required:
 *                           - shipping_method
 *                         properties:
 *                           shipping_method:
 *                             type: object
 *                             description: The tax line's shipping method.
 *                             x-schemaName: StoreOrderShippingMethod
 *                 adjustments:
 *                   type: array
 *                   description: The shipping method's adjustments.
 *                   items:
 *                     allOf:
 *                       - type: object
 *                         description: The adjustment's adjustments.
 *                         x-schemaName: BaseOrderShippingMethodAdjustment
 *                         required:
 *                           - shipping_method
 *                           - shipping_method_id
 *                           - id
 *                           - amount
 *                           - order_id
 *                           - created_at
 *                           - updated_at
 *                         properties:
 *                           shipping_method:
 *                             type: object
 *                             description: The adjustment's shipping method.
 *                             x-schemaName: BaseOrderShippingMethod
 *                           shipping_method_id:
 *                             type: string
 *                             title: shipping_method_id
 *                             description: The adjustment's shipping method id.
 *                           id:
 *                             type: string
 *                             title: id
 *                             description: The adjustment's ID.
 *                           code:
 *                             type: string
 *                             title: code
 *                             description: The adjustment's code.
 *                           amount:
 *                             type: number
 *                             title: amount
 *                             description: The adjustment's amount.
 *                           order_id:
 *                             type: string
 *                             title: order_id
 *                             description: The adjustment's order id.
 *                           description:
 *                             type: string
 *                             title: description
 *                             description: The adjustment's description.
 *                           promotion_id:
 *                             type: string
 *                             title: promotion_id
 *                             description: The adjustment's promotion id.
 *                           provider_id:
 *                             type: string
 *                             title: provider_id
 *                             description: The adjustment's provider id.
 *                           created_at:
 *                             type: string
 *                             format: date-time
 *                             title: created_at
 *                             description: The adjustment's created at.
 *                           updated_at:
 *                             type: string
 *                             format: date-time
 *                             title: updated_at
 *                             description: The adjustment's updated at.
 *                       - type: object
 *                         description: The adjustment's adjustments.
 *                         required:
 *                           - shipping_method
 *                         properties:
 *                           shipping_method:
 *                             type: object
 *                             description: The adjustment's shipping method.
 *                             x-schemaName: StoreOrderShippingMethod
 *                 detail:
 *                   allOf:
 *                     - type: object
 *                       description: The shipping method's detail.
 *                       x-schemaName: BaseOrderShippingDetail
 *                       required:
 *                         - id
 *                         - shipping_method_id
 *                         - shipping_method
 *                         - created_at
 *                         - updated_at
 *                       properties:
 *                         id:
 *                           type: string
 *                           title: id
 *                           description: The detail's ID.
 *                         shipping_method_id:
 *                           type: string
 *                           title: shipping_method_id
 *                           description: The detail's shipping method id.
 *                         shipping_method:
 *                           type: object
 *                           description: The detail's shipping method.
 *                           x-schemaName: BaseOrderShippingMethod
 *                         claim_id:
 *                           type: string
 *                           title: claim_id
 *                           description: The detail's claim id.
 *                         exchange_id:
 *                           type: string
 *                           title: exchange_id
 *                           description: The detail's exchange id.
 *                         return_id:
 *                           type: string
 *                           title: return_id
 *                           description: The detail's return id.
 *                         created_at:
 *                           type: string
 *                           format: date-time
 *                           title: created_at
 *                           description: The detail's created at.
 *                         updated_at:
 *                           type: string
 *                           format: date-time
 *                           title: updated_at
 *                           description: The detail's updated at.
 *                     - type: object
 *                       description: The shipping method's detail.
 *                       required:
 *                         - shipping_method
 *                       properties:
 *                         shipping_method:
 *                           type: object
 *                           description: The detail's shipping method.
 *                           x-schemaName: StoreOrderShippingMethod
 *                 id:
 *                   type: string
 *                   title: id
 *                   description: The shipping method's ID.
 *                 order_id:
 *                   type: string
 *                   title: order_id
 *                   description: The shipping method's order id.
 *                 name:
 *                   type: string
 *                   title: name
 *                   description: The shipping method's name.
 *                 description:
 *                   type: string
 *                   title: description
 *                   description: The shipping method's description.
 *                 amount:
 *                   type: number
 *                   title: amount
 *                   description: The shipping method's amount.
 *                 is_tax_inclusive:
 *                   type: boolean
 *                   title: is_tax_inclusive
 *                   description: The shipping method's is tax inclusive.
 *                 shipping_option_id:
 *                   type: string
 *                   title: shipping_option_id
 *                   description: The shipping method's shipping option id.
 *                 data:
 *                   type: object
 *                   description: The shipping method's data.
 *                 metadata:
 *                   type: object
 *                   description: The shipping method's metadata.
 *                 original_total:
 *                   type: number
 *                   title: original_total
 *                   description: The shipping method's original total.
 *                 original_subtotal:
 *                   type: number
 *                   title: original_subtotal
 *                   description: The shipping method's original subtotal.
 *                 original_tax_total:
 *                   type: number
 *                   title: original_tax_total
 *                   description: The shipping method's original tax total.
 *                 total:
 *                   type: number
 *                   title: total
 *                   description: The shipping method's total.
 *                 subtotal:
 *                   type: number
 *                   title: subtotal
 *                   description: The shipping method's subtotal.
 *                 tax_total:
 *                   type: number
 *                   title: tax_total
 *                   description: The shipping method's tax total.
 *                 discount_total:
 *                   type: number
 *                   title: discount_total
 *                   description: The shipping method's discount total.
 *                 discount_tax_total:
 *                   type: number
 *                   title: discount_tax_total
 *                   description: The shipping method's discount tax total.
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                   title: created_at
 *                   description: The shipping method's created at.
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 *                   title: updated_at
 *                   description: The shipping method's updated at.
 *       description: The adjustment's adjustments.
 *   original_total:
 *     type: number
 *     title: original_total
 *     description: The shipping method's total including taxes, excluding promotions.
 *   original_subtotal:
 *     type: number
 *     title: original_subtotal
 *     description: The shipping method's total excluding taxes, including promotions.
 *   original_tax_total:
 *     type: number
 *     title: original_tax_total
 *     description: The shipping method's total taxes excluding promotions.
 *   total:
 *     type: number
 *     title: total
 *     description: The shipping method's total including taxes and promotions.
 *   subtotal:
 *     type: number
 *     title: subtotal
 *     description: The shipping method's total excluding taxes, including promotions.
 *   tax_total:
 *     type: number
 *     title: tax_total
 *     description: The shipping method's tax total including promotions.
 *   discount_total:
 *     type: number
 *     title: discount_total
 *     description: The total discounts applied on the shipping method.
 *   discount_tax_total:
 *     type: number
 *     title: discount_tax_total
 *     description: The taxes applied on the discount amount.
 *   created_at:
 *     type: string
 *     format: date-time
 *     title: created_at
 *     description: The date the shipping method was created.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     title: updated_at
 *     description: The date the shipping method was updated.
 *   detail:
 *     allOf:
 *       - $ref: "#/components/schemas/BaseOrderShippingDetail"
 *       - type: object
 *         description: The shipping method's detail.
 *         required:
 *           - shipping_method
 *         properties:
 *           shipping_method:
 *             type: object
 *             description: The detail's shipping method.
 *             x-schemaName: StoreOrderShippingMethod
 *             required:
 *               - id
 *               - order_id
 *               - name
 *               - amount
 *               - is_tax_inclusive
 *               - shipping_option_id
 *               - data
 *               - metadata
 *               - original_total
 *               - original_subtotal
 *               - original_tax_total
 *               - total
 *               - subtotal
 *               - tax_total
 *               - discount_total
 *               - discount_tax_total
 *               - created_at
 *               - updated_at
 *             properties:
 *               tax_lines:
 *                 type: array
 *                 description: The shipping method's tax lines.
 *                 items:
 *                   allOf:
 *                     - type: object
 *                       description: The tax line's tax lines.
 *                       x-schemaName: BaseOrderShippingMethodTaxLine
 *                       required:
 *                         - shipping_method
 *                         - shipping_method_id
 *                         - total
 *                         - subtotal
 *                         - id
 *                         - code
 *                         - rate
 *                         - created_at
 *                         - updated_at
 *                       properties:
 *                         shipping_method:
 *                           type: object
 *                           description: The tax line's shipping method.
 *                           x-schemaName: BaseOrderShippingMethod
 *                         shipping_method_id:
 *                           type: string
 *                           title: shipping_method_id
 *                           description: The tax line's shipping method id.
 *                         total:
 *                           type: number
 *                           title: total
 *                           description: The tax line's total.
 *                         subtotal:
 *                           type: number
 *                           title: subtotal
 *                           description: The tax line's subtotal.
 *                         id:
 *                           type: string
 *                           title: id
 *                           description: The tax line's ID.
 *                         description:
 *                           type: string
 *                           title: description
 *                           description: The tax line's description.
 *                         tax_rate_id:
 *                           type: string
 *                           title: tax_rate_id
 *                           description: The tax line's tax rate id.
 *                         code:
 *                           type: string
 *                           title: code
 *                           description: The tax line's code.
 *                         rate:
 *                           type: number
 *                           title: rate
 *                           description: The tax line's rate.
 *                         provider_id:
 *                           type: string
 *                           title: provider_id
 *                           description: The tax line's provider id.
 *                         created_at:
 *                           type: string
 *                           format: date-time
 *                           title: created_at
 *                           description: The tax line's created at.
 *                         updated_at:
 *                           type: string
 *                           format: date-time
 *                           title: updated_at
 *                           description: The tax line's updated at.
 *                     - type: object
 *                       description: The tax line's tax lines.
 *                       required:
 *                         - shipping_method
 *                       properties:
 *                         shipping_method:
 *                           type: object
 *                           description: The tax line's shipping method.
 *                           x-schemaName: StoreOrderShippingMethod
 *               adjustments:
 *                 type: array
 *                 description: The shipping method's adjustments.
 *                 items:
 *                   allOf:
 *                     - type: object
 *                       description: The adjustment's adjustments.
 *                       x-schemaName: BaseOrderShippingMethodAdjustment
 *                       required:
 *                         - shipping_method
 *                         - shipping_method_id
 *                         - id
 *                         - amount
 *                         - order_id
 *                         - created_at
 *                         - updated_at
 *                       properties:
 *                         shipping_method:
 *                           type: object
 *                           description: The adjustment's shipping method.
 *                           x-schemaName: BaseOrderShippingMethod
 *                         shipping_method_id:
 *                           type: string
 *                           title: shipping_method_id
 *                           description: The adjustment's shipping method id.
 *                         id:
 *                           type: string
 *                           title: id
 *                           description: The adjustment's ID.
 *                         code:
 *                           type: string
 *                           title: code
 *                           description: The adjustment's code.
 *                         amount:
 *                           type: number
 *                           title: amount
 *                           description: The adjustment's amount.
 *                         order_id:
 *                           type: string
 *                           title: order_id
 *                           description: The adjustment's order id.
 *                         description:
 *                           type: string
 *                           title: description
 *                           description: The adjustment's description.
 *                         promotion_id:
 *                           type: string
 *                           title: promotion_id
 *                           description: The adjustment's promotion id.
 *                         provider_id:
 *                           type: string
 *                           title: provider_id
 *                           description: The adjustment's provider id.
 *                         created_at:
 *                           type: string
 *                           format: date-time
 *                           title: created_at
 *                           description: The adjustment's created at.
 *                         updated_at:
 *                           type: string
 *                           format: date-time
 *                           title: updated_at
 *                           description: The adjustment's updated at.
 *                     - type: object
 *                       description: The adjustment's adjustments.
 *                       required:
 *                         - shipping_method
 *                       properties:
 *                         shipping_method:
 *                           type: object
 *                           description: The adjustment's shipping method.
 *                           x-schemaName: StoreOrderShippingMethod
 *               detail:
 *                 allOf:
 *                   - type: object
 *                     description: The shipping method's detail.
 *                     x-schemaName: BaseOrderShippingDetail
 *                     required:
 *                       - id
 *                       - shipping_method_id
 *                       - shipping_method
 *                       - created_at
 *                       - updated_at
 *                     properties:
 *                       id:
 *                         type: string
 *                         title: id
 *                         description: The detail's ID.
 *                       shipping_method_id:
 *                         type: string
 *                         title: shipping_method_id
 *                         description: The detail's shipping method id.
 *                       shipping_method:
 *                         type: object
 *                         description: The detail's shipping method.
 *                         x-schemaName: BaseOrderShippingMethod
 *                       claim_id:
 *                         type: string
 *                         title: claim_id
 *                         description: The detail's claim id.
 *                       exchange_id:
 *                         type: string
 *                         title: exchange_id
 *                         description: The detail's exchange id.
 *                       return_id:
 *                         type: string
 *                         title: return_id
 *                         description: The detail's return id.
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                         title: created_at
 *                         description: The detail's created at.
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *                         title: updated_at
 *                         description: The detail's updated at.
 *                   - type: object
 *                     description: The shipping method's detail.
 *                     required:
 *                       - shipping_method
 *                     properties:
 *                       shipping_method:
 *                         type: object
 *                         description: The detail's shipping method.
 *                         x-schemaName: StoreOrderShippingMethod
 *               id:
 *                 type: string
 *                 title: id
 *                 description: The shipping method's ID.
 *               order_id:
 *                 type: string
 *                 title: order_id
 *                 description: The shipping method's order id.
 *               name:
 *                 type: string
 *                 title: name
 *                 description: The shipping method's name.
 *               description:
 *                 type: string
 *                 title: description
 *                 description: The shipping method's description.
 *               amount:
 *                 type: number
 *                 title: amount
 *                 description: The shipping method's amount.
 *               is_tax_inclusive:
 *                 type: boolean
 *                 title: is_tax_inclusive
 *                 description: The shipping method's is tax inclusive.
 *               shipping_option_id:
 *                 type: string
 *                 title: shipping_option_id
 *                 description: The shipping method's shipping option id.
 *               data:
 *                 type: object
 *                 description: The shipping method's data.
 *               metadata:
 *                 type: object
 *                 description: The shipping method's metadata.
 *               original_total:
 *                 type: number
 *                 title: original_total
 *                 description: The shipping method's original total.
 *               original_subtotal:
 *                 type: number
 *                 title: original_subtotal
 *                 description: The shipping method's original subtotal.
 *               original_tax_total:
 *                 type: number
 *                 title: original_tax_total
 *                 description: The shipping method's original tax total.
 *               total:
 *                 type: number
 *                 title: total
 *                 description: The shipping method's total.
 *               subtotal:
 *                 type: number
 *                 title: subtotal
 *                 description: The shipping method's subtotal.
 *               tax_total:
 *                 type: number
 *                 title: tax_total
 *                 description: The shipping method's tax total.
 *               discount_total:
 *                 type: number
 *                 title: discount_total
 *                 description: The shipping method's discount total.
 *               discount_tax_total:
 *                 type: number
 *                 title: discount_tax_total
 *                 description: The shipping method's discount tax total.
 *               created_at:
 *                 type: string
 *                 format: date-time
 *                 title: created_at
 *                 description: The shipping method's created at.
 *               updated_at:
 *                 type: string
 *                 format: date-time
 *                 title: updated_at
 *                 description: The shipping method's updated at.
 *     description: Details of changes to a shipping method.
 * 
*/
