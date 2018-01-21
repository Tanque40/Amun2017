$(document).ready(function(){ //cuando carga
    $("#comitreg").fadeOut();
    $("#parte1").fadeOut();
    $("#parte2").fadeOut();
    $("#parte3").fadeOut();
    $('.correo').fadeOut();
    $('.contra').fadeOut();    
    $("#procedenciatext").fadeOut();
    $(".gruesc").fadeOut();
    $("#abrielreg").fadeOut();
    $("#log").fadeOut();
    $('#sextext').fadeOut();
    /*=== abrir el form===*/
    $("#abrir-reg").click(function () {
        $("#abrielreg").fadeIn(2000);        
        $("#log").fadeOut();
        $("#reg").fadeIn();
    });
    $("#abriacc").click(function () {
        $("#abrielreg").fadeIn(2000);
        $("#log").fadeIn();
        $("#reg").fadeOut();
        
    });
/*================================llenar el form===============*/
/*===========case de cada quien========================*/

var phpcase;

$("#delegado").click(function () {
      $('#delegadocase').val("Delegado");
    // $("#reg .inner").css({
    //     'left': "-100%"
    //     });
    $("#cases").fadeOut(500);
     $("#comitreg").fadeIn(2000);       
       $('html, body').animate( {scrollTop :$("#pendejo").offset().top}, 1);
       $('html, body').animate( {scrollTop : $("#abrielreg").offset().top}, 1);

   
    $("#pais").fadeIn();

    $("#correo2").prop('required',true); 
    $("#forcorreo2").fadeIn();

    $("#pass").prop('required',true);
    $("#forpass").fadeIn();

    $("#pass2").prop('required',true);
    $("#forpass2").fadeIn();

    //$("#delegation").prop('required',false);
    $("#fordelegation").fadeIn();
    $("#delegation").attr("placeholder", "Solo si formas parte de una delegación");

    $("#fornumpeople").fadeOut();
    $("#numpeople").prop('required',false);

     phpcase = 0;

});
$("#paje").click(function () {
    $('#delegadocase').val("Paje");
   $('.com').val("Paje");
    $('.regtext').text("PAJE");
    $('#sigpre').fadeIn();

    
    $("#forpais").fadeOut();

    $("#pass").prop('required',false);
    $("#forpass").fadeOut();

    $("#pass2").prop('required',false);
    $("#forpass2").fadeOut();

    $("#fordelegation").fadeOut();
    $("#fornumpeople").fadeOut();
    $("#numpeople").prop('required',false);
    
    // $("#reg .inner").css({
    //         'left': "-200%"
    //         });
     $('.stepbar2').css({'background': '#3587BA'});
     //$('#reg form .inner .box').css({'margin-top': '-30px'});
     $("#cases").fadeOut(500);
     $("#parte1").fadeIn(2000);
     $('html, body').animate( {scrollTop :$("#pendejo").offset().top}, 1);
     $('html, body').animate( {scrollTop : $("#abrielreg").offset().top}, 1);
     phpcase = 1;

});
$("#edecan").click(function () {
   $('.com').val("Edecan");
    $('.regtext').text("EDECAN");
    $('#sigpre').fadeIn();
    $('#delegadocase').val("Paje");
    

    
    $("#forpais").fadeOut();

    $("#pass").prop('required',false);
    $("#forpass").fadeOut();

    $("#pass2").prop('required',false);
    $("#forpass2").fadeOut();

    //$("#delegation").prop('required',false);
    $("#fordelegation").fadeOut();
    $("#fornumpeople").fadeOut();
    $("#numpeople").prop('required',false);
    
    // $("#reg .inner").css({
    //         'left': "-200%"
    //         });
     $('.stepbar2').css({'background': '#3587BA'});
    // $('#reg form .inner .box').css({'margin-top': '-30px'});
     $("#cases").fadeOut(500);
     $("#parte1").fadeIn(2000);
     $('html, body').animate( {scrollTop :$("#pendejo").offset().top}, 1);
     $('html, body').animate( {scrollTop : $("#abrielreg").offset().top}, 1);
     phpcase = 1;

});

$("#faculty").click(function () {
   $('.com').val("Faculty");
    $('.regtext').text("FACULTY");
    $('#sigpre').fadeIn();
    $('#delegadocase').val("Faculty");
    

    
    $("#forpais").fadeOut();


    $("#pass").prop('required',false);
    $("#forpass").fadeOut();

    $("#pass2").prop('required',false);
    $("#forpass2").fadeOut();

    //$("#delegation").prop('required',false);
    $("#fordelegation").fadeIn();
    $("#delegation").attr("placeholder", "Nombre de la delegación");

    $("#fornumpeople").fadeIn();
    $("#numpeople").prop('required',true);
    
    // $("#reg .inner").css({
    //         'left': "-200%"
    //         });
     $('.stepbar2').css({'background': '#3587BA'});
    // $('#reg form .inner .box').css({'margin-top': '-30px'});
     $("#cases").fadeOut(500);
     $("#parte1").fadeIn(2000);
     $('html, body').animate( {scrollTop :$("#pendejo").offset().top}, 1);
     $('html, body').animate( {scrollTop : $("#abrielreg").offset().top}, 1);
     phpcase = 2;

});

//deeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
var $el = $("#pais");
var  newOptions = {};
$('#comitreg .pure-control-group:nth-child(1)').click(function () {
    $('.com').val("OIM");
    $('.regtext').text("OIM");
    $('#sigpre').fadeIn();
    $("#forpais").fadeIn();
    $('.stepbar2').css({'background': '#3587BA'});
    $("#comitreg").fadeOut(500);
     $("#parte1").fadeIn(2000);

    newOptions = {"OIM Selecciona un paìs": 0,
    "República Islámica de Afganistán.": "República Islámica de Afganistán",
    "República Federal de Alemania.": "República Federal de Alemania",
    "Reino de Arabia Saudita.": "Reino de Arabia Saudita",
    "República Argentina.": "República Argentina",
    "Australia.": "Australia",
    "República Popular de Bangladés.": "República Popular de Bangladés",
    "Canadá. ": "Canadá",
    "República Popular China.": "República Popular China",
    "República de Colombia.": "República de Colombia",
    "República Popular Democrática de Corea.": "República Popular Democrática de Corea",
    "República de Corea.": "República de Corea",
    "Emiratos Árabes Unido.": "Emiratos Árabes Unido",
    "Estados Unidos de América.": "Estados Unidos de América",
    "República de Filipinas.": "República de Filipinas",
    "República Francesa.": "República Francesa",
    "Grecia. ": "Grecia",
    "Hong Kong.": "Hong Kong",
    "República de la India.": "República de la India",
    "República de Irak.": "República de Irak",
    "República Islámica de Irán.": "República Islámica de Irán",
    "Estado de Israel.": "Estado de Israel",
    "Reino de España.": "Reino de España",
    "Estado de Japón.": "Estado de Japón",
    "República de Kazajistán.": "República de Kazajistán",
    "Estados Unidos Mexicanos.": "Estados Unidos Mexicanos",
    "República Islámica de Pakistán.": "República Islámica de Pakistán",
    "Federación de Rusia.": "Federación de Rusia",
    "República de Singapur.": "República de Singapur",
    "Países Bajos.": "Países Bajos",
    "República Árabe Siria.": "República Árabe Siria",
    "Taiwán.": "Taiwán",
    "República de Turquía.": "República de Turquía",
    "Reino Unido de la Gran Bretaña e Irlanda del Norte.": "Reino Unido de la Gran Bretaña e Irlanda del Norte",
    "República Bolivariana de Venezuela.": "República Bolivariana de Venezuela",
    "República Socialista de Vietnam.": "República Socialista de Vietnam",
    "Organización para la Cooperación y Desarrollo Económico (OCDE).": "Organización para la Cooperación y Desarrollo Económico (OCDE)",
    "Fondo de las Naciones Unidas para la Infancia (UNICEF).": "Fondo de las Naciones Unidas para la Infancia (UNICEF)",
    "Alto Comisionado de las Naciones Unidas para los Refugiados (ACNUR).": "Alto Comisionado de las Naciones Unidas para los Refugiados (ACNUR)",
    "Comisión de los Derechos Humanos (CDH).": "Comisión de los Derechos Humanos (CDH)",
    "Unión Europa (UE).": "Unión Europa (UE)"

    };

    $el.empty(); // remove old options
    $.each(newOptions, function(key,value) {
    $el.append($("<option></option>").attr("value", value).text(key));
    });
    
    
});
$('#comitreg .pure-control-group:nth-child(2)').click(function () {
    $('.com').val("OACI");
    $('.regtext').text("OACI");
    $('#sigpre').fadeIn();
    $("#forpais").fadeIn();
    $('.stepbar2').css({'background': '#3587BA'});
    $("#comitreg").fadeOut(500);
     $("#parte1").fadeIn(2000);
    newOptions = {"OACI Selecciona un paìs": 0,
    "Alemania": "Alemania",
    "Arabia Saudita": "Arabia Saudita",
    "Argelia": "Argelia",
    "Argentina": "Argentina",
    "Australia": "Australia",
    "Brasil": "Brasil",
    "Canadá": "Canadá",
    "China ": "China ",
    "Colombia": "Colombia",
    "Congo": "Congo",
    "Cuba": "Cuba",
    "Ecuador": "Ecuador",
    "Egipto": "Egipto",
    "Emiratos Árabes Unidos": "Emiratos Árabes Unidos",
    "España": "España",
    "Estados Unidos": "Estados Unidos",
    "Federación de Rusia": "Federación de Rusia",
    "Francia": "Francia",
    "India": "India",
    "Irán": "Irán",
    "Italia": "Italia",
    "Japón": "Japón",
    "Kenya": "Kenya",
    "Malasia": "Malasia",
    "México": "México",
    "Nigeria": "Nigeria",
    "Nueva Zelanda": "Nueva Zelanda",
    "Panamá": "Panamá",
    "Reino Unido": "Reino Unido",
    "Representación ASECNA": "Representación ASECNA",
    "Representación CLAC": "Representación CLAC",
    "Representación IATA ": "Representación IATA ",
    "República de Corea": "República de Corea",
    "República Popular Democrática de Corea": "República Popular Democrática de Corea",
    "República Unida de Tanzania": "República Unida de Tanzania",
    "Singapur": "Singapur",
    "Sudáfrica": "Sudáfrica",
    "Suecia": "Suecia",
    "Turquía": "Turquía",
    "Uruguay": "Uruguay"

    };

    $el.empty(); // remove old options
    $.each(newOptions, function(key,value) {
    $el.append($("<option></option>").attr("value", value).text(key));
    });
    
});
$('#comitreg .pure-control-group:nth-child(3)').click(function () {
    $('.com').val("DOMP");
    $('.regtext').text("DOMP");
    $('#sigpre').fadeIn();
    $("#forpais").fadeIn();
    $('.stepbar2').css({'background': '#3587BA'});
    $("#comitreg").fadeOut(500);
     $("#parte1").fadeIn(2000);
    newOptions = {"DOMP Selecciona un paìs": 0,
    "Estados Unidos.": "Estados Unidos",
    "Francia.": "Francia",
    "China.": "China",
    "Reino Unido de la Gran Bretaña e Irlanda del Norte.": "Reino Unido de la Gran Bretaña e Irlanda del Norte",
    "Rusia.": "Rusia",
    "Cachemira.": "Cachemira",
    "India.": "India",
    "Pakistán.": "Pakistán",
    "Israel.": "Israel",
    "Palestina.": "Palestina",
    "Egipto.": "Egipto",
    "Darfur.": "Darfur",
    "República Centroafricana.": "República Centroafricana",
    "República del Sudán del Sur.": "República del Sudán del Sur",
    "Irán.": "Irán",
    "Afganistán.": "Afganistán",
    "Kosovo.": "Kosovo",
    "Côte d'Ivoire.": "Côte d'Ivoire",
    "Siria": "Siri",
    "Sahará Occidental.": "Sahará Occidental",
    "Turquía.": "Turquía",
    "Corea del Norte.": "Corea del Norte",
    "Corea del Sur.": "Corea del Sur",
    "Jordanía.": "Jordanía",
    "Libano.": "Libano",
    "Irák.": "Irák",
    "CDH.": "CDH",
    "Liberia.": "Liberia",
    "Malí.": "Malí",
    "Japón.": "Japón",
    "España.": "España",
    "Chipre.": "Chipre",
    "Marruecos.": "Marruecos",
    "Azerbaiyán.": "Azerbaiyán",
    "Yemen.": "Yemen",
    "República Democrática del Congo.": "República Democrática del Congo",
    "Etiopía.": "Etiopía",
    "Bélgica.": "Bélgica",
    "Haití.": "Haití",
    "Alemania.": "Alemania.",

    };

    $el.empty(); // remove old options
    $.each(newOptions, function(key,value) {
    $el.append($("<option></option>").attr("value", value).text(key));
    });
    
});
$('#comitreg .pure-control-group:nth-child(4)').click(function () {
    $('.com').val("OTAN");
    $('.regtext').text("OTAN");
    $('#sigpre').fadeIn();
    $("#forpais").fadeIn();
    $('.stepbar2').css({'background': '#3587BA'});
    $("#comitreg").fadeOut(500);
     $("#parte1").fadeIn(2000);
    newOptions = {"OTAN Selecciona un paìs": 0,
    "Alemania.": "Alemania",
    "Bélgica.": "Bélgica",
    "Canadá.": "Canadá",
    "Dinamarca.": "Dinamarca",
    "Estados Unidos.": "Estados Unidos",
    "España.": "España",
    "Francia.": "Francia",
    "Grecia.": "Grecia",
    "Islandia.": "Islandia",
    "Italia.": "Italia",
    "Luxemburgo.": "Luxemburgo",
    "Noruega.": "Noruega",
    "Países Bajos.": "Países Bajos",
    "Portugal.": "Portugal",
    "Reino Unido.": "Reino Unido",
    "Turquía.": "Turquía",
    "Hungría.": "Hungría",
    "Polonia.": "Polonia",
    "República Checa.": "República Checa",
    "Bulgaria.": "Bulgaria",
    "Eslovaquia.": "Eslovaquia",
    "Eslovenia.": "Eslovenia",
    "Estonia.": "Estonia",
    "Letonia.": "Letonia",
    "Lituania.": "Lituania",
    "Rumania.": "Rumania",
    "Croacia.": "Croacia",
    "Albania.": "Albania",
    "Rusia.": "Rusia",
    "Macedonia.": "Macedonia",
    "Bosnia y Herzegovina.": "Bosnia y Herzegovina",
    "Organización para la Seguridad y la Cooperación en Europa (OSCE).": "Organización para la Seguridad y la Cooperación en Europa (OSCE)",
    "Organización para la Cooperación y el Desarrollo Económico (OCDE) .": "Organización para la Cooperación y el Desarrollo Económico (OCDE)",
    "Organización de Aviación Civil Internacional (OACI).": "Organización de Aviación Civil Internacional (OACI)",
    "República Federal de Yugoslavia / Departamento de Seguridad Nacional de los Estados Unidos.": "República Federal de Yugoslavia / Departamento de Seguridad Nacional de los Estados Unidos",
    "Afganistán.": "Afganistán",
    "Emiratos Árabes Unidos.": "Emiratos Árabes Unidos",
    "Kosovo/ Human Rights Watch.": "Kosovo/ Human Rights Watch",
    "Irak.": "Irak",
    "Siria.": "Siria",

    };

    $el.empty(); // remove old options
    $.each(newOptions, function(key,value) {
    $el.append($("<option></option>").attr("value", value).text(key));
    });
    
});
$('#comitreg .pure-control-group:nth-child(5)').click(function () {
    $('.com').val("CIJ");
    $('.regtext').text("CIJ");
    $('#sigpre').fadeIn();
    $("#forpais").fadeIn();
    $('.stepbar2').css({'background': '#3587BA'});
    $("#comitreg").fadeOut(500);
     $("#parte1").fadeIn(2000);
    newOptions = {"CIJ Selecciona un Magistrado": 0,
"Raymond Ranjeva- república de Madagascar": "Raymond Ranjeva- república de Madagascar",
"Géza  Herczegh- Hungría": "Géza  Herczegh- Hungría",
"Carl August Fleischhauer- republica federal de Alemania": "Carl August Fleischhauer- republica federal de Alemania",
"Abdul G. Koroma- república de  Sierra Leona": "Abdul G. Koroma- república de  Sierra Leona",
"Vladen Stepanovich  vereshtin - Federacion de  Rusia": "Vladen Stepanovich  vereshtin - Federacion de  Rusia",
"Dame Rosalyn Higgins- reino unido de la gran Bretaña e Irlanda del norte": "Dame Rosalyn Higgins- reino unido de la gran Bretaña e Irlanda del norte",
"Gonzalo Parra-Aranguen- república bolivariana de venezuela": "Gonzalo Parra-Aranguen- república bolivariana de venezuela",
"Pieter H. Kooijmans- Holanda": "Pieter H. Kooijmans- Holanda",
"Francisco Rezek- Brasil": "Francisco Rezek- Brasil",
"Awn shawkat Al-khasawneh- reino hachemita de Jordania": "Awn shawkat Al-khasawneh- reino hachemita de Jordania",
"Thomas Buergenthal - estados unidos de América": "Thomas Buergenthal - estados unidos de América",
"Nabil Elaraby- Egipto": "Nabil Elaraby- Egipto",
"John Dugard - república de Sudáfrica  (juez AD hoc)": "John Dugard - república de Sudáfrica  (juez AD hoc)",
"Jean Pierre Mavungu-  república democrática del Congo (juez AD hoc)": "Jean Pierre Mavungu-  república democrática del Congo (juez AD hoc)",
"Republica de Ruanda Primer Consejero": "Republica de Ruanda Primer Consejero",
"Republica de Ruanda Segundo Consejero": "Republica de Ruanda Segundo Consejero",
"Republica del Congo Primer Consejero": "Republica del Congo Primer Consejero",
"Republica del Congo Segundo Consejero": "Republica del Congo Segundo Consejero"

    };

    
    $el.empty(); // remove old options
    $.each(newOptions, function(key,value) {
    $el.append($("<option></option>").attr("value", value).text(key));
    });
});
$('#comitreg .pure-control-group:nth-child(6)').click(function () {
    $('.com').val("CDE");
    $('.regtext').text("CDE");
    $('#sigpre').fadeIn();
    $('.stepbar2').css({'background': '#3587BA'});
    $("#comitreg").fadeOut(500);
     $("#parte1").fadeIn(2000);
     $("#forpais").fadeOut();
     $el.empty();
    
});
$('#comitreg').click(function () {
    $('html, body').animate( {scrollTop :$("#pendejo").offset().top}, 1);
    $('html, body').animate( {scrollTop : $("#abrielreg").offset().top}, 1);  
    
});
/*===============================Siguiente/Anterior==================*/
var currenform=1;
$('#sig').click(function(ev){    
   currenform++;
    if(currenform==2){
        var nombre = $("#name").val();
        var app = $("#app").val();
        var apm = $("#apm").val();
        var born = $("#born").val(); 
        if(nombre && app && apm && born){
                    ev.preventDefault();
                    $('.stepbar3').css({'background': '#3587BA'});
                    $('.stepbar2').css({'background': '#3587BA'});
                    $("#parte1").fadeOut(500);
                    $("#parte2").fadeIn(2000);                    
        }else{
            $('.stepbar2').css({'background': 'red'});
            currenform=1;
        }

    }else if(currenform==3){

        var tel=$("#tel").val();
        var correo=$("#correo").val();
        var correo2=$("#correo2").val();
        var pass=$("#pass").val();
        var pass2=$("#pass2").val();

        if(phpcase == 1 || phpcase == 2){
            pass = 1;
            pass2 = 1;
        }
        //console.log(tel);
        //console.log(correo);
        //console.log(correo2);
        //console.log(pass);
        //console.log(pass2);
        if(tel && correo && correo2 && pass && pass2){
            ev.preventDefault();
            var arroba = correo.search("@");
            var arroba2 = correo2.search("@");
            //console.log(arroba);
            //console.log(arroba2);
            if(arroba == -1){
                $("#correo").val("");
                $('.stepbar3').css({'background': 'red'});
                currenform=2;
            }else{//arroba1
                if(arroba2 == -1){      
                    $("#correo2").val("");
                    $('.stepbar3').css({'background': 'red'});
                    currenform=2;
                }else{//arroba2
                     if(correo == correo2){
                        $('.correo').fadeOut();
                        //console.log('casi');
                        if(pass == pass2){
                            $('.contra').fadeOut();
                            //console.log('ahora si');
                            $('.stepbar3').css({'background': '#3587BA'});
                            $('.stepbar4').css({'background': '#3587BA'});
                            $("#parte2").fadeOut(500);
                            $("#parte3").fadeIn(2000);
                            $('#sig').text('Confirmar');
                            $(".msg-error").fadeOut();

                            }else{//contras
                                //console.log('diferentes contras');
                                //$("#pass").val("");
                                //$("#pass2").val("");
                                $('.contra').fadeIn();
                                $('.stepbar3').css({'background': 'red'});
                                currenform=2;
                                }
                    }else{//correo diferentes
                        //console.log('diferentes correos');
                        //$("#correo2").val("");
                        //$("#correo").val("");
                        $('.correo').fadeIn();
                        $('.stepbar3').css({'background': 'red'});
                        currenform=2;
                    }               
                }
            }
        }else{//no ha llenaod todo
            $('.stepbar3').css({'background': 'red'});
             currenform=2;
        }

    }else if (currenform==4){     
        $('#procedenciatext').val($("#pros option:selected").html());
        $('#sextext').val($('input:radio[name=sex]:checked').val());
        var pros= $('#pros').val();
        if(pros == 0){
            $(".msg-error").text("¡Debes poner procedencia!");
            $(".msg-error").fadeIn(500);
            $('.stepbar4').css({'background': 'red'});
            ev.preventDefault();
        }
        if($('#sextext').val() == ""){
            $(".msg-error").text("¡Debes elegir sexo!");
            $(".msg-error").fadeIn(500);
            $('.stepbar4').css({'background': 'red'});
            ev.preventDefault();
        }
        /*if((pros != 0) && ($('#sextext').val() != "")){
           if(phpcase == 0){
                $('#formulario').get(0).setAttribute('action','insertardel.php');
            }else if (phpcase == 1){
                $('#formulario').get(0).setAttribute('action','insertarpajeyede.php');
            }else if (phpcase == 2){
                $('#formulario').get(0).setAttribute('action','insertarfaculty.php');
            }
        }*/
        currenform=3;
        //ev.preventDefault();
    }
    //console.log(currenform);
    $('html, body').animate( {scrollTop :$("#pendejo").offset().top}, 1);
    $('html, body').animate( {scrollTop : $("#abrielreg").offset().top}, 1);
    //console.log(phpcase);
});
$("#option-one").click(function (e) {
    $(".msg-error").fadeOut();
    $('html, body').animate( {scrollTop :$("#pendejo").offset().top}, 1);
    $('html, body').animate( {scrollTop : $("#abrielreg").offset().top}, 1);
});
$("#option-two").click(function (e) {
    $(".msg-error").fadeOut();
    $('html, body').animate( {scrollTop :$("#pendejo").offset().top}, 1);
    $('html, body').animate( {scrollTop : $("#abrielreg").offset().top}, 1);
});

/////////DENTRO DEL CURRENT FORM=====================================4
        $("#pros").click(function (e) {
            var pros= $('#pros').val();
            //console.log(pros);
            if(pros==1){
                $(".gruesc").fadeOut();
                $(".gruesc").fadeIn(500);
                $(".gruesc label").text("Grupo");
                //$("#gruesc").attr("placeholder", "Grupo").placeholder();
                $("#gruesc").prop('required',true);
                
            }else if (pros == 2) {
                $(".gruesc").fadeOut();
                $(".gruesc").fadeIn(500);
                $(".gruesc label").text("Escuela");
                //$("#gruesc").attr("placeholder", "Escuela").placeholder();
                $("#gruesc").prop('required',true);

            }else{
                $(".gruesc").fadeOut();
                $("#gruesc").prop('required',false);    
            }
            $(".msg-error").fadeOut();
            $('html, body').animate( {scrollTop :$("#pendejo").offset().top}, 1);
            $('html, body').animate( {scrollTop : $("#abrielreg").offset().top}, 1);
            });
        //  NO MOVER ================================================
        $("#born").on('keydown', function(e){ if (e.keyCode == 9)  e.preventDefault() });
        $("#pass2").on('keydown', function(e){ if (e.keyCode == 9)  e.preventDefault() });
        $("#terms").on('keydown', function(e){ if (e.keyCode == 9)  e.preventDefault() });


$('#ant').click(function(){
   currenform--;
   if(currenform==2){    
    $('#sig').text("Siguiente");
    $('.stepbar4').css({'background': '#fff'});
    $("#parte3").fadeOut(500);
    $("#parte2").fadeIn(2000);

   }else if (currenform==1) {       
    $('.stepbar3').css({'background': '#fff'});
    $("#parte2").fadeOut(500);
    $("#parte1").fadeIn(2000);
   }else if(currenform==0){
    currenform=1
        $('#sigpre').fadeOut();
        $('.regtext').text("REGISTRO");
    $('.stepbar2').css({'background': '#fff'});
        $("#parte1").fadeOut(500);
        $("#cases").fadeIn(2000);
    }
    $('html, body').animate( {scrollTop :$("#pendejo").offset().top}, 1);
    $('html, body').animate( {scrollTop : $("#abrielreg").offset().top}, 1);
});


// you want to enable the pointer events only on click;

        $('#map_canvas1').addClass('scrolloff'); // set the pointer events to none on doc ready
        $('#canvas1').on('click', function () {
            $('#map_canvas1').removeClass('scrolloff'); // set the pointer events true on click
        });

        // you want to disable pointer events when the mouse leave the canvas area;

        $("#map_canvas1").mouseleave(function () {
            $('#map_canvas1').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
        });



});