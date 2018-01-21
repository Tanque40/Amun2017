<?php 
    $correo=$_POST["mailacceder"];
    $passacceder=$_POST["passacceder"];
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
      if($datos['correo']!=$correo||$datos['contra']!=$passacceder){
            echo "<META HTTP-EQUIV='REFRESH' CONTENT='0;URL=datosincorrectos.html'>";
            exit;
        }
        else{
            if($datos['comprobar']!="CC"){
                echo "<META HTTP-EQUIV='REFRESH' CONTENT='0;URL=nocomprobado.html'>";
                exit;
            }
            else{
                $tabla1=$datos['Comite'];
                $tabla2=$datos['enlace'];
                $result2=mysqli_query($con, "SELECT * FROM $tabla1 Where correo = '$correo'");
                $result3=mysqli_query($con, "SELECT * FROM $tabla2 Where correo = '$correo'");
                $datos2=mysqli_fetch_assoc($result2);
                $datos3=mysqli_fetch_assoc($result3);
                $nombrecom=$datos2['nombre'].$datos2['ApP'].$datos2['ApM'];
                $comite=$datos['Comite'];
                $paisrepre=$datos2['Pais'];
                $pagor=$datos3['pago'];
                $confpais=$datos3['confpais'];
                $sesiones=$datos3['sesiones'];
                $extra=$datos3['extra'];
            }
        }
?>


<!DOCTYPE html>
<html>
<head>
  <!-- Site made with Mobirise Website Builder v3.11.1, https://mobirise.com -->
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="generator" content="Mobirise v3.11.1, mobirise.com">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" href="assets/images/circul.png" type="image/x-icon">
  <meta name="description" content="Website Creator Description">
  <title>AMUN 2017 *</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic&amp;subset=latin">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i">
  <link rel="stylesheet" href="assets/bootstrap-material-design-font/css/material.css">
  <link rel="stylesheet" href="assets/tether/tether.min.css">
  <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="assets/animate.css/animate.min.css">
    <link rel="stylesheet" href="assets/socicon/css/styles.css">
  <link rel="stylesheet" href="assets/theme/css/style.css">
  <link rel="stylesheet" href="assets/mobirise/css/mbr-additional.css" type="text/css">
  
  
  
</head>
<body>
<section class="mbr-section article mbr-parallax-background" id="msg-box8-u" style="background-image: url(assets/images/cuadro.png); padding-top: 120px; padding-bottom: 120px;">

    <div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(34, 34, 34);">
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 text-xs-center">
                <h3 class="mbr-section-title display-2">BIENVENIDO</h3>
                <div class="lead"><p>Sesión iniciada con éxito</p></div>
                
            </div>
        </div>
    </div>

</section>

<section class="mbr-section" id="testimonials2-v" style="background-color: rgb(255, 255, 255); padding-top: 120px; padding-bottom: 120px;">

    

        <div class="mbr-section mbr-section__container mbr-section__container--middle">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 text-xs-center">
                        <h3 class="mbr-section-title display-2">
                            <?php echo "".$nombrecom.""; ?>
                            </h3>
                        <small class="mbr-section-subtitle">Te informámos que esta es una página meramente informativa</small>
                    </div>
                </div>
            </div>
        </div>


    <div class="mbr-section mbr-section-nopadding">
        <div class="container">
            <div class="row">

                <div class="col-xs-12">
                <h4 class="mbr-info-title mbr-section-title display-4">Te encuentras en: </h4>
                    <div class="mbr-testimonial card">
                        <div class="card-block"><p><?php echo "".$comite.""; ?></p></div>                        
                    </div>
                <h4 class="mbr-info-title mbr-section-title display-4">Tu protocolo es: </h4>
                    <div class="mbr-testimonial card">
                        <div class="card-block"><a href="Protocolo_<?php echo "".$comite.""; ?>.pdf" target="_blank">Protocolo: <?php echo "".$comite.""; ?></a></div>                        
                    </div>
                <h4 class="mbr-info-title mbr-section-title display-4">Quieres representar a: </h4>
                    <div class="mbr-testimonial card">
                        <div class="card-block"><p><?php echo "".$paisrepre.""; ?></p></div>
                        
                    </div>
                <h4 class="mbr-info-title mbr-section-title display-4">Pago: </h4>
                    <div class="mbr-testimonial card">
                        <div class="card-block"><p><?php echo "".$pagor.""; ?></p></div>
                        
                    </div>
                <h4 class="mbr-info-title mbr-section-title display-4">Se te ha confirmado: </h4>
                    <div class="mbr-testimonial card">
                        <div class="card-block"><p><?php echo "".$confpais.""; ?>r</p></div>
                    </div>
                <h4 class="mbr-info-title mbr-section-title display-4">Tu asistencia en las sesiones: </h4>
                    <div class="mbr-testimonial card">
                        <div class="card-block"><p><?php echo "".$sesiones.""; ?></p></div>                        
                    </div>
                <h4 class="mbr-info-title mbr-section-title display-4">Sesiones extra: </h4>
                    <div class="mbr-testimonial card">
                        <div class="card-block"><p><?php echo "".$extra.""; ?></p></div>                        
                    </div>

                </div>

            </div>

        </div>
    </div>
