import styled from "styled-components";
import { StyledPicOfMe } from "../globalStyles.js";

export const StyledAvatar = styled(StyledPicOfMe)`
  border-radius: 50%;
  width: 200px;
  min-width: 200px;
  height: 200px;
  border: 5px solid #f8ad36;
  box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.6);
`;

export const StyledWrapper = styled.div`
  text-align: center;
  margin: 0px auto;
  width: 80%;
  min-width: 320px;
`;

export const StyledSocialNetworkLinks = styled.ul`
  display: flex;
  justify-content: center;

  & li a:hover {
    color: #000;
    border-bottom: none;
  }
`;

export const StyledNewsletter = styled.div`
  text-align: center;
  width: fit-content;
  margin: 0 auto;
`;
