<?php

//***************************************LECTURA DE VARIABLES*****************************************

    $comite=$_POST["comite"];
    $nombre=$_POST["nombre"];
    $app=$_POST["app"];
    $apm=$_POST["apm"];
    $born=$_POST["born"];
    $tel=$_POST["tel"];
    $correo=$_POST["correo"];
    $pros=$_POST["pros"];
    $gruesc=$_POST["gruesc"];
    $sex=$_POST["sex"];
   
    
    //*********************************************CONEXION A LA BD(RECORDAR CONTRASEÑA pax2016PAX****************************	


    $con = mysqli_connect("50.62.209.194","amunplan","pax2016PAX","amunplan_registro2017");
    mysqli_query($con, "SET NAMES 'utf8'");


   
    //******************************************SI ESTAN COMPLETOS LOS DATOS AHORA COMPARA QUE EL CORREO NO ESTE EN LA BD ********************

    $result = mysqli_query($con, "SELECT correo FROM DatosAcc Where correo = '$correo'");

    if (mysqli_num_rows($result)!=0 ){
        echo "<META HTTP-EQUIV='REFRESH' CONTENT='0;URL=errorduplicated.html'>"; 
    }

    //******************************SI TU CORREO NO ESTA EN LA BD SIGUE PROCESO E INSERTA LOS DATOS**************************

    else{

        $prueba = "INSERT INTO $comite VALUES ('$nombre','$app','$apm','$born','$tel','$correo','$pros','$gruesc','$sex')";
        $prueba2 = "INSERT INTO DatosAcc VALUES ('$correo', '', 'SC','$comite')";
            //ESTO ES CONSULTA EN SQL

        
        //******************AQUI SOLO COMPRUEBA QUE LA CONSULTA SE REALIZO DE MANERA CORRECTA
        if(mysqli_query($con, $prueba2)){                     
                if(mysqli_query($con, $prueba)){
                    # Indicamos la direccion (nombre) del servidor
              
                    $server_name = "amunplantelazteca.com";


                    # Indicamos la direccin de correo de esa persona
                    $person_email = $correo;

                    # Las tres lineas que vienen a continuacion son necesarias
                    # para que la cabecera del mensaje esta en formato HTML
                    $header = "MIME-Version: 1.0\n";
                    $header .= "Content-Type: text/html; charset=iso-8859-1\n";
                    $header .="From: 4mun@$server_name";

                    # Esto que viene es el mensaje. (Fijate en los tags HTML)
                    $mensaje = "

                    <font face='verdana' size='4'>¡Gracias por registrarte!,<br><br>
                    Te informamos que tu registro en AMUN 2017 se ha completado exitosamente como $comite.
                    <br><br> 
                    <a href='http://www.amunplantelazteca.com/comprobar.php?cl=sadsdds75451484s5d4541451545as4d5sa4d5as4das5484asda&ls=1a58sd1a8sd189q18f14s891sadas&correo=".$correo."'>Da clic a este enlace para comprobar el correo</a>
                    ";

                    if(mail("$person_email","Registro completo - AMUN 2017","$mensaje","$header")){

                    

                    echo "Mensaje enviado.";
                    echo "<META HTTP-EQUIV='REFRESH' CONTENT='0;URL=insetradocorrectamente.html'> ";
                    }
                    else{
                        echo"No men umu";
                    }
                }else{
                    echo  "ERROR"//"<META HTTP-EQUIV='REFRESH' CONTENT='0;URL=insetradocorrectamente.html'> ";
                }
        }else{
            echo "ERROR"//"<META HTTP-EQUIV='REFRESH' CONTENT='0;URL=insetradocorrectamente.html'> ";
        }
    }
?>