import React, { useContext } from 'react';
import styled from 'styled-components'

// Import icons
import IconOpenSidebar from "../../assets/icons/32x32/sidebar-open.svg"
import IconCloseSidebar from "../../assets/icons/32x32/sidebar-close.svg"

// Sidebar context
import { SidebarOpenContext } from "../../templates/chapters"

const ButtonStyled = styled.button`
  position: fixed;
  left: 4rem;
  top: 4rem;
  z-index: 3;
  transition: transform 0.25s cubic-bezier(0, 0.71, 0.15, 1.03);
  transform: ${props => props.isOpen ? 'translateX(64rem)' : 'translateX(0)'};
  background-image: ${ props => props.isOpen ? `url(${IconCloseSidebar})` : `url(${IconOpenSidebar})` };
  background-repeat: no-repeat;
  background-position: center center;
  height: 64px;
  width: 64px;
`

const HamburgerButton = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useContext(SidebarOpenContext)

  const toggleSidebar = _ => setIsSidebarOpen(!isSidebarOpen)

  return (
    <ButtonStyled isOpen={isSidebarOpen} onClick={toggleSidebar} />
  )
}

export default HamburgerButton