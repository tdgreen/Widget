main();
var PASSWORD = "My_Password1!";
var USERNAME = "my_username";

function main(){
	$(document).keypress(keypress);
	$(document.getElementById("submit_button")).click(submit);
}

function keypress(e){
	if (e.keyCode === 13){
		guess(getPassword(),getUsername());
	}
}

function submit(){
	guess(getPassword(),getUsername())
}

function guess(pass,username){
	console.log("guessing: "+pass+ "   and  "+username);
	$(document.getElementById("requirements_div")).hide()
	if(check(pass)){
		//success
	}
	else{
		$(document.getElementById("requirements_div")).show();
	}
}

function check(pass, username){
	return getHash(pass) = getHash(PASSWORD) && username === USERNAME;
}

function getUsername(){
	return $(document.getElementById("username_input")).val();
}

function getPassword(){
	return $(document.getElementById("password_input")).val();
}

function getHash(s) {
  var hash = 0, i, chr, len;
  if (s.length === 0) return hash;
  for (i = 0, len = s.length; i < len; i++) {
    chr   = s.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}