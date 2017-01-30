<?php
header('Content-Type: text/html;charset=utf-8');
//$url = "http://www.google.com.br/";

function curl($url,$posts=""){
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HEADER, "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.1.4322)");
//curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
//curl_setopt($ch, CURLOPT_POST, $posts ? 0 :1);
//curl_setopt($ch, CURLOPT_POSTFIELDS,$posts);
$icerik = curl_exec($ch);
return $icerik;
curl_close($ch);
}


echo(curl($_GET["l"]));

?>