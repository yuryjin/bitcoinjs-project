const bitcoin = require('bitcoinjs-lib');

let testnet = bitcoin.networks.testnet;
let keypair = bitcoin.ECPair.makeRandom({network:testnet});
let publicKey = keypair.publicKey;

let { address } = bitcoin.payments.p2pkh({ pubkey: publicKey, network: bitcoin.networks.testnet });
let privateKey = keypair.toWIF();

console.log(address, privateKey);

/*
n2TAhrscZqE8xcL99fhatmz275WVbZGstV 
cR4i41GDydpUU93kuiBx24s9vN6HZjJkq8JtsqkQBSJ9XEQneu4z
*/
/*
mrQf9gND7DsjvXszdyCFeG7LzXYvgwraTQ
cNAied5sE7aCm36jWyMdjW5TTQWK45i2aXDiTbMgK4Vu2b56Emvo

6257ede81490fc9024cb3948a193c312523d1700d514bf479a446ea475396338
*/

/*

mrfbgXoVVukJywLk1j6fS5eTZQTnJe5k4X
cTq3osB5VhKBrU1rGok4jQUCJdcmv7a4v3LMDRuo7zC9jEhH5YEC

9e3416f31ed0709ad1410b2f6944bcb026c9f3b073ced8a2271bcb743a742dad
*/

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



// create transaction

/*
let txb = new bitcoin.TransactionBuilder(testnet);

let txid = "6257ede81490fc9024cb3948a193c312523d1700d514bf479a446ea475396338";

let outn = 0;

//input
txb.addInput(txid, outn);

//output
txb.addOutput("2ND6Ez5Kn9qzSTcrd9GzAqdb7oKq1sRZpdx", 10);
txb.addOutput("2ND6Ez5Kn9qzSTcrd9GzAqdb7oKq1sRZpdx", 10);


let WIF = "cR4i41GDydpUU93kuiBx24s9vN6HZjJkq8JtsqkQBSJ9XEQneu4z";
let keypairSpend = bitcoin.ECPair.fromWIF(WIF, testnet);

txb.sign(0,keypairSpend);

let tx = txb.build();
let txhex = tx.toHex();
console.log(txhex);
//console.log();
*/


