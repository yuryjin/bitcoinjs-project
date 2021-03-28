const bitcoin = require('bitcoinjs-lib');

let testnet = bitcoin.networks.testnet;
let keypair = bitcoin.ECPair.makeRandom({network:testnet});
let publicKey = keypair.publicKey;

let { address } = bitcoin.payments.p2pkh({ pubkey: publicKey, network: bitcoin.networks.testnet });
let privateKey = keypair.toWIF();

console.log(address, privateKey);

/*


mgscogD5AC7GPkWZVhHZYrhQHNBmNt3ML6
cS16JixNVDdr55DJTCsjLfGDggG3aUpg6YZMxsPD1Y7kFwUE4YEg



Transaction sent

TxID: cc12a9d7fd7acd8b8c685236be73a858b67c18f2994a72f273c181b9acd9022d
Address: mgscogD5AC7GPkWZVhHZYrhQHNBmNt3ML6
Amount: 0.001



mqERXbsQTvBKguCNjgXZbR5uMfpn5sWiYv
cNQdLCw4Zaea4hJyN5gNMJE6YYkKXc63VL6pW8mXLF2VBT7gZQps



Transaction sent

TxID: bc9cd293a8c0d23c58a405d4a28120afc00ef4a86736a2261cad0e4e7ddeb527
Address: mqERXbsQTvBKguCNjgXZbR5uMfpn5sWiYv
Amount: 0.002









mvi2bF7scUfi9ttwwp1uoBAer91NAjLgsA
cScurVvv4euwWLRiRdUGbWSBKGdkxjdTyZ8FgmcvGAFAAqwm6Jgp



*/


let txb = new bitcoin.TransactionBuilder(testnet);

let txid = "bc9cd293a8c0d23c58a405d4a28120afc00ef4a86736a2261cad0e4e7ddeb527";

let outn = 1;


txb.addInput(txid, outn);

txb.addOutput("2N6qY1HYx7JejFBxNRawXz8y7MV2sVZX7cA", 49980);
txb.addOutput("2N6qY1HYx7JejFBxNRawXz8y7MV2sVZX7cA", 15);

let WIF = "cNQdLCw4Zaea4hJyN5gNMJE6YYkKXc63VL6pW8mXLF2VBT7gZQps";
let keypairSpend = bitcoin.ECPair.fromWIF(WIF, testnet);

txb.sign(0,keypairSpend);

let tx = txb.build();
let txhex = tx.toHex();
console.log(txhex);




/*
let txb = new bitcoin.TransactionBuilder(testnet);

let txid = "89f237f3954a373990340957a8c2906880b38ef66098d58327de7eef9c4c2e44";

let outn = 0;


txb.addInput(txid, outn);

txb.addOutput("2N6vBQ8Db3wL4Hf4ZXttwVAF9tv3eW2NF3o", 999980);
txb.addOutput("2N6vBQ8Db3wL4Hf4ZXttwVAF9tv3eW2NF3o", 15);

let WIF = "cUaCeqVip4hh4rRhFjhGMovRcJtRBexmX9xhQQgiL7AUDAfeAtqD";
let keypairSpend = bitcoin.ECPair.fromWIF(WIF, testnet);

txb.sign(0,keypairSpend);

let tx = txb.build();
let txhex = tx.toHex();
console.log(txhex);
*/

/*
let txb = new bitcoin.TransactionBuilder(testnet);

let txid = "e2d48a98e14e6c2b014893ad2f3c1e3751ba2008ffc7d79e3dd1dff13314e6a1";

let outn = 0;


txb.addInput(txid, outn);

txb.addOutput("tb1qmku8pjvpq4rtl0vtyhezepfhgfnx7p9vz786hn", 500);
txb.addOutput("tb1qmku8pjvpq4rtl0vtyhezepfhgfnx7p9vz786hn", 500);

let WIF = "cTc1ZykqTkWjgwqF8jRJGBQpRtrpmZtYYtPN82yCg6Q4SJHiu1GW";
let keypairSpend = bitcoin.ECPair.fromWIF(WIF, testnet);

txb.sign(0,keypairSpend);

let tx = txb.build();
let txhex = tx.toHex();
console.log(txhex);
*/

/*
let txb = new bitcoin.TransactionBuilder(testnet);

let txid = "158e400fa10eaf4ebd94c96560dfa4fcca0b5e7aa3983663857626c3c7aa1ced";

let outn = 0;


txb.addInput(txid, outn);

txb.addOutput("tb1qvdkpwxn7c4krf930clm9288p8mcxw92j9am2a2", 3);
txb.addOutput("tb1qvdkpwxn7c4krf930clm9288p8mcxw92j9am2a2", 2);

let WIF = "cQkc6RJ8VVSdRe9Vhq6Xh6Z7SjTXw86eEDWuiQKqVsXE6VrE3Knz";
let keypairSpend = bitcoin.ECPair.fromWIF(WIF, testnet);

txb.sign(0,keypairSpend);

let tx = txb.build();
let txhex = tx.toHex();
console.log(txhex);
*/

/*
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
*/

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
