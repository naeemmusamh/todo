import React,{ useContext } from 'react';
import { AuthContext } from '../../context/auth.js';
import { If } from 'react-if';

export default function Auth(props){
    const contextType = useContext(AuthContext)

    let handleRender = contextType.loggedIn && props.capability ? contextType.user.capability.includes(props.capability) : false;

    return (
        <>
            <If condition={handleRender}>
                {props.children}
            </If>
            <If condition={props.capability === 'guest' && !contextType.loggedIn}>
                {props.children}
            </If>
        </>
    )
}