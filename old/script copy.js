/*
const bitcoin = require('bitcoinjs-lib');

let testnet = bitcoin.networks.testnet;
let keypair = bitcoin.ECPair.makeRandom(testnet);
const { addr } = bitcoin.payments.p2pkh({ pubkey: keypair.publicKey })
//let addr = keypair.getAddress();
let pk = keypair.toWIF();
//let addr = keypair.getAddress();
//let pk = keypair.loWIF();

//console.log(addr,pk);
//console.log(addr);

//console.log(addr,pk);
//console.log(addr);



console.log(addr);
//console.log(pk);

//console.log(keypair);
//console.log(keypair);
*/

/*
const bitcoin = require('bitcoinjs-lib');

let keyPair = bitcoin.ECPair.makeRandom();
let publicKey = keyPair.publicKey
const { address } = bitcoin.payments.p2pkh({ pubkey: publicKey });
const privateKey = keyPair.toWIF();
console.log(address,privateKey)
//console.log(privateKey)
*/

const bitcoin = require('bitcoinjs-lib');

let testnet = bitcoin.networks.testnet;
let keyPair = bitcoin.ECPair.makeRandom({network:testnet});
let publicKey = keyPair.publicKey
let { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
const privateKey = keyPair.toWIF();


console.log(address,privateKey);
//console.log(address,privateKey)

/*
//let keyPair = bitcoin.ECPair.makeRandom();
let publicKey = keyPair.publicKey
const { address } = bitcoin.payments.p2pkh({ pubkey: publicKey });
const privateKey = keyPair.toWIF();
console.log(address,privateKey)
*/
