import { useState } from "react"


function CalculatorBody() {
    const [value , setValue] = useState('0')
  return (
    <div className="bg-sky-950  rounded-md w-full p-2 flex-col">
        <CalculatorDisplay value={value} />
        <CalculatorKeyPad/>
    </div>
  )
}


const CalculatorDisplay = ({value}:{value:string})=>{
    return(
        <div className="bg-sky-700 ">
          <h1 className="text-5xl text-white w-full text-end p-3">{value}</h1>
        </div>
    )
}
const CalculatorKeyPad = ()=>{
    return (
        <div>
            keyPad
        </div>
    )
}

export default CalculatorBody