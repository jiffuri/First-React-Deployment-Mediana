
import {Link} from "react-router-dom";


const Navigation_Bar = () => {
    return ( 
        <div>
            <ul>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
                <li>
                    <Link to='/Work'>WORKS</Link>
                </li>
                <li>
                    <Link to='/Contact'>CONTACT</Link>
                </li>
                <li>
                    <Link to='/Cart'>Cart</Link>
                </li>
                <li>
                    <Link to='/HookUse'>Hook</Link>
                </li>
                <li>
                    <Link to='/HookReducer'>Reducer</Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Navigation_Bar;