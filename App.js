import * as React from 'react';
import Router from './src/Settings/Router';
import { Provider } from "react-redux";
import { store } from "./src/Redux/store";
import { ThemeProvider } from "styled-components";
import Theme from "./src/Styles/Theme";
import Main from "./src/Pages/Main/Main"

export default function App() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          {/* <Router/> */}
          <Main/>
        </ThemeProvider>
      </Provider>
    );
}