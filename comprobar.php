<?php

//***************************************LECTURA DE VARIABLES*****************************************


$correo=$_GET['correo'];
//*********************************************CONEXION A LA BD(RECORDAR CONTRASEÑA pax2016PAX****************************	


$con = mysqli_connect("50.62.209.194","amunplan","pax2016PAX","amunplan_registro2017");
mysqli_query($con, "SET NAMES 'utf8'");

$result = mysqli_query($con, "SELECT correo FROM DatosAcc Where comprobar = 'CC' AND correo = '".$correo."'");

if (mysqli_num_rows($result)==1 ){
echo "<META HTTP-EQUIV='REFRESH' CONTENT='0;URL=yacomprobado.html'>"; 
}
else{
$result = mysqli_query($con, "UPDATE DatosAcc SET comprobar = 'CC' WHERE correo = '".$correo."'");


if(mysqli_query($con, $result)){

echo "<META HTTP-EQUIV='REFRESH' CONTENT='0;URL=muerto.html'>";
}
else{
echo "<META HTTP-EQUIV='REFRESH' CONTENT='0;URL=comprobado.html'>"; 
}


}

?>