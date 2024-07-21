import { Container } from "@mui/material"

const Layout = ({children}) => {
  return (
    <Container className="py-3">
        {children}
    </Container>
  )
}

export default Layout