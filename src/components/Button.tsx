import React from 'react'
import '../css/Button.css'
import SVG from 'svg.js';

interface ButtonProps{
    value: string,
    large?: boolean,
    small?: boolean,
    red?: boolean,
    disabled?: boolean,
    style?: {},
    onClick?: Function,
    wave?: boolean
}

export default class Component extends React.Component<ButtonProps>{
    id: string;
    wrapperId: string;
    draw?: any;
    paths: Array<any>;
    pathsStrings: Array<{path: string, randomHeight: number}>;
    primary: [number, number, number];
    secondary: [number, number, number];

    constructor(props: ButtonProps){
        super(props);

        this.id = String.fromCharCode(78 + Math.floor(Math.random() * 13)) + Date.now() + Math.random() * 10000;
        this.wrapperId = String.fromCharCode(65 + Math.floor(Math.random() * 13)) + Date.now() + Math.random() * 10000;

        this.hover = this.hover.bind(this);
        this.leaveHover = this.leaveHover.bind(this);
        
        this.paths = [];
        this.pathsStrings = [];

        this.primary = [149, 202, 255];
        this.secondary = [117, 170, 255];
    }

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
            this.secondary = [255, 102, 119];
            this.primary = [255, 34, 68];
        }

        if(this.props.disabled){
            className +=  " PDC__"+item+"--disabled"
        }

        if(this.props.wave){
            className +=  " PDC__"+item+"--wave"
        }

        return className;
    }

    componentDidMount(){

        document.getElementById(this.wrapperId)!.addEventListener('mouseover', this.hover);
        document.getElementById(this.wrapperId)!.addEventListener('mouseleave', this.leaveHover);

        if(this.props.wave){
            let height: number = document.getElementById(this.wrapperId)!.offsetHeight;
            let width: number = document.getElementById(this.wrapperId)!.offsetWidth;

            this.draw = SVG(this.id);

            this.pathsStrings.push(this.createPath(width, height, 1/4, 1/4, true));
            this.pathsStrings.push(this.createPath(width, height, 1/2, 1/4, true));

            this.paths.push(this.draw.path(this.pathsStrings[0].path).fill(`rgba(${this.primary[0]}, ${this.primary[1]}, ${this.primary[2]}, 0.2)`));
            this.paths.push(this.draw.path(this.pathsStrings[1].path).fill(`rgba(${this.secondary[0]}, ${this.secondary[1]}, ${this.secondary[2]}, 0.2)`));
        }
    }

    componentWillUnmount(){
        document.getElementById(this.wrapperId)!.removeEventListener('mouseover', this.hover);
        document.getElementById(this.wrapperId)!.removeEventListener('mouseleave', this.leaveHover);
    }

    hover(){
        if(this.props.wave){
            let height: number = document.getElementById(this.wrapperId)!.offsetHeight;
            let width: number = document.getElementById(this.wrapperId)!.offsetWidth;

            for(let i = 0; i < this.paths.length; i++){
                this.paths[i].animate({duration: 200}).y(-this.pathsStrings[i].randomHeight);
            }
        }
  
    }

    leaveHover(){
        if(this.props.wave){
            let height: number = document.getElementById(this.wrapperId)!.offsetHeight;
            let width: number = document.getElementById(this.wrapperId)!.offsetWidth;

            for(let i = 0; i < this.paths.length; i++){
                this.paths[i].animate({duration: 200}).y(this.pathsStrings[i].randomHeight);
            }
        }
    }

    createPath(width: number, height: number, start: number, end: number, curve: boolean): {path: string, randomHeight: number}{
        let path = "M ";

        
        let randomHeight = Math.round(height * start + Math.random() * (height * end));

        path += "0 " + height*3 + " ";
        path += this.createLine(0, randomHeight);

        let randomPointLeft = {x: Math.round(Math.random() * width / 2), y: Math.round(randomHeight + 10 * (Math.round(Math.random()) - 0.5))};
        let randomPointRight = {x: Math.round(width/2 + Math.random() * width / 2), y: Math.round(randomHeight + 10 * (Math.round(Math.random()) - 0.5))};

        path += this.createLine(randomPointLeft.x, randomPointLeft.y);
        path += this.createLine(randomPointRight.x, randomPointRight.y);

        path += this.createLine(width, randomHeight);
        path += this.createLine(width, randomHeight);
        path += this.createLine(width, height*3);
        path += "Z";

        return {path: path, randomHeight};
    }

    createLine(x: number, y: number): string{
        return "L " + x + " " +y + " "
    }

    render(){
        return(
            <div className={this.getClassName('ButtonWrapper')} id={this.wrapperId} onClick={() => {this.props.onClick ? this.props.onClick() : ""}}>
                {this.props.wave ? <div id={this.id} className="PDC__ButtonSVG"></div> : ""}
                <button className={this.getClassName('Button')}>{this.props.value}</button>
            </div>
        )
    }
}