import React from 'react'
import Button from './Button'
import Modal, {TwoButtonModal} from './Modal';

export default class ModalDisplay extends React.Component{

    state = {displayModal: false};

    render(){
        return(
            <div>
                <Button value={"Open modal"} onClick={() => this.setState({displayModal: true})} red wave/>
                {this.state.displayModal ? <Modal hide={() => this.setState({displayModel: false})}><TwoButtonModal/></Modal> : ""}
            </div>
        )
    }
}