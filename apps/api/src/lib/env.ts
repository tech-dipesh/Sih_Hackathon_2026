import { z } from "zod"
import { ACCESS_TOKEN_DEFAULT_TTL, REFRESH_TOKEN_DEFAULT_TTL } from "@railvendor/shared"

const envSchema = z.object({
  PORT: z.coerce.number().default(5000),
  DATABASE_URL: z.string().url(),
  REDIS_URL: z.string().url(),
  JWT_ACCESS_SECRET: z.string().min(32),
  JWT_REFRESH_SECRET: z.string().min(32),
  AADHAAR_HASH_SECRET: z.string().min(32),
  ACCESS_TOKEN_TTL: z.string().default(ACCESS_TOKEN_DEFAULT_TTL),
  REFRESH_TOKEN_TTL: z.string().default(REFRESH_TOKEN_DEFAULT_TTL),
  WEB_ORIGIN: z.string().url(),
  SMS_GATEWAY_API_KEY: z.string(),
  SMTP_HOST: z.string(),
  SMTP_PORT: z.coerce.number(),
  SMTP_USER: z.string(),
  SMTP_PASS: z.string(),
  SUPABASE_URL: z.string().url(),
  SUPABASE_SERVICE_ROLE_KEY: z.string(),
  RAZORPAY_KEY_ID: z.string(),
  RAZORPAY_KEY_SECRET: z.string(),
  RAZORPAY_WEBHOOK_SECRET: z.string(),
})

export const env = envSchema.parse(process.env)
