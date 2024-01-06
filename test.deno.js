import { isBun, isDeno, isNode } from './index.mjs'
import assert from 'node:assert'

assert(!isBun, 'test with deno: isBun')
assert(isDeno, 'test with deno: isDeno')
assert(!isNode, 'test with deno: isNode')
