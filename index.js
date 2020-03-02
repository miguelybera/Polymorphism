try{
    sayHello();
}catch(err){
    document.write(err.message +"<br>");
}finally{
document.write("inside the finally block")
}