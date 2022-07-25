import React, { useRef } from 'react'
import { GraphNodes } from '../../../type'

function NodeArea({ ...nodes }: GraphNodes) {

  const nodeAreaRef = useRef<SVGGElement>(null!)

  return (
    <g ref={nodeAreaRef} />
  )
}

export default NodeArea