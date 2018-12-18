import React from 'react'
import Button from './Button';

export default class ButtonDisplay extends React.Component{

    render(){
        return(
            <div>
                <div>
                    Large button <i>{"<Button value={'Button'} large/>"}</i>
                    <Button value={"Button"} large/>
                    Medium button <i>{"<Button value={'Button'}/>"}</i>
                    <Button value={"Button"} />
                    Small button <i>{"<Button value={'Button'} small/>"}</i>
                    <Button value={"Button"} small/>
                </div>

                 <div>
                    Large red button <i>{"<Button value={'Button'} red large/>"}</i>
                    <Button value={"Button"} red large/>
                    Medium red button <i>{"<Button value={'Button'} red/>"}</i>
                    <Button value={"Button"} red/>
                    Small red button <i>{"<Button value={'Button'} red small/>"}</i>
                    <Button value={"Button"} red small/>
                </div>

                <div>
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