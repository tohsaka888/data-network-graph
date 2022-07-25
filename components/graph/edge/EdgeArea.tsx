import React, { useRef } from 'react'
import { Edge } from '../../../type'

function EdgeArea({ children, ...edges }: Edge[] & { children: React.ReactNode }) {

  const edgeAreaRef = useRef<SVGGElement>(null!)

  return (
    <g ref={edgeAreaRef}>
      {children}
    </g>
  )
}

export default EdgeArea