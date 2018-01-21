<?php
$Nombre=$_POST["Nombre"];
$ApPat=$_POST["ApPat"];
$ApMat=$_POST["ApMat"];
$correo=$_POST["correo"];
$Tel=$_POST["Tel"];
$Sexo=$_POST["Sexo"];
$con = mysqli_connect("50.62.209.194","amunplan","pax2016PAX","amunplan_registro2017");
mysqli_query($con, "SET NAMES 'utf8'");
//******************************************SI ESTAN COMPLETOS LOS DATOS AHORA COMPARA QUE EL CORREO NO ESTE EN LA BD ********************
$result = mysqli_query($con, "SELECT correo FROM staff Where correo = '$correo'");

if (mysqli_num_rows($result)!=0 ){
echo "<META HTTP-EQUIV='REFRESH' CONTENT='0;URL=errorduplicated.html'>"; 
}

//******************************SI TU CORREO NO ESTA EN LA BD SIGUE PROCESO E INSERTA LOS DATOS**************************

else{

$prueba = "INSERT INTO staff VALUES ('$Nombre','$ApPat','$ApMat','$Tel','$correo','$Sexo')"; //ESTO ES CONSULTA EN SQL


//******************AQUI SOLO COMPRUEBA QUE LA CONSULTA SE REALIZO DE MANERA CORRECTA
if(mysqli_query($con, $prueba)){
echo "<META HTTP-EQUIV='REFRESH' CONTENT='0;URL=insetradocorrectamente.html'>";
}
else{
echo "No se ha incertado correctamente el registro";
}
}
?>