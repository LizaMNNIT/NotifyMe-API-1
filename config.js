var mysql=require('mysql');
 var connection=mysql.createConnection({
   host:'den1.mysql6.gear.host',
   user:'notifyme',
   password:'Notify@123',
   database:'notifyme',
   multipleStatements:'true'
 });

 connection.connect(function(err){
if(!err){
  console.log('Database is connected');
}
else{
  console.log(err);
  console.log('Error while connecting with database');
}


 });

 module.exports=connection;
