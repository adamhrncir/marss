import './globals.css'

export const metadata = {
  title: 'Apphub',
  description: 'The common place for your apps',
}

export default function RootLayout({ children }: any) {
  return (
    <html lang='en'>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
