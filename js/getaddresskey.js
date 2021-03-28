const bitcoin = require('bitcoinjs-lib');

let testnet = bitcoin.networks.testnet;
let keypair = bitcoin.ECPair.makeRandom({network:testnet});
let publicKey = keypair.publicKey;

let { address } = bitcoin.payments.p2pkh({ pubkey: publicKey, network: bitcoin.networks.testnet });
let privateKey = keypair.toWIF();

var fs = require('fs');

fs.appendFile('mynewfile1.txt', address + "\n" + privateKey + "\n\n\n\n", function (err) {
  if (err) throw err;
  console.log('Updated!');
});