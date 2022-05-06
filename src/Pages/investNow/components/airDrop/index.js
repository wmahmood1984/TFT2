
import Web3 from 'web3';
import {Adminabi,AdminconAddress,Admin, LotteryAbi, lotteryAddress, LoanConAbi, LoanConAddress} from "../../../../config.js"
import {useEffect, useState} from "react"
import Papa from "papaparse"
import { Link } from 'react-router-dom';
import "./airDrop.css";
import { useDispatch,useSelector } from 'react-redux';
import { ActivateLotteryPurchaseA, ActivateTFTBuyA, ActivateTFTLoanA, ActivateTFTStakingA, changeDiscountA, handleLoan30A, handleLoan45A, handleStakingDailyA, handleStakingMonthlyA, handleStakingQuarterlyA } from '../../../../state/ui/index.js';

const AirDrop = () => {
  const dispatch = useDispatch()
  const web3 = new Web3(Web3.givenProvider)
  const contract = new web3.eth.Contract(Adminabi,AdminconAddress)
  const lotteryContract = new web3.eth.Contract(LotteryAbi,lotteryAddress)
  const loanContract = new web3.eth.Contract(LoanConAbi,LoanConAddress)
  const [mcas,setMCAS] =  useState()
  const [mcasIssued,setMcasIssued] =  useState()
  const [esas,setESAS] =  useState()
  const [esasIssued,setESASIssued] =  useState()
  const [tds,setTDS] =  useState()
  const [tdsIssued,setTDSIssued] =  useState()
  const [csv,setCSV] = useState()
  const[scheme,setScheme]= useState()
  const[address,setAddress]= useState()
  const[quantity,setQuantity]= useState()
  const[stakingDaily,setStakingDaily]= useState()
  const[stakingMonthly,setStakingMonthly]= useState()
  const[stakingQaurterly,setStakingQuarterly]= useState()
  const[loan30,setLoan30]= useState()
  const[loan45,setLoan45]= useState()
  const[tftBuyActive,setTFTBuyACtive]= useState()
  const[tftStakingActive,setStakingActive]= useState()
  const[tftLoanActive,settftLoanActive]= useState()
  const[LotteryPurchaseActive,setlotteryPurcahseActive]= useState()
  const[changeDisc,setChangeDisc]= useState()

  const[TEAM,setTEAM]= useState()
  const [mcasDetails,setMcasDetails]= useState()
  const [esasDetails,setEsasDetails]= useState()
  const[days,setDays]= useState()
  const[tokensVested,setTokenVested]= useState()
  // const[schemea,setschemea]= useState()
  const[quantitya,setquantitya]= useState()
  const[Advisor,setAdvisor]= useState()

  const toggle = useSelector((state) => {
    return state.adoptReducer.toggle;
  });

  useEffect(() => {
    const abc = async()=>{
    const result = await web3.eth.getAccounts((e,r)=>{setAddress(r[0])})
    contract.methods.MCAS().call((e,r)=>{setMCAS(r)})
    contract.methods.MCASIssued().call((e,r)=>{setMcasIssued(r)})
    contract.methods.ESAS().call((e,r)=>{setESAS(r)})
    contract.methods.ESASIssued().call((e,r)=>{setESASIssued(r)})
    contract.methods.TDS().call((e,r)=>{setTDS(r)})
    contract.methods.TDSIssued().call((e,r)=>{setTDSIssued(r)})
    lotteryContract.methods.BuyTicketsActive().call((e,r)=>{setlotteryPurcahseActive(r)})
    loanContract.methods.BUYTFTActive().call((e,r)=>{setTFTBuyACtive(r)})
    loanContract.methods.stakingActive().call((e,r)=>{setStakingActive(r)})
    loanContract.methods.lstakingActive().call((e,r)=>{settftLoanActive(r)})
  
    contract.methods.Team().call((e,r)=>{setTEAM(r)})
    contract.methods.MCASDetails(result[0]).call((e,r)=>{setMcasDetails(r)})
    contract.methods.ESASDetails().call((e,r)=>{setEsasDetails(r)})
    contract.methods.teamClaimVested().call((e,r)=>{setTokenVested(r)})
  }
    abc()
  
  }, [scheme,toggle])


  const handleChange = async event => {
    const file = await event.target.files[0]
    Papa.parse(file, {
      complete: updateData,
      header: false
    });
    // const reader = new window.FileReader()
    // reader.readAsText(file)
    // reader.onloadend = async ()=>{   console.log("reader",reader.result) }
  }
  
  function  updateData(result) {
    var data = result.data;
    console.log(data);
    setCSV(data);
  }
  
  
  window.ethereum.on("accountsChanged",(e,r)=>{window.location.reload()})
  
  console.log("advisor",TEAM)
  console.log("address",address)
  
  function handleMCASSubmit (){
  
  if(csv && scheme){
    var myArray = []
    var currentTime = days ==0? 0 : new Date().getTime()/1000
  
  csv.map((v,i)=>{
  myArray.push([v[0],Number(v[1])*100000000,Math.floor(currentTime)+Number(v[2])*60*60*24])
  })
  
  myArray.pop()
  
  console.log("data",myArray)
  contract.methods.setMCAS(scheme,
      myArray
    ).send({from:address}).on("confirmation",(e,r)=>{
      setCSV("")
      setScheme("")
    }) 
  }else{
    window.alert("Please provide parameters")
  }
  
  }
  
  
  function handleESASSubmit (){
  
    if(quantity && days){
     
  
      var currentTime = days ==0? 0 : new Date().getTime()/1000
  
    contract.methods.setESAS(scheme,quantity*100000000,Math.floor(currentTime)+days*60*60*24
      
      ).send({from:address}).on("confirmation",(e,r)=>{
        setDays("")
        setScheme("")
        setQuantity("")
      }) 
    }else{
      window.alert("Please provide parameters")
    }
    
    
    
     
    
    
       
    
    }
  
    
  async function claimTeam(){
    contract.methods.teamClaim().send({from:address})
  }
  
  
  async function claimESAS(schemeNo){
    contract.methods.ESASClaim(schemeNo,quantitya).send({from:address})
  }
  
  async function MCASClaim(schemeNo){
    contract.methods.ESASClaim(schemeNo,quantitya).send({from:address})
  }


  async function ActivateTFTBuy(){
    dispatch(ActivateTFTBuyA({}))

  }

  async function ActivateTFTStaking(){
    dispatch(ActivateTFTStakingA({}))
  }

  async function ActivateTFTLoan(){
    dispatch(ActivateTFTLoanA({}))
  }

  async function ActivateLotteryPurchase(){
    dispatch(ActivateLotteryPurchaseA({}))
  }

  async function handleStakingDaily(){
    dispatch(handleStakingDailyA({numb:stakingDaily}))
  }

  async function handleStakingMonthly(){
    dispatch(handleStakingMonthlyA({numb:stakingMonthly}))
  }

  async function handleStakingQuarterly(){
    dispatch(handleStakingQuarterlyA({numb:stakingQaurterly}))
  }

  async function handleLoan30(){
    dispatch(handleLoan30A({numb:loan30}))
  }

  async function handleLoan45(){
    dispatch(handleLoan45A({numb:loan45}))
  }

  async function changeDiscount(){
    dispatch(changeDiscountA({numb:changeDisc}))
  }







  return (
    <div className="airDrop-main-wrapper">
     
      {Admin == address? 
    <div className='AdminBlock'>
      <h1>TFT Admin Panel</h1>
      <p>Mkt and Comm AirDrop{"  "}<span >{`${mcasIssued/100000000} / ${mcas/100000000}`}</span></p>
      <p>Strategic Adv AirDrop{"  "}<span >{`${esasIssued/100000000} / ${esas/100000000}`}</span></p>
      <p>Team AirDrop{"  "}<span >{`${tdsIssued/100000000} / ${tds/100000000}`}</span></p>
      
 

      <div style={{border:"1px solid black"}}>
        <h3>Members and Community AirDrop</h3>
        <input
        value={scheme}
        type="value"
        placeholder='enter scheme number'
        onChange={(e)=>{setScheme(e.target.value)}}
        ></input>
        <div className="Recipients_info_2Qot1" data-v-404281ee=""><input className="CSV-file-input" type="file" onChange={handleChange}/></div>
        <button onClick={handleMCASSubmit}>submit</button>
      </div>

      <div style={{border:"1px solid black"}}>
        <h3>External Strategic Advisor AirDrop</h3>
        <input
        value={scheme}
        type="value"
        placeholder='enter scheme number'
        onChange={(e)=>{setScheme(e.target.value)}}
        ></input>

        <input
        value={quantity}
        type="value"
        placeholder='enter quantity'
        onChange={(e)=>{setQuantity(e.target.value)}}
        ></input>

        <input
        value={days}
        type="value"
        placeholder='enter vesting days'
        onChange={(e)=>{setDays(e.target.value)}}
        ></input>

        <input
        value={Advisor}
        type="text"
        placeholder='enter Advisor address'
        onChange={(e)=>{setAdvisor(e.target.value)}}
        ></input>

  
        <button onClick={handleESASSubmit}>submit</button>
      </div>
      <button
      onClick={()=>{contract.methods.approve().send({from:address})}}
      >Approve tokens</button>
       <br/>
       <button onClick={ActivateTFTBuy}>
         {tftBuyActive? "Inactive TFT Buy" :  "Activate TFT Buy"}
       </button>

       <br/>
       <button onClick={ActivateTFTStaking}>
         {tftStakingActive? "Inactive TFT Staking" :  "Activate TFT Staking"}
       </button>

       <br/>
       <button onClick={ActivateTFTLoan}>
         {tftLoanActive? "Inactive TFT Loan" :  "Activate TFT Loan"}
       </button>

       <br/>
       <button onClick={ActivateLotteryPurchase}>
         {LotteryPurchaseActive? "Inactive Lottery Purchase" :  "Activate lottery purchase"}
       </button>

       <br/>
       <div>
        <input
        value={stakingDaily}
        onChange={(e)=>{setStakingDaily(e.target.value)}}
        type="value"
        />
        
       <button onClick={handleStakingDaily}>
        set staking Daily rate
       </button>
       </div>


       <br/>
       <div>
        <input
        value={stakingMonthly}
        onChange={(e)=>{setStakingMonthly(e.target.value)}}
        type="value"
        />
        
       <button onClick={handleStakingMonthly}>
        set staking Monthly rate
       </button>
       </div>


       <br/>
       <div>
        <input
        value={stakingQaurterly}
        onChange={(e)=>{setStakingQuarterly(e.target.value)}}
        type="value"
        />
        
       <button onClick={handleStakingQuarterly}>
        set staking Quarterly rate
       </button>
       </div>

       <br/>
       <div>
        <input
        value={loan30}
        onChange={(e)=>{setLoan30(e.target.value)}}
        type="value"
        />
        
       <button onClick={handleLoan30}>
        set Loan 30 rate
       </button>
       </div>

       <br/>
       <div>
        <input
        value={loan45}
        onChange={(e)=>{setLoan45(e.target.value)}}
        type="value"
        />
        
       <button onClick={handleLoan45}>
        set Loan 45 rate
       </button>
       </div>


       <br/>
       <div>
        <input
        value={changeDisc}
        onChange={(e)=>{setChangeDisc(e.target.value)}}
        type="value"
        />
        
       <button onClick={changeDiscount}>
        Change discount %
       </button>
       </div>
      

       



    </div> 
    
    : 


          
    <div>
        <h1>Marketing and Community Panel Panel</h1>
       <h3 className="airDrop-title">Airdrops</h3>
      <p className="airDrop-below-text">
        Read the Medium post for all the details on each Airdrop program.
      </p>

      {/* <p>Mkt and Comm AirDrop{"  "}<span >
        {`${(mcasIssued/100000000).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} /
         ${(mcas/100000000).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</span></p> */}
      <div className="airdrops-box">
      <table >
        <thead>
          <tr>
            <th >Airdrop Details</th>
            <th >Your Airdrop Balance</th>
            <th >Days Left</th>
 
            </tr>
        </thead>
        <tbody>
          {mcasDetails &&  mcasDetails.map((val, key) => {
            var currentTime = new Date().getTime()/1000
            return (
              <tr key={key}>
                
                
                <td >{val.Scheme}</td>
                <td >{val.amount/100000000}</td>
                {(Number(val.Days)- currentTime)/(60*60*24)>0?
              <td >{((Number(val.Days)- currentTime)/(60*60*24)).toFixed(0)}</td>:  
              <td >
               

              {/* <input
                value={quantitya}
                type="value"
                placeholder='enter quantity'
                onChange={(e)=>{setquantitya(e.target.value)}}
              ></input> */}

              <button 
                className="claim-button"
                disabled={Number(val.Days)-currentTime>0}
                onClick={()=>{MCASClaim(val.Scheme)}}>Claim</button></td>
             }
                

              </tr>)})}

                
        </tbody>
        <tfoot></tfoot>
      </table>           
      </div>
      
    </div>
    
    }



   
   
    </div>
  );
};

export default AirDrop;
