$(document).ready(function(){
	enviar();
	$(".friend").click(change);
})

function texto(){
	var valor = $("#enviar-mensaje").val();
	return valor;
}

function limpiar(){
	var inputBox = $("#enviar-mensaje").val("");
	return inputBox;
}

var valorData= 0;
var datos=[
	{
		nombre: "Laboratoria Perú",
		foto: "logocodeacademy.png",
		time: '11:31',
		mensaje: "Nunca!!! Juan Diego es único"
	},
	{
		nombre: "Raymi Saldomando",
		foto: "raymi.jpg",
		time: '11:25',
		mensaje: "Cómo vas con la tarea?"
	},
	{
		nombre: "Mariana Costa",
		foto: "mariana.jpg",
		time: '09:25',
		mensaje: "El panel de speakers esta buenazo"
	},
	{
		nombre: "Ana María Martinez Franklin",
		foto: "anamaria.jpg",
		time: "Ayer",
		mensaje: "Pues dale!"
	},
	{
		nombre: "Rodulfo Prieto",
		foto: "rodulfo.jpg",
		time: "Martes",
		mensaje: "¿Cómo van tus compañeras?"
	},
	{
		nombre: "Andrea Lamas",
		foto: "andrea.jpg",
		time: "Lunes",
		mensaje: "Hoy me toca clases de canto, yee!"
	},
	{
		nombre: "Papu",
		foto: "mariapaula.jpg",
		time: '13/01/2016',
		mensaje: "Wuju! esto me encanta!! en verdad!"
	},
	{
		nombre: "Katy Sánchez",
		foto: "katy.jpg",
		time: '11/01/2016',
		mensaje: "No te preocupes, tengo todo bajo control"
	},
	{
		nombre: "Aldo Alfaro",
		foto: "aldo.jpg",
		time: '03/01/2016',
		mensaje: "Vao a comer?"
	}
]

var almacenar= [ ];
function enviar(){
	var tiempo= new Date();
	var hora= tiempo.getHours();
	var minuto= tiempo.getMinutes();
	if(minuto<10)
        minuto = "0" + minuto;
    var i=0;
	$("#enviar-mensaje").keypress(function(){
		var key = event.which;
		if(key==13){
			$("."+valorData).html(hora+" : "+minuto)
			$("#"+valorData).html(texto);
			almacenar.push(texto());
			datos[valorData].chat = almacenar;
			$(".fondo").append("<div class='padre'><div class='green'><p>"+texto()+"</p><p>"+hora+" : "+minuto+"</p></div></div>")
			limpiar();
		}
	})
}
function change(){
	valorData= $(this).attr("data");
	$(".right").html("");
	$(".right").append("<img src='image/"+datos[valorData].foto+"' class='foto'><div><p id='name'>"+datos[valorData].nombre+"</p><p id='adicional'></p></div><a href='#' title='Menú'><i class='icon-dots-three-vertical'></i></a><a href='#' title='Adjuntar'><i class='icon-attachment'></i></a>")
	if(valorData==0){
		$("#adicional").html("Ana María, Aldo, Gian, Mariana, Papu, Tú")
		$(".fondo").html("<div class='white'><p class='amigo1'>"+datos[5].nombre+"</p><p>Aldo está siguiendo los pasos de Juan Diego!</p><p class='hour'>11:30</p></div><div class='white'><p class='amigo'>"+datos[6].nombre+"</p><p>"+datos[0].mensaje+"</p><p class='hour'>11:31</p></div>")
		$(".amigo1").css('color', "#9CE1F4")
		$(".amigo").css('color', "#8ED09B")
	} else{
		$("#adicional").html("últ. vez "+ datos[valorData].time)
		$(".fondo").html("<div class='white'><p class='amigo'>"+datos[valorData].nombre+"</p><p>"+datos[valorData].mensaje+"</p><p class='hour'>"+datos[valorData].time+"</p></div>")
		$(".amigo").css('color', "#8ED09B")
	}
}


/*
$('#search').keyup(function () {
    var valThis = this.value.toLowerCase(),
        lenght  = this.value.length;

    $('.desplazar>.friend>.title').each(function () {
        var text  = $(this).text(),
            textL = text.toLowerCase(),
            htmlR = '<b>' + text.substr(0, lenght) + '</b>' + text.substr(lenght);
        (textL.indexOf(valThis) == 0) ? $(this).html(htmlR).show() : $(this).hide();
    });

});
//http://api.jquery.com/filter/

$("#search").keypress(function(){
	if(event.which==13){
		var amigo= $(".friend");
		var valor= $("#search").val();
		valor= valor.toLowerCase();
		var name= $(".title");
		name.show();
		for(var i=0;i< name.size(); i++){
			var contenido= name.eq(i).text();
			contenido= contenido.toLowerCase();
			var index = contenido.indexOf(valor);
			if(index == -1){
				amigo.eq(i).hide();
			}
		}
	} 
})*/