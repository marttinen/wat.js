let isBun = false
let isDeno = false
let isGraalNode = false
let isNode = false

try {
  !!Bun
  isBun = true
} catch {}

try {
  !!Deno;
  isDeno = true
} catch {}

try {
  !!Java;
  isGraalNode = true
} catch {}

if (!isBun && !isDeno && !isGraalNode) {
  try {
    if (process.versions?.node != undefined) {
      isNode = true
    }
  } catch {}
}

export { isBun, isDeno, isGraalNode, isNode }
