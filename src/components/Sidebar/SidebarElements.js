import styled from "styled-components";

 export const SidebarContainer = styled.aside`
 
 opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
 top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
 `
