export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      freestyler: {
        Row: {
          battles: Json[]
          fms: string
          group: string
          name: string
        }
        Insert: {
          battles?: Json[]
          fms: string
          group: string
          name: string
        }
        Update: {
          battles?: Json[]
          fms?: string
          group?: string
          name?: string
        }
      }
      matchday: {
        Row: {
          city: string
          date: string
          fms: string
          id: string
          image: string
          number: number
        }
        Insert: {
          city: string
          date: string
          fms: string
          id: string
          image: string
          number: number
        }
        Update: {
          city?: string
          date?: string
          fms?: string
          id?: string
          image?: string
          number?: number
        }
      }
      postseason: {
        Row: {
          final: Json
          fms: string
          playoffs: Json
          semifinals: Json
        }
        Insert: {
          final?: Json
          fms: string
          playoffs?: Json
          semifinals?: Json
        }
        Update: {
          final?: Json
          fms?: string
          playoffs?: Json
          semifinals?: Json
        }
      }
      relegation: {
        Row: {
          fms: string
          playoffs: Json
          removals: Json
          survivals: Json
        }
        Insert: {
          fms: string
          playoffs?: Json
          removals?: Json
          survivals?: Json
        }
        Update: {
          fms?: string
          playoffs?: Json
          removals?: Json
          survivals?: Json
        }
      }
      transfer: {
        Row: {
          freestyler: string
          from: string | null
          id: number
          to: string
        }
        Insert: {
          freestyler: string
          from?: string | null
          id?: number
          to: string
        }
        Update: {
          freestyler?: string
          from?: string | null
          id?: number
          to?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
