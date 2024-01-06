import { isBun, isDeno, isNode, isGraalNode } from './index.mjs'
import assert from 'node:assert'

assert(isBun, 'test with bun: isBun')
assert(!isDeno, 'test with bun: isDeno')
assert(!isGraalNode, 'test with bun: isGraalNode')
assert(!isNode, 'test with bun: isNode')
