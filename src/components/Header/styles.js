import styled from "styled-components";
import { StyledPicOfMe } from "../../styles/globalStyles.js";

export const StyledThumb = styled(StyledPicOfMe)`
  border-radius: 50%;
  width: 50px;
  min-width: 50px;
  height: 50px;
  margin-right: 10px;
  border: 2px solid #f8ab35;
`;

export const StyledMainLogo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
