import React from "react";
import { Switch, Route } from "react-router-dom";
import ToDo from "../todo/todo.js";

export default function Main(props){
    return (
        <main>
            <Switch>
                <Route expect path='/'>
                    <ToDo />
                </Route>
            </Switch>
        </main>
    )
}