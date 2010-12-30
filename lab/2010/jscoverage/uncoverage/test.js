

function testFn(a, b, c) {
	var ret = 0;

	if(a || b || c) {
		ret++;
	}

	return ret;
}

testFn(1);
