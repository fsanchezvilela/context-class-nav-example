import React, { Component, createContext } from 'react'

export const ThemeContext = createContext();

class ThemeProvider extends Component {
    constructor(props){
        super(props);
        this.state= {
            isDarkMode: true,
        }
    }
    render(){
        return(
        <ThemeContext.Provider value={{...this.state, tasteLikeChicken:'true'}}>
            { this.props.children }
        </ThemeContext.Provider>
        )
    }
}

export default ThemeProvider;