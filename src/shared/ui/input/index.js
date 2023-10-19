import { commonComponentProps, getAttrs } from "../../lib/index.js";

export function Input (props) {
    const { label = "", extraClasses = {}, extraAttrs = {}, baseClass = "inp", getCN, children } = { ...commonComponentProps, ...props }
    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `<input class="${getClassName("",  extraClasses)}" ${getAttrs(extraAttrs)}>
                ${children || `<span class="${getClassName("label")}">${label}</span>`}
            </input>   
            `
}