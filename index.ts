import { init } from "./framework/index"
import { div } from "./framework/element"

const firstName = "Degoke";
const lastName = "Adewoye";

console.log(div`Hello, ${firstName} ${lastName} !`)

init('#app', div`Hello, ${firstName} ${lastName} !`)