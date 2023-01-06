import styled from "styled-components";
import { Search } from "./Search.style";
import { Table } from "./Table.style";
import { Pagination } from "./Pagination.style";
import { SingleColor } from "./SingleColor.style";
import { SharedButton } from "../../../../style/shared/SharedButton.style";

const StyledColorsPage = styled.section`
  width: 50vw;
  min-width: 768px;
  height: 94vh;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    min-width: initial;
    width: 95vw;
  }
`;

StyledColorsPage.Search = Search;
StyledColorsPage.Table = Table;
StyledColorsPage.Button = SharedButton;
StyledColorsPage.SingleColor = SingleColor;
StyledColorsPage.Pagination = Pagination;

export default StyledColorsPage;
