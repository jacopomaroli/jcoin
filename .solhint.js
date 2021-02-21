{
	"extends": "solhint:recommended",
	"rules": {
		"mark-callable-contracts": "off",
		"no-empty-blocks": "off",
		"compiler-version": ["error", "^0.7.0"],
		"private-vars-leading-underscore": "error",
		"reason-string": "off",
		"func-visibility": ["error", { "ignoreConstructors": true }]
	}
}
