export type UserRole = "customer" | "vendor" | "admin" | "superadmin"

export interface AccessTokenPayload {
  sub: string
  role: UserRole
  tokenType: "access"
}

export interface RefreshTokenPayload {
  sub: string
  role: UserRole
  tokenType: "refresh"
  tokenId: string
}
