export interface TokenRequest {
  grant_type: string
  client_id: string
  client_secret: string
  redirect_uri: string
  code: string
}
