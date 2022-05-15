import Web3 from "web3";
import {
  LoanConAbi,
  LoanConAddress,
  tokenAbi,
  USDTAddress,
  BUSDAddress,
  tokenAddress,
  LotteryAbi,
  lotteryAddress,
  Adminabi,
  AdminconAddress,
} from "../../config";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

var web3;
var LoanContract;
var address;
var LotteryContract;
var networkId;
var tokenContract 
var BUSDContract 
var USDTContract 
var adminContract 
export const initWeb3 = createAsyncThunk("InitWeb3", async (a, thunkApi) => {
  try {
    if (Web3.givenProvider) {
      web3 = new Web3(Web3.givenProvider);
      await Web3.givenProvider.enable()
      networkId = await web3.eth.net.getId()
      LoanContract = new web3.eth.Contract(LoanConAbi, LoanConAddress);
       tokenContract = new web3.eth.Contract(tokenAbi, tokenAddress);
       BUSDContract = new web3.eth.Contract(tokenAbi, BUSDAddress);
       USDTContract = new web3.eth.Contract(tokenAbi, USDTAddress);
       adminContract = new web3.eth.Contract(Adminabi,AdminconAddress)
      LotteryContract = new web3.eth.Contract(LotteryAbi,lotteryAddress)
      const TFTtoBNBA = await LoanContract.methods.TFTtoBNB(100000000).call()
      const DolPerBNB = await LoanContract.methods.getLatestPrice().call()
      const price = Number(TFTtoBNBA)*Number(DolPerBNB)
      const addresses = await web3.eth.getAccounts();
      const tftStaked = await LoanContract.methods.TFTStaked().call()
      console.log("tft staked",tftStaked)
      const supply = await tokenContract.methods.totalSupply().call()
      
      const admin = await LoanContract.methods.admin().call();
      const adminTFTBalance = await tokenContract.methods.balanceOf(admin).call()
      
      var circulatingSupply = Number(supply) - Number(adminTFTBalance)
       
      const tftDeposited = await LoanContract.methods.TFTDeposited().call()
  
      const adminEthBalance = await web3.eth.getBalance(admin);
      const adminUSDBalance = await BUSDContract.methods.balanceOf(admin).call();
      const adminUSDTBalance = await USDTContract.methods.balanceOf(admin).call();
      var treasuryBalance = Number(adminEthBalance)*Number(DolPerBNB) + Number(adminUSDBalance) + Number(adminUSDTBalance)
      const loanIssued = await LoanContract.methods.LoanIssued().call()
      address = addresses[0];
      console.log("addresses",addresses)
      thunkApi.dispatch(
        balance({
          contract: LoanContract,
          address: address,
        })
      );
      return {
        web3,
        LoanContract,
        address,
        price,
        tftStaked,
        circulatingSupply,
        tftDeposited,
        treasuryBalance,
        loanIssued,



      };
    } else {
      console.log("error in loading web3");
      return {
        web3: null,
        contract: null,
        address: null,
        SeekGoldAddress: null,
      };
    }
  } catch (error) {
    console.log("Error", error);
  }
});

export const balance = createAsyncThunk(
  "balance",
  async ({ contract, address }) => {
    try {
      //const price = await contract.methods.getPrice(address).call()
      const price = 0;

      return { price };
    } catch (error) {
      console.log("Error in ArrayThunk", error);
    }
  }
);

export const TFTtoDollar = createAsyncThunk(
  "balance",
  async ({ TFT }) => {
    try {
      const BNBPrice = await LoanContract.methods.getLatestPrice().call();
      const TFTtoBNB = await LoanContract.methods.TFTtoBNB(TFT*100000000).call()
      var TFTDollarValue = TFTtoBNB*BNBPrice
      

      return { TFTDollarValue };
    } catch (error) {
      console.log("Error in ArrayThunk", error);
    }
  }
);

