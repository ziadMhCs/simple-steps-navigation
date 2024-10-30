import "./App.css"
import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App(){
//  var step =1;
const [step,setStep] = useState(1);
const [isOpened,setIsOpend] = useState(true);
function handelNext(){
 if (step<3)
   setStep(s=>s+1);
} 

 function handelPrevious(){
if (step>1)
    setStep(step-1);
  

 }


return(
<>
<button onClick={()=>  { setIsOpend(!isOpened)}} className="close">&times;</button>
{
  isOpened && (
    <div className="steps">
    <div className="numbers">
    <div className={step>=1 ?"active":""}>1</div>
    <div className={step>=2 ?"active":""}>2</div>
    <div className={step>=3 ?"active":""}>3</div>
    </div>
    <p className="message"> step {step}: {messages[step-1]} </p>
    <div className="buttons">

  <button  onClick={handelPrevious} style={{backgroundColor:"#7950f2", color:"#fff"}}>previous</button>
  <button   onClick={handelNext} style={{backgroundColor:"#7950f2", color:"#fff"}}>next</button>
    </div>

  </div>
)
}
</>)
}