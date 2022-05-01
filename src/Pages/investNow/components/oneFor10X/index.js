import React, { useState,useEffect } from 'react'
import CustomInput2 from "../../../../Components/customInput2";
import HistoryTable from "./components/historyTable";
import "./theFairWin.css";
import { useSelector,useDispatch } from 'react-redux'
import {LotteryApprove, BuyLotterya , Price, Lottery} from "../../../../state/ui/index.js"

const OneFor10X = () => {
  const [allHistory, setAllHistory] = useState(true);
  const [yourHistory, setYourHistory] = useState(false);
  
  const [zero,setZero] = useState(0);
  const [one,setOne] = useState(0);
  const [two,setTwo] = useState(0);
  const [three,setThree] = useState(0);
  const [four,setFour] = useState(0);
  const [five,setFive] = useState(0);
  const [six,setSix] = useState(0);
  const [seven,setSeven] = useState(0);
  const [eight,setEight] = useState(0);
  const [nine,setNine] = useState(0);
  const [tempNumArray,setTempNumArray] = useState([])



  

  const handleAllHistoryClick = () => {
    setAllHistory(true);
    setYourHistory(false);
  };
  const handleYourHistoryClick = () => {
    setAllHistory(false);
    setYourHistory(true);
  };

  const dispatch = useDispatch()

  const [ Ltoggle,setLtoggle] = useState(false);


  const [ winStatus,setwinStatus] = useState();

  const toggle = useSelector((state)=>{
      return  state.adoptReducer.toggle; 
     
     });

     const _TFTAllowance = useSelector((state)=>{

      return  Number(state.adoptReducer.LotteryAllowance); 

      
       });

      
       

  const numberArray = useSelector((state)=>{
 
  return  state.adoptReducer.numberArray; 
  
  });


  const gameCounter = useSelector((state)=>{

    return  state.adoptReducer.gameCounter; 
   
   });

     useEffect(()=>{

      var interval = setInterval(() => {
        dispatch(Lottery({}))  
        setLtoggle(!Ltoggle)      
      }, 5000);


      setwinStatus()

      return ()=>{clearInterval(interval)}
  
    },[toggle,_TFTAllowance,gameCounter,Ltoggle])






     const address = useSelector((state)=>{
      return  state.adoptReducer.address; 
     
     });

     const _lottCurrDetails = useSelector((state)=>{
      return  state.adoptReducer._lottCurrDetails; 
     
     });

     var filteredInfo = _lottCurrDetails && _lottCurrDetails.tx1.filter(item=>item.id==_lottCurrDetails._counter)
  
  
     const _balance = useSelector((state)=>{
      return  state.adoptReducer.balance; 
     
     });





     const gameDetails = useSelector((state)=>{
      
      return  state.adoptReducer.gameDetails; 
     
     });

     const prevDetails = useSelector((state)=>{

      return  state.adoptReducer.prevDetails; 
     
     });

     
  
function getIndex (){
  var Index = 0;  
  for(var p = 0 ; p < 10 ; p++){
     if(numberArray[p]<numberArray[Index]){
        Index = p;
       }
    }
  }

 



  function BuyLottery() {
   var Index = 0 
    var array = []
    var indexArray = numberArray && numberArray.map(item=>Number(item))
 

    for(var i =0; i < zero; i++){
      array.push([gameCounter,0,address,10000000,0])
      indexArray[0] +=1
    }

    for(var i =0; i < one; i++){
      array.push([gameCounter,1,address,10000000,0])
      indexArray[1] +=1
    }

    for(var i =0; i < two; i++){
      array.push([gameCounter,2,address,10000000,0])
      indexArray[2] +=1
    }

    for(var i =0; i < three; i++){
      array.push([gameCounter,3,address,10000000,0])
      indexArray[3] +=1
    }

    for(var i =0; i < four; i++){
      array.push([gameCounter,4,address,10000000,0])
      indexArray[4] +=1
    }

    for(var i =0; i < five; i++){
      array.push([gameCounter,5,address,10000000,0])
      indexArray[5] +=1
    }

    for(var i =0; i < six; i++){
      array.push([gameCounter,6,address,10000000,0])
      indexArray[6] +=1
    }

    for(var i =0; i < seven; i++){
      array.push([gameCounter,7,address,10000000,0])
      indexArray[7] +=1;
    }

    for(var i =0; i < eight; i++){
      array.push([gameCounter,8,address,10000000,0])
      indexArray[8] +=1;
    }

    for(var i =0; i < nine; i++){
      array.push([gameCounter,9,address,10000000,0])
      indexArray[9] +=1;
    }

    for(var p = 0 ; p < 10 ; p++){
      if(indexArray[p]<indexArray[Index]){
         Index = p;
        }
     }    

    console.log("Number", indexArray)
    console.log("Index", Index)

      if( Number(_TFTAllowance)>=10000000*array.length){
          dispatch(BuyLotterya({array,Index}))
          setZero(0)
          setOne(0)
          setTwo(0)
          setThree(0)
          setFour(0)
          setFive(0)
          setSix(0)
          setSeven(0)
          setEight(0)
          setNine(0)
      }else{
          dispatch(LotteryApprove({quantity : Math.floor(0.1*array.length*100000000)}))
      }
      console.log("Array",array)
    }

    var _zero = []
    var _one = []
    var _two = []
    var _three = []
    var _four = []
    var _five = []
    var _six = []
    var _seven = []
    var _eight = []
    var _nine = []


    _lottCurrDetails && filteredInfo.map((v,i)=>{
      if(Number(v.number)==0){_zero.push(v)}
      if(Number(v.number)==1){_one.push(v)}
      if(Number(v.number)==2){_two.push(v)}
      if(Number(v.number)==3){_three.push(v)}
      if(Number(v.number)==4){_four.push(v)}
      if(Number(v.number)==5){_five.push(v)}
      if(Number(v.number)==6){_six.push(v)}
      if(Number(v.number)==7){_seven.push(v)}
      if(Number(v.number)==8){_eight.push(v)}
      if(Number(v.number)==9){_nine.push(v)}
    })

var NewTime = gameDetails && gameDetails.length!=0?  Number(gameDetails[gameDetails.length-1].time)+(60*60*4) : (new Date().getTime()/1000) + (60*60*4);



function Status(){
  var winnNumber = []
  var game = gameDetails && gameDetails[gameCounter-1].winners

  prevDetails &&  prevDetails.map((v,i)=>{
  
   if(game.includes(v.number)){
     winnNumber.push(v.number)
   } 
  })

  if(winnNumber.length==0){
    setwinStatus(`Sorry, better luck next time`)
  }else{
    setwinStatus(`Congratulations, your winning numbers is ${[...new Set(winnNumber)].toString()}. For more details plz check your history tab below.`)
  }

}



  window.ethereum.on("accountsChanged",(e,r)=>{window.location.reload()})
  window.ethereum.on("chainChanged",(e,r)=>{window.location.reload()})
  


  return (
    <div className="theFairWin-main-wrapper">
      <div className="theFairWin-section-wrapper">
        <h5>One For 10X</h5>
        <p>Pick a Number From 0-9, the least bet wins. </p>
        <h5>IF YOU WIN, YOU GET 10X</h5>
        <p>Cost per Ticket: 0.1 TFT</p>
        <p className="tbl-top-p">
          <span>Draw Number: {gameCounter}</span>
          <span>Date: 
            {new Date(NewTime*1000).getDate()}-
            {new Date(NewTime*1000).getMonth()+1}-
            {new Date(NewTime*1000).getFullYear()}</span>
          <span>Time: 
            {new Date(NewTime*1000).getHours()}:
            {new Date(NewTime*1000).getMinutes()}:
            {new Date(NewTime*1000).getSeconds()}</span>
        </p>
        <table className="buyTickets-table">
          <tr className="tbl-row1-border">
            <td>Number</td>
            <td className="td2-border-right">No. Of Tickets</td>
            <td>Number</td>
            <td>No. of Tickets</td>
          </tr>
          <tr>
            <td>0</td>
            <td className="td2-border-right">
              <input 
              onChange={(e)=>{setZero(Number(e.target.value))}}
              value={zero ==0 ? undefined : zero}
              type="value" />
            </td>
            <td>5</td>
            <td>
              <input 
               value={five ==0 ? undefined : five}
              onChange={(e)=>{setFive(Number(e.target.value))}}
              type="value" />
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td className="td2-border-right">
              <input 
              value={one ==0 ? undefined : one}
              onChange={(e)=>{setOne(Number(e.target.value))}}
              type="value" />
            </td>
            <td>6</td>
            <td>
              <input 
              value={six ==0 ? undefined : six}
              onChange={(e)=>{setSix(Number(e.target.value))}}
              type="value" />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td className="td2-border-right">
              <input 
              value={two ==0 ? undefined : two}
              onChange={(e)=>{setTwo(Number(e.target.value))}}
              type="value" />
            </td>
            <td>7</td>
            <td>
              <input 
              value={seven ==0 ? undefined : seven}
              onChange={(e)=>{setSeven(Number(e.target.value))}}
              type="value" />
            </td>
          </tr>
          <tr>
            <td>3</td>
   
            <td className="td2-border-right">
              <input 
              value={three ==0 ? undefined : three}
              onChange={(e)=>{setThree(Number(e.target.value))}}
              type="value" />
            </td>
            <td>8</td>
            <td>
              <input 
              value={eight ==0 ? undefined : eight}
              onChange={(e)=>{setEight(Number(e.target.value))}}
              type="value" />
            </td>
          </tr>
          <tr>
            <td>4</td>

            <td className="td2-border-right">
              <input 
              value={four ==0 ? undefined : four}
              onChange={(e)=>{setFour(Number(e.target.value))}}
              type="value" />
            </td>
            <td>9</td>
            <td>
              <input 
              value={nine ==0 ? undefined : nine}
              onChange={(e)=>{setNine(Number(e.target.value))}}
              type="value" />
            </td>
          </tr>
        </table>
        <p className="tbl-bottom-p">
          <span>NUMBER OF TICKETS: {zero+one+two+three+four+five+six+seven+eight+nine} </span>
        </p>
        <div className="buyTickets-wrapper">
          <CustomInput2
            lable="BUSD"
            enterLable={`Total TFT`}
            placeholder={`TFT AMOUNT`}
            value={((zero+one+two+three+four+five+six+seven+eight+nine)*0.1).toFixed(1)}
            belowLabel={`TFT Available In Wallet ${(Number(_balance)/100000000).toFixed(2)}`}
            rightButtonText="Buy Tickets"
            rightFunction={BuyLottery}
            allowance={Number(_TFTAllowance)>=10000000*(zero+one+two+three+four+five+six+seven+eight+nine)}
            disable={_balance==0}
          />
        </div>
      </div>
      <div className="theFairWin-section-wrapper">
        <h5>Your Current Play</h5>
        <h5>Draw # {gameCounter}</h5>
        {
            <div>
              {_zero.length>0? <p>#0 x {_zero.length} Tickets =&gt; {_zero.length*0.9} TFT Possible Win</p> : null}
              {_one.length>0? <p>#1 x {_one.length} Tickets =&gt; {_one.length*0.9} TFT Possible Win</p> : null}
              {_two.length>0? <p>#2 x {_two.length} Tickets =&gt; {_two.length*0.9} TFT Possible Win</p> : null}
              {_three.length>0? <p>#3 x {_three.length} Tickets =&gt; {_three.length*0.9} TFT Possible Win</p> : null}
              {_four.length>0? <p>#4 x {_four.length} Tickets =&gt; {_four.length*0.9} TFT Possible Win</p> : null}
              {_five.length>0? <p>#5 x {_five.length} Tickets =&gt; {_five.length*0.9} TFT Possible Win</p> : null}
              {_six.length>0? <p>#6 x {_six.length} Tickets =&gt; {_six.length*0.9} TFT Possible Win</p> : null}
              {_seven.length>0? <p>#7 x {_seven.length} Tickets =&gt; {_seven.length*0.9} TFT Possible Win</p> : null}
              {_eight.length>0? <p>#8 x {_eight.length} Tickets =&gt; {_eight.length*0.9} TFT Possible Win</p> : null}
              {_nine.length>0? <p>#9 x {_nine.length} Tickets =&gt; {_nine.length*0.9} TFT Possible Win</p> : null}
              
            </div>
 
            
          
        }
        {/* 
        <p>#8 x 4 Tickets =&gt; 0.36 TFT Possible Win</p>
        <p>#3 x 2 Tickets =&gt; 0.18 TFT Possible Win</p> */}
 
      </div>
      <div className="theFairWin-section-wrapper">
        <h5>Are You A Winner</h5>
        <div className="checkNow-btn-wrapper">
         {winStatus ? 
          <p>{winStatus}</p>:
          <button 
          onClick={Status}
          className="checkNow-btn">
            <span>CHECK NOW</span>
          </button>
          } 

        </div>
      </div>
      <div className="theFairWin-section-wrapper">
        <h5>FINISHED DRAWS</h5>
        <div className="history-buttons-wrapper">
          <div
            className="history-button"
            style={
              allHistory
                ? { paddingRight: "10px", backgroundColor: "#ECECEC" }
                : { paddingRight: "10px" }
            }
            onClick={() => handleAllHistoryClick()}
          >
            <span>ALL HISTORY</span>
          </div>
          <div
            className="history-button"
            style={
              yourHistory
                ? {
                    paddingRight: "10px",
                    borderLeft: "none",
                    backgroundColor: "#ECECEC",
                  }
                : { paddingRight: "10px", borderLeft: "none" }
            }
            onClick={() => handleYourHistoryClick()}
          >
            <span>YOUR HISTORY</span>
          </div>
        </div>
        {/* All and your History table */}
        {allHistory ? <HistoryTable tab="AllHistory" details={gameDetails && gameDetails} /> : null}
        {yourHistory ? <HistoryTable tab="yourHistory" details={gameDetails &&  gameDetails} /> : null}
      </div>
    </div>
  );
};

export default OneFor10X;
