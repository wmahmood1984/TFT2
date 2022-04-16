import logo from './logo.svg';
import "./css/bootstrap/bootstrap-reboot.min.css"
import "./css/bootstrap/bootstrap.min.css"
import "./css/fontawesome.min.css"
import "./css/OwlCarousel/owl.carousel.min.css"
import "./css/style.css"
import Web3 from 'web3';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import pic from "./Assets/Capture.png"
import footerLogo from "./Assets/footer_logo.png"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { preSaleAbi, preSaleAddress,  TBUSD,  TBUSDABI,  tokenAbi, tokenAddress, chainId} from "./config.js"

import './App.css';



toast.configure();
function Home() {
  const {referrer} = useParams()
  const [userAddress,setUserAddress] = useState()
  const [BUSD,setBUSD] = useState(0)
  const [BUSDBalance,setBUSDBalance] = useState(0)
  const [tokenBalance,setTokenBalance] = useState(0)
  const [Rate,setRate] = useState()
  const [allowance,setAllowance] = useState(0)
  const [textArea,setTextArea] = useState();
  const [success,setCopySuccess] = useState()
  const [ownerWallet,setOwnerWallet] = useState()
  const [referrerEarned, setReferrerEarned] =  useState()
  const [Chain, setChain] =  useState()
  console.log("referrer",referrer)

  const web3 = new Web3(Web3.givenProvider)
  const contract = new web3.eth.Contract(preSaleAbi,preSaleAddress)
  const token = new web3.eth.Contract(tokenAbi,tokenAddress)
  const tokenUSD = new web3.eth.Contract(TBUSDABI,TBUSD)
  const _chainId = web3.eth.getChainId((e,r)=>{
    var counter =0 
    if (Number(r) == chainId) {
      console.log("matched")
    }else{

        toast.error("Please connect to BSC main net", {
          toastId: 'error1',
          //type: "error",
          position: toast.POSITION.BOTTOM_CENTER,
        });

      
    

      }
  })
  



  useEffect(() => {

    const abc = async()=>{
      await Web3.givenProvider.enable()
      const addresses = await web3.eth.getAccounts()
      const address = addresses[0]
      setUserAddress(address)
      const _rate = await contract.methods.rate().call({from:address})
      setRate(Number(_rate))

      const _referrerEarned = await contract.methods.getBSDEarned(address).call()
      setReferrerEarned(Number(_referrerEarned))

      const _allowance = await tokenUSD.methods.allowance(address,preSaleAddress).call()
      setAllowance(_allowance)

      const _busdBalance = await tokenUSD.methods.balanceOf(address).call()
      setBUSDBalance(_busdBalance)

      const _tokenBalance = await token.methods.balanceOf(address).call()
      setTokenBalance(_tokenBalance)

      const _owner = await contract.methods.Wallet().call()
      setOwnerWallet(_owner)



    }
    abc()
  

  }, [allowance])
  
console.log("allownace",allowance  && allowance)

function showreferral (){
    
  if(userAddress){return `https://thefairtrust.finance/investment/${userAddress}`}
  
else {return ""}
  
}

async function handleConnect (){
    
      window.ethereum.request({ method: "eth_requestAccounts" })
  }


  window.ethereum.on('accountsChanged', () => {
   window.location.reload()
  });

  window.ethereum.on('chainChanged', () => {
    window.location.reload()
   });

async function handleApprove (){
  var value = BUSD 
  console.log("value",value)
  try {
    tokenUSD.methods.approve(
      preSaleAddress,
      web3.utils.toWei(value.toString(),"ether") 
      ).send({from:userAddress})
      .on("confirmation",(e,r)=>{
        if(!e){setAllowance((Number(BUSD)*Number(Rate)))}
      }) 
      

  } catch (error) {
    console.log(error)
  }
 
}


async function handlePurchase (){
  var refAccount = referrer != undefined ? referrer : ownerWallet
  var value = BUSD 
  console.log("busd",BUSD)
  try {
    contract.methods.Buy(
      refAccount,
      web3.utils.toWei(value.toString(),"ether")).send({from:userAddress})
      .on("confirmation",(e,r)=>{
        if(!e){
          window.location.reload()
          console.log(r)

        }
      })
      setBUSD(0)   
  } catch (error) {
    console.log(error)
  }
 
}

const copyToClipboard =(e) => {
  textArea.select();
  document.execCommand('copy');
  // This is just personal preference.
  // I prefer to not show the whole text area selected.
  e.target.focus();
  setCopySuccess('Copied!' );
};




async function handleBuy(){
  
  if(allowance/1000000000000000000>= (Number(BUSD) )){
    console.log("buy called")
    handlePurchase()
  }else{handleApprove()
  console.log("approve called")}

}



return (
    <div className="App">
           <Link to="Admin">Admin</Link>
      <Link to="InstantBuy">Instant Buy</Link>
      <Link to="staking">Staking</Link>
      <Link to="loan">Loan</Link>

      
      <header className="sticky-top">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 pr-lg-0 header-container">
          <nav className="navbar navbar-expand-lg navbar-light px-0 py-md-0">
            <a className="navbar-brand" href="index.html">
              <img src={pic} title="The Fair Trust" alt="The Fair Trust" width="200" height="21" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" aria-haspopup="true"
                    aria-expanded="false">
                    Resources
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="coming-soon.html">faq</a>
                    <a className="dropdown-item" href="coming-soon.html">blog</a>
                    <a className="dropdown-item" href="coming-soon.html">white paper</a>
                  </div>
                </li>
              </ul>

              <div className="pt-2 pb-0 py-md-0 social-media-main-container">
                <div className="row mx-0 align-items-center">
                  <ul className="social-media-container d-flex flex-wrap list-unstyled mb-0">
                    <li>
                      <a href="https://twitter.com/thefairtrust?s=21" target="_blank"
                        className="d-flex flex-wrap justify-content-center align-items-center">
                        <i className="fab fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/TheFairTrust" target="_blank"
                        className="d-flex flex-wrap justify-content-center align-items-center">
                        <span className="icon-icons8-telegram-app font-weight-bold"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex flex-wrap justify-content-center align-items-center">
                        <i className="fab fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex flex-wrap justify-content-center align-items-center">
                        <i className="fab fa-discord"></i>
                      </a>
                    </li>
                  </ul>

                  <a href="investment-coming-soon.html" className="form-inline my-2 my-lg-0 common-btn orange-btn invest-now-btn">INVEST NOW</a>
                </div>
              </div>

            </div>
          </nav>
        </div>


      </div>
    </div>
  </header>



  <div className="investment-calculate-container">
    <div className="container">
      <div className="row">

        <div className="col-12 col-md-6 border-right">
          <div className="text-center text-md-left">
            <h1 className="title mb-2">Invest <span className="text-blue">Now</span></h1>
            <h2>COMMUNITY SEED LAUNCH</h2>
          </div>
          <div className="connect-wallet-form-container mt-4">
            
              <button onClick={()=>{handleConnect()}} className="common-btn orange-btn connect-now-btn text-uppercase" style={{border:"0px"}}>{
               userAddress ?  `${userAddress.slice(0,5)}...${userAddress.slice(37)}` : "Connect Wallet"
              }</button>
              <div className="form-group mb-0">
                <label className="sr-only" htmlFor="inlineFormInputGroupUsername">BUSD</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">Enter BUSD</div>
                  </div>
                  <input 
                  type="value" 
                  className="form-control" 
                  id="inlineFormInputGroupUsername"
                   placeholder="BUSD AMOUNT" 
                   value = {BUSD}
                   onChange={(e)=>{setBUSD(e.target.value)}}/>
                </div>
                <p id="busdHelp" className="form-text text-muted busd-small-text mb-0" style={{textAlign:"left"}}>BUSD Available <span
                    className="text-orange">{(BUSDBalance/1000000000000000000).toFixed(2)}</span></p>
              </div>
              <div className="text-center">
                <i className="fas fa-solid fa-arrow-down"></i>
              </div>
              <div className="form-group">
                <label className="sr-only" htmlFor="inlineFormInputGroupUsername">Username</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">TFT Coversion</div>
                  </div>
                  <input 
                  type="value" 
                  className="form-control" 
                  id="inlineFormInputGroupUsername" 
                  placeholder="TFT AMOUNT"
                  value={Number(BUSD) / Number(Rate)} 
                  readOnly/>
                </div>
              </div>
              <button onClick={()=>{handleBuy()} }
                className="common-btn orange-btn connect-now-btn invest-now-btn text-uppercase mt-3 border-0">
                  {allowance/1000000000000000000 < BUSD ? "Approve" : "Invest" }</button>
              <p id="busdHelp" className="form-text text-muted busd-small-text mb-0" style={{textAlign:"left"}}>BUSD Invested <span
                  className="text-orange">{(Number(tokenBalance) * 8 / 100000000).toFixed(2)}</span> / TFT Holdings <span className="text-orange">{(Number(tokenBalance)/100000000).toFixed(4)}</span></p>
            
          </div>
        </div>

        <div className="col-12 col-md-6">
          <h2>COMMUNITY PRE-SEED INFO</h2>

          <div className="preseed-info-container mt-2 mt-md-4">
            <dl style={{textAlign:"left"}}>
              <dt className="col-sm-12 mb-2">Date: <span className="font-medium pre-launch-price">15-03-2022 to 14-04-2022</span></dt>
              <dt className="col-sm-12 mb-2">Hardcap: <span className="font-medium pre-launch-price">250,000 TFT</span></dt>
              <dt className="col-sm-12 mb-2">Price: <span className="font-medium pre-launch-price">$8 BUSD Per TFT</span></dt>
              {/* <dt className="col-sm-12 mb-2">Vesting: <span className="font-medium pre-launch-price">50% at Launch &amp; 12.5% Weekly over 4 Weeks</span></dt> */}
            </dl>
          </div>

          <h2 style={{textAlign:"left"}}>OTHER INFO</h2>
          <div className="other-preseed-info-container mt-2 mt-md-4">
            <dl style={{textAlign:"left"}}>
              <dt className="col-sm-12 mb-2">Strategic Pre-Launch Price: <span className="font-medium pre-launch-price">$12 BUSD
                  / TFT</span></dt>
              <dt className="col-sm-12 mb-2">Launch Price: <span className="font-medium launch-price">$20 BUSD / TFT</span></dt>
            </dl>
          </div>

          <a  className="text-orange what-next-link" style={{textAlign:"left", position:"absolute",left:"30px",color:"#D45E2C"}}>WHAT NEXT...</a>

        </div>

      </div>
    </div>
  </div>


  <div className="investment-calculate-table-container">
    <div className="container">
      <div className="row">

        <div className="col-12 text-center text-md-left">
          <h1 className="title mb-2">Why <span className="text-blue">Invest?</span></h1>
          <h4 className="mb-4">If you invested $1,000 in the Community Seed Round here is what your return would be.</h4>
        </div>

        <div className="col-12">
          <div className="table-responsive" style={{textAlign:"left"}}>
            <table className="table mb-2" style={{textAlign:"left"}}>
              <thead>
                <tr>
                  <td>&nbsp;</td>
                  <td>Sell At Launch</td>
                  <td>TF Investment for 90 Days</td>
                  <td>TF Loan for 90 Days</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>At Launch</td>
                  <td>125 TFT</td>
                  <td>125 TFT</td>
                  <td>125 TFT + $1,250 BUSD Loan</td>
                </tr>
                <tr>
                  <td>Daily Return</td>
                  <td>-</td>
                  <td>18 TFT</td>
                  <td>23.5 TFT</td>
                </tr>
                <tr>
                  <td>30 Days Bonus</td>
                  <td>-</td>
                  <td>18.75 TFT</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>TOTAL UNITS OF TFT</td>
                  <td>125 TFT</td>
                  <td>161.75 TFT</td>
                  <td>148.5 TFT</td>
                </tr>
                <tr>
                  <td>TFT Value</td>
                  <td>$2,500 BUSD</td>
                  <td>$3,235 BUSD</td>
                  <td>$2,970 BUSD</td>
                </tr>
                <tr>
                  <td>90 Days Dividend</td>
                  <td>-</td>
                  <td>$250 BUSD </td>
                  <td>-</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>TOTAL VALUE</td>
                  <td>$2,500 BUSD</td>
                  <td>$3,485 BUSD</td>
                  <td>$2,970 BUSD</td>
                </tr>
                <tr className="roi-first-preseed-row">
                  <td>ROI Community Seed - $8 / TFT</td>
                  <td>150%</td>
                  <td>248% + New Project Tokens</td>
                  <td>197%</td>
                </tr>
                <tr className="roi-second-preseed-row">
                  <td>ROI Strategic Pre-Launch - $12 / TFT</td>
                  <td>66%</td>
                  <td>132%</td>
                  <td>98%</td>
                </tr>
                <tr className="roi-third-preseed-row">
                  <td>ROI Launch Price - $20 / TFT</td>
                  <td>0</td>
                  <td>39%</td>
                  <td>18%</td>
                </tr>
              </tfoot>
            </table>
            <small >* calculations are based on TFT price remaining constant at $8.</small>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div className="affiliate-program-container my-4 my-sm-5">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="title mb-2 text-center text-md-left">Affiliate <span className="text-blue">Program</span></h1>
          <h4 className="mb-4 text-center text-md-left">Friends Help Friends Make Money. Share your referral link and <span className="earn-text">earn
              10% in BUSD</span> on their investments during the Community Seed Launch.</h4>

          <div>
            
              <label className="d-block d-sm-none text-orange">Your Referral Link</label>
              <div className="form-group mb-2">
                <label className="sr-only" htmlFor="inlineFormInputGroupReferelBusd">Your Referral Link</label>
                <div className="input-group">
                  <div className="input-group-prepend d-none d-sm-block">
                    <div className="input-group-text orange-bg text-white">Your Referral Link</div>
                  </div>
                  <input type="text" className="form-control" id="inlineFormInputGroupReferelBusd"
                    placeholder="Connect Wallet for link"
                    ref={(textarea) => setTextArea(textarea)} 
                    value={showreferral()}/>
                  <div className="input-group-prepend">
                    <button  onClick={copyToClipboard} className="input-group-text">Copy Link</button>{success}
                  </div>
                </div>
              </div>
            
             {/* <p className="mb-1">Your Referal Link: {showreferral()} <button onClick={copyToClipboard} className="copy-share-link">copy</button>{success}</p> */}
            <p className="mb-1" style={{textAlign:"left"}}>Total Earned Referral: <span className="text-orange">{(Number(referrerEarned)/1000000000000000000).toFixed(4)}</span> BUSD. Paid out of instantly into your wallet.</p> 
            <p style={{textAlign:"left", position:"relative",top:"0px"}}>IMPORTANT: All investment needs to be made via the above referral link to qualify for referral payout.</p>
          </div>
        </div>

      </div>
    </div>
  </div>




  <footer>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-4 mb-md-0 text-center text-md-left first-item item">
          <a href="index.html"><img src={footerLogo} className="img-fluid footer-logo" width="500"
              height="474" /></a>
        </div>

         <div className="col-2 d-none d-lg-block"></div> 
              
        <div className="col-12 col-md-6 mb-md-0 text-center text-md-left second-item item" style={{position:"absolute",left:"550px"}}>
          <div className="social-media-main-container">
            <p className="social-text mb-2 mb-md-3 footer-title">Let's get social</p>
            <ul
              className="social-media-container d-flex flex-wrap list-unstyled justify-content-center justify-content-md-start mb-0">
              <li>
                <a href="https://t.me/TheFairTrust" target="_blank"
                  className="d-flex flex-wrap justify-content-center align-items-center">
                  <span className="icon-icons8-telegram-app font-weight-bold"></span>
                </a>
              </li>
              <li>
                <a href="#" className="d-flex flex-wrap justify-content-center align-items-center">
                  <i className="fab fa-discord"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/thefairtrust?s=21" target="_blank"
                  className="d-flex flex-wrap justify-content-center align-items-center">
                  <i className="fab fa-brands fa-twitter"></i>
                </a>
              </li>
               <li>
                <a href="#" className="d-flex flex-wrap justify-content-center align-items-center">
                  <i className="fab fa-brands fa-instagram"></i>
                </a>
              </li>

            </ul>
          </div>

          <div className="contact-detail" style={{position:"absolute",top:"100px"}}>
            <p className="contact-text mb-2 mb-md-3 footer-title">Contact</p>
            <a href="mailto:Info@TheFairTrust.com">Info@TheFairTrust.com</a>
          </div>

        </div>

        <div className="col-12 col-md-2 text-center text-md-left mb-sm-0 third-item item" style={{position:"relative",left:"500px"}}>
          <div className="quick-link-container list-unstyled">
            <p className="contact-text mb-3 footer-title">NAVIGATION</p>
            <ul className="mb-0">
              <li><a href="coming-soon.html">Faq</a></li>
              <li><a href="coming-soon.html">Blog</a></li>
              <li><a href="coming-soon.html">Whitepaper</a></li>
              <li><a href="file/COOKIE_POLICY.pdf" target="_blank">Cookie Policy</a></li>
              <li className="mb-0"><a href="file/PRIVACY_POLICY.pdf" target="_blank">Privacy Policy</a></li>

            </ul>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-3 align-self-end fourth-item item">
          <div className="copyright-container text-center text-sm-right">
            {/* <p className="mb-0">Copyright &#169; <span className="font-weight-bold">The Fair Trust</span></p> */}
          </div>
        </div> 

      </div>
    </div>
  </footer>


  <a href="#" className="form-inline my-2 my-lg-0 common-btn footer-invest-btn invest-now-btn d-block d-lg-none">INVEST
    NOW</a>

 
  <button className="back-to-top" type="button">
    <i className="fas fa-regular fa-angle-up"></i>
  </button>

    </div>
  );
}

export default Home;
