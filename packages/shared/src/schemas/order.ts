import { z } from "zod"

export const orderItemSchema = z.object({
  catalogItemId: z.string().cuid(),
  quantity: z.number().int().min(1).max(20),
})

export const createOrderSchema = z.object({
  vendorId: z.string().cuid(),
  stationId: z.string().cuid(),
  paymentMethod: z.enum(["upi", "cash"]),
  items: z.array(orderItemSchema).min(1).max(20),
})
export type CreateOrderInput = z.infer<typeof createOrderSchema>

export const reviewSchema = z.object({
  orderId: z.string().cuid(),
  rating: z.number().int().min(1).max(5),
  text: z.string().max(500).optional(),
})
export type ReviewInput = z.infer<typeof reviewSchema>

export const complaintSchema = z.object({
  orderId: z.string().cuid(),
  filedByPhone: z.string().regex(/^\+91[6-9]\d{9}$/),
  seatNumber: z.string().min(1).max(10),
  severity: z.enum(["general", "safety"]),
  description: z.string().min(10).max(1000),
})
export type ComplaintInput = z.infer<typeof complaintSchema>
