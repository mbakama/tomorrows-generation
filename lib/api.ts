const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export interface ApiResponse<T> {
  data?: T
  error?: string
  message?: string
}

// Authentication
export interface LoginRequest {
  email: string
  password: string
}

export interface TokenResponse {
  access_token: string
  token_type: string
}

export interface User {
  id: number
  email: string
  username?: string
  full_name?: string
  is_admin: boolean
  is_active: boolean
}

// Music
export interface Album {
  id: number
  title: string
  year?: string
  description?: string
  cover_image?: string
  is_published: boolean
  created_at: string
  updated_at: string
  tracks: Track[]
}

export interface Track {
  id: number
  title: string
  duration?: string
  track_number?: number
  audio_file?: string
  is_available: boolean
  album_id: number
  play_count: number
  download_count: number
  created_at: string
}

export interface Single {
  id: number
  title: string
  release_date?: string
  duration?: string
  description?: string
  cover_image?: string
  audio_file?: string
  is_published: boolean
  play_count: number
  download_count: number
  created_at: string
}

// Events
export interface Event {
  id: number
  title: string
  description?: string
  date: string
  time: string
  location: string
  capacity: number
  ticket_price: number
  image?: string
  is_published: boolean
  created_at: string
  updated_at: string
  registered_count: number
}

// Pages
export interface Page {
  id: number
  title: string
  slug: string
  description?: string
  content?: string
  meta_title?: string
  meta_description?: string
  meta_keywords?: string
  is_published: boolean
  created_at: string
  updated_at: string
}

// API Client
class ApiClient {
  private baseURL: string
  private token: string | null = null

