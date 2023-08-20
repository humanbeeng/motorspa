export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      vehicles: {
        Row: {
          brand_name: string
          color: string | null
          created_at: string
          fuel_type: Database["public"]["Enums"]["fuel_type"]
          id: number
          images: string[]
          is_sold: boolean
          kms: number
          location: string | null
          model: string
          note: string | null
          owner_mobile_number: string | null
          owner_name: string | null
          price: number | null
          year_of_purchase: string
        }
        Insert: {
          brand_name: string
          color?: string | null
          created_at?: string
          fuel_type?: Database["public"]["Enums"]["fuel_type"]
          id?: number
          images?: string[]
          is_sold?: boolean
          kms: number
          location?: string | null
          model: string
          note?: string | null
          owner_mobile_number?: string | null
          owner_name?: string | null
          price?: number | null
          year_of_purchase: string
        }
        Update: {
          brand_name?: string
          color?: string | null
          created_at?: string
          fuel_type?: Database["public"]["Enums"]["fuel_type"]
          id?: number
          images?: string[]
          is_sold?: boolean
          kms?: number
          location?: string | null
          model?: string
          note?: string | null
          owner_mobile_number?: string | null
          owner_name?: string | null
          price?: number | null
          year_of_purchase?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      fuel_type: "Diesel" | "Petrol" | "Hybrid"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
