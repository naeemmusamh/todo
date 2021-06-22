import React from 'react';
import {Button} from 'react-bootstrap';
import {ThemeContext} from '../../context/ThemeContext.js';
import './theme.scss';

export default class Theme extends React.Component{
    static contextType = ThemeContext;

    render(){
        return(
            <>
            <Button variant="secondary" size="sm" className="theme-btn" onClick={this.context.toggleMode}>Click me</Button>
            </>
        )
    }
}