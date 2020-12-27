import styled from "styled-components";
import Avatar from "../../static/images/avatar.jpeg";
import IMAGE_OF_ME from "../../static/images/me.jpg";

export const StyledPicOfMe = styled.img`
  background-image: url(${Avatar});
  margin: 0 auto;
  transition: background-color 1000ms linear;
  transition: all 3s;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    transform: rotate(1080deg);
    background-image: url(${IMAGE_OF_ME});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
