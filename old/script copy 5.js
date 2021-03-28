const bitcoin = require('bitcoinjs-lib');

let testnet = bitcoin.networks.testnet;
let keypair = bitcoin.ECPair.makeRandom({network:testnet});
let publicKey = keypair.publicKey;

let { address } = bitcoin.payments.p2pkh({ pubkey: publicKey, network: bitcoin.networks.testnet });
let privateKey = keypair.toWIF();

console.log(address, privateKey);

/*

mmgeJPEN6amVftpuWqj9N7ciEcX15aFgoH
cPv16oacJ7BQafkYsjHx2bysoQsmqmdmadQKcjnid54uzi41y111

40ffb027704636513aaf72ae79bb96f2a230b436f1ecb575bab0a771eb9d90fc



mzZqaEGLhM44TsGu574kF5ogHArUCrCu8t
cPcRwKRSBomopgXYXK91736PJGjtCHbot99W8zd5oYMLoMP8Ukyy

7eae74f91531e450e3185f0d214986f8019c403f36f8dd6a3a2b8af650444442

*/

let txb = new bitcoin.TransactionBuilder(testnet);

let txid = "7eae74f91531e450e3185f0d214986f8019c403f36f8dd6a3a2b8af650444442";

let outn = 0;


txb.addInput(txid, outn);

txb.addOutput("mzZqaEGLhM44TsGu574kF5ogHArUCrCu8t", 41137137);
txb.addOutput("mzZqaEGLhM44TsGu574kF5ogHArUCrCu8t", 15);

let WIF = "cPcRwKRSBomopgXYXK91736PJGjtCHbot99W8zd5oYMLoMP8Ukyy";
let keypairSpend = bitcoin.ECPair.fromWIF(WIF, testnet);

txb.sign(0,keypairSpend);

let tx = txb.build();
let txhex = tx.toHex();
console.log(txhex);

/*
let txb = new bitcoin.TransactionBuilder(testnet);

let txid = "7eae74f91531e450e3185f0d214986f8019c403f36f8dd6a3a2b8af650444442";

let outn = 1;


txb.addInput(txid, outn);

txb.addOutput("mmgeJPEN6amVftpuWqj9N7ciEcX15aFgoH", 15);
txb.addOutput("mmgeJPEN6amVftpuWqj9N7ciEcX15aFgoH", 15);

let WIF = "cPv16oacJ7BQafkYsjHx2bysoQsmqmdmadQKcjnid54uzi41y111";
let keypairSpend = bitcoin.ECPair.fromWIF(WIF, testnet);

txb.sign(0,keypairSpend);

let tx = txb.build();
let txhex = tx.toHex();
console.log(txhex);
*/



/*
let txb = new bitcoin.TransactionBuilder(testnet);

let txid = "928b7ac52af903c90964e4b7e13b4f26e68bd62e0cc67a27844ad71de024d35a";

let outn = 0;

//input
txb.addInput(txid, outn);

//output
txb.addOutput("mfyyPNFJ6Y4s1w7WSgk7mUCaK6qStctBdv", 341396558);
txb.addOutput("mfyyPNFJ6Y4s1w7WSgk7mUCaK6qStctBdv", 1);


let WIF = "cRf5vWHxDLrvTxTDHsSNug1XuYJ4UwLgDZMjrCfMniyiG8yH5QPg";
let keypairSpend = bitcoin.ECPair.fromWIF(WIF, testnet);

txb.sign(0,keypairSpend);

let tx = txb.build();
let txhex = tx.toHex();
console.log(txhex);
*/

/*
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
*/
