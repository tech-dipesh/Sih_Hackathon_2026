export interface VendorMapEntry {
  vendorId: string
  qrToken: string
  name: string
  category: string
  platform: string
  soldOut: boolean
  items: Array<{
    id: string
    name: string
    priceInPaise: number
  }>
}

export interface VendorProfileItem {
  id: string
  name: string
  priceInPaise: number
}

export interface VendorProfileReview {
  id: string
  rating: number
  text: string | null
  createdAt: string
}

export interface VendorProfileResponse {
  id: string
  name: string
  category: string
  soldOut: boolean
  currentStationId: string | null
  catalogItems: VendorProfileItem[]
  reviews: VendorProfileReview[]
}
