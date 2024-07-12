import {Component, createRef, MutableRefObject} from "react";
import NavigationItem from "./NavigationItem/NavigationItem.tsx";
import Indicator from "./Indicator/Indicator.tsx";

import './Navigation.css'
import Logo from "./Logo/Logo.tsx";

export class Navigation extends Component {

    constructor(props: never) {
        super(props);
        this.indicatorRef = createRef<Indicator>()
    }

    indicatorRef: MutableRefObject<Indicator | null>

    render() {
        return <nav id={"navigation"}>

            <Logo> </Logo>
            <div id={"flex-row"}>
                <Indicator ref={this.indicatorRef}></Indicator>
                <NavigationItem label={"test"}
                                onClick={event => this.indicatorRef.current?.navigate(event.target as HTMLElement)}></NavigationItem>
                <NavigationItem label={"test"}
                                onClick={event => this.indicatorRef.current?.navigate(event.target as HTMLElement)}></NavigationItem>
                <NavigationItem label={"test"}
                                onClick={event => this.indicatorRef.current?.navigate(event.target as HTMLElement)}></NavigationItem>
            </div>
        </nav>
    }
}





