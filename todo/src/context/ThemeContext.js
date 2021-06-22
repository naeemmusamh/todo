import React from 'react';

export const ThemeContext = React.createContext();

export default class ThemeProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mode: 'dark',
            toggleMode: this.toggleMode,
        }
    }

    toggleMode = ()=>{
        if(this.state.mode == 'dark'){
            this.setState({mode: 'light'});
        }else{
            this.setState({mode: 'dark'});
        }
    }

    render(){
        return(
            <ThemeContext.Provider value={this.state}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }

}