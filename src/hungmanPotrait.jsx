import React from 'react'
import { Stage,Layer,Line,Circle } from "react-konva";
const HungmanPotrait = () => {
  return (
    <div className='relative'>
      <div className='fixed bottom-50'>
        <Stage width={300} height={300}>
            <Layer >
                    <Line  points={[90,300,350,300]} stroke='black' width={(4)}/>
                    
            </Layer>
        </Stage>
      </div>
    </div>
  )
}

export default HungmanPotrait
