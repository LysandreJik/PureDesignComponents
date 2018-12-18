import React from 'react'
import '../css/Button.css'

interface ButtonProps{
    value: string,
    large?: boolean,
    small?: boolean,
    red?: boolean,
    disabled?: boolean,
    style?: {},
    onClick?: Function
}

export default class Component extends React.Component<ButtonProps>{

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
            <div className={this.getClassName('Wrapper')} onClick={() => {this.props.onClick ? this.props.onClick() : ""}}>
                <button className={this.getClassName('Button')}>{this.props.value}</button>
            </div>
        )
    }
}