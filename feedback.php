<?php
$name=$_POST["name"];
$phone_num=$_POST['phone_num'];
$mail=$_POST['mail'];
$comment=$_POST['comment'];
//database connection

$con=new mysqli("localhost:3308","root","","feedback");

if($con->connect_error){
    die("connectoin failed Dude!!".$connect_error);
}
$Q="insert into samplefeed values('$name',$phone_num,'$mail','$comment')";



if($con->query($Q)==TRUE){
    echo "<h1>feedback  successfully send!!!</h1>";
echo "<marquee ><h1>Thank you for spending your  valuable time with us!!</marquee>";
}
else{
    echo "error :";
}
?>