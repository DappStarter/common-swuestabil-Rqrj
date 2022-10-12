require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue rifle tape protect inflict perfect flat sponsor'; 
let testAccounts = [
"0x380f85d4e721f68de2ad8bde1ac68f7a9f1b938a302ae5e1b035b7bd3b99914d",
"0x41933fcec0e65067e54fff4a387b0d5502b3c3409acfb2aa6bc454f3e394c214",
"0x4fa79736eacb69c229ba19e7d026ce1bb8ec4019b62fa3db9029436c3b583cd5",
"0x7c659e7e833a1e126f2d5305abdd9a2f66ed442ecbddc0703444f6ce15ff4c62",
"0x04773004bb46bb9ab61266c7109f99c86a07eeb6ee70093b1aeb5de3a2fc1085",
"0x2013b825ffa50a18af20b86499f95b4c4e80c510fb9d7d1e72c26e9ee7f8aa52",
"0x049b373a5c7672dbff22f3e40fa6b89ea7631abe0938ee34b4573cdb232a5111",
"0x86cc5b7724bec2875cbbd9bce6d4bcc2561473c6c8bdd8aafde1167a00986306",
"0xff350a55314248b6d4ff2e718d83244892014b45aa76946fa4c6ab3e998488ea",
"0x98f23ff56693ce24ae4da1f008666c60147825ba05a68d0f2df0afa71d65e06e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