</section>
<section class="mbr-footer mbr-section mbr-section-md-padding" id="contacts5-n" style="background-color: rgb(239, 239, 239); padding-top: 30px; padding-bottom: 30px;">


    <div class="row" id="contacto">
    
            <div class="mbr-company col-xs-12 col-md-6 col-lg-3">

                <div class="mbr-company card">
                    <div class="card-block">
                        <p class="card-text"></p>
                    </div>
                    
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <span class="list-group-icon"><span class="socicon socicon-facebook mbr-iconfont-company-contacts5"></span></span>
                            <span class="list-group-text">/AzetcaModelUnitNations</span>
                        </li>
                        <li class="list-group-item">
                            <span class="list-group-icon"><span class="socicon socicon-twitter mbr-iconfont-company-contacts5"></span></span>
                            <span class="list-group-text">@AMUN_2016 </span>
                        </li>
                        <li class="list-group-item active">
                            <span class="list-group-icon"><span class="socicon socicon-mail mbr-iconfont-company-contacts5"></span></span>
                            <span class="list-group-text">amun@amunplantelazetca.com</span>
                        </li>
                        <li class="list-group-item active">
                           <span class="list-group-icon"><span class="socicon socicon-instagram mbr-iconfont-company-contacts5"></span></span>
                           <span class="list-group-text">_amun._</span>
                      </li>
                    </ul>
                </div>

            </div>
            <div class="mbr-footer-content col-xs-12 col-md-6 col-lg-3">
                <div><img src="assets/images/olive-branches-earth-amun-265x262.png" class="card-img-top"></div>                    
            </div>
            <div class="mbr-footer-content col-xs-12 col-md-6 col-lg-3">
                <p><br><br><br><font color="#7e9b9f" size="3"><span style="letter-spacing: -1px; line-height: 20px;"><strong>Encuentranos</strong></span></font><br><font color="#7e9b9f" size="3"><span style="letter-spacing: -1px; line-height: 20px;"><strong><br></strong></span></font></p>
                <p>Acueducto de Guadalupe 25, Gustavo A. Madero, Santa Isabel Tola, 07010 Ciudad de México, CDMX<br></p>
            </div>
            <div class="col-xs-12 col-md-6 col-lg-3">

                <div data-form-alert="true">
                    <div hidden="" data-form-alert-success="true">¡Gracias! En breve recibirás una respuesta </div>
                </div>

                <form action="sendme.php" method="post" ="MESSAGE">

                    <!-- <input type="hidden" value="WgEYLY8xEEzdFneQAT/OcQTp7E3C88QxhuQjbHS+u+SiUn0sdcvVFtteq0ByZYxYkRvAqffYb6bIMwO8fRsRBK3fz0nrsya8kk0Hle0tfWO4DnYvj+rK4hGhpmOQlFXX" data-form-email="true"> -->

                    <div class="form-group">
                        <label class="form-control-label">Nombre</label>
                        <input type="text" class="form-control input-sm input-inverse" name="nombre2" required="" >
                    </div>

                    <div class="form-group">
                        <label class="form-control-label">Correo Electrónico</label>
                        <input type="email" class="form-control input-sm input-inverse" name="correo2" required="" >
                    </div>

                    

                    <div class="form-group">
                        <label class="form-control-label">Mensaje </label>
                        <textarea class="form-control input-sm input-inverse" name="cuerpaso" rows="5" required=""></textarea>
                    </div>

                    <div><button type="submit" class="btn btn-sm btn-info">Enviar</button></div>

                </form>

            </div>
        </div>
</section>
<footer class="mbr-small-footer mbr-section mbr-section-nopadding" id="footer1-2" style="background-color: rgb(50, 50, 50); padding-top: 1.75rem; padding-bottom: 1.75rem;">
    
    <div class="container">
        <p class="text-xs-center">Copyright (c) 2017 INDI.</p>
    </div>
</footer>


  <script src="assets/web/assets/jquery/jquery.min.js"></script>
  <script src="assets/tether/tether.min.js"></script>
  <script src="assets/bootstrap/js/bootstrap.min.js"></script>
  <script src="assets/smooth-scroll/SmoothScroll.js"></script>
  <script src="assets/jarallax/jarallax.js"></script>
  <script src="assets/viewportChecker/jquery.viewportchecker.js"></script>
  <script src="assets/theme/js/script.js"></script>
  
  
  <input name="animation" type="hidden">
   <div id="scrollToTop" class="scrollToTop mbr-arrow-up"><a style="text-align: center;"><i class="mbr-arrow-up-icon"></i></a></div>
  </body>
</html>