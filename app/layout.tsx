import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export const metadata = {
  title: 'MARSS',
  description: 'The common place for your apps',
}

export default function RootLayout({ children }: any) {
  return (
    <html lang='en'>
      <head>
          <link rel="icon" href="/images/logo.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&family=Source+Serif+Pro&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
