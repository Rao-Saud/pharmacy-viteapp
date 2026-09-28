import {Flex, Box} from '@chakra-ui/react'
import { NavLink} from 'react-router-dom'




export default function NavigationBar() {
  return (
    <>
      <nav>
      <Flex align="centre" justifyContent="space-between" padding="1rem" backgroundColor="yellow.500">
        <Box>
          <NavLink to="/pages/homepage" className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}>Home Page</NavLink>
        </Box>
        <Box>
          <NavLink to="/pages/About_us" className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}>About Us</NavLink>
          <NavLink to="/pages/Contact_us" className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}>Contact Us</NavLink>
        </Box>
      </Flex>
      </nav>
    </>
  )
}