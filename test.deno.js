import { isBun, isDeno, isNode, isGraalNode } from './index.mjs'
import assert from 'node:assert'

assert(!isBun, 'test with deno: isBun')
assert(isDeno, 'test with deno: isDeno')
assert(!isGraalNode, 'test with deno: isGraalNode')
assert(!isNode, 'test with deno: isNode')
