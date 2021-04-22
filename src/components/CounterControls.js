import { useDispatch } from "react-redux";

const CounterControls = () => {
    const dispatch=useDispatch();
    function incrementBy100callback() {
        dispatch({type:"increment_by_100"})
    }
    function incrementBy200callback() {
        dispatch({type:"increment_by_200"})
    }
    function incrementBy300callback() {
        dispatch({type:"decrement_by_300"})
    }
    function incrementBy400callback() {
        dispatch({type:"decrement_by_400"})
    }
  
 
    
    return (  <div>
    <button onClick={incrementBy100callback}>+10</button>
    <button onClick={incrementBy200callback}>+1</button>
    <button onClick={incrementBy300callback}>-10</button>
    <button onClick={incrementBy400callback}>-1</button>
    <br></br>

    </div>);
}
 
export default CounterControls;