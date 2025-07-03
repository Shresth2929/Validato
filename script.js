console.log("this is my script");

let result={
  "tag": "",
  "free": true,
  "role": false,
  "user": "veersinghshresth7",
  "email": "veersinghshresth7@gmail.com",
  "score": 0.64,
  "state": "deliverable",
  "domain": "gmail.com",
  "reason": "valid_mailbox",
  "mx_found": true,
  "catch_all": null,
  "disposable": false,
  "smtp_check": true,
  "did_you_mean": "",
  "format_valid": true
}

let f=document.getElementById("subBtn");
f.addEventListener("click",async(e)=>{
e.preventDefault();
    console.log("clicked");
    let email=document.getElementById("email").value;
    key="ema_live_lrTHBO7i2BX5kmPhP92uzMM1dHQ1Y06k9xpkHuNw";
    let url=`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    let res=await fetch(url);
    let result=await res.json();
        
    let str='';
    for (key of Object.keys(result)){
        if(result[key] !=="" && result[key] !==" "){
        str= str+ `<div> ${key}: ${result[key]}</div>`;
        }
    }
console.log(str);
let a=document.getElementById("result");
a.innerHTML=str;

})
