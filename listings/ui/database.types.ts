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
          fuel_type: Database["public"]["Enums"]["fuel_type"] | null
          id: number
          images: string[] | null
          is_sold: boolean | null
          kms: number
          location: string | null
          model: string
          note: string | null
          owner_mobile_number: string
          owner_name: string | null
          price: number
          year_of_purchase: number
        }
        Insert: {
          brand_name: string
          color?: string | null
          created_at?: string
          fuel_type?: Database["public"]["Enums"]["fuel_type"] | null
          id?: number
          images?: string[] | null
          is_sold?: boolean | null
          kms: number
          location?: string | null
          model: string
          note?: string | null
          owner_mobile_number?: string
          owner_name?: string | null
          price: number
          year_of_purchase: number
        }
        Update: {
          brand_name?: string
          color?: string | null
          created_at?: string
          fuel_type?: Database["public"]["Enums"]["fuel_type"] | null
          id?: number
          images?: string[] | null
          is_sold?: boolean | null
          kms?: number
          location?: string | null
          model?: string
          note?: string | null
          owner_mobile_number?: string
          owner_name?: string | null
          price?: number
          year_of_purchase?: number
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
      fuel_type: "Petrol" | "Diesel" | "Hybrid"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
