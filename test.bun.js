import { isBun, isDeno, isNode } from './index.mjs'
import assert from 'node:assert'

assert(isBun, 'test with bun: isBun')
assert(!isDeno, 'test with bun: isDeno')
assert(!isNode, 'test with bun: isNode')
