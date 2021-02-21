require("dotenv").config()

const HDWalletProvider = require("@truffle/hdwallet-provider")
const infuraProjectId = process.env.INFURA_PROJECT_ID

module.exports = {
	networks: {
		development: {
			host: "127.0.0.1", // Localhost (default: none)
			port: 7545, // Standard Ethereum port (default: none)
			network_id: "*", // Any network (default: none)
		},
		testnet_binance: {
			provider: () =>
				new HDWalletProvider(
					process.env.DEV_PRIVATE_KEY,
					"https://data-seed-prebsc-1-s1.binance.org:8545/"
				),
			network_id: 97, // Rinkeby's id
			gas: 5500000,
			gasPrice: 20000000000, // 20 gwei
			confirmations: 2, // # of confs to wait between deployments. (default: 0)
			timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
			skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
		},
		rinkeby: {
			provider: () =>
				new HDWalletProvider(
					process.env.DEV_PRIVATE_KEY,
					"https://rinkeby.infura.io/v3/" + infuraProjectId
				),
			network_id: 4, // Rinkeby's id
			gas: 5500000,
			gasPrice: 20000000000, // 20 gwei
			confirmations: 2, // # of confs to wait between deployments. (default: 0)
			timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
			skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
		},
		// Useful for private networks
		// private: {
		// provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
		// network_id: 2111,   // This network is yours, in the cloud.
		// production: true    // Treats this network as if it was a public net. (default: false)
		// }
	},

	// Set default mocha options here, use special reporters etc.
	mocha: {
		// timeout: 100000
	},

	// Configure your compilers
	compilers: {
		solc: {
			version: "0.7.4", // Fetch exact version from solc-bin (default: truffle's version)
			docker: false,
			parser: "solcjs", // Use "0.5.1" you've installed locally with docker (default: false)
			settings: {
				// See the solidity docs for advice about optimization and evmVersion
				optimizer: {
					enabled: true,
					runs: 200,
				},
				evmVersion: "",
			},
		},
	},
}