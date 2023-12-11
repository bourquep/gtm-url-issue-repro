import { GoogleTagManager } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>{children}</body>
      <GoogleTagManager gtmId='BOGUS_GTM_ID' />
    </html>
  )
}
