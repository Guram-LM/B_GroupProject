import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const goldShimmer = keyframes`
  0% {
    background-position: -150% 0;
  }
  50% {
    background-position: 150% 0;
  }
  100% {
    background-position: -150% 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  width: 100vw;
  background-color: rgba(72, 101, 63, 0.97);
  color: white;
  padding: 3rem 12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  margin: 0;
  font-weight: 800;
  font-size: 1.5rem;
  background: linear-gradient(
    90deg,
rgb(244, 202, 96),      /* dark goldenrod */
hsl(51, 91.60%, 72.00%),      /* gold */
rgb(255, 248, 221),      /* cornsilk (light golden) */
rgb(248, 225, 124),
rgb(251, 213, 117)
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${goldShimmer} 4s ease-in-out infinite;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const StyledLink = styled(Link)<{ $isActive?: boolean }>`
  color: ${({ $isActive }) => ($isActive ? "#ffd700" : "white")};
  text-decoration: ${({ $isActive }) => ($isActive ? "underline" : "none")};
  text-underline-offset: 8px;
  font-weight: ${({ $isActive }) => ($isActive ? "bold" : "normal")};
  transition: color 0.2s ease;

  &:hover {
    color: #ffd700;
  }
`;

export const Footer = styled.footer`
  width: 100vw;
  background-color: rgba(67, 104, 70, 0.97);
  color: white;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: auto;
  box-sizing: border-box;
`;

export const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  padding: 0 1rem;
`;

export const FooterHeading = styled.h2`
  margin-bottom: 0.5rem;
  padding-bottom: 0.25rem;
  border-bottom: 2px solid #ffd700;
  display: inline-block;
  font-weight: 700;
  font-size: 1.5rem;
  background: linear-gradient(
    90deg,
rgb(255, 223, 144),
rgb(253, 241, 171),
rgb(255, 251, 236),
rgb(255, 242, 166),
rgb(255, 225, 150)
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${goldShimmer} 4s ease-in-out infinite;
`;

export const FooterList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    color: #ffd700;
  }
`;