export const Lottery = createAsyncThunk(
  "Lottery",
  async ({  }) => {
    try {
      const lWeb3 = new Web3(Web3.givenProvider)
      const lAddress = await lWeb3.eth.getAccounts()

      const LotteryAllowance = await tokenContract.methods.allowance(lAddress[0],lotteryAddress).call()
      const gameCounter = await LotteryContract.methods.gameCounter().call()
      const _lottCurrDetails = await LotteryContract.methods.getDetailsCurrent().call({from:lAddress[0]})
      const gameDetails = await LotteryContract.methods.getGamesDetails().call()
      const prevDetails = await LotteryContract.methods.previousGameDetails().call()
      const numberArray = await LotteryContract.methods.getNumberArray().call()
      const balance = await tokenContract.methods.balanceOf(lAddress[0]).call()
      

      return { LotteryAllowance,gameCounter,_lottCurrDetails,gameDetails,prevDetails,numberArray,balance };
    } catch (error) {
      console.log("Error in Lottery", error);
    }
  }
);

export const BuyTFTComp = createAsyncThunk(
  "BuyTFTComp",
  async ({ BNB, BUSD, USDT }) => {
    try {

      const addresses = await web3.eth.getAccounts();
      const address = addresses[0]
      const discount = await LoanContract.methods.Discount().call();
      const discountUSD = await LoanContract.methods.usdDiscount().call();
      const BUSDbalance = await BUSDContract.methods.balanceOf(address).call();
      const USDTbalance = await USDTContract.methods.balanceOf(address).call();
      const BUSDAllowance = await BUSDContract.methods.allowance(address, LoanConAddress)
      .call();
      console.log("discount usd",discountUSD)
      const USDTAllowance = await USDTContract.methods
        .allowance(address, LoanConAddress)
         .call();
      var USDperBNB = await LoanContract.methods.getLatestPrice().call()

      var BNBsofUSD = (BUSD/USDperBNB).toFixed(18)
      var BUSDtoTFT = await LoanContract.methods.getPrice(
        web3.utils.toWei(BNBsofUSD.toString(),"ether")
        ).call() 
      var BNBsofUSDT = (USDT/USDperBNB).toFixed(18)  
      var USDTtoTFT = await LoanContract.methods.getPrice(
        web3.utils.toWei(BNBsofUSDT.toString(),"ether")
        ).call()
        const TFTtoBNBA = await LoanContract.methods.TFTtoBNB(100000000).call()
        const DolPerBNB = await LoanContract.methods.getLatestPrice().call()
        const price = Number(TFTtoBNBA)*Number(DolPerBNB)

        var BNBtoTFT = await LoanContract.methods.getPrice(
          web3.utils.toWei(BNB.toString(),"ether")
        ).call()
        const BNBBalance = await web3.eth.getBalance(address)
          console.log("USD per BNB",USDTtoTFT)

      return {discountUSD, BUSDbalance, USDTbalance,discount,BUSDtoTFT,USDTtoTFT,price,BNBtoTFT ,BNBBalance,BUSDAllowance,USDTAllowance};
    } catch (error) {
      console.log("Error in BuyTFTComp", error);
    }
  }
);


export const stakingComp = createAsyncThunk(
  "stakingComp",
  async ({  }) => {
    try {
      const addresses = await web3.eth.getAccounts();
      const address = addresses[0]
      const balance = await tokenContract.methods.balanceOf(address).call()
      const TFTAllowance = await tokenContract.methods.allowance(address,LoanConAddress).call()
      const indStakingInf = await LoanContract.methods
        .getStakingInfo()
        .call({ from: address });
      const dailyStaking = await LoanContract.methods.stakingDaily().call()
      const monthStaking = await LoanContract.methods.stakingMonthly().call()
      const quarterlySTaking = await LoanContract.methods.stakingQuarterly().call()

      return {balance,TFTAllowance,indStakingInf,dailyStaking,monthStaking,quarterlySTaking};
    } catch (error) {
      console.log("Error in stakingComp", error);
    }
  }
);

