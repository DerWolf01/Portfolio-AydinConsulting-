import {Component} from "react";
import './Logo.css'

export default class Logo extends Component {


    render() {
        return <div id={"logo"}>
            <div id={"aydin"}><h1 id={"logo-capital-letter"}>A</h1>     <h1 id={"normal-letter"}>ydin</h1>
            </div>
            <h1 id={"divider"}>|</h1>
            <div id={"consulting"}><h1
                id={"logo-capital-letter"}>C</h1>
                <h1 id={"normal-letter"}>onsulting</h1>
            </div>
        </div>
    }
}