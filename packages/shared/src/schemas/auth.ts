import { z } from "zod"

export const requestPhoneOtpSchema = z.object({
  phone: z.string().regex(/^\+91[6-9]\d{9}$/),
})
export type RequestPhoneOtpInput = z.infer<typeof requestPhoneOtpSchema>

export const verifyPhoneOtpSchema = z.object({
  phone: z.string().regex(/^\+91[6-9]\d{9}$/),
  code: z.string().length(6),
})
export type VerifyPhoneOtpInput = z.infer<typeof verifyPhoneOtpSchema>

export const requestEmailOtpSchema = z.object({
  email: z.string().email(),
})
export type RequestEmailOtpInput = z.infer<typeof requestEmailOtpSchema>

export const verifyEmailOtpSchema = z.object({
  email: z.string().email(),
  phone: z.string().regex(/^\+91[6-9]\d{9}$/),
  code: z.string().length(6),
})
export type VerifyEmailOtpInput = z.infer<typeof verifyEmailOtpSchema>

export const refreshTokenSchema = z.object({
  refreshToken: z.string().optional(),
})
export type RefreshTokenInput = z.infer<typeof refreshTokenSchema>

export const passwordLoginSchema = z.object({
  identifier: z.string().min(3),
  password: z.string().min(8),
})
export type PasswordLoginInput = z.infer<typeof passwordLoginSchema>

export const adminLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  mfaCode: z.string().length(6).optional(),
})
export type AdminLoginInput = z.infer<typeof adminLoginSchema>
