import React from 'react';
import CartWidget from './CartWidget';
// import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
        <h1>Tienda virtual</h1>
        <ButtonGroup variant='outline' spacing='6'>
        <Button colorScheme='teal'>Nosotros</Button>
        <Button colorScheme='teal'>Galería</Button>
        <Button colorScheme='teal'>Contacto</Button>
        </ButtonGroup>
        <CartWidget/>
    </div>
    
  )
}

export default NavBar