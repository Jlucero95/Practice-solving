export function minBy(array, cb) {
	if (!array.length) {
		return undefined;
	}
	let minVal = cb(array[0]);
	let minObj = array[0];

	for (let i = 0; i < array.length; i++) {
		if (cb(array[i]) < minVal) {
			minVal = cb(array[i]);
			minObj = array[i];
		}
	}

	return minObj;
}

export function maxBy(array, cb) {
	if (!array.length) {
		return undefined;
	}
	let maxVal = cb(array[0]);
	let maxObj = array[0];

	for (let i = 0; i < array.length; i++) {
		if (cb(array[i]) > maxVal) {
			maxVal = cb(array[i]);
			maxObj = array[i];
		}
	}
	return maxObj;
}
