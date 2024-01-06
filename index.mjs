let isBun = false
let isDeno = false
let isNode = false

try {
  !!Bun
  isBun = true
} catch {}

try {
  !!Deno;
  isDeno = true
} catch {}

if (!isBun && !isDeno && process?.versions?.node != undefined) {
  isNode = true
}

export { isBun, isDeno, isNode }
