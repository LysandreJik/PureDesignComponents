import React from 'react'
import '../css/TextInput.css'

interface TextInputProps{
    large?: boolean,
    small?: boolean,
    red?: boolean,
    disabled?: boolean,
    style?: {},
}

export default class TextInput extends React.Component<TextInputProps>{

    getClassName(item: string){
        let className = "PDC__"+item;

        if(this.props.large){
            className += " PDC__"+item+"--large"
        }

        if(this.props.small){
            className +=  " PDC__"+item+"--small"
        }

        if(this.props.red){
            className +=  " PDC__"+item+"--red"
        }

        if(this.props.disabled){
            className +=  " PDC__"+item+"--disabled"
        }

        return className;
    }

    render(){
        return(
            <div className="PDC__TextInputWrapper">
                <input type='text' style={this.props.style} className={this.getClassName("TextInput")} defaultValue="Default input"/>
            </div>
        )
    }
}