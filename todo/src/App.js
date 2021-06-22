import { useContext } from "react";
import PaginationProvider from "./context/pagination.js";
import ToDo from "./components/todo/todo-connected.js"
import Header from "./components/header/header.js";
import Theme from './components/theme/theme-class.js';
import {ThemeContext} from './context/ThemeContext.js';
import "./App.scss";

export default function App () {
  const context = useContext(ThemeContext);

  return (
    <div className={context.mode}>
      <Theme/>
    <Header />
    <PaginationProvider>
      <ToDo />
    </PaginationProvider>
    </div>
  );
};