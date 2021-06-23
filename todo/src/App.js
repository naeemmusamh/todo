import { useContext } from "react";
import PaginationProvider from "./context/pagination.js";
import ToDo from "./components/todo/todo-connected.js"
import Header from "./components/header/header.js";
import Theme from './components/theme/theme-class.js';
import {ThemeContext} from './context/ThemeContext.js';
import AuthProvider from './context/auth.js';
import Auth from './components/auth/auth.js';
import { Container } from 'react-bootstrap';
import "./App.scss";

export default function App () {
  const context = useContext(ThemeContext);

  return (
    <>
    <AuthProvider>
      <div className={context.mode}>
        <Theme/>
      </div>
      <Header />
      <PaginationProvider>
        <Auth capability='read'>
          <ToDo />
        </Auth>
        <Auth capability="guest">
          <Container style={{textAlign: 'center', marginTop: "100px"}}>
            <h1> To Do List Manager</h1>
          </Container>
        </Auth>
      </PaginationProvider>
    </AuthProvider>
    </>
  );
};