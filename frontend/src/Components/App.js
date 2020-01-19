import React,{Component} from 'react';
import {useQuery} from "react-apollo-hooks";
import GlobalStyles from "../Styles/GlobalStyles";
import {ThemeProvider} from "styled-components"
import Theme from '../Styles/Theme';
import Router from "./Router";
import {gql} from "apollo-boost";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router isLoggedIn={isLoggedIn} />
      </>
    </ThemeProvider>
  );
};