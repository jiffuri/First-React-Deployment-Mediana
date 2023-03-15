

import {useRef, useEffect} from 'react';
import RenderCounter from '../Components/RenderCounter';


const UseReferenceHook = () => {
    const selectingElements = useRef();
    useEffect(()=>{
        selectingElements.current.focus();
    })
    const getValue = function(){
        alert(selectingElements.current.value);
    }
    const changeValue = function(){
        selectingElements.current.value = 'change value';
    }
    const getClass = function(){
        alert(selectingElements.current.classList);
        /* selectingElements.current.classList.add('bgRed') */

    }

    return ( <div>
        <div>
            <h1>Reference Page</h1>
            <input ref={selectingElements} type="text" className='SampleClass'/>
            <button onClick={getValue}>GET THE VALUE</button>
            <button onClick={changeValue}>CHANGE THE VALUE</button>
            <button onClick={getClass}>GET THE CLASS</button>
            <hr />
            <RenderCounter/>
        </div>
    </div> );
}
 
export default UseReferenceHook;















