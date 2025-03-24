import { createContext, useContext, useState } from "react"

const UserContext = createContext<React.Dispatch<React.SetStateAction<string>> | undefined>(undefined);

function CalculatorBody() {
    const [value , setValue] = useState('')

  return (
    <UserContext.Provider value={setValue} >
        <div className="bg-sky-950  rounded-md  p-2 flex-col w-[300px]">
        <CalculatorDisplay value={value} />
        <CalculatorKeyPad />
        </div>
    </UserContext.Provider>
  )
}


const CalculatorDisplay = ({value}:{value:string})=>{
    return(
        <div className="bg-sky-700 ">
          <h1 className="text-5xl text-white w-full text-end p-3">{value.length==0 ? '0' : value}</h1>
        </div>
    )
}

const CalculatorKeyPad = ({})=>{
    return (
        <div className="mt-2 flex-col space-y-1">
           <div className="flex gap-2">
            <KeyPadKey label="7"/>
            <KeyPadKey label="8"/>
            <KeyPadKey label="9"/>
            <KeyPadKey label="x"/>
           </div>
           <div className="flex gap-2">
            <KeyPadKey label="4"/>
            <KeyPadKey label="5"/>
            <KeyPadKey label="6"/>
            <KeyPadKey label="/"/>
           </div>
           <div className="flex gap-2">
            <KeyPadKey label="1"/>
            <KeyPadKey label="2"/>
            <KeyPadKey label="3"/>
            <KeyPadKey label="+"/>
           </div>
           <div className="flex gap-2">
            <ClearButton />
            <KeyPadKey label="0"/>
            <KeyPadKey label="."/>
            <KeyPadKey label="-"/>
           </div>
            <EquationButton />
        </div>
    )
}

const KeyPadKey = ({label}:{label:string})=>{
    let value;
    switch (label) {
        case 'x':
            value = '*';
            break;
    
        default:
            value = label
            break;
    }

    const setValue = useContext(UserContext);
    const keyClick =()=>{
        if(setValue){
            setValue(prev => prev + value);
        }else{
            console.log('can not find setValue');
        }
    }
    return (
        <div className="w-full h-10 bg-sky-800 flex justify-center items-center cursor-pointer hover:bg-sky-900" onClick={keyClick}>
            <h1 className="text-xl text-white">{label}</h1>
        </div>
    )
}
const EquationButton =()=>{
    const setValue = useContext(UserContext)
    const calculate = ()=>{
        if(setValue){
            setValue(prev =>{
                try{
                    return eval(prev).toString()
                }catch(error){
                    console.log(error)
                    return 'Error'
                }
            });
        }
    }
    return(
        <h1 className="text-center text-xl text-white bg-sky-800 cursor-pointer hover:bg-sky-900" onClick={calculate} >
            = 
        </h1>
    )
}
const ClearButton =()=>{
     const setValue = useContext(UserContext);
    const clearValue =()=>{
        if(setValue){
            setValue('')
        }
    }
    return (
        <div className="w-full h-10 bg-sky-800 flex justify-center items-center cursor-pointer hover:bg-sky-900" onClick={clearValue}>
            <h1 className="text-xl text-white">Cls</h1>
        </div>
    )
}
export default CalculatorBody