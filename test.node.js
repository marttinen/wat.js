import { isBun, isDeno, isNode, isGraalNode } from './index.mjs'
import assert from 'node:assert'

assert(!isBun, 'test with node: isBun')
assert(!isDeno, 'test with node: isDeno')
assert(!isGraalNode, 'test with node: isGraalNode')
assert(isNode, 'test with node: isNode')
