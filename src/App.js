import { useEffect, useState } from "react"

function App() {
  let [second,setSecond] = useState(0);
  let [minute,setMinute] = useState(0);
  let [hour,setHour] = useState(0);
  let [stopt,setStopt] = useState(0);
  let [track,setTrack] = useState([]);
  let timer = '';
  let timer1 = '';
  let timer2 = '';
  let start = () => {
    timer = setInterval(()=>{
      setSecond(pre=>pre===59?0:pre+1);
    },1000);
    timer1 = setInterval(()=>{
      setMinute(pre=>pre===59?0:pre+1);
    },1000*60);
    timer2 = setInterval(()=>{
      setHour(pre=>pre+1);
    },1000*60*60);
  }
  let stop = (e) => {
    setStopt(1);
    setSecond(0);
    setMinute(0);
    setHour(0);
    // clearInterval(timer);
  }
  useEffect(()=>{
    return (()=>{clearInterval(timer)});
  },[stopt]);
  let pause = () => {
    console.log(`${hour}:${minute}:${second}`);
  }
  return (
    <>
      {hour} {minute} {second}<br />
      <button name="start" onClick={start}>Start</button> <button name="start" onClick={stop}>Stop</button> <button onClick={pause}>Pause</button>
    </>
  );
}

export default App;
