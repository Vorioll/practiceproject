<?php
$name = $_POST['username'];
$email = $_POST['useremail'];
$text = $_POST['message'];

$to = "nikita.kovin12@gmail.com";
$date = date ("d.m.Y");
$time = date ("h:i");
$from = $email;
$subject = "Заявка c сайта";


$msg="
Name: $name /n
Eamil: $email /n
Text: $text";
mail($to, $subject, $msg, "From: $from ");

?>
<div class="bg">
    <div class="popup">
        <p>Successfully send</p>
        <a href="index.html"><< Return back</a>
    </div>
</div>
<style>
    @import "fonts.css";
    .bg{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .popup{
        width: 50%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    p{
        font-family: "Gilroy";
        font-size: 60px;
        text-align: center;
        color: #356EAD;
    }
    a{
        font-family: "Gilroy";
        font-size: 40px;
        color: #356EAD;
        text-decoration: none;
    }

</style>