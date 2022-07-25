import React, { useEffect, useRef } from 'react'
import { GraphData } from '../../type'
import { dragAndWheel } from './canvas/dragAndWheel'
import EdgeArea from './edge/EdgeArea'
import NodeArea from './node/NodeArea'
import style from './index.module.css'


function Graph({ nodes, edges }: GraphData) {

  const canvasRef = useRef<SVGSVGElement>(null!)

  useEffect(() => {
    dragAndWheel(canvasRef.current)
  }, [])

  return (
    <svg ref={canvasRef} xmlns="http://www.w3.org/2000/svg" className={style['canvas']}>
      <g id="drag" transform={`translate(0, 0)`}>
        <g id="scale">
          <EdgeArea {...edges}>
            <NodeArea {...nodes} />
          </EdgeArea>
        </g>
      </g>
    </svg>
  )
}

export default Graph