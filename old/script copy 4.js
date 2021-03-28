const bitcoin = require('bitcoinjs-lib');

let testnet = bitcoin.networks.testnet;
let keypair = bitcoin.ECPair.makeRandom({network:testnet});
let publicKey = keypair.publicKey;

let { address } = bitcoin.payments.p2pkh({ pubkey: publicKey, network: bitcoin.networks.testnet });
let privateKey = keypair.toWIF();

console.log(address, privateKey);

/*

mkm5xM8SiYaPFHqrkykzeYGG2QS4Zn5SDi
cNZf6xbogXY5gcouLPX7AzDS4rksNFbkkQkxayukzMo9qjyKyU4i



d067b50b30b23e44167634d8363d013227e6071daeeca842ac007f68218bd643






mmyuTS6DUnuGEULn2Gmp5mUUVAQtjpeFAY cNPBNXMUG25r3XcjYvLWuK6dSv19jw34eq2gLiMQunBKavur5XA2


473ad92da072c7ca684482b3f3030dc5b655b4d1801f26a01fa5c407b16a9198


*/

let txb = new bitcoin.TransactionBuilder(testnet);

let txid = "904ea62f708b961bb7080b25f11fa1dfc0cb38fa9aa5405f3aba0819a916143b";

let outn = 1;

//input
txb.addInput(txid, outn);

//output
txb.addOutput("tb1qvk7lun033rtuza9et7s8763luas37nrl4ew2f3", 15);
txb.addOutput("tb1qvk7lun033rtuza9et7s8763luas37nrl4ew2f3", 15);


let WIF = "cW6WCK9QnmeHJ93sT3Bt472AZAKbT8RxvA57vw83uLxHuCUrzRJ6";
let keypairSpend = bitcoin.ECPair.fromWIF(WIF, testnet);

txb.sign(0,keypairSpend);

let tx = txb.build();
let txhex = tx.toHex();
console.log(txhex);

/*
let txb = new bitcoin.TransactionBuilder(testnet);

let txid = "473ad92da072c7ca684482b3f3030dc5b655b4d1801f26a01fa5c407b16a9198";

let outn = 0;

//input
txb.addInput(txid, outn);

//output
txb.addOutput("tb1q567u4ccwj29dxn9fzgnes8nn26gjrmt3fduxss", 85);
txb.addOutput("tb1q567u4ccwj29dxn9fzgnes8nn26gjrmt3fduxss", 15000);


let WIF = "cNPBNXMUG25r3XcjYvLWuK6dSv19jw34eq2gLiMQunBKavur5XA2";
let keypairSpend = bitcoin.ECPair.fromWIF(WIF, testnet);

txb.sign(0,keypairSpend);

let tx = txb.build();
let txhex = tx.toHex();
console.log(txhex);
*/



/*
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
*/
