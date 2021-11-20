var t=require('./server');

t.on("login",(res)=>{
    console.log("Login process starts at",res)
});
t.on("login",(res)=>{
    console.log("login process done");
})