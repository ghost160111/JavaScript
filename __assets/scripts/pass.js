class PasswordGenerators {
  #length;
  #charset;
  constructor(length, charset) {
    this.#length = length;
    this.#charset = charset;
  }
  generatePassword() {
    let retVal = "";

    for (let i = 0, n = this.#charset.length; i < this.#length; ++i) {
      retVal += this.#charset.charAt(Math.floor(Math.random() * n));
    }

    return retVal;
  }
}

let length = 8,
  charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

let passwordGenerator = new PasswordGenerators(length, charset);
let randomPassword = passwordGenerator.generatePassword();

console.log(randomPassword); // OUTPUTS: RANDOM PASSWORD

async function* h(start, end) {
  for (let i = start; i <= end; i++) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(i);
      }, 2000);
    });
  }
}

(async () => {
  let seq = h(1, 5);

  for await (const num of seq) {
    console.log(num);
  }
})();

export const generatePassword = (length, charset) => {
  if (typeof length !== "number") {
    throw "Length of password should be specified in number type!";
  }

  if (typeof charset !== "string") {
    throw "Charset of password should be specified in string type!";
  }

  const passwordGenerator = new PasswordGenerators(length, charset);
  const result = passwordGenerator.generatePassword();

  return result;
}

export default PasswordGenerators;
export {
  PasswordGenerators,
  generatePassword
}