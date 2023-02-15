$(document).ready(function(){

	const sqftPerGallon = 400;
	var calculatedGallons = 0;
	var calculatedPrice = 0.00;
	

	$("#calculate").click(function(){

		pricePerGallon = document.getElementById("pricePerGallon").value;
		console.log(pricePerGallon);

		area = document.getElementById("area").value;
		console.log(area);

		calculatedGallons = Math.ceil(1 * (area / sqftPerGallon));
		console.log(calculatedGallons);

		calculatedPrice = (1.00 * calculatedGallons * pricePerGallon).toFixed(2);
		console.log(calculatedPrice);

		document.getElementById("gallons").innerHTML = calculatedGallons + " gal";
		document.getElementById("price").innerHTML = "$" + calculatedPrice;
	});

	
	console.log("Bump....");
	
	$("#confirm").dialog({
		title: "Submit application?",
		autoOpen: false,
		buttons: [
			{
			  text: "I agree",
			  icon: "ui-icon-check",
			  click: function() {
				$( this ).dialog( "close" );
			  }
			},
			{
			  text: "Cancel",
			  icon: "ui-icon-cancel",
			  click: function() {
				$(this).dialog( "close" );
			  }
			}
		]
	});


	$(".phone").mask('(000) 000-0000', {
        placeholder: "(___) ___-____"
    });
    $("#ssn").mask("000-00-0000", {
        placeholder: "___-__-____"
    });
    $("#zipcode").mask("00000");

	$('#notCitizen').hide();
	$('#noUsCitizen').click(function(){
		$('#notCitizen').slideDown();
	});
	$('#yesUsCitizen').click(function(){
		$('#notCitizen').slideUp();
	});

	$('#workedCompany').hide();
	$('#yesCompany').click(function(){
		$('#workedCompany').slideDown();
	});
	$('#noCompany').click(function(){
		$('#workedCompany').slideUp();
	});

	$('#felony').hide();
	$('#yesFelony').click(function(){
		$('#felony').slideDown();
	});
	$('#noFelony').click(function(){
		$('#felony').slideUp();
	});

	$('#preEmployment').hide();
	$('#yesEmployment').click(function(){
		$('#preEmployment').slideDown();
	});
	$('#noEmployment').click(function(){
		$('#preEmployment').slideUp();
	});

	$('#notemployed').hide();
	$('#noemployed').click(function(){
		$('#notemployed').slideDown();
	});
	$('#yesemployed').click(function(){
		$('#notemployed').slideUp();
	});

	$('.money').mask('#,##0.00', {reverse: true});

	$("#ref1").hide();
	$("#newRef2").hide();
	$("#newRef3").hide();
	$("#ref2").hide();
	$("#ref3").hide();
	$("#yesRef1").click(function(){
		$('#ref1').slideDown();
		$("#newRef2").slideDown();
	});
	$("#noRef1").click(function(){
		$('#ref1').slideUp();
		$("#noRef2").prop("checked", true);
		$("#noRef3").prop("checked", true);
		$("#newRef2").slideUp();
		$("#newRef3").slideUp();
		$("#ref2").hide();
		$("#ref3").hide();
	});
	$("#yesRef2").click(function(){
		$('#ref2').slideDown();
		$("#newRef3").slideDown();
	});
	$("#noRef2").click(function(){
		$('#ref2').slideUp();
		$("#noRef3").prop("checked", true);
		$("#newRef3").slideUp();
		$("#ref3").hide();
	});
	$("#yesRef3").click(function(){
		$('#ref3').slideDown();
	});
	$("#noRef3").click(function(){
		$('#ref3').slideUp();
	});

	$('#gradHighSchool').hide();
	$('#yesHighSchool').click(function(){
		$('#gradHighSchool').slideDown();
	});
	$('#noHighSchool').click(function(){
		$('#gradHighSchool').slideUp();
	});

	$('#gradCollege').hide();
	$('#yesCollege').click(function(){
		$('#gradCollege').slideDown();
	});
	$('#noCollege').click(function(){
		$('#gradCollege').slideUp();
	});

	$('#military').hide();
	$('#yesMilitary').click(function(){
		$('#military').slideDown();
	});
	$('#noMilitary').click(function(){
		$('#military').slideUp();
	});

	$('#discharged').hide();
	$('#noHonorable').click(function(){
		$('#discharged').slideDown();
	});
	$('#yesHonorable').click(function(){
		$('#discharged').slideUp();
	});

	$('#startdate').datepicker({
        minDate: 0
    });

	$('#priorstartdate').datepicker({
        maxDate: 0
    });

	$('#workStartedDate').datepicker({
        maxDate: 0
    });

	$('#workEndDate').datepicker();

	$('#workStartedDate').change( function(){
        var date = $('#workStartedDate').datepicker('getDate');
        $('#workEndDate').datepicker('option', 'minDate', date);
        $('#workEndDate').datepicker('option', 'maxDate', 0);
    });

	$('#highschoolDate').datepicker({
		maxDate: 0
	});

	$('#collegeDate').datepicker({
		maxDate: 0
	});

	$('#milstartdate').datepicker({
        maxDate: 0
    });

	$('#milenddate').datepicker();

	$('#milstartdate').change( function(){
        var date = $('#milstartdate').datepicker('getDate');
        $('#milenddate').datepicker('option', 'minDate', date);
        $('#milenddate').datepicker('option', 'maxDate', 0);
    });


	$("#testForm0").validate({
		rules: {
			firstname: "required",
			lastname: "required",
			address: "required",
			city: "required",
			zipcode:{
				required: true,
				minlength: 5
			},
			phone: {
				required: true,
				minlength: 14
			},
			email:{
				required: true,
				email: true
			}, 
			ssn:{
				required: true,
				minlength: 11
			},
			date: "required",
			workdate: "required",
			felonyExplination: "required"
		},
		messages: {
			firstname: {
				required: "First name cannot be empty"
			},
			lastname:{
				required: "Last name cannot be empty"
			},
			address: {
				required: "Address cannot be empty"
			},
			city: {
				required: "City cannot be empty"
			},
			zipcode: {
				required: "Zipcode cannot be empty",
				minlength: "Enter a valid zip code as 12345"
			},
			phone: {
				required: "Phone number cannot be empty",
				minlength: "Enter a valid phone number as (123) 123-1234"
			},
			email:{
				required: "Email cannnot be empty"
			},
			ssn: {
				required: "Social Security Number cannnot be empty",
				minlength: "Enter a valid SSN as: 123-45-6789"
			},
			date:{
				required: "Date Available cannot be empty"
			},
			workdate:{
				required: "Date you last worked for the company cannot be empty"
			},
			felonyExplination:{
				required: "Explination for felony cannot be empty"
			}
		}
	})
	
	
	$("#testForm1").validate({
		rules:{
			company: "required",
			address: "required",
			city: "required",
			phone: {
				required: true,
				minlength: 14
			},
			title: "required",
			startdate: "required",
			enddate: "required",
			leave: "required",
			name1: "required",
			rel1: "required",
			cmp1: "required",
			phn1: {
				required: true,
				minlength: 14
			},
			name2: "required",
			rel2: "required",
			cmp2: "required",
			phn2: {
				required: true,
				minlength: 14
			},
			name3: "required",
			rel3: "required",
			cmp3: "required",
			phn3: {
				required: true,
				minlength: 14
			}
		},
		messages:{
			company:{
				required: "Company name cannot be blank"
			},
			address:{
				required: "Address cannot be blank"
			},
			city:{
				required: "City cannot be blank"
			},
			phone: {
				required: "Phone number cannot be empty",
				minlength: "Enter a valid phone number as (123) 123-1234"
			},
			title:{
				required: "Job title cannot be blank"
			},
			startdate:{
				required: "Start date cannot be blank"
			},
			enddate:{
				required: "End date cannot be blank"
			},
			leave:{
				required: "Reason for leave cannot be blank"
			},
			name1:{
				required: "Referances name cannot be blank"
			},
			rel1:{
				required: "Referances relationship cannot be blank"
			},
			cmp1:{
				required: "Referances company be blank"
			},
			phn1:{
				required: "Referances phone cannot be blank",
				minlength: "Enter a valid phone number as (123) 123-1234"
			},
			name2:{
				required: "Referances name cannot be blank"
			},
			rel2:{
				required: "Referances relationship cannot be blank"
			},
			cmp2:{
				required: "Referances company be blank"
			},
			phn2:{
				required: "Referances phone cannot be blank",
				minlength: "Enter a valid phone number as (123) 123-1234"
			},
			name3:{
				required: "Referances name cannot be blank"
			},
			rel3:{
				required: "Referances relationship cannot be blank"
			},
			cmp3:{
				required: "Referances company be blank"
			},
			phn3:{
				required: "Referances phone cannot be blank",
				minlength: "Enter a valid phone number as (123) 123-1234"
			}
		}
	});
	$("#testForm2").validate({
		rules:{
			highschool: "required",
			highaddress: "required",
			highgrad: "required",
			diploma: "required",
			college: "required",
			collegeaddress: "required",
			collegegrad: "required",
			degree: "required"
		},
		messages: {
			highschool:{
				required: "Highschool name cannot be blank"
			},
			highaddress:{
				required: "Address cannot be blank"
			},
			highgrad:{
				required: "Graduation date cannot be blank"
			},
			diploma:{
				required: "Diploma cannot be blank"
			},
			college:{
				required: "College name cannot be blank"
			},
			collegeaddress:{
				required: "Address cannot be blank"
			},
			collegegrad:{
				required: "Graduation date cannot be blank"
			},
			degree:{
				required: "Degree cannot be blank"
			}
		}
	});
	$("#testForm3").validate({
		rules:{
			startdate: "required",
			enddate: "required",
			discharge: "required",
		},
		messages:{
			startdate: {
				required: "Start date cannot be blank"
			},
			enddate:{
				required: "End date cannot be blank"
			},
			discharge:{
				required: "Reason for discharge cannot be blank"
			}
		}
	});
	$("#testForm4").validate({
		rules:{
			sign: "required"
		},
		messages:{
			sign:{
				required: "Please enter signature to submit"
			}
		}
	});


	$("#tabs").tabs({
		
		disabled: [ 1, 2, 3, 4 ],
		active: 0,
		heightStyle: "fill"
		
	});
	
	$("#tab0submit").button();
	$("#tab0submit").click(function(){
		
		if( $("#testForm0").valid() ){
			$("#tabs").tabs({
				disabled: [ 0, 2, 3, 4 ],
				active: 1
			});
		}
		
	});
	
	
	$("#tab1submit").button();
	$("#tab1submit").click(function(){
		
		if( $("#testForm1").valid() ){
			$("#tabs").tabs({
				disabled: [ 0, 1, 3, 4 ],
				active: 2
			});
		}
		
	});	
	
	$("#tab2submit").button();
	$("#tab2submit").click(function(){
		
		if( $("#testForm2").valid() ){
			$("#tabs").tabs({
				disabled: [ 0, 1, 2, 4 ],
				active: 3
			});
		}
		
	});	
	
	$("#tab3submit").button();
	$("#tab3submit").click(function(){
		
		if( $("#testForm3").valid() ){
			$("#tabs").tabs({
				disabled: [ 0, 1, 2, 3 ],
				active: 4
			});
		}
		
	});	
	$("#tab4submit").button();
	$("#tab4submit").click(function(){
		
		if( $("#testForm4").valid() ){
			
			// bring up a jqueryui confirm dialog
			$("#confirm").dialog( "open");
		}
		
	});
	
});