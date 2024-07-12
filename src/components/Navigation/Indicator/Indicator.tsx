import {Component, createRef, MutableRefObject} from "react";
import './Indicator.css'
import * as gsap from "gsap";

export type IndicatorProps = {
    active?: HTMLElement
}
export default class Indicator extends Component<IndicatorProps, IndicatorProps> {
    constructor(props: IndicatorProps) {
        super(props);
        this.state = {...props}
        this.indicatorRef = createRef<HTMLDivElement>()
    }

    state: IndicatorProps
    indicatorRef: MutableRefObject<HTMLDivElement | null>

    navigate(chosen: HTMLElement) {

        const {height, width, y, left} = chosen.getBoundingClientRect()
        gsap.gsap.to(this.el, {
            x: left,
            y: y -height/2,
            width,
            height: height,
            opacity: 1
        })

    }

    get el()
        :
        HTMLDivElement | null {
        return this.indicatorRef.current
    }

    render() {
        return <div id={"indicator"} ref={this.indicatorRef}></div>;
    }
}