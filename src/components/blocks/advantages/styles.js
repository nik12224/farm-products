import styled from "styled-components";

import { Section } from "../../../styled";
import Title from "../../ui/title/title";
import Button from "../../ui/button/button";

export const Features = styled(Section)`
  position: relative;
  padding-top: 100px;
  padding-bottom: 100px;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 64px;
  text-align: center;
`;

export const StyledButton = styled(Button)`
  margin-top: 64px;
`;
