import styled from "styled-components";
import { Search } from "./Search.style";
import { Table } from "./Table.style";
import { Pagination } from "./Pagination.style";

const StyledHomePage = styled.section`
  width: 50vw;
  min-width: 768px;
  height: 94vh;
  margin: 0 auto;
`;

StyledHomePage.Search = Search;
StyledHomePage.Table = Table;
StyledHomePage.Pagination = Pagination;

export default StyledHomePage;