  constructor(baseURL: string) {
    this.baseURL = baseURL
    // Load token from localStorage on client side
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('access_token')
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    }

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return { data }
    } catch (error) {
      return { error: error instanceof Error ? error.message : 'Unknown error' }
    }
  }

  // Authentication
  async login(credentials: LoginRequest): Promise<ApiResponse<TokenResponse>> {
    const formData = new FormData()
    formData.append('username', credentials.email)
    formData.append('password', credentials.password)

    const response = await this.request<TokenResponse>('/api/auth/login', {
      method: 'POST',
      body: formData,
      headers: {}, // Don't set Content-Type for FormData
    })

    if (response.data) {
      this.token = response.data.access_token
      if (typeof window !== 'undefined') {
        localStorage.setItem('access_token', this.token)
      }
    }

    return response
  }

  async logout(): Promise<ApiResponse<null>> {
    const response = await this.request<null>('/api/auth/logout', {
      method: 'POST',
    })

    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token')
    }
    this.token = null

    return response
  }

  async getCurrentUser(): Promise<ApiResponse<User>> {
    return this.request<User>('/api/auth/me')
  }

  // Music
  async getAlbums(params: { published_only?: boolean } = {}): Promise<ApiResponse<Album[]>> {
    const searchParams = new URLSearchParams()
    if (params.published_only) searchParams.append('published_only', 'true')
    
    return this.request<Album[]>(`/api/music/albums?${searchParams}`)
  }

  async getAlbum(id: number): Promise<ApiResponse<Album>> {
    return this.request<Album>(`/api/music/albums/${id}`)
  }

  async createAlbum(album: Partial<Album>): Promise<ApiResponse<Album>> {
    return this.request<Album>('/api/music/albums', {
      method: 'POST',
      body: JSON.stringify(album),
    })
  }

  async updateAlbum(id: number, album: Partial<Album>): Promise<ApiResponse<Album>> {
    return this.request<Album>(`/api/music/albums/${id}`, {
      method: 'PUT',
      body: JSON.stringify(album),
    })
  }

  async deleteAlbum(id: number): Promise<ApiResponse<null>> {
    return this.request<null>(`/api/music/albums/${id}`, {
      method: 'DELETE',
    })
  }

  async getSingles(params: { published_only?: boolean } = {}): Promise<ApiResponse<Single[]>> {
    const searchParams = new URLSearchParams()
    if (params.published_only) searchParams.append('published_only', 'true')
    
    return this.request<Single[]>(`/api/music/singles?${searchParams}`)
  }

  async getSingle(id: number): Promise<ApiResponse<Single>> {
    return this.request<Single>(`/api/music/singles/${id}`)
  }

  async createSingle(single: Partial<Single>): Promise<ApiResponse<Single>> {
    return this.request<Single>('/api/music/singles', {
      method: 'POST',
      body: JSON.stringify(single),
    })
  }

  async updateSingle(id: number, single: Partial<Single>): Promise<ApiResponse<Single>> {
    return this.request<Single>(`/api/music/singles/${id}`, {
      method: 'PUT',
      body: JSON.stringify(single),
    })
  }

  async deleteSingle(id: number): Promise<ApiResponse<null>> {
    return this.request<null>(`/api/music/singles/${id}`, {
      method: 'DELETE',
    })
  }

  // Events
  async getEvents(params: { 
    published_only?: boolean
    upcoming_only?: boolean
    past_only?: boolean 
  } = {}): Promise<ApiResponse<Event[]>> {
    const searchParams = new URLSearchParams()
    if (params.published_only) searchParams.append('published_only', 'true')
    if (params.upcoming_only) searchParams.append('upcoming_only', 'true')
    if (params.past_only) searchParams.append('past_only', 'true')
    
    return this.request<Event[]>(`/api/events/?${searchParams}`)
  }

  async getEvent(id: number): Promise<ApiResponse<Event>> {
    return this.request<Event>(`/api/events/${id}`)
  }

  async createEvent(event: Partial<Event>): Promise<ApiResponse<Event>> {
    return this.request<Event>('/api/events/', {
      method: 'POST',
      body: JSON.stringify(event),
    })
  }

  async updateEvent(id: number, event: Partial<Event>): Promise<ApiResponse<Event>> {
    return this.request<Event>(`/api/events/${id}`, {
      method: 'PUT',
      body: JSON.stringify(event),
    })
  }

  async deleteEvent(id: number): Promise<ApiResponse<null>> {
    return this.request<null>(`/api/events/${id}`, {
      method: 'DELETE',
    })
  }

  async registerForEvent(eventId: number): Promise<ApiResponse<null>> {
    return this.request<null>(`/api/events/${eventId}/register`, {
      method: 'POST',
    })
  }

  async unregisterFromEvent(eventId: number): Promise<ApiResponse<null>> {
    return this.request<null>(`/api/events/${eventId}/register`, {
      method: 'DELETE',
    })
  }

  // Pages
  async getPages(params: { published_only?: boolean } = {}): Promise<ApiResponse<Page[]>> {
    const searchParams = new URLSearchParams()
    if (params.published_only) searchParams.append('published_only', 'true')
    
    return this.request<Page[]>(`/api/pages/?${searchParams}`)
  }

  async getPage(id: number): Promise<ApiResponse<Page>> {
    return this.request<Page>(`/api/pages/${id}`)
  }

  async getPageBySlug(slug: string): Promise<ApiResponse<Page>> {
    return this.request<Page>(`/api/pages/slug/${slug}`)
  }

  async createPage(page: Partial<Page>): Promise<ApiResponse<Page>> {
    return this.request<Page>('/api/pages/', {
      method: 'POST',
      body: JSON.stringify(page),
    })
  }

  async updatePage(id: number, page: Partial<Page>): Promise<ApiResponse<Page>> {
    return this.request<Page>(`/api/pages/${id}`, {
      method: 'PUT',
      body: JSON.stringify(page),
    })
  }

  async deletePage(id: number): Promise<ApiResponse<null>> {
    return this.request<null>(`/api/pages/${id}`, {
      method: 'DELETE',
    })
  }

  async publishPage(id: number): Promise<ApiResponse<null>> {
    return this.request<null>(`/api/pages/${id}/publish`, {
      method: 'POST',
    })
  }

  async unpublishPage(id: number): Promise<ApiResponse<null>> {
    return this.request<null>(`/api/pages/${id}/unpublish`, {
      method: 'POST',
    })
  }

  // File upload helper
  async uploadFile(file: File, endpoint: string): Promise<ApiResponse<{ file_path: string }>> {
    const formData = new FormData()
    formData.append('file', file)

    const headers: Record<string, string> = {}
    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`
    }

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'POST',
        body: formData,
        headers,
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return { data }
    } catch (error) {
      return { error: error instanceof Error ? error.message : 'Unknown error' }
    }
  }
}

export const apiClient = new ApiClient(API_BASE_URL)
export default apiClient