export const Price = createAsyncThunk("Price", async ({}) => {
  try {
    if (Web3.givenProvider) {
      console.log("web 3 called")
      const balance = await tokenContract.methods.balanceOf(address).call();
      const BUSDAllowance = await BUSDContract.methods
        .allowance(address, LoanConAddress)
        .call();
 
      const TFTAllowance = await tokenContract.methods
        .allowance(address, LoanConAddress)
        .call();
    
      const indLoanInf = await LoanContract.methods
        .getLStakingInfo()
        .call({ from: address });
      const loandDaily1 = await LoanContract.methods.LoanDaily1().call()
      const loandDaily2 = await LoanContract.methods.LoanDaily2().call()

      console.log("balance",balance)    
      return {

         indLoanInf,
         BUSDAllowance,

         balance,

         TFTAllowance,
        loandDaily1,
        loandDaily2
      };
    }
  } catch (error) {
    console.log("Error in Price Thunk", error);
  }
});

export const Buy = createAsyncThunk(
  "Buy",
  async ({ quantity, value, usdCon }) => {
    try {
      var LQuantity = web3.utils.toWei(quantity.toString(), "ether");
      var lValue = web3.utils.toWei(value.toString(), "ether");
      const result = await LoanContract.methods
        .buyTFT(LQuantity, usdCon)
        .send({ from: address, value: lValue });
    } catch (error) {
      console.log("Error in Buy Function", error);
    }
  }
);

export const BUSDApprove = createAsyncThunk(
  "BUSDApprove",
  async ({ quantity }) => {
    try {
      var BUSDContract = new web3.eth.Contract(tokenAbi, BUSDAddress);
      var LQuantity = web3.utils.toWei(quantity.toString(), "ether");

      const result = await BUSDContract.methods
        .approve(LoanConAddress, LQuantity)
        .send({ from: address });
      // .on(
      // 	"confirmation",(e,r)=>{window.location.reload()}
      // )
    } catch (error) {
      console.log("Error in BUSDApprove Function", error);
    }
  }
);

export const USDTApprove = createAsyncThunk(
  "USDTApprove",
  async ({ quantity }) => {
    try {
      var USDTContract = new web3.eth.Contract(tokenAbi, USDTAddress);
      var LQuantity = web3.utils.toWei(quantity.toString(), "ether");

      const result = await USDTContract.methods
        .approve(LoanConAddress, LQuantity)
        .send({ from: address });
      // .on(
      // 	"confirmation",(e,r)=>{window.location.reload()}
      // )
    } catch (error) {
      console.log("Error in USDTApprove Function", error);
    }
  }
);

export const TFTApprove = createAsyncThunk(
  "TFTApprove",
  async ({ quantity }) => {
    try {
      var TFTContract = new web3.eth.Contract(tokenAbi, tokenAddress);

      const result = await TFTContract.methods
        .approve(LoanConAddress, quantity * 100000000)
        .send({ from: address });
      // .on(
      // 	"confirmation",(e,r)=>{window.location.reload()}
      // )
    } catch (error) {
      console.log("Error in TFTApprove Function", error);
    }
  }
);

export const DiscChange = createAsyncThunk("DiscChange", async ({ Disc }) => {
  try {
    const result = await LoanContract.methods
      .changeDiscount(Disc)
      .send({ from: address });
    // .on(
    // 	"confirmation",(e,r)=>{window.location.reload()}
    // )
  } catch (error) {
    console.log("Error in DiscChange Function", error);
  }
});

export const Stakinga = createAsyncThunk("Staking", async ({ _qty }) => {
  try {
    const result = await LoanContract.methods
      .Staking(_qty * 100000000)
      .send({ from: address });
    // .on(
    // 	"confirmation",(e,r)=>{window.location.reload()}
    // )
  } catch (error) {
    console.log("Error in DiscChange Function", error);
  }
});

export const LStakinga = createAsyncThunk(
  "Staking",
  async ({ _qty, Scheme }) => {
    try {
      
      const result = await LoanContract.methods
        .LStaking(_qty * 100000000, Scheme)
        .send({ from: address });
      // .on(
      // 	"confirmation",(e,r)=>{window.location.reload()}
      // )
    } catch (error) {
      console.log("Error in LStakinga Function", error);
    }
  }
);

export const UnStakinga = createAsyncThunk("Staking", async ({ id }) => {
  try {
    const result = await LoanContract.methods
      .unStaking(id)
      .send({ from: address });
    // .on(
    // 	"confirmation",(e,r)=>{window.location.reload()}
    // )
  } catch (error) {
    console.log("Error in DiscChange Function", error);
  }
});

export const LUnStakinga = createAsyncThunk("LUnStakinga", async ({ id,Scheme }) => {
  try {
    const result = await LoanContract.methods
      .LUnStaking(id,Scheme)
      .send({ from: address });
    // .on(
    // 	"confirmation",(e,r)=>{window.location.reload()}
    // )
  } catch (error) {
    console.log("Error in DiscChange Function", error);
  }
});

export const claimA = createAsyncThunk("claimA", async ({ id }) => {
  try {
    const result = await LoanContract.methods
      .claimReward(id)
      .send({ from: address });
    // .on(
    // 	"confirmation",(e,r)=>{window.location.reload()}
    // )
  } catch (error) {
    console.log("Error in claimA Function", error);
  }
});

export const bulkclaimA = createAsyncThunk("bulkclaimA", async ({ id }) => {
  try {
    const result = await LoanContract.methods
      .multipleClaim(id)
      .send({ from: address });
    // .on(
    // 	"confirmation",(e,r)=>{window.location.reload()}
    // )
  } catch (error) {
    console.log("Error in bulkclaimA Function", error);
  }
});

export const LotteryApprove = createAsyncThunk("LotteryApprove",
async ({quantity})=>{


    try {
      var TFTContract = new web3.eth.Contract(tokenAbi,tokenAddress);


    const result = await TFTContract.methods.approve(lotteryAddress,quantity).send({from:address })
  // .on(
  // 	"confirmation",(e,r)=>{window.location.reload()}
  // )

    } catch (error) {
        console.log("Error in LotteryApprove Function",error)
    }
}
)


export const BuyLotterya = createAsyncThunk("BuyLotterya",
async ({array,Index})=>{


    try {


        // var tx1 = [gameCounter,gameNumber,address,quantity*100000000,0]

        console.log("tx1",array)


  const result = await LotteryContract.methods.bulkBuy(array,Index).send({from:address })
  // .on(
  // 	"confirmation",(e,r)=>{window.location.reload()}
  // )

    } catch (error) {
        console.log("Error in BuyLotterya Function",error)
    }
}
)


export const ActivateTFTBuyA = createAsyncThunk("ActivateTFTBuyA",
async ({})=>{


    try {
      const result = await LoanContract.methods.setTFTBuyACtive().send({from:address})


    } catch (error) {
        console.log("Error in ActivateTFTBuyA Function",error)
    }
}
)

export const ActivateTFTStakingA = createAsyncThunk("ActivateTFTStaking",
async ({})=>{


    try {




  const result = await LoanContract.methods.setStakingActive().send({from:address})
 

    } catch (error) {
        console.log("Error in ActivateTFTStaking Function",error)
    }
}
)

export const ActivateTFTLoanA = createAsyncThunk("ActivateTFTLoan",
async ({})=>{


    try {




  const result = await LoanContract.methods.setLstakingActive().send({from:address })
 

    } catch (error) {
        console.log("Error in ActivateTFTLoan Function",error)
    }
}
)

export const ActivateLotteryPurchaseA = createAsyncThunk("ActivateLotteryPurchaseA",
async ({})=>{


    try {




  const result = await LotteryContract.methods.setBuyTicketsActive().send({from:address })
 

    } catch (error) {
        console.log("Error in ActivateLotteryPurchaseA Function",error)
    }
}
)

export const handleDiscountA = createAsyncThunk("handleDiscountA",
async ({numb})=>{


    try {




  const result = await LoanContract.methods.changeDiscount(numb).send({from:address })
 

    } catch (error) {
        console.log("Error in handleDiscountA Function",error)
    }
}
)

export const handleStakingDailyA = createAsyncThunk("handleStakingDailyA",
async ({numb})=>{


    try {




      const result = await LoanContract.methods.changestakingDaily(numb).send({from:address })
 

    } catch (error) {
        console.log("Error in handleStakingDailyA Function",error)
    }
}
)

export const handleStakingMonthlyA = createAsyncThunk("handleStakingMonthly",
async ({numb})=>{


    try {




  const result = await LoanContract.methods.changestakingMonthly(numb).send({from:address })
 

    } catch (error) {
        console.log("Error in handleStakingMonthly Function",error)
    }
}
)

export const handleStakingQuarterlyA = createAsyncThunk("handleStakingQuarterly",
async ({numb})=>{


    try {




  const result = await LoanContract.methods.changestakingQuarterly(numb).send({from:address })
 

    } catch (error) {
        console.log("Error in handleStakingQuarterly Function",error)
    }
}
)

export const handleLoan30A = createAsyncThunk("handleLoan30",
async ({numb})=>{


    try {




  const result = await LoanContract.methods.changeLoanDaily1(numb).send({from:address })
 

    } catch (error) {
        console.log("Error in handleLoan30 Function",error)
    }
}
)

export const handleLoan45A = createAsyncThunk("handleLoan45",
async ({numb})=>{


    try {




  const result = await LoanContract.methods.changeLoanDaily2(numb).send({from:address })
 

    } catch (error) {
        console.log("Error in handleLoan45 Function",error)
    }
}
)


export const changeDiscountA = createAsyncThunk("changeDiscountA",
async ({numb})=>{


    try {




  const result = await LoanContract.methods.changeDiscount(numb).send({from:address })
 

    } catch (error) {
        console.log("Error in changeDiscountA Function",error)
    }
}
)

