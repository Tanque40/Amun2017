<?php 
    $correo=$_POST["correo"];
    $con = mysqli_connect("50.62.209.194","amunplan","pax2016PAX","amunplan_registro2017");
    mysqli_query($con, "SET NAMES 'utf8'");
    $result = mysqli_query($con, "SELECT * FROM DatosAcc Where correo = '$correo'");

    if (mysqli_num_rows($result)!=0 ){
        
    }
    else{
 echo "<META HTTP-EQUIV='REFRESH' CONTENT='0;URL=noregistrado.html'>";
 
        exit;
    }
    $datos=mysqli_fetch_assoc($result);
    $tabla1=$datos['Comite'];
    $tabla2=$datos['enlace'];
    $result = mysqli_query($con, "DELETE FROM $tabla1 Where correo = '$correo'");
    $result = mysqli_query($con, "DELETE FROM $tabla2 Where correo = '$correo'");
    $result = mysqli_query($con, "DELETE FROM DatosAcc Where correo = '$correo'");
    ?>