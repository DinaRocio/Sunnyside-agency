import styled from "@emotion/styled";

export const NAV = styled.nav`
  position: fixed;
  display: flex;
  width: 100%;
  align-items: center;
  top: 0;
  z-index: 1;
  justify-content: space-between;
  padding: 40px;

  ul {
    display: flex;
    list-style-type: none;
    gap: 15px;
  }

  ul li a {
    text-decoration: none;
    color: var(--clr-white);
    border-radius: 20px;
    padding: 10px 25px;
    background-color: transparent;
    color: var(--clr-white);
  }
  ul li:hover a {
    border-radius: 20px;
    padding: 10px 25px;
    background-color: var(--clr-faded-white);
    color: var(--clr-white);
  }

  ul li:last-child a {
    border-radius: 20px;
    padding: 10px 25px;
    background-color: var(--clr-white);
    color: var(--clr-dark-blue);
    text-transform: uppercase;
    font-family: var(--ff-fraunces);
  }

  @media only screen and (max-width: 600px) {
    ul {
      display: none;
    }
  }
`;

export const Hamburger = styled.img`
  cursor: pointer;
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;
