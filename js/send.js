const bitcoin = require('bitcoinjs-lib');

let testnet = bitcoin.networks.testnet;
let keypair = bitcoin.ECPair.makeRandom({network:testnet});
let publicKey = keypair.publicKey;

/*
let { address } = bitcoin.payments.p2pkh({ pubkey: publicKey, network: bitcoin.networks.testnet });
let privateKey = keypair.toWIF();
*/

let txb = new bitcoin.TransactionBuilder(testnet);

let txid = "624593b8b72c0f572f9c76748fde18ebb234f57facc9d015f3fb2a9e604e09f0";

let outn = 1;

//input
txb.addInput(txid, outn);

//output
txb.addOutput("mhVJjYMpnAUMAzaaeHfSxmkaH55RnbMpxb", 15);
txb.addOutput("mhVJjYMpnAUMAzaaeHfSxmkaH55RnbMpxb", 15);


let WIF = "cMjereMR5VPUJnDTE1D6UuqtHincg9Y41hzfftZiyoeK2Gs2RcDa";
let keypairSpend = bitcoin.ECPair.fromWIF(WIF, testnet);

txb.sign(0,keypairSpend);

let tx = txb.build();
let txhex = tx.toHex();
console.log(txhex);