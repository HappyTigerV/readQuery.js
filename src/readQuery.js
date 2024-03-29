/*!
 * readQuery.js
 * (c) 2023 @HappyTigerV
 * https://github.com/HappyTigerV/readQuery.js
 * V3.1 Gold
 * Released under the Mozilla Public License V2.0.
 */

Object.defineProperty(window.location, "queryString", {
	/**
	 * @returns {string}
	 */
	get() {
		let str_length = (window.location.protocol + "/\/" + window.location.host + window.location.pathname).length;
		let query_string = window.location.href.slice(str_length);
		if (query_string && query_string.slice(0, 1) == "?") {
			query_string = query_string.slice(1);
		}
		else query_string = "";
		return query_string;
	},
	/**
	 * @param {string} v 
	 */
	set(v) {
		window.location.href = window.location.protocol + "/\/" + window.location.host + window.location.pathname + "?" + v;
	}
});

Object.defineProperty(window.location, "query", {
	/**
	 * @returns {string}
	 */
	get() {
		let query_obj = {};
		if (window.location.queryString) {
			let arr = window.location.queryString.split("&");
			for (let i of arr) {
				query_obj[i.split("=")[0]] = i.split("=")[1];
			}
		}
		return query_obj;
	},
	/** 
	 * @param {object} v 
	 */
	set(v) {
		let queryString = "";
		for (let i in v) {
			queryString += `&${i}=${v[i]}`;
		}
		queryString = queryString.slice(1, queryString.length);
		window.location.queryString = queryString;
	}
});