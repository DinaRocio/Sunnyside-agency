import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;
export const NAV = styled.nav`
  position: fixed;
  display: flex;
  width: 100%;
  align-items: center;
  top: 0;
  z-index: 1;
  justify-content: space-between;
  padding: 39px;
`;

export const DesktopUl = styled.ul`
  display: flex;
  padding-right: 15px;
  list-style-type: none;
  gap: 15px;

  li a {
    text-decoration: none;
    color: var(--clr-white);
    border-radius: 20px;
    padding: 10px 25px;
    background-color: transparent;
  }
  li:hover a {
    border-radius: 20px;
    padding: 10px 25px;
    background-color: var(--clr-faded-white);
    color: var(--clr-white);
  }

  li:last-child a {
    border-radius: 20px;
    padding: 10px 25px;
    background-color: var(--clr-white);
    color: var(--clr-dark-blue);
    text-transform: uppercase;
    font-family: var(--ff-fraunces);
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Hamburger = styled.img`
  cursor: pointer;
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

export const MobileNavbarContainer = styled.div`
  position: absolute;
  top: 85px;
  left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const MobileNavbar = styled.div`
  background-color: var(--clr-white);
  width: 100%;
  height: 100%;
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 30px 30px;
  border-color: transparent transparent var(--clr-white) transparent;
`;

export const MobileUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  gap: 15px;
  width: 80vw;
  padding: 15px;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  li a {
    text-decoration: none;
    color: var(--clr-very-dark-grayish-blue);
    background-color: transparent;
  }

  li:last-child a {
    border-radius: 20px;
    padding: 10px 25px;
    background-color: var(--clr-yellow);
    color: var(--clr-dark-blue);
    text-transform: uppercase;
    font-family: var(--ff-fraunces);
  }
`;

export const HamburgerMenu = styled.div`
  display: flex;
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;
