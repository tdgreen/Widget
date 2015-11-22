main()
var PASSWORD = "My_Password1!";
var USERNAME = "my_username";
var username_input = $(document.getElementById("username_input"));
var password_input = $(document.getElementById("password_input"));

function main(){
	$(document).keypress(keypress);
	$(document.getElementById("submit_button")).click(function(){guess(getPassword(),getUsername())});
}

function keypress(e){
	if (e.keyCode === 13){
		guess(getPassword(),getUsername());
	}
}

function guess(pass,username){
	if(check(pass)){
		
	}
	else{

	}
}

function check(pass, username){
	return getHash(pass) = getHash(PASSWORD);
}

function getUsername(){
	return username_input.val();
}

function getPassword(){
	return password_input.val();
}

function getHash(s) {
  var hash = 0, i, chr, len;
  if (s.length == 0) return hash;
  for (i = 0, len = s.length; i < len; i++) {
    chr   = s.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}