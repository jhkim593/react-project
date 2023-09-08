import React ,{useState} from "react";
import moment from "moment/moment";

//id 키값
let id =0;
const plusId = () => {
  const newId = id+=1;
  return newId;
}

function MainPage(){
  const [time, setTime] = useState(moment.duration(0));
  const [isPause, setIsPause] = useState(true);
  const [isStart, setIsStart] = useState(false);
  const [timeLine, setTimeLine] = useState([]);
  const [tempInterval , setTempInterval]= useState(null);

  //시작
  const start = () => {
    setIsStart(true);
    setIsPause(false);
    setTempInterval(setInterval(()=>{
      // if(!isStop){
        setTime((prev) => {
          return prev.clone().add(1, "seconds");
        });
      // }
    },1000));
  }
  

  //정지
  const stop = () => {
    setIsPause(true);
    setIsStart(false);
    setTime(moment.duration(0));
    clearInterval(tempInterval);
    setTimeLine([]);
  }
  
  //일시중지
  const pause = () => {
    setIsPause(true);
    clearInterval(tempInterval);
  }

  //재개
  const resume = () => {
    start();
  }

  //기록
  const check = () => {
    setTimeLine([...timeLine,
      {
        time : time,
        id : plusId()
      }
    ]); 
  }
    
  return (
    <>
      <main>
        <p>{time.hours()}:{time.minutes()}:{time.seconds()}</p>
        {!isStart? <button onClick={start}>시작</button>  :<button onClick={stop}>중지</button>}
        {isStart && isPause ? <button onClick={resume}>재개</button> : null}
        {isStart && !isPause ? <button onClick={pause}>일시정지</button> : null}
        {isStart ? <button onClick={check}>기록</button>: null}
        <section>
          {timeLine.map((t) => 
             <article key={t.id}>{t.time.hours()}:{t.time.minutes()}:{t.time.seconds()}</article>
          )}
        </section>
      </main>

    </>
  )
}

export default MainPage;