let TokenSend = require("../interface/transaction.js").TokenSend;
let wabContract = require("../contract/contract.js").wabContract;
class wabTokenSend extends TokenSend
{
    constructor(from,to,tokenAddress,CoinAmount,gas,gasPrice,nonce)
    {
        super(from,tokenAddress,gas,gasPrice,nonce);
        this.Contract = new WABContract(tokenAddress);
        this.trans.setData(this.Contract.getData(to,CoinAmount));
    }
}
module.exports = wabTokenSend;
