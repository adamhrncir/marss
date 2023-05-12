import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'

export const metadata = {
  title: 'MARSS',
  description: 'The common place for your apps',
}

export default function RootLayout({ children }: any) {
  return (
    <html lang='en'>
      <head>
          <link rel="icon" href="/images/logo.png" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
