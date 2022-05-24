import React from "react";
import { clamp } from "../utils/utils";


export function getScrollPercent() {
    let h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return clamp((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100, 0, 100);
}


export const ScrollContext = React.createContext(0)