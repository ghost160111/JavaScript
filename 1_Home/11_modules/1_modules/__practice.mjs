export let message = "ES6 Module";

export function alertMessage() {
    return message;
}

export function setMessage(msg) {
    message = msg;
}

export class Logger {

}

let what = "WHAT";
let ever = "EVER";

export { what, ever }