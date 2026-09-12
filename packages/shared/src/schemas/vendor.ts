import { z } from "zod"
import { CHECK_IN_MIN_HOURS, CHECK_IN_MAX_HOURS, CHECK_IN_DEFAULT_HOURS } from "../constants"

export const vendorSignupSchema = z.object({
  name: z.string().min(2).max(80),
  phone: z.string().regex(/^\+91[6-9]\d{9}$/),
  category: z.string().min(2).max(40),
  upiId: z.string().regex(/^[\w.-]+@[\w.-]+$/),
})
export type VendorSignupInput = z.infer<typeof vendorSignupSchema>

export const vendorKycSchema = z.object({
  vendorId: z.string().cuid(),
  aadhaarNumber: z.string().regex(/^\d{12}$/),
  photoUrl: z.string().url(),
  selfieUrl: z.string().url(),
})
export type VendorKycInput = z.infer<typeof vendorKycSchema>

export const vendorCheckInSchema = z.object({
  stationId: z.string().cuid(),
  platform: z.string().min(1).max(10),
  durationHours: z.number().int().min(CHECK_IN_MIN_HOURS).max(CHECK_IN_MAX_HOURS).default(CHECK_IN_DEFAULT_HOURS),
})
export type VendorCheckInInput = z.infer<typeof vendorCheckInSchema>

export const catalogItemSchema = z.object({
  name: z.string().min(1).max(60),
  priceInPaise: z.number().int().min(100),
})
export type CatalogItemInput = z.infer<typeof catalogItemSchema>
