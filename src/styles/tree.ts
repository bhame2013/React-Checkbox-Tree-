import styled from "styled-components";

//Não havia necessidade de usar styled components, porém achei legal trazer apenas para mostrar um pouco do que eu uso do dia a dia dentro deste projeto.
export const Tree = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  ul {
    list-style: none;
  }
`;
