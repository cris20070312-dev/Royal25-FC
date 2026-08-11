function register(){
let name=document.getElementById('username').value;
let pass=document.getElementById('password').value;
let code=document.getElementById('code').value;

if(code!=="20061218"){
message.innerHTML="邀请码错误";
return;
}

localStorage.setItem("royal25_user",JSON.stringify({name,pass}));
message.innerHTML="注册成功，欢迎加入皇家25 FC";
}

function login(){
let data=JSON.parse(localStorage.getItem("royal25_user"));

if(data && data.name===username.value && data.pass===password.value){
message.innerHTML="登录成功，欢迎 "+data.name;
}else{
message.innerHTML="账号密码错误";
}
}

function post(){
let div=document.createElement("div");
div.className="post";
div.innerHTML="<h3>"+postTitle.value+"</h3><p>"+postContent.value+"</p>";
document.getElementById("posts").appendChild(div);
}
