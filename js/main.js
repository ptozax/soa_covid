
var index_coutry;





function select_ct(sl_coutry) {
	
	
	
index_coutry=sl_coutry;


$( "body" ).load( "country.html" );


}





(function ($) {


	"use strict";

	/*----------------------------
	 jQuery MeanMenu
	------------------------------ */
	jQuery('nav#dropdown').meanmenu();
	/*----------------------------
	 jQuery myTab
	------------------------------ */
	$('#myTab a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});
	$('#myTab3 a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});
	$('#myTab4 a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});

	$('#single-product-tab a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});

	$('[data-toggle="tooltip"]').tooltip();

	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');

	});
	// Collapse ibox function
	$('#sidebar ul li').on('click', function () {
		var button = $(this).find('i.fa.indicator-mn');
		button.toggleClass('fa-plus').toggleClass('fa-minus');

	});
	/*-----------------------------
			Menu Stick
		---------------------------------*/
	$(".sicker-menu").sticky({ topSpacing: 0 });

	$('#sidebarCollapse').on('click', function () {
		$("body").toggleClass("mini-navbar");
		SmoothlyMenu();
	});
	$(document).on('click', '.header-right-menu .dropdown-menu', function (e) {
		e.stopPropagation();
	});


	/*----------------------------
	 wow js active
	------------------------------ */
	new WOW().init();

	/*----------------------------
	 owl active
	------------------------------ */
	$("#owl-demo").owlCarousel({
		autoPlay: false,
		slideSpeed: 2000,
		pagination: false,
		navigation: true,
		items: 4,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		itemsDesktop: [1199, 4],
		itemsDesktopSmall: [980, 3],
		itemsTablet: [768, 2],
		itemsMobile: [479, 1],
	});

	/*----------------------------
	 price-slider active
	------------------------------ */
	$("#slider-range").slider({
		range: true,
		min: 40,
		max: 600,
		values: [60, 570],
		slide: function (event, ui) {
			$("#amount").val("£" + ui.values[0] + " - £" + ui.values[1]);
		}
	});
	$("#amount").val("£" + $("#slider-range").slider("values", 0) +
		" - £" + $("#slider-range").slider("values", 1));

	/*--------------------------
	 scrollUp
	---------------------------- */
	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});


	//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
	//                                                                                     NEW CODE
	//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


	$(document).ready(
        $.getJSON("http://localhost:3000/death", function(data){
           

	 $("#Deaths").append("<strong>" + data[0].d62 + "</strong>");


	}));
	
	$(document).ready(
        $.getJSON("http://localhost:3000/confirmed", function(data){
       
 $("#Confirmed").append("<strong>" + data[0].d62 + "</strong>");



	}));
	

	$(document).ready(
        $.getJSON("http://localhost:3000/recovered", function(data){
           
$("#Recovered").append("<strong>" + data[0].d62 + "</strong>");


    }));
	






	//xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX   thai data api     XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


	var gg;

	$.getJSON('https://covid19.th-stat.com/api/open/today', function (data) {

		var c_data = `{ "Confirmed": ${data.Confirmed},
		"Recovered": ${data.Recovered},
		"Hospitalized": ${data.Hospitalized},
		"Deaths": ${data.Deaths},
		"NewConfirmed": ${data.NewConfirmed},
		"NewRecovered": ${data.NewRecovered},
		"NewHospitalized": ${data.NewHospitalized},
		"NewDeaths": ${data.NewDeaths} }`

		gg = JSON.parse(c_data);
		//console.log(gg);

		// $("#Confirmed").append("<strong>" + gg.Confirmed + "</strong>");
		 $("#Hospitalized").append("<strong>" + gg.Hospitalized + "</strong>");
		// $("#Recovered").append("<strong>" + gg.Recovered + "</strong>");
		// $("#Deaths").append("<strong>" + gg.Deaths + "</strong>");


		$("#NewConfirmed").append("<strong>" + gg.NewConfirmed + "</strong>");
		$("#NewHospitalized").append("<strong>" + gg.NewHospitalized + "</strong>");
		$("#NewRecovered").append("<strong>" + gg.NewRecovered + "</strong>");
		$("#NewDeaths").append("<strong>" + gg.NewDeaths + "</strong>");


	});





	//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX world data api XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


	var w_data;

	$.getJSON('https://corona.lmao.ninja/v2/countries?sort=country', function (data) {

		w_data = data;

		for (var i = 0; i < w_data.length; i++) {

			$("#country_tb").append(`<tr  onclick="select_ct(${i})" ><th >${i + 1}</th><td>${w_data[i].country}</td></tr>`);

		};



	});




	var w_data2;

	$.getJSON('https://corona.lmao.ninja/v2/countries?sort=country', function (data) {
        console.log(document.cookie);
		w_data2 = data;
		 $("#country_name").append("<strong> ผู้ติดเชื้อใน " + w_data2[index_coutry].country + "</strong>");
		 $("#Confirmed_ct").append("<strong>" + w_data2[index_coutry].cases + "</strong>");
		$("#Hospitalized_ct").append("<strong>" + w_data2[index_coutry].active + "</strong>");
		 $("#Recovered_ct").append("<strong>" + w_data2[index_coutry].recovered+ "</strong>");
		 $("#Deaths_ct").append("<strong>" + w_data2[index_coutry].deaths + "</strong>");
		 
		
	

		

	});
	


	




})(jQuery);


