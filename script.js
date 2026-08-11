function register(){
if(code.value!="20061218"){
msg.innerHTML="邀请码错误";
return;
}
localStorage.setItem("user",JSON.stringify({
u:username.value,
p:password.value
}));
msg.innerHTML="注册成功";
}

function login(){
let u=JSON.parse(localStorage.getItem("user"));
if(u&&u.u==username.value&&u.p==password.value){
localStorage.setItem("login","yes");
location.href="tactics.html";
}else{
msg.innerHTML="账号密码错误";
}
}

if(location.pathname.includes("tactics")){
if(localStorage.getItem("login")!="yes"){
location.href="login.html";
}
}

function post(){
let p=document.createElement("div");
p.className="post";
p.innerHTML="<h3>"+title.value+"</h3><p>"+text.value+"</p>";
posts.appendChild(p);
}
