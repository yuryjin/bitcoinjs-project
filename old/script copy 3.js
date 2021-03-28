const bitcoin = require('bitcoinjs-lib');

let testnet = bitcoin.networks.testnet;
let keypair = bitcoin.ECPair.makeRandom({network:testnet});
let publicKey = keypair.publicKey;

let { address } = bitcoin.payments.p2pkh({ pubkey: publicKey, network: bitcoin.networks.testnet });
let privateKey = keypair.toWIF();

console.log(address, privateKey);

/*
n4ZAsNspAkBo4gQaRCF5zVr9o13XS9ZV9T
cVG4RxTmDXQdmKt1QFSJvYmYRv4LR6n1AbqP2EtFoEV4jVxHAnz3




*/

/*
mtmziB5KyfKEHRSozi5aZrjPWGdrf44qjW
cR4c3SAFCVjMrf1i6HXPCssJuha56V8zfpfXBoG9sUsf8eYsDXUZ

cac79666f72557b5e25f6df23b253d868861ac84d305b6e86740471438f4b69e


*/



/*

n1pYeMXSbTrbbQaFfC8hZZqyPo9pJnmUpP
cVWcShstyQKvzRMyHy4K3MCg21sM3RcDWsTAQT1ZHvCFNhaWDeMH

07e97c1196fe0fd55ddb0768dc1c8a3c2f2f8e1d294a83282ab47ec8393c82cd

*/





let txb = new bitcoin.TransactionBuilder(testnet);

let txid = "07e97c1196fe0fd55ddb0768dc1c8a3c2f2f8e1d294a83282ab47ec8393c82cd";

let outn = 0;

//input
txb.addInput(txid, outn);

//output
txb.addOutput("2MzeoPNNwrgRrUffHetG6dkkxRLE2NgHXGa", 85);
txb.addOutput("2MzeoPNNwrgRrUffHetG6dkkxRLE2NgHXGa", 15000);


let WIF = "cVWcShstyQKvzRMyHy4K3MCg21sM3RcDWsTAQT1ZHvCFNhaWDeMH";
let keypairSpend = bitcoin.ECPair.fromWIF(WIF, testnet);

txb.sign(0,keypairSpend);

let tx = txb.build();
let txhex = tx.toHex();
console.log(txhex);


/*
let txb = new bitcoin.TransactionBuilder(testnet);

let txid = "9e3416f31ed0709ad1410b2f6944bcb026c9f3b073ced8a2271bcb743a742dad";

let outn = 0;

//input
txb.addInput(txid, outn);

//output
txb.addOutput("mrfbgXoVVukJywLk1j6fS5eTZQTnJe5k4X", 10);
txb.addOutput("mrfbgXoVVukJywLk1j6fS5eTZQTnJe5k4X", 10);


let WIF = "cTq3osB5VhKBrU1rGok4jQUCJdcmv7a4v3LMDRuo7zC9jEhH5YEC";
let keypairSpend = bitcoin.ECPair.fromWIF(WIF, testnet);

txb.sign(0,keypairSpend);

let tx = txb.build();
let txhex = tx.toHex();
console.log(txhex);
*/
