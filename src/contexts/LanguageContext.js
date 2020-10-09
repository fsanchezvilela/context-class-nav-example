import React, {Component , createContext} from 'react';

export const LanguageContext = createContext();

export default class LanguageProvider extends Component {

    constructor(props){
        super(props);
        this.state= {
            language:"english"
        }
        this.changeLanguage = this.changeLanguage.bind(this);
    }
    changeLanguage(e){
        this.setState({language: e.target.value});
    }
    render(){
        return(
            <LanguageContext.Provider value={{...this.state, changeLanguage: this.changeLanguage}}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}

//make a hoc
export const withLangaugeContext = Component => props => (
    <LanguageContext.Consumer>
        { value => <Component languageContext={value} {...props} />}
    </LanguageContext.Consumer>
)