const bitcoin = require('bitcoinjs-lib');

let testnet = bitcoin.networks.testnet;
let keypair = bitcoin.ECPair.makeRandom({network:testnet});
let publicKey = keypair.publicKey;

let { address } = bitcoin.payments.p2pkh({ pubkey: publicKey, network: bitcoin.networks.testnet });
let privateKey = keypair.toWIF();

console.log(address, privateKey);

/*

mo4d1ykR6K8MW3rR8rBv4Ufk1T7D8ayiAw
cQkc6RJ8VVSdRe9Vhq6Xh6Z7SjTXw86eEDWuiQKqVsXE6VrE3Knz

158e400fa10eaf4ebd94c96560dfa4fcca0b5e7aa3983663857626c3c7aa1ced





tb1qm5tfegjevj27yvvna9elym9lnzcf0zraxgl8z2







mubn6GbLagcUShwqqz1prezfqbDsKXPeSY
cTc1ZykqTkWjgwqF8jRJGBQpRtrpmZtYYtPN82yCg6Q4SJHiu1GW



478fd23283869ef908575b5091cdb812df6b553699e2a37d8b5d6ac9deb20bee

e2d48a98e14e6c2b014893ad2f3c1e3751ba2008ffc7d79e3dd1dff13314e6a1


tb1qmku8pjvpq4rtl0vtyhezepfhgfnx7p9vz786hn
0.0001



mp7bQ21pQtEqfxWdt5vps1CPgBaQW36r1Q
cUaCeqVip4hh4rRhFjhGMovRcJtRBexmX9xhQQgiL7AUDAfeAtqD

Transaction sent

TxID: 89f237f3954a373990340957a8c2906880b38ef66098d58327de7eef9c4c2e44
Address: mp7bQ21pQtEqfxWdt5vps1CPgBaQW36r1Q
Amount: 0.01


8895724








mi5k6oM3d4jniCPGai947iXdWiVaD9wkge
cQVg8puso4sCVmhiDnkbGuKTUm5HKR2UDAP6FoBcBvM5XiYWutxg


mwE2Zf1yecyAAACFdhsrjytT2fPH7Xq7Fz
cNyAUWjCAwkmFRDpv2GtMC8CH21UJ3WBoZXbtgNfGwYFmD4FA9xL


Transaction sent

TxID: 0aa0fe052853b864f138e9c659e7cb830fc54a72ccb7a87fafd0893eb5e2f6bd
Address: mwE2Zf1yecyAAACFdhsrjytT2fPH7Xq7Fz
Amount: 0.01










mo5PibAPPNyRVEDYQvdioKxPkrZpWAEXs7
cPn1uR1cJoxQbDjzvj6Y87JgQt3YmwZdxmM62RmNCS3EVsXyo3XM


Transaction sent

TxID: f2a50143deb1e609833ef5fdfadb26e21db4ea6edfcce5e136ccb67d193e0ee9
Address: mo5PibAPPNyRVEDYQvdioKxPkrZpWAEXs7
Amount: 0.01


mstz5gwKAQ7DZgCWTb93rsjVFFHEA4yS9j
cNaxJK432eAKmcWkCFus9YriNiMFjpAs2DNoKWrhxVe9HZyiDbE5

Transaction sent

TxID: 8e968a99eb212eebf820aacf7b2ee0377b1bfc2f15fc46d687cb0796dd5305b5
Address: mstz5gwKAQ7DZgCWTb93rsjVFFHEA4yS9j
Amount: 0.001

*/


let txb = new bitcoin.TransactionBuilder(testnet);

let txid = "8e968a99eb212eebf820aacf7b2ee0377b1bfc2f15fc46d687cb0796dd5305b5";

let outn = 1;


txb.addInput(txid, outn);

txb.addOutput("2NEZ3CykCjWLQuG4hbgWhV4rRKHwnrFSDNi", 99980);
txb.addOutput("2NEZ3CykCjWLQuG4hbgWhV4rRKHwnrFSDNi", 15);

let WIF = "cNaxJK432eAKmcWkCFus9YriNiMFjpAs2DNoKWrhxVe9HZyiDbE5";
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
