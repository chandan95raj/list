import { Container } from "@mui/material"
import Navbar from "../shared/Navbar"


// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container className="pt-4 ">
        {children}
      </Container>
    </>
  )
}

export default Layout