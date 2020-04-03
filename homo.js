module.exports = homo = (numData => {
	const numsReversed = Object.keys(numData).sort((a, b) => b - a);

	const getMinDiv = num =>{
		for(let i = 0; i < numsReversed.length; i++)
			if(num > numsReversed[i])
				return numsReversed[i];
	};

	const demolish = num =>{
		if(isNaN(num) || typeof num !== 'number') throw TypeError('臭死了（NaN）');

		if(num < 0 || num === Infinity) throw RangeError('这么恶臭的数有必要论证吗（<0||==Infinity）');
		//|| /e/.test(num)

		if(numData[num]) return String(num);

		const div = getMinDiv(num);
		return `${div}*(${demolish(Math.floor(num/div))})+(${demolish(num%div)})`.replace(/\*\(1\)|\+\(0\)$/g,'');
	};

	return num => demolish(num).replace(/\d+/g, n => numData[n]);
})(require("./numData"));