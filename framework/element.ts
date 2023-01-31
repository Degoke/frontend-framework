export const createElement = (tagName: string) => (strings: TemplateStringsArray, ...args: string[]): Element => ({
    type: tagName,
    template: strings.reduce((acc, curr, index) => acc + curr + (args[index] || ""), "")
})

export type Element = {
    type: string,
    template: string
}

export const div = createElement("div");