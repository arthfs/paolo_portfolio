import Footer from "./components/footer"
import Header from "./components/header"

export default function RootLayout({ children }) {
    return (
      <div>     
        <html lang="en">
        <body >
        <Header> </Header>
          {children}
          <Footer></Footer>
        </body>
      </html>
      </div>
  
    )
  }