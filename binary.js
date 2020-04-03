#!/usr/bin/env node
const _config = {
	testIfCorrectMath: true
};
var valve = process.argv.slice(2);
const vm = require("vm");
let cxt;
var cxtA;
if (_config.testIfCorrectMath){
	cxtA = {
		value: 0
	}
	cxt = vm.createContext(cxtA, { name: "Math", codeGeneration: { strings: false, wasm: false } })
}
for (i in valve){
	var num = valve[i];
	if(!num || num.trim == "" || isNaN(num.trim())){
		throw TypeError('臭死了（process.argv[" + i + "](.trim()) == NaN/undefined）');
	} else {
		num = Number(num.trim());
	}
	console.log(meego = require("./homo")(num));
	if (_config.testIfCorrectMath) {
		new vm.Script("value=("+meego+")").runInContext(cxt, { displayErrors: true, breakOnSigint: true, timeout: 100000 });
		if (cxtA.value != num) {
			throw Error("114514 (vaildating error, not same: " + cxtA.value + ")");
		}
	}
}