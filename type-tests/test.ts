import template = require("template-ts");

async function expectedUsage() {
  template(); // $ExpectType void
}

async function improperUsage() {
}
