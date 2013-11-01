// ============================================================================
// is.js 1.0.0
// ============================================================================

// > http://wyattkirby.com/is
// > (c) 2013 Wyatt Kirby
// > is.js may be freely distributed under the MIT License.

// ============================================================================

(function() {
	'use strict';

	// Setup
	// ------------------------------------------------------------------------

	var root       = this,
		is         = is || {};
		root.is    = is;
		is.VERSION = '1.0.0';

	// Regex Library
	// ------------------------------------------------------------------------

	var emailRegex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?)*$"), // HTML5 Compliant
		urlRegex   = new RegExp("^(?:https?://|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'\".,<>?«»“”‘’])$"),
		dateRegex  = new RegExp("^(([1-9])|(0[1-9])|(1[0-2]))\\/((0[1-9])|([1-31]))\\/((\\d{2})|(\\d{4}))$"), // Matches: 01/01/2001, 1/1/2001, 01/1/01
		phoneRegex = new RegExp("^\\D?(\\d{3})\\D?\\D?(\\d{3})\\D?(\\d{4})$"); // Matches: (111) 222-3333, 1112223333, 111-222-3333

	// Utilities
	// ------------------------------------------------------------------------

	var compare = function(input, regex) {
		if (!input || !regex) {
			return false;
		}

		return regex.test(input);
	};

	// Comparators
	// ------------------------------------------------------------------------

	// Format Checking

	is.email = function(input) {
		return compare(input, emailRegex);
	};

	is.url = function(input) {
		return compare(input, urlRegex);
	};

	is.date = function(input) {
		return compare(input, dateRegex);
	};

	is.phone = function(input) {
		return compare(input, phoneRegex);
	};

	// Type Checking

	is.string = function(input) {
		return typeof input === "string" || input instanceof String;
	};

	is.number = function(input) {
		return typeof input === "number" || input instanceof Number;
	};

	is.bool = function(input) {
		return input === !!input || input instanceof Boolean;
	};

	is.array = function(input) {
		return typeof input === "array" || input instanceof Array;
	};

	// Number Checking

	is.wholeNum = function(input) {
		var number = parseInt(input, 10);
		return (is.number(number) && !isNaN(number) && number % 1 === 0) ? true : false;
	};

	is.even = function(input) {
		var number = parseInt(input, 10);
		return (is.number(number) && number % 2 === 0) ? true : false;
	};

	is.odd = function(input) {
		return !is.even(input);
	};

	// Public Setters
	// ------------------------------------------------------------------------
	// Setting RegEx done as strings, which require double escaping.

	is.setEmailRegex = function(newRegEx) {
		emailRegex = new RegExp(newRegEx);
	};

	is.setURLRegex = function(newRegEx) {
		urlRegex = new RegExp(newRegEx);
	};

	is.setDateRegex = function(newRegEx) {
		dateRegex = new RegExp(newRegEx);
	};

	is.setPhoneRegex = function(newRegEx) {
		phoneRegex = new RegExp(newRegEx);
	};

}).call(this);