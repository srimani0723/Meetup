import {Link} from 'react-router-dom'

import {NavBox, Logo} from './style'

const Header = () => (
  <NavBox>
    <Link to="/">
      <Logo
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </NavBox>
)

export default Header
