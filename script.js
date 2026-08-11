
function register(){
 if(code.value!=="20061218"){msg.innerText="邀请码错误";return;}
 localStorage.user=JSON.stringify({u:u.value,p:p.value});
 msg.innerText="注册成功";
}
function login(){
 let x=JSON.parse(localStorage.user||"null");
 if(x&&x.u==u.value&&x.p==p.value){
  localStorage.login="yes";
  location.href="tactics.html";
 }else msg.innerText="账号错误";
}
if(location.pathname.includes("tactics.html")&&localStorage.login!="yes")
 location.href="login.html";
function post(){
 let d=document.createElement("div");
 d.className="post";
 d.innerHTML="<h3>"+title.value+"</h3><p>"+content.value+"</p>";
 posts.appendChild(d);
}
