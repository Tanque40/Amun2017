<?php
$destino= "amun@amunplantelazteca.com";
$nombre= $_POST["nombre2"];
$correo= $_POST["correo2"];
$mensaje= $_POST["cuerpaso"];


$header = "MIME-Version: 1.0\n";
$header .= "Content-Type: text/html; charset=iso-8859-1\n";
$header .="From: $correo";



$contenido= "Nombre:  ". $nombre ."\nMensaje: ".$mensaje."\n";
mail($destino,"Duda o comentario de $nombre",$contenido,$header);
header("Location:lawejdbnasklbelcfksrobvgfrd.html");
?>