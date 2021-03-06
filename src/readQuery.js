/*
https://github.com/HappyTigerV/readQuery.js
V2.1 Gold 
*/
function query(){
	let query_obj={};
	let query_string=getQueryString();
	if(query_string){
		let arr=query_string.split("&");
		for(let i of arr){
			query_obj[i.split("=")[0]]=i.split("=")[1];
		}
	}
	return query_obj;
}

function getQueryString(){
	let str_length=(window.location.protocol+"\/\/"+window.location.host+window.location.pathname).length;
	let query_string=window.location.href.slice(str_length);
	if(query_string && query_string.slice(0,1)=="?"){
		query_string=query_string.slice(1);
	}
	else query_string="";
	return query_string;
}