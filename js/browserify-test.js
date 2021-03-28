

//import bitcoin from 'bitcoinjs-lib';
const bitcoin = require('bitcoinjs-lib');
//import bitcoin from 'bitcoinjs-lib';

let testnet = bitcoin.networks.testnet;
let keypair = bitcoin.ECPair.makeRandom({network:testnet});
let publicKey = keypair.publicKey;

let { address } = bitcoin.payments.p2pkh({ pubkey: publicKey, network: bitcoin.networks.testnet });
let privateKey = keypair.toWIF();

console.log(address, privateKey);












