function register(){

let name=document.getElementById("username").value;
let pass=document.getElementById("password").value;
let code=document.getElementById("code").value;


if(code!="20061218"){

message.innerHTML="邀请码错误";

return;

}


localStorage.setItem(
"user",
JSON.stringify({
name:name,
pass:pass
})
);


message.innerHTML="注册成功";


}



function login(){


let data=
JSON.parse(localStorage.getItem("user"));


if(
data &&
data.name==username.value &&
data.pass==password.value
){


message.innerHTML=
"登录成功，欢迎 "+data.name;


localStorage.setItem(
"login",
"yes"
);


document.getElementById("locked")
.style.display="none";


document.getElementById("board")
.style.display="block";



}else{


message.innerHTML=
"账号密码错误";


}


}



function logout(){

localStorage.removeItem("login");

location.reload();

}



function post(){


let div=document.createElement("div");


div.className="post";


div.innerHTML=

"<h3>"+title.value+
"</h3><p>"+
content.value+
"</p>";


posts.appendChild(div);


}



window.onload=function(){


document.getElementById("board")
.style.display="none";


if(
localStorage.getItem("login")
=="yes"
){


document.getElementById("locked")
.style.display="none";


document.getElementById("board")
.style.display="block";


}


}
