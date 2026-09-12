import { z } from "zod"

export const vendorVerificationDecisionSchema = z.object({
  decision: z.enum(["cleared", "rejected"]),
})
export type VendorVerificationDecisionInput = z.infer<typeof vendorVerificationDecisionSchema>

export const reviewFlagActionSchema = z.object({
  action: z.enum(["dismissed", "removed"]),
})
export type ReviewFlagActionInput = z.infer<typeof reviewFlagActionSchema>

export const orderStatusUpdateSchema = z.object({
  status: z.enum(["accepted", "rejected", "fulfilled"]),
})
export type OrderStatusUpdateInput = z.infer<typeof orderStatusUpdateSchema>

export const soldOutToggleSchema = z.object({
  soldOut: z.boolean(),
})
export type SoldOutToggleInput = z.infer<typeof soldOutToggleSchema>
