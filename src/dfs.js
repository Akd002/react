import react,{useState,useRef,useEffect} from 'react';
import { ReactDOM } from 'react';

function  Car()
{
const[value,setvalue]=useState("hello");
const obj=useRef(value);
const obj1=useRef(0);
useEffect(()=>{
  obj1.current=obj1.current+1;
})
return(
  <>
  <input type="text" value={value} onChange={(e)=>setvalue(e.target.value)}></input>

<h1>render count:{obj1.current}</h1>
</>
);
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car/>);