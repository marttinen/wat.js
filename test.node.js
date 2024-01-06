import { isBun, isDeno, isNode } from './index.mjs'
import assert from 'node:assert'

assert(!isBun, 'test with node: isBun')
assert(isNode, 'test with node: isNode')
assert(!isDeno, 'test with node: isDeno')
