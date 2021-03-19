require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remind honey hockey clog olympic tape'; 
let testAccounts = [
"0x9caa355735c181b34337ffdae36db6a66c9b6eae787e1501a6e47c9a2d973f90",
"0xd2439f2f90de79d03c37d9a9e58fdb92122f2b76eb0a5d47e9835e03d0572b0d",
"0x740b1d2df367bb6041a5ac4db4edc089ddfff441698c93e8c729d4979193f56d",
"0x965c4b3c84d76b75418395e5d90419ee3d0bc4842fe5256425868001c8b2e492",
"0x708446c60dc1df98dc64e4068413e12370854628242ce7fbb5d6a91198c02082",
"0x85c0846a83cc408a8da5befaf5be9630cf15964f7d78ae2128816b0d24b9fa04",
"0xf3b860e974ebea5459570c5d47c7f284ac960a3105827539b372008cce050e49",
"0xce0a8920fa37df2befa8cc63a06347279d1d17c8711f4770a585f431e8692342",
"0xb661845b7e4d780a5f7a01e0d7b2649956e4dbba94758cf49325aa363000df1c",
"0x3880841e148dfe7de00d85e2a57f6e8e8c563fdf284702433f0b056470b28b6c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
