import {useEffect, useRef, useState} from 'react';


const RenderCounter = () => {
    const [value, setValue] = useState('');
    const renderCount = useRef(0);
    const displayValue = function(e){
        setValue(e.target.value)
    }
    useEffect(()=>{
        renderCount.current++;
    })
    return ( 
        <div>
            <div>
                <input type="text" onChange={displayValue}/>
                <h1>{value}</h1>
                <h3>Render Count: {renderCount.current}</h3>
            </div>
        </div>
     );
}
 
export default RenderCounter;













