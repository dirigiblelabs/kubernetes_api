/* globals $ */
/* eslint-env node, dirigible */

var PodsApi = function() {

	this.getApiVersion = function() {
		return 'api/v1';
	};

	this.getApiKind = function() {
		return 'pods';
	};

	return this;
};

PodsApi.prototype = require('kubernetes/api').getApi();

exports.getApi = function() {
	return new PodsApi();
};