const adoptSlice = createSlice({
  name: "AdopSlice",
  initialState: {
    web3: null,
    ethBalance: null,
    address: null,
    balance: null,
    price: null,
    Active: null,
    toggle: false,
    remaining: null,
    discount: null,
    BNBPrice: null,
    BUSDTFT: null,
    BUSDAllowance: null,
    USDTAllowance: null,
    balance: 0,
    Admin: null,
    TFTAllowance: null,
    indStakingInf: null,
    indRewardInf: null,
    indLoanInf: null,
    test: null,
    BUSDbalance : null,
    USDTbalance : null,
    BNBBalance : null,
    TFTDollarValue: null,
    USDtoTFT1 : null,
    USDTtoTFT1 : null,
    LotteryAllowance : null,
    gameCounter : null,
    _lottCurrDetails: null,
    gameDetails: null,
    prevDetails : null,
    supply : null,
    circulatingSupply : null,
    tftStaked: null,
    tftDeposited: null,
    treasuryBalance : null,
    loanIssued : null,
    networkId : null,
    dailyStaking : null,
    monthStaking : null,
    quarterlySTaking : null,
    loandDaily1 : null,
    loandDaily2 :  null,
    TFTtoDollar : null,
    BNBtoTFT: null,
    numberArray: null,
    discountUSD: null,
  },
  reducers: {
    toggle: (state, actions) => {
      state.toggle = !state.toggle;
    },
    setAccount: (state, actions) => {
      state.address = actions.payload;
    },
    setTest: (state, actions) => {
      state.test = actions.payload;
    },
  },
  extraReducers: {
    [initWeb3.fulfilled]: (state, action) => {
      state.web3 = action.payload.web3;
      state.address = action.payload.address;
      state.ethBalance = action.payload.ethBalance;
      state.price = action.payload.price
      state.tftStaked = action.payload.tftStaked 
      state.circulatingSupply = action.payload.circulatingSupply
      state.supply = action.payload.supply
      state.tftDeposited = action.payload.tftDeposited
      state.treasuryBalance = action.payload.treasuryBalance
      state.loanIssued = action.payload.loanIssued
    },

    [Price.fulfilled]: (state, action) => {
       state.BUSDAllowance = action.payload.BUSDAllowance;
           state.balance = action.payload.balance;
       state.TFTAllowance = action.payload.TFTAllowance;
       state.indLoanInf = action.payload.indLoanInf;

     state.loandDaily1 = action.payload.loandDaily1
      state.loandDaily2 = action.payload.loandDaily2
    },

    [TFTtoDollar.fulfilled] : (state,action) => {
      state.TFTDollarValue = action.payload.TFTDollarValue
    },

    [BuyTFTComp.fulfilled] : (state,action) => {

      state.discount = action.payload.discount;
      state.BUSDbalance = action.payload.BUSDbalance
      state.USDTbalance = action.payload.USDTbalance
      state.USDtoTFT1 = action.payload.BUSDtoTFT
      state.USDTtoTFT1 =  action.payload.USDTtoTFT
      state.price =  action.payload.price
      state.BNBtoTFT = action.payload.BNBtoTFT
      state.BNBBalance = action.payload.BNBBalance
      state.BUSDAllowance = action.payload.BUSDAllowance
      state.USDTAllowance = action.payload.USDTAllowance
      state.discountUSD = action.payload.discountUSD
    },

    [stakingComp.fulfilled] : (state,action) => {
      state.balance = action.payload.balance
      state.TFTAllowance = action.payload.TFTAllowance
      state.dailyStaking = action.payload.dailyStaking
      state.monthStaking = action.payload.monthStaking
      state.quarterlySTaking= action.payload.quarterlySTaking
      state.indStakingInf = action.payload.indStakingInf
    },

    [Lottery.fulfilled] : (state,action) => {
      state.LotteryAllowance = action.payload.LotteryAllowance
      state.gameCounter = action.payload.gameCounter
      state._lottCurrDetails = action.payload._lottCurrDetails
      state.gameDetails = action.payload.gameDetails
      state.prevDetails = action.payload.prevDetails
      state.numberArray = action.payload.numberArray
      state.balance = action.payload.balance
    },

    [BUSDApprove.pending]: (state, action) => {
      state.toggle = !state.toggle;
      state.error = null;
    },
    [BUSDApprove.fulfilled]: (state, action) => {
      state.toggle = !state.toggle;
      state.error = action.payload;
    },

    [USDTApprove.pending]: (state, action) => {
      state.toggle = !state.toggle;
      state.error = null;
    },
    [USDTApprove.fulfilled]: (state, action) => {
      state.toggle = !state.toggle;
      state.error = action.payload;
    },

    [Buy.pending]: (state, action) => {
      state.toggle = !state.toggle;
      state.error = null;
    },
    [Buy.fulfilled]: (state, action) => {
      state.toggle = !state.toggle;
      state.error = action.payload;
    },

    [DiscChange.pending]: (state, action) => {
      state.toggle = !state.toggle;
      state.error = null;
    },
    [DiscChange.fulfilled]: (state, action) => {
      state.toggle = !state.toggle;
      state.error = action.payload;
    },

    [Stakinga.pending]: (state, action) => {
      state.toggle = !state.toggle;
      state.error = null;
    },
    [Stakinga.fulfilled]: (state, action) => {
      state.toggle = !state.toggle;
      state.error = action.payload;
    },

    [TFTApprove.pending]: (state, action) => {
      state.toggle = !state.toggle;
      state.error = null;
    },
    [TFTApprove.fulfilled]: (state, action) => {
      state.toggle = !state.toggle;
      state.error = action.payload;
    },

    [UnStakinga.pending]: (state, action) => {
      state.toggle = !state.toggle;
      state.error = null;
    },
    [UnStakinga.fulfilled]: (state, action) => {
      state.toggle = !state.toggle;
      state.error = action.payload;
    },

    [LStakinga.pending]: (state, action) => {
      state.toggle = !state.toggle;
      state.error = null;
    },
    [LStakinga.fulfilled]: (state, action) => {
      state.toggle = !state.toggle;
      state.error = action.payload;
    },

    [LUnStakinga.pending]: (state, action) => {
      state.toggle = !state.toggle;
      state.error = null;
    },
    [LUnStakinga.fulfilled]: (state, action) => {
      state.toggle = !state.toggle;
      state.error = action.payload;
    },


    [claimA.pending]: (state, action) => {
      state.toggle = !state.toggle;
      state.error = null;
    },
    [claimA.fulfilled]: (state, action) => {
      state.toggle = !state.toggle;
      state.error = action.payload;
    },


    [bulkclaimA.pending]: (state, action) => {
      state.toggle = !state.toggle;
      state.error = null;
    },
    [bulkclaimA.fulfilled]: (state, action) => {
      state.toggle = !state.toggle;
      state.error = action.payload;
    },


    [LotteryApprove.pending] : (state,action)=>{
			state.toggle = !state.toggle;
      state.error = null;
  },
  [LotteryApprove.fulfilled] : (state,action)=>{
     state.toggle = !state.toggle;
    state.error = action.payload;

  },

  [ActivateTFTBuyA.pending] : (state,action)=>{
      state.toggle = !state.toggle;
      state.error = null;
  },
  [ActivateTFTBuyA.fulfilled] : (state,action)=>{

      state.toggle = !state.toggle;
      state.error = action.payload;

  },

  [ActivateTFTStakingA.pending] : (state,action)=>{
    state.toggle = !state.toggle;
    state.error = null;
},
[ActivateTFTStakingA.fulfilled] : (state,action)=>{

    state.toggle = !state.toggle;
    state.error = action.payload;

},

[ActivateTFTLoanA.pending] : (state,action)=>{
  state.toggle = !state.toggle;
  state.error = null;
},
[ActivateTFTLoanA.fulfilled] : (state,action)=>{

  state.toggle = !state.toggle;
  state.error = action.payload;

},

[ActivateLotteryPurchaseA.pending] : (state,action)=>{
  state.toggle = !state.toggle;
  state.error = null;
},
[ActivateLotteryPurchaseA.fulfilled] : (state,action)=>{

  state.toggle = !state.toggle;
  state.error = action.payload;

},

[handleStakingDailyA.pending] : (state,action)=>{
  state.toggle = !state.toggle;
  state.error = null;
},
[handleStakingDailyA.fulfilled] : (state,action)=>{

  state.toggle = !state.toggle;
  state.error = action.payload;

},

[handleStakingMonthlyA.pending] : (state,action)=>{
  state.toggle = !state.toggle;
  state.error = null;
},
[handleStakingMonthlyA.fulfilled] : (state,action)=>{

  state.toggle = !state.toggle;
  state.error = action.payload;

},

[handleStakingQuarterlyA.pending] : (state,action)=>{
  state.toggle = !state.toggle;
  state.error = null;
},
[handleStakingQuarterlyA.fulfilled] : (state,action)=>{

  state.toggle = !state.toggle;
  state.error = action.payload;

},

[handleLoan30A.pending] : (state,action)=>{
  state.toggle = !state.toggle;
  state.error = null;
},
[handleLoan30A.fulfilled] : (state,action)=>{

  state.toggle = !state.toggle;
  state.error = action.payload;

},

[handleLoan45A.pending] : (state,action)=>{
  state.toggle = !state.toggle;
  state.error = null;
},
[handleLoan45A .fulfilled] : (state,action)=>{

  state.toggle = !state.toggle;
  state.error = action.payload;

},

[changeDiscountA.pending] : (state,action)=>{
  state.toggle = !state.toggle;
  state.error = null;
},
[changeDiscountA .fulfilled] : (state,action)=>{

  state.toggle = !state.toggle;
  state.error = action.payload;

},

    //
  },
});

export const adopreducer = adoptSlice.reducer;
export const { toggle, setTest } = adoptSlice.actions;
