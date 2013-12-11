/*
 * ConnectDb.js
 * Version: 0.1
 * Description: ConnectDb.js is an inbuild browser DB supported of HTML5 Offline APi
 * Copyright (c) 2013 Bastin Robins.J
 * Project repository: https://github.com/bastinrobin/ConnectDB.js
*/

(function () {
	//Initialization of ConnectDB Framework
	_db = {
		version : "0.1",
		date : "25/Nov/2013",
		//DB means the key, value pair
		//Check if the browser supports ConnectDB
		//ConnectDb is a part of HTML5 Offline Storage and NoSQL technology*
		checkBrowser: function() {
			if(window.localStorage) { 
				return true; 
			} else { 
				return false; 
			}  
		},

		//Check if the any db exist
		isempty: function() {
			if(localStorage.length == 0) {
				return true;
			} else { 
				return false; 
			}
		},

		//Clear any existing db completely *
		clear : function() {
			localStorage.clear();
			return true;
		},

		//Create New Collection or Db
		createRow : function (key, value) {
			if(!localStorage[key]) {
				localStorage.setItem(key, value);
			}
		},

		//Retrieve a JSON with key
		getRow : function (key) {
			return localStorage.getItem(key);
		},

		//Remove a specific row
		removeRow : function(key) {
			localStorage.removeItem(key);
		},

		//View Complete Row by iteration key values
		viewRow: function() {
			for(key in localStorage) {
				console.log(localStorage[key]);
			}
		},

		//Create JSON Db or collection
		setJSON: function(key, json) {
			if(!localStorage[key]) {
				localStorage.setItem(key, JSON.stringify(json));
			}
		},

		//Read JSON from Db or Collections
		getJSON: function(key) {
			if(localStorage[key]) {
				return JSON.parse(localStorage[key]);
			} else {
				return false;
			}
		},

		//Check the size of JSON array		
		length : function (key) {
			return JSON.parse(localStorage[key]).length;
		},

		//Secure Storage using session
		createSecureRow : function (key, value) {
			sessionStorage.setItem(key, value);
		},

		//Get Secure storage array
		getSecureRow : function (key) {
			return sessionStorage.getItem(key);
		},

		//Remove a secure row
		removeSecureRow : function (key) {
			sessionStorage.removeItem(key);
		},

		//Get the keys of JSON
		keys : function(json) {
			return Object.keys(json);
		},

		//Get the values of JSON array
		values : function(json) {
			var value = [];
			for (var key in json) {
				val.push(json[key]);
			}
			return value;
		},

		//Get Current time 
		time : (Date.now || function() {
			return new Date().time();
		}),

		//Pluck specific attributes
		pluck : function(json, key) {
			value = [];
			json.forEach(function(d) {
				value.push(d[key]);
			})
			return value;
		},

		//Get the min of JSON array 
		//http://stackoverflow.com/a/11143045
		min : function(json, key) {
			var arr = Object.keys(_db.pluck(json, key)).map(function (key) { return _db.pluck(json, key)[key]; });
			return Math.min.apply( null, arr );
		}

	}	
})(window);
