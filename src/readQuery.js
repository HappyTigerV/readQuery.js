/*
https://github.com/HappyTigerV/readQuery.js/
V2.0 Gold 
*/
function query(){
	let query_obj={};
	let str_length=(window.location.protocol+"\/\/"+window.location.host+window.location.pathname).length;
	let query_string=window.location.href.slice(str_length+1);
	if(query_string){
		let arr=query_string.split("&");
		for(let i of arr){
			query_obj[i.split("=")[0]]=i.split("=")[1];
		}
	}
	return query_obj;
}
