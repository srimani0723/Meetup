import {Box, H1, P, Image} from './style'

const NotFound = () => (
  <Box>
    <Image
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <H1>Page Not Found</H1>
    <P>We are sorry, the page you requested could not be found</P>
  </Box>
)

export default NotFound
