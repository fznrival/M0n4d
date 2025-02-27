const { ethers } = require('ethers');
require('dotenv').config(); 
const fs = require('fs'); 
const colors = require("colors");
const cfonts = require("cfonts");
const displayHeader = require("../src/banner.js");

displayHeader();

const privateKey = process.env.PRIVATE_KEY;

if (!privateKey) {
    console.error('Private key tidak ditemukan di .env');
    process.exit(1); 
}

const network = {
    name: "Monad Testnet",
    chainId: 10143,
    rpc: "https://testnet-rpc.monorail.xyz",
    symbol: "MON",
    explorer: "https://testnet.monadexplorer.com"
};

const provider = new ethers.providers.JsonRpcProvider(network.rpc);

// Baca daftar alamat dari recipient.txt
const recipients = fs.readFileSync('recipient.txt', 'utf8')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && ethers.utils.isAddress(line)); // Hanya ambil alamat valid

if (recipients.length === 0) {
    console.error('Tidak ada alamat valid di recipient.txt'.red);
    process.exit(1);
}

async function transferTokens(wallet, recipient, index) {
    const randomAmount = (Math.max(Math.random() * (0.001 - 0.0001) + 0.0001, 0.0001)).toFixed(6);
    
    const tx = {
        to: recipient,
        value: ethers.utils.parseUnits(randomAmount, 6) 
    };

    const transaction = await wallet.sendTransaction(tx);
    const shortAddress = recipient.slice(-5); 

    console.log(`✅ (${index + 1}/${recipients.length}) [confirm] : ${randomAmount} ${network.symbol} sent to ${shortAddress} : ${transaction.hash}`.green);
}

async function handleTokenTransfers() {
    const wallet = new ethers.Wallet(privateKey, provider);

    console.log(`🪫  Starting AutoSend ⏩⏩⏩⏩`.blue);
    console.log(` `);
    for (let i = 0; i < recipients.length; i++) {
        await transferTokens(wallet, recipients[i], i);
    }

    console.log('⏩ \nAll transactions completed successfully!'.green);
}

handleTokenTransfers().catch(console.error);
