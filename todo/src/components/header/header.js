import React from 'react';
import {Link} from 'react-router-dom';
import "./header.scss";

export default function Header(props){
    return (
        <header>
            <span>
                <ul>
                    <Link className="link-tag" to="/"> Home </Link>
                </ul>
            </span>
        </header>
    )
}