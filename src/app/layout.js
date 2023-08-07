import Header from "../components/Header";

export const metadata = {
  title: 'IMDb',
  description: 'Generated by using next js and tailwind css',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
      {/* Header */}
      <Header />
      {/* Navbar */}
      {/* SearchBox */}
      {children}
      </body>
    </html>
  )
}
