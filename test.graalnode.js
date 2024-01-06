import { isBun, isDeno, isNode, isGraalNode } from './index.mjs'
import assert from 'node:assert'

assert(!isBun, 'test with graalnode: isBun')
assert(!isDeno, 'test with graalnode: isDeno')
assert(isGraalNode, 'test with graalnode: isGraalNode')
assert(!isNode, 'test with graalnode: isNode')
