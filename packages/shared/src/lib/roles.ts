import type { UserRole } from "../types/auth"

export function isAdminRole(role: UserRole): role is "admin" | "superadmin" {
  return role === "admin" || role === "superadmin"
}

export function isSuperAdmin(role: UserRole): role is "superadmin" {
  return role === "superadmin"
}
