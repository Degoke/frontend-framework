import { Element } from "./element"

export const init = (selector: string, component: Element) => {
    const app = document.querySelector(selector);
    console.log(app)
    const newElement = document.createElement(component.type);
    const newTextContent = document.createTextNode(component.template);

    newElement.append(newTextContent);
    console.log(newElement);
    app?.append(newElement);

}