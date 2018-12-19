import React from 'react'
import '../css/Modal.css';
import TextInput from './TextInput';
import Button from './Button'

interface ModalProps{
    hide: Function
}


export default class Modal extends React.Component<ModalProps>{


    render(){
        return(
            <div className="PDC__Modal" onClick={() => this.props.hide()}>
                {this.props.children}
            </div>
        )
    }
}

export class TwoButtonModal extends React.Component{
    render(){
        return(
            <div>
                <TextInput/>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <Button value={"Ok"}/>
                    <Button value={"Cancel"}/>
                </div>
            </div>
        )
    }
}