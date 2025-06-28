import React from 'react'
import Keyboard from './keyboard'
import { Stage,Layer,Line,Circle, Arc } from "react-konva";

const HungmanPotrait = () => {




  return (
    <div className=''>
      <div className=''>
        <Stage width={450} height={450}>
            <Layer >
                      {/* pole and base */}
                    <Line  points={[10,250,350,250]} stroke='black' width={(4)} x={10} y={170}/>
                    <Line points={[100,400,100,100]} stroke='black'width={(4)} x={0} y={20}/>
                    <Line points={[100,200,250,200]} stroke="black" width={(4)} x={-10} y={-40}/>

                    
                    <div className=''>
                      {/* rope */}
                    <Line points={[100 ,100,100,50]} stroke="black" strokeWidth={(4)} x={120} y={110}/>

                    {/* head */}
                    <Circle x={220} y={225} radius={15} stroke="black" strokeWidth={4} />

                    {/* eyes */}
                    <Circle x={214} y={222} radius={3} stroke="black" strokeWidth={3}/>
                    <Circle x={225} y={222} radius={3} stroke={"black"} strokeWidth={3}/>

                    {/* mouth*/}
                   
                    <Arc x={220} y={228} innerRadius={5} outerRadius={5} strokeWidth={3} angle={180} rotation={0} stroke="black"/>

                    {/* body */}
                    <Line points={[100,200,100,280]} stroke="black" strokeWidth={10} x={120} y={40}/>

                    {/* arms */}
                    <Line points={[30,40,70,70]} stroke="black" strokeWidth={4} x={190} y={200}/>   

                    <Line points={[30,40,-15,70]} stroke="black" strokeWidth={4} x={190} y={200}/>

                    {/* legs */}
                    <Line points={[30,40,70,70]} stroke="black" strokeWidth={4} x={190} y={280}/>   

                    <Line points={[30,40,-15,70]} stroke="black" strokeWidth={4} x={190} y={280}/>
                    </div>
                    
                           
            </Layer>
        </Stage>
      </div>
      
    </div>
  )
}

export default HungmanPotrait
