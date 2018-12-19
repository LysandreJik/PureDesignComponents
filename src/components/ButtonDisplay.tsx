import React from 'react'
import Button from './Button';

export default class ButtonDisplay extends React.Component{

    render(){
        return(
            <div style={{display: "flex", flexDirection: "row"}}>
                <div style={{margin: "20px"}}>
                    Large button <i>{"<Button value={'Button'} large/>"}</i>
                    <Button value={"Button"} large/>
                    Medium button <i>{"<Button value={'Button'}/>"}</i>
                    <Button value={"Button"} />
                    Small button <i>{"<Button value={'Button'} small/>"}</i>
                    <Button value={"Button"} small/>
                    <br/>
                    <br/>
                    Large button <i>{"<Button value={'Button'} large wave/>"}</i>
                    <Button value={"Button"} large wave/>
                    Medium button <i>{"<Button value={'Button'} wave/>"}</i>
                    <Button value={"Button"} wave/>
                    Small button <i>{"<Button value={'Button'} small wave/>"}</i>
                    <Button value={"Button"} small wave/>
                </div>

                 <div style={{margin: "20px"}}>
                    Large red button <i>{"<Button value={'Button'} red large/>"}</i>
                    <Button value={"Button"} red large/>
                    Medium red button <i>{"<Button value={'Button'} red/>"}</i>
                    <Button value={"Button"} red/>
                    Small red button <i>{"<Button value={'Button'} red small/>"}</i>
                    <Button value={"Button"} red small/>
                    <br/>
                    <br/>
                    Large button <i>{"<Button value={'Button'} red large wave/>"}</i>
                    <Button value={"Button"} red large wave/>
                    Medium button <i>{"<Button value={'Button'} red wave/>"}</i>
                    <Button value={"Button"} red wave/>
                    Small button <i>{"<Button value={'Button'} red small wave/>"}</i>
                    <Button value={"Button"} red small wave/>
                </div>

                <div style={{margin: "20px"}}>
                    Large disabled button <i>{"<Button value={'Button'} disabled large/>"}</i>
                    <Button value={"Button"} disabled large/>
                    Medium disabled button <i>{"<Button value={'Button'} disabled/>"}</i>
                    <Button value={"Button"} disabled/>
                    Small disabled button <i>{"<Button value={'Button'} disabled small/>"}</i>
                    <Button value={"Button"} disabled small/>
                </div>
            </div>
        )
    }
}