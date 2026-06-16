import styled from "styled-components";

export const NavOverflow = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(8, 8, 14, 0.5);
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 9998;
`;

export const CollapseNavbar = styled.div<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 75%;
  height: 100%;
  background-color: var(--tints_background_2);
  border-right: 1px solid var(--tints_border_strong);
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
  transform: ${(props) =>
    props.$isVisible ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 9999;
  padding: 20px;
  overflow-y: auto;
`;

export const CloseNav = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 30px;
  cursor: pointer;
  color: var(--neutrals_light);
`;

export const NavbarContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  height: 90%;
`;

export const Title = styled.p`
  font-size: 1.3rem;
  font-family: var(--fonts_primary_bold);
  margin-top: 0;
  text-transform: uppercase;
  height: 2rem;
  align-self: center;
  text-align: center;

  > span {
    color: var(--neutrals_light_100);
  }

  > span.color {
    color: var(--tints_primary_light);
  }
`;

export const NavbarMenu = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 0;
  justify-content: space-between;
`;

export const NavBarMenuItemsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;

  &.end {
    margin-top: auto;
  }

  &.top {
    margin-top: 2.5rem;
  }
`;

export const NavbarMenuTitle = styled.p`
  font-size: 1.4rem;
  color: var(--tints_primary_light);
  width: 100%;
  font-weight: 700;
`;

export const NavbarMenuItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const NavbarMenuItem = styled.a`
  font-size: 1.2rem;
  color: var(--neutrals_light_100);
  width: 100%;
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;

  &:active {
    background-color: var(--tints_glow_soft);
    border-color: var(--tints_border);
    color: var(--tints_primary_light);
  }
`;

export const Href = styled.a`
  margin: 0;
  text-decoration: none;
  outline: none;
  border: none;

  > svg {
    color: var(--tints_primary_light);
    width: 36px;
    height: 36px;
  }
`;

export const NavbarMenuItemIcons = styled.div`
  display: flex;
  gap: 1rem;
  color: var(--tints_primary_light);
`;
