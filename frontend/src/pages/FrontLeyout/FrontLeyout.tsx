import { Outlet, useLocation } from "react-router-dom";
import * as S from "./style";

export const FrontLeyout = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <S.Container>
      <S.Header>
        <S.Title>PetShop</S.Title>
        <S.Nav>
          <S.StyledLink to="/" $isActive={path === "/"}>Home</S.StyledLink>
          <S.StyledLink to="/wishlist" $isActive={path === "/wishlist"}>Wishlist</S.StyledLink>
          <S.StyledLink to="/cart" $isActive={path === "/cart"}>Cart</S.StyledLink>
        </S.Nav>
      </S.Header>

      <Outlet />

      <S.Footer>
        <S.FooterSection>
          <S.FooterHeading>About PetShop</S.FooterHeading>
          <p>
            We're dedicated to connecting loving homes with wonderful pets.
            Our mission is to ensure every pet finds a caring family.
          </p>
        </S.FooterSection>

        <S.FooterSection>
          <S.FooterHeading>Quick Link</S.FooterHeading>
          <S.FooterList>
            <S.StyledLink to="/" $isActive={path === "/"}>Home</S.StyledLink>
            <S.StyledLink to="/wishlist" $isActive={path === "/wishlist"}>Wishlist</S.StyledLink>
            <S.StyledLink to="/cart" $isActive={path === "/cart"}>Cart</S.StyledLink>
          </S.FooterList>
        </S.FooterSection>

        <S.FooterSection>
          <S.FooterHeading>Contact Us</S.FooterHeading>
          <S.FooterList>
            <p>Email: info@petshop.com</p>
            <p>Phone: +(123) 456 789</p>
            <p>Address: 123 Pet Street, Animalville</p>
          </S.FooterList>
        </S.FooterSection>
      </S.Footer>
    </S.Container>
  );
};
