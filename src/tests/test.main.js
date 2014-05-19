﻿var tests = [];
for (var file in window.__karma__.files) {
	if (/\.tests\.js$/.test(file)) {
		tests.push(file);
	}
}

requirejs.config({
	baseUrl: '/base/src',

	deps: tests,

	callback: window.__karma__.start
});
