export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string
      SECRET_TOKEN_CLIENT: string
      SECRET_TOKEN_DELIVERYMAN: string
    }
  }
}
