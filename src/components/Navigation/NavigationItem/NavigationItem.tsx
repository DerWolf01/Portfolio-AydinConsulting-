import {Component, MouseEventHandler} from "react";
import './NavigationItem.css'
export default class NavigationItem extends Component<{
    label: string,
    onClick?: MouseEventHandler<HTMLDivElement>
}, never, never> {
    constructor(props: {
        label: string, onClick?: MouseEventHandler<
            HTMLDivElement
        >
    }) {
        super(props);
        this.label = props.label;
        this.onClick = props.onClick;
    }

    label: string;
    onClick?: MouseEventHandler<HTMLDivElement>

    render() {

        return <div onClick={this.onClick} id={"navigation-item"}>
            {this.label}
        </div>
    }
}
