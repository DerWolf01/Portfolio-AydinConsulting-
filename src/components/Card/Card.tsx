import {Component} from "react";
import './Card.css'

export default class Card extends Component {
    render() {
        const {children} = this.props;
        return <div className={"card"}>
            {children}
        </div>
    }

}