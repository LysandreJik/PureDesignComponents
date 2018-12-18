import React from 'react'
import TextInput from "./TextInput";

export default class TextInputDisplay extends React.Component{
    render(){
        return(
            <div style={{display: "flex", flexDirection: "row"}}>
                <div style={{margin: "20px"}}>
                    Large text input <i>{"<TextInput large/>"}</i>
                    <TextInput large/>
                    Medium text input <i>{"<TextInput/>"}</i>
                    <TextInput/>
                    Small text input <i>{"<TextInput small/>"}</i>
                    <TextInput small/>
                </div>
            </div>
        )
    }
}