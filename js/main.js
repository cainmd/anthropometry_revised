//Notes: need to div CC and AC SD by 2! Different paper. Done for this but not in excel
//Can check values too
   
//will need to change foot length to schulz...not an error message

/*
if (window.hasOwnProperty('jQuery') === false) {
     // NOTE: It also needs to be version 1.7.2. I have had trouble getting it
     // to work with "newer" versions of jQuery, and I'm not sure why yet ...
        throw new Error('jQuery is missing.');
    }
*/

    
var $ = window.jQuery;

var s3dbURL = "https://uab.s3db.org/s3db/";
var key;

//used to determine values in maceration columns
var step;
var liveBorn = false;

var stringer;
//keep adding text
var textString = "";

var expectedRange=[];
var correctedRange=[];

var trimmedExpected =[];
var trimmedCorrected=[];

var trimmedCorrectedSD=[];
var trimmedExpectedSD=[];

var midPercentiles = [];
var lowPercentiles = [];
var highPercentiles = [];

var cmidPercentiles = [];
var clowPercentiles = [];
var chighPercentiles = [];
//need to know if working on expected or corrected
var iterations = 0;
//used to determine best fit parameter (HC, FL, BW)...which location in table
var useDet;
//what is the actual value of our parameter and compare it to the ranges
var detEntry;
var rangeMeas;

var cleaned = false;
var dataSubmitted = false;
var form1 = document.getElementById("form1");


//2 ages for live vs stillborn
var lvAge = 0;
var GAA = 0;
var detAge;

var currentRange;
var temp = 43;
var tiny = false;
var preemie = false;
//buttons

var submit = document.getElementById("submit");
var saveResults = document.getElementById("saveResults");
var loginButton = document.getElementById("loginButton");
var submitLogin = document.getElementById("submitLogin");
var logoutButton = document.getElementById("logoutButton");
var exitButton = document.getElementById("exitLogin");
//checkboes

//if preemie, use GA
var lvBirth = document.getElementById("livebirth");

var cleanReport = document.getElementById("cleanReport");
//add GA to document

//if less than 40 weeks.
var GA = document.getElementById("GA");
var age = document.getElementById("age");

//get weights and measurements
var FL = document.getElementById("FL");
var CR = document.getElementById("CR");
var CH = document.getElementById("CH");
var HC = document.getElementById("HC");
var CC = document.getElementById("CC");
var AC = document.getElementById("AC");
var bodyWeight = document.getElementById("bodyweight");
var BW = document.getElementById("BW");
var LVW = document.getElementById("LVW");
var LUW = document.getElementById("LUW");
var HW = document.getElementById("HW");
var TW = document.getElementById("TW");
var SW = document.getElementById("SW");
var KW = document.getElementById("KW");
var AW = document.getElementById("AW");

//var AB = document.getElementById("AB");
var AB = "";
var WA = "";
//var WA = document.getElementById("WA");

var detA = document.getElementById('detAge');
var det_placenta = document.getElementById('placenta_type');
//additional save values
var geneticsInfo = document.getElementById("genetics");
var caseNumber = document.getElementById("caseNumber");
var culture = document.getElementById("culture");
var disorder = document.getElementById("disorder");

var removable = document.getElementById("removable");
var hidden = document.getElementById("hiddenBlock");
var hidden2 = document.getElementById("hiddenBlock2");
var removable2 = document.getElementById("removable2");


var is_placenta = false;

//select box values below

var mac = document.getElementById("maceration");
var gend = document.getElementById("gender");
var rac = document.getElementById("race");
var gender;
var race;

//
var labels = ["Foot Length (cm)", "Crown Rump Length (cm)", "Crown Heel Length (cm)", "Head Circumference (cm)", "Chest Circumference (cm)", "Abdominal Circumference (cm)", "Body Weight (g)", "Brain Weight (g)", 
"Liver Weight (g)", "Lung Weight (g)", "Heart Weight (g)", "Thymus Weight (g)", "Spleen Weight (g)", "Kidney Weight (g)", "Adrenal Weight (g)"];

var actualRange;



var userName = document.getElementById("userName");
var password = document.getElementById("password");




$(document).ready(function () {
    //help boxes
    //localStorage.setItem("user", user);
    if (localStorage.getItem("key") != null) {
        //var key = localStorage.getItem("key");
        //s3dbc.setKey(key);
        //added 1/31
          //  $('#removeLogin').fadeOut('fast');
          //  $('#hiddenLogin').fadeOut('fast');
          //  $('#loggedInCurrently').fadeTo('fast', 1);

    }

});

//hide and show parts of the form
lv_born_button.onclick = function () {
    
      //  GA_div.style.display = 'none';
        $('#GA_div').hide();
		$('#GA_div_2').hide();
		$('#GA_div_3').hide();
		//removable2.style.display = 'none'
		$('#lv_born_div').show();
		$('#weight_form').show();
		$('#general_fetal_data').show();
        $('#submit_field').show();
		$('#LV_div_2').show();
		$('#placenta_div_1').hide();
		$('#placenta_div_2').hide();
		
		is_placenta = false;
		liveBorn = true;
        preemie = false;
		GA = 0;
};

preemie_button.onclick = function() {
	    $('#lv_born_div').hide();
        $('#GA_div').show();
		$('#GA_div_2').hide();
		$('#GA_div_3').show();
        $('#weight_form').show();
		$('#general_fetal_data').show();
		$('#placenta_div_1').hide();
		$('#placenta_div_2').hide();
		
		//removable2.style.display = 'none'
		//lv_born_div.style.display = 'none';
        $('#submit_field').show();
		liveBorn = true;
	    preemie = true;
		age = 0;
		is_placenta = false;
}
GA_button.onclick = function () {
		$('#lv_born_div').hide();
        $('#GA_div').show();
		$('#GA_div_2').show();
		$('#GA_div_3').show();
        $('#weight_form').show();
		$('#general_fetal_data').show();
		$('#placenta_div_1').hide();
		$('#placenta_div_2').hide();
		is_placenta = false;
		//removable2.style.display = 'none'
		//lv_born_div.style.display = 'none';
        $('#submit_field').show();
		preemie = false;
		liveBorn = false;	
		age = 0;
}

placenta_button.onclick = function () {
		$('#lv_born_div').hide();
		$('#GA_div').hide();
		$('#GA_div_2').hide();
		$('#GA_div_3').hide();
        $('#weight_form').hide();
		$('#general_fetal_data').hide();
		$('#submit_field').show();
		$('#placenta_div_1').show();
		$('#placenta_div_2').show();
		is_placenta = true;
		age = 0;
		GA = 0;
}


cleanReport.onclick = function () {
    if (cleaned == true) {
        cleaned = false;
    }
    else { cleaned = true; }
}
submitLogin.onclick = function () {
    loginUser();
    return false;
};
submit.onclick = function(){resetUse ()};

//{resetUse ()};
saveResults.onclick = function () { testmyDB() };
loginButton.onclick = function () { loadLoginForm() };

logoutButton.onclick = function () { logoutProc();  }
exitButton .onclick = function(){
    $('#removeLogin').fadeTo('fast', 1);
     //document.getElementById('loginArea').style.top = '2%';
     $('#hiddenLogin').fadeout('fast');

}



var calcTwoSD = function (myMean, mySD, index, tableID) {
    //broadened to include schulz...if checked then
    //index is determined by the evaluation parameter (foot, weight, etc)
    
	var mini;
    var maxi
    switch (tableID) {
        //use maroun GAA table
		case 0:
            mini = dataTable[myMean][index] - dataTable[mySD][index] * 2;
            maxi = dataTable[myMean][index] + dataTable[mySD][index] * 2;
			
            break;
		//use live table
        case 1:
            mini = liveBirth[myMean][index] - liveBirth[mySD][index] * 2;
            maxi = liveBirth[myMean][index] + liveBirth[mySD][index] * 2;
            break;

    }
	
    return [mini, maxi];
}


var resetUse = function () {

    textString = "";
    $('#report-output').text("");
    $('#add_table').empty();
    
    actualRange = [FL.value, CR.value, CH.value, HC.value, CC.value, AC.value, bodyWeight.value, BW.value, LVW.value, LUW.value, HW.value, TW.value, SW.value, KW.value, AW.value];
	
    gender = gend.options[gend.selectedIndex].value;
    race = rac.options[rac.selectedIndex].value;
    //var maceration = mac.options[mac.selectedIndex].value;

    
//	checkValues();

    if (liveBorn == false && is_placenta == false) {
        
        detAge = detA.options[detA.selectedIndex].value;
        defineAgeParams(detAge);
		//moved
		GAA = GA.value;
		useGA(GAA);
        
	}
    //live borns below
    else if (liveBorn == true && preemie == true && is_placenta == false){
			
			detAge = detA.options[detA.selectedIndex].value;
			defineAgeParams(detAge);
			//moved
			GAA = GA.value;
			//pull_preemie_percentiles(0, GA.value, GAA);
			preemie_birth(GAA);
							
		}
	
        //this uses months
    else if (liveBorn == true && preemie == false && is_placenta == false) {
        detAge = detA.options[detA.selectedIndex].value;
        defineAgeParams(detAge);        
        
		lvAge = age.value;
        useLive(lvAge, 0);

        }
  
	else {
		var placenta_age = document.getElementById("placenta_age").value;
		var placenta_type = det_placenta.options[det_placenta.selectedIndex].value;
		
		evaluate_placenta(placenta_age, placenta_type);
	}
	if (is_placenta == false) {
		generate_report();
		document.getElementById('report-output').style.display = 'block';	
	}
}

var stop = function () {
    
};




 $(document.body).keyup(function (evt) {
       
 // This function adds hotkeys so that the user doesn't have to scroll
         // all the way to the top and click the button in order to inspect a
         // freshly generated report. I will add support for touch gestures in
         // the near future when I can obtain a tablet to test with.
            if ((evt.which === 13) && ($('textarea:visible').length === 0)) {
             // The user pressed "Enter".
                //evt.preventDefault();
                //$('#generate-report').click();
            } 
			else if (evt.which === 27) {
             // The user pressed "Escape".
				document.getElementById('report-output').style.display = 'none';
                //it reaches here but doesn't close display!!!
               
            }
            return
 });





 

 var generate_expected = function () {

	
     trimmedExpected = trimmer(expectedRange[0]);
     trimmedExpectedSD = trimmer(expectedRange[1]);

     for (var i = 0; i < labels.length; i++) {
         //store new range for actual values and text	
         //trimmedExpected, trimmedCorrected
         //if (cleaned == false || (cleaned == true && actualRange[i] != "")) {

             //$('#report-output').(expectedRange[0][i]);
             // \n for new paragraph and append
             //currentRange = calcTwoSD("M" + GA.value, "SD" + GA.value, i);
			 
             if (liveBorn == false) {
                 
				 textString = textString + "\r\n" + labels[i] + " " + actualRange[i] + " " + "(Mean:" + " " + trimmedExpected[i] + " with 95% range of" + " " + Math.round([trimmedExpected[i] - trimmedExpectedSD[i] * 2] * 10) / 10 + " - " + Math.round([trimmedExpected[i] + trimmedExpectedSD[i] * 2] * 10) / 10 + ")";
             }
             else {
				 if (preemie == true){
				 pull_preemie_percentiles ();
				 }
				 else {
				 pull_live_percentiles ();
				 }				 
					 
                 if (labels[i] == "Crown Heel Length (cm)") {
                     
					 textString = textString + "\r\n" + labels[i] + " " + actualRange[i] + " " + "(Mean:" + " " + midPercentiles[0] + " with 3rd and 97th percentiles of  " + lowPercentiles[0] + " to " + highPercentiles[0] + ")";
                 }
                 else if (labels[i] == "Head Circumference (cm)") {
                     textString = textString + "\r\n" + labels[i] + " " + actualRange[i] + " " + "(Mean:" + " " + midPercentiles[1] + " with 3rd and 97th percentiles of  " + lowPercentiles[1] + " to " + highPercentiles[1] + ")";

                 }

                 else if (labels[i] == "Body Weight (g)") {
                     textString = textString + "\r\n" + labels[i] + " " + actualRange[i] + " " + "(Mean:" + " " + midPercentiles[2] + " with 3rd and 97th percentiles of  " + lowPercentiles[2] + " to " + highPercentiles[2] + ")";

                 }
				 else if (labels[i] == "Chest Circumference (cm)") {
                     textString = textString + "\r\n" + labels[i] + " " + actualRange[i] + " " + "(Mean:" + " " + midPercentiles[3] + " with 3rd and 97th percentiles of  " + lowPercentiles[3] + " to " + highPercentiles[3] + ")";

                 }
				 else if (labels[i] == "Abdominal Circumference (cm)") {
                     textString = textString + "\r\n" + labels[i] + " " + actualRange[i] + " " + "(Mean:" + " " + midPercentiles[4] + " with 3rd and 97th percentiles of  " + lowPercentiles[4] + " to " + highPercentiles[4] + ")";

                 }
				 
                 /*
				 else if (labels[i] == "Chest Circumference (cm)" || labels[i] == "Abdominal Circumference (cm)") {
                     textString = textString + "\r\n" + labels[i] + " " + actualRange[i] + " " + "(Mean:" + " " + trimmedExpected[i] + "--Ranges not available at this time)";

                 }
				 */
                 else {
                     textString = textString + "\r\n" + labels[i] + " " + actualRange[i] + " " + "(Mean:" + " " + trimmedExpected[i] + " with 95% range of" + " " + Math.round([trimmedExpected[i] - trimmedExpectedSD[i] * 2] * 10) / 10 + " - " + Math.round([trimmedExpected[i] + trimmedExpectedSD[i] * 2] * 10) / 10 + ")";
                 }
             };
         //}
     }

 }

 var generate_corrected = function () {


     trimmedCorrected = trimmer(correctedRange[0]);
     trimmedCorrectedSD = trimmer(correctedRange[1]);
	 
     if (liveBorn == false || preemie == true) {
         textString = textString + "\r\n" + "\r\n" + "Most compatible measurements for :" + " " + GAA + " " + "weeks" + "\r\n"
     }
	 
     for (var i = 0; i < labels.length; i++) {
         //store new range for actual values and text	
         //currentRange = calcTwoSD("M" + GA.value, "SD" + GA.value, i);
         if (cleaned == false || (cleaned == true && actualRange[i] != "")) {

             if (liveBorn == false) {
                 textString = textString + "\r\n" + labels[i] + " " + actualRange[i] + " " + "(Mean:" + " " + trimmedCorrected[i] + " with 95% range of" + " " + Math.round([trimmedCorrected[i] - trimmedCorrectedSD[i] * 2] * 10) / 10 + " - " + Math.round([trimmedCorrected[i] + trimmedCorrectedSD[i] * 2] * 10) / 10 + ")";
             }
             else if (preemie == true || liveBorn == true){
                 if (preemie == true){
				 pull_preemie_percentiles_corrected ();
				 }
				 else {
				 pull_corrected_live_percentiles ();
				 }
				 
				 if (labels[i] == "Crown Heel Length (cm)") {
                     textString = textString + "\r\n" + labels[i] + " " + actualRange[i] + " " + "(Mean:" + " " + cmidPercentiles[0] + " with 3rd and 97th percentiles of  " + clowPercentiles[0] + " to " + chighPercentiles[0] + ")";
                 }
                 else if (labels[i] == "Head Circumference (cm)") {
                     textString = textString + "\r\n" + labels[i] + " " + actualRange[i] + " " + "(Mean:" + " " + cmidPercentiles[1] + " with 3rd and 97th percentiles of  " + clowPercentiles[1] + " to " + chighPercentiles[1] + ")";

                 }

                 else if (labels[i] == "Body Weight (g)") {
                     textString = textString + "\r\n" + labels[i] + " " + actualRange[i] + " " + "(Mean:" + " " + cmidPercentiles[2] + " with 3rd and 97th percentiles of  " + clowPercentiles[2] + " to " + chighPercentiles[2] + ")";

                 }
				 else if (labels[i] == "Chest Circumference (cm)") {
                     textString = textString + "\r\n" + labels[i] + " " + actualRange[i] + " " + "(Mean:" + " " + cmidPercentiles[3] + " with 3rd and 97th percentiles of  " + clowPercentiles[3] + " to " + chighPercentiles[3] + ")";

                 }
				 else if (labels[i] == "Abdominal Circumference (cm)") {
                     textString = textString + "\r\n" + labels[i] + " " + actualRange[i] + " " + "(Mean:" + " " + cmidPercentiles[4] + " with 3rd and 97th percentiles of  " + clowPercentiles[4] + " to " + chighPercentiles[4] + ")";

                 }
				 
				 
				 else {
                     textString = textString + "\r\n" + labels[i] + " " + actualRange[i] + " " + "(Mean:" + " " + trimmedExpected[i] + " with 95% range of" + " " + Math.round([trimmedCorrected[i] - trimmedCorrectedSD[i] * 2] * 10) / 10 + " - " + Math.round([trimmedCorrected[i] + trimmedCorrectedSD[i] * 2] * 10) / 10 + ")";
                 }
                 
             }
			 /*
			 else if (labels[i] == "Chest Circumference (cm)" || labels[i] == "Abdominal Circumference (cm)") {
                     textString = textString + "\r\n" + labels[i] + " " + actualRange[i] + " " + "(Mean:" + " " + trimmedExpected[i] + "--Ranges not available at this time)";

                 }
                 else {
                     textString = textString + "\r\n" + labels[i] + " " + actualRange[i] + " " + "(Mean:" + " " + trimmedCorrected[i] + " with 95% range of" + " " + Math.round([trimmedCorrected[i] - trimmedCorrectedSD[i] * 2] * 10) / 10 + " - " + Math.round([trimmedCorrected[i] + trimmedCorrectedSD[i] * 2] * 10) / 10 + ")";
                 }
				 */
			 
			 
         }
	 
	 }

 }
 
 
 var trimmer = function (longArray) {
     
	 var maceration = mac.options[mac.selectedIndex].value;

     if (liveBorn == true) {
         maceration = "None to mild";
     }

     var count = 0;
     var trimmedReturn = [];
     var step = 1;
     for (var i = 0; i < longArray.length; i += step) {
         
         //after >=7
         if (i < 7) {
             trimmedReturn[count] = longArray[i];

         }
         else if (i == 7) {
             step = 3

             if (maceration === "None to mild") {
                 trimmedReturn[count] = longArray[i];

             }
             else if (maceration == "Moderate") {
                 i = i + 1;

                 trimmedReturn[count] = longArray[i];
             }
             else {
                 i = i + 2;
                 trimmedReturn[count] = longArray[i];
             }
         }
         else {


             trimmedReturn[count] = longArray[i];

         }

         count++;
     }
     return trimmedReturn;

 }

generate_report = function () {
     // This function joins the output from each section's own generating
     // function as text and puts that text into the designated textarea.
    
	 var compatible = true;
     generate_expected();
	 
     if (detAge != "None" && GAA != GA.value) {
         compatible = false;
 		 generate_corrected();
         document.getElementById('report-output').style.height = "fit-content";
     }
	 else if (detAge != "None" && lvAge != age.value){
		 compatible = false;
 		 generate_corrected();
         document.getElementById('report-output').style.height = "fit-content";
	 }
    
	
     if (GAA <= 99) {
         $('#report-output').text("The expected measurements for:" + " " + GA.value + " " + "weeks" + "\r\n" + textString);
     }
	 
     else if (liveBorn == true && preemie == false) {
         $('#report-output').text("The expected measurements for:" + " " + age.value + " " + "months" + "\r\n" + textString);
     }

	 
     add_table(compatible);
 };


add_table = function (compatible) { 
	
	
	var content = "<table class = 'table-striped'>"

		if (liveBorn == false || preemie == true){	
			content += '<tr><th>' + 'Measurement' + '</th><th>' + 'Actual values' + '</th><th>' + 'Expected Means (' + GA.value + ' weeks)' +'</th><th>' + 
		'SD' + '</th><th>' + 'Min' + '</th><th>' + 'Max' + '</th>';
			
			//need to define compatible
			if (compatible == false) {
			content += '<th>' + 'Compatible mean (' + GAA + ' weeks)' + '</th><th>' + 'SD' + '</th><th>' + 'Min' + '</th><th>' + 'Max' + '</th></tr>';	
			}
			else{
				content += '</tr>'
			}
		}
		else {
			content += '<tr><th>' + 'Measurement' + '</th><th>' + 'Actual values' + '</th><th>' + 'Expected Means (' + age.value + ' months)' + '</th><th>' + 
		'SD' + '</th><th>' + 'Min' + '</th><th>' + 'Max' + '</th>';
			
			//need to define compatible
			if (compatible == false) {
			content += '<th>' + 'Compatible mean (' + lvAge + ' months)' + '</th><th>' + 'SD' + '</th><th>' + 'Min' + '</th><th>' + 'Max' + '</th></tr>';	
			}
			else{
				content += '</tr>'
			}
			
		}
	
	for (var i = 0; i < labels.length; i++){
		
		if (liveBorn == true){
			
			var percentile_reference = 0;
			
		
			if (compatible == true){
				
				switch (labels[i]){
				case "Crown Heel Length (cm)":
				case "Head Circumference (cm)":
				case "Body Weight (g)":
					
					if (labels[i] == "Crown Heel Length (cm)"){
						percentile_reference  = 0;
					}
					else if (labels [i] == "Head Circumference (cm)"){
						percentile_reference = 1;
					}
					
					else {
						percentile_reference = 2;
					}
					
					
					if (actualRange[i] != ""){	
					//switch case with preemie and live birth
					
					
						if (actualRange[i] > highPercentiles[percentile_reference] || actualRange[i] < lowPercentiles[percentile_reference]){ 
							content += '<tr><td><font color="red">' + labels[i] + '</td><td>' + actualRange [i] + '</td><td>' + midPercentiles[percentile_reference] + '</td><td>' + "--" + '</td><td>' + lowPercentiles[percentile_reference] + '</td><td>' + highPercentiles[percentile_reference] + '</font></td></tr>';
						}
						else {
							content += '<tr><td>' + labels[i] + '</td><td>' + actualRange [i] + '</td><td>' + midPercentiles[percentile_reference] + '</td><td>' + "--" + '</td><td>' + lowPercentiles[percentile_reference] + '</td><td>' + highPercentiles[percentile_reference] + '</td></tr>';
						}
					}
					else {
							content += '<tr><td>' + labels[i] + '</td><td>' + actualRange [i] + '</td><td>' + midPercentiles[percentile_reference] + '</td><td>' + "--" + '</td><td>' + lowPercentiles[percentile_reference] + '</td><td>' + highPercentiles[percentile_reference] + '</td></tr>';
					}
					break;
				
				default:
				//if not CH, HC, or BW
					if (preemie == false && labels[i] == "Abdominal Circumference (cm)" || preemie == false && labels [i] == "Chest Circumference (cm)"){
						if (labels[i] == "Abdominal Circumference (cm)") {
							percentile_reference  = 3;
								
						}
						else {
							percentile_reference  = 4;
						
						}
						
						if (actualRange[i] != ""){	
					//switch case with preemie and live birth
					
					
							if (actualRange[i] > highPercentiles[percentile_reference] || actualRange[i] < lowPercentiles[percentile_reference]){ 
								content += '<tr><td><font color="red">' + labels[i] + '</td><td>' + actualRange [i] + '</td><td>' + midPercentiles[percentile_reference] + '</td><td>' + "--" + '</td><td>' + lowPercentiles[percentile_reference] + '</td><td>' + highPercentiles[percentile_reference] + '</font></td></tr>';
							}
							else {
								content += '<tr><td>' + labels[i] + '</td><td>' + actualRange [i] + '</td><td>' + midPercentiles[percentile_reference] + '</td><td>' + "--" + '</td><td>' + lowPercentiles[percentile_reference] + '</td><td>' + highPercentiles[percentile_reference] + '</td></tr>';
							}
						}
						else {
								content += '<tr><td>' + labels[i] + '</td><td>' + actualRange [i] + '</td><td>' + midPercentiles[percentile_reference] + '</td><td>' + "--" + '</td><td>' + lowPercentiles[percentile_reference] + '</td><td>' + highPercentiles[percentile_reference] + '</td></tr>';
							}
					}
						
					
					else {
						if (actualRange[i] != ""){	
							//switch case with preemie and live birth
							
							if (actualRange[i] > trimmedExpected[i] + 2 * trimmedExpectedSD[i] || actualRange[i] < trimmedExpected[i] - 2 * trimmedExpectedSD[i]){ 
								content += '<tr><td><font color="red">' + labels[i] + '</td><td>' + actualRange [i] + '</td><td>' + trimmedExpected[i] + '</td><td>' + trimmedExpectedSD[i] + '</td><td>' + Math.round([parseFloat(trimmedExpected[i] - trimmedExpectedSD[i]*2)]) + '</td><td>' + Math.round([parseFloat(trimmedExpected[i] + trimmedExpectedSD[i]*2)]) + '</font></td></tr>';
							}
							else {
								content += '<tr><td>' + labels[i] + '</td><td>' + actualRange [i] + '</td><td>' + trimmedExpected[i] + '</td><td>' + trimmedExpectedSD[i] + '</td><td>' + Math.round([parseFloat(trimmedExpected[i] - trimmedExpectedSD[i]*2)]) + '</td><td>' + Math.round([parseFloat(trimmedExpected[i] + trimmedExpectedSD[i]*2)]) + '</td></tr>';
								
							}
						}
						else {
							content += '<tr><td>' + labels[i] + '</td><td>' + actualRange [i] + '</td><td>' + trimmedExpected[i] + '</td><td>' + trimmedExpectedSD[i] + '</td><td>' + Math.round([parseFloat(trimmedExpected[i] - trimmedExpectedSD[i]*2)]) + '</td><td>' + Math.round([parseFloat(trimmedExpected[i] + trimmedExpectedSD[i]*2)]) + '</td></tr>';
							
						}
					}
				}
			}
			else{
			//compatible == false
				switch (labels[i]){
				case "Crown Heel Length (cm)":
				case "Head Circumference (cm)":
				case "Body Weight (g)":
					if (labels[i] == "Crown Heel Length (cm)"){
						percentile_reference  = 0;
					}
					else if (labels [i] == "Head Circumference (cm)"){
						percentile_reference = 1;
					}
					else {
						percentile_reference = 2;
					}
					
					if (actualRange[i] != ""){	
					//switch case with preemie and live birth
					
					
						if (actualRange[i] > highPercentiles[percentile_reference] || actualRange[i] < lowPercentiles[percentile_reference]){ 
							content += '<tr><td><font color="red">' + labels[i] + '</td><td>' + actualRange [i] + '</td><td>' + midPercentiles[percentile_reference] + '</td><td>' + "--" + '</td><td>' + lowPercentiles[percentile_reference] + '</td><td>' + highPercentiles[percentile_reference] +  cmidPercentiles[percentile_reference] + '</td><td>' + "--" + '</td><td>' + clowPercentiles[percentile_reference] + '</td><td>' + chighPercentiles[percentile_reference] + '</font></td></tr>';
						}
						else {
							content += '<tr><td>' + labels[i] + '</td><td>' + actualRange [i] + '</td><td>' + midPercentiles[percentile_reference] + '</td><td>' + "--" + '</td><td>' + lowPercentiles[percentile_reference] + '</td><td>' + highPercentiles[percentile_reference] +  cmidPercentiles[percentile_reference] + '</td><td>' + "--" + '</td><td>' + clowPercentiles[percentile_reference] + '</td><td>' + chighPercentiles[percentile_reference] +'</td></tr>';
						}
					}
					else {
							content += '<tr><td>' + labels[i] + '</td><td>' + actualRange [i] + '</td><td>' + midPercentiles[percentile_reference] + '</td><td>' + "--" + '</td><td>' + lowPercentiles[percentile_reference] + '</td><td>' + highPercentiles[percentile_reference] +  cmidPercentiles[percentile_reference] + '</td><td>' + "--" + '</td><td>' + clowPercentiles[percentile_reference] + '</td><td>' + chighPercentiles[percentile_reference] +'</td></tr>';
					}
				
				
					break;
				default:
					if (preemie == false && labels[i] == "Abdominal Circumference (cm)" || preemie == false && labels [i] == "Chest Circumference (cm)"){
						if (labels[i] == "Abdominal Circumference (cm)") {
							percentile_reference  = 3;
								
						}
						else {
							percentile_reference  = 4;
						
						}
						if (actualRange[i] != ""){	
					//switch case with preemie and live birth
					
					
							if (actualRange[i] > highPercentiles[percentile_reference] || actualRange[i] < lowPercentiles[percentile_reference]){ 
								content += '<tr><td><font color="red">' + labels[i] + '</td><td>' + actualRange [i] + '</td><td>' + midPercentiles[percentile_reference] + '</td><td>' + "--" + '</td><td>' + lowPercentiles[percentile_reference] + '</td><td>' + highPercentiles[percentile_reference] + cmidPercentiles[percentile_reference] + '</td><td>' + "--" + '</td><td>' + clowPercentiles[percentile_reference] + '</td><td>' + chighPercentiles[percentile_reference] + '</font></td></tr>';
							}
							else {
								content += '<tr><td>' + labels[i] + '</td><td>' + actualRange [i] + '</td><td>' + midPercentiles[percentile_reference] + '</td><td>' + "--" + '</td><td>' + lowPercentiles[percentile_reference] + '</td><td>' + highPercentiles[percentile_reference] + cmidPercentiles[percentile_reference] + '</td><td>' + "--" + '</td><td>' + clowPercentiles[percentile_reference] + '</td><td>' + chighPercentiles[percentile_reference]+ '</td></tr>';
							}
						}
						else {
								content += '<tr><td>' + labels[i] + '</td><td>' + actualRange [i] + '</td><td>' + midPercentiles[percentile_reference] + '</td><td>' + "--" + '</td><td>' + lowPercentiles[percentile_reference] + '</td><td>' + highPercentiles[percentile_reference] + cmidPercentiles[percentile_reference] + '</td><td>' + "--" + '</td><td>' + clowPercentiles[percentile_reference] + '</td><td>' + chighPercentiles[percentile_reference]+ '</td></tr>';
							}
					}
					
					
					
					
					else {
						if (actualRange[i] != ""){	
							if (actualRange[i] > trimmedExpected[i] + 2 * trimmedExpectedSD[i] || actualRange[i] < trimmedExpected[i] - 2 * trimmedExpectedSD[i]){
								content += '<tr><td><font color="red">' + labels[i] + '</td><td>' + actualRange [i] + '</td><td>' + trimmedExpected[i] + '</td><td>' + trimmedExpectedSD[i] + '</td><td>' + Math.round([parseFloat(trimmedExpected[i] - trimmedExpectedSD[i]*2)]) + '</td><td>' + Math.round([parseFloat(trimmedExpected[i] + trimmedExpectedSD[i]*2)]) + '</td><td>' + trimmedCorrected[i] + '</td><td>' + trimmedCorrectedSD[i] + '</td><td>' + Math.round([parseFloat(trimmedCorrected[i] - trimmedCorrectedSD[i]*2)]) + '</td><td>' + Math.round([parseFloat(trimmedCorrected[i] + trimmedCorrectedSD[i]*2)]) + '</font></td></tr>';
							}
							else {
								content += '<tr><td>' + labels[i] + '</td><td>' + actualRange [i] + '</td><td>' + trimmedExpected[i] + '</td><td>' + trimmedExpectedSD[i] + '</td><td>' + Math.round([parseFloat(trimmedExpected[i] - trimmedExpectedSD[i]*2)]) + '</td><td>' + Math.round([parseFloat(trimmedExpected[i] + trimmedExpectedSD[i]*2)]) + '</td><td>' + trimmedCorrected[i] + '</td><td>' + trimmedCorrectedSD[i] + '</td><td>' + Math.round([parseFloat(trimmedCorrected[i] - trimmedCorrectedSD[i]*2)]) + '</td><td>' + Math.round([parseFloat(trimmedCorrected[i] + trimmedCorrectedSD[i]*2)]) + '</td></tr>';
								
							}
						}
						else {
								content += '<tr><td>' + labels[i] + '</td><td>' + actualRange [i] + '</td><td>' + trimmedExpected[i] + '</td><td>' + trimmedExpectedSD[i] + '</td><td>' + Math.round([parseFloat(trimmedExpected[i] - trimmedExpectedSD[i]*2)]) + '</td><td>' + Math.round([parseFloat(trimmedExpected[i] + trimmedExpectedSD[i]*2)]) + '</td><td>' + trimmedCorrected[i] + '</td><td>' + trimmedCorrectedSD[i] + '</td><td>' + Math.round([parseFloat(trimmedCorrected[i] - trimmedCorrectedSD[i]*2)]) + '</td><td>' + Math.round([parseFloat(trimmedCorrected[i] + trimmedCorrectedSD[i]*2)]) + '</td></tr>';
								
							}
					}
				}
			
			}
		}
		else {
		//still born output
		
			if (compatible == true){
				if (actualRange[i] != ""){	
					//switch case with preemie and live birth
					
					if (actualRange[i] > trimmedExpected[i] + 2 * trimmedExpectedSD[i] || actualRange[i] < trimmedExpected[i] - 2 * trimmedExpectedSD[i]){ 
						content += '<tr><td><font color="red">' + labels[i] + '</td><td>' + actualRange [i] + '</td><td>' + trimmedExpected[i] + '</td><td>' + trimmedExpectedSD[i] + '</td><td>' + Math.round([parseFloat(trimmedExpected[i] - trimmedExpectedSD[i]*2)]) + '</td><td>' + Math.round([parseFloat(trimmedExpected[i] + trimmedExpectedSD[i]*2)]) + '</font></td></tr>';
					}
					else {
						content += '<tr><td>' + labels[i] + '</td><td>' + actualRange [i] + '</td><td>' + trimmedExpected[i] + '</td><td>' + trimmedExpectedSD[i] + '</td><td>' + Math.round([parseFloat(trimmedExpected[i] - trimmedExpectedSD[i]*2)]) + '</td><td>' + Math.round([parseFloat(trimmedExpected[i] + trimmedExpectedSD[i]*2)]) + '</td></tr>';
						
					}
				}
				else {
					content += '<tr><td>' + labels[i] + '</td><td>' + actualRange [i] + '</td><td>' + trimmedExpected[i] + '</td><td>' + trimmedExpectedSD[i] + '</td><td>' + Math.round([parseFloat(trimmedExpected[i] - trimmedExpectedSD[i]*2)]) + '</td><td>' + Math.round([parseFloat(trimmedExpected[i] + trimmedExpectedSD[i]*2)]) + '</td></tr>';	
				}
			}
			else {
				//compatible  = false
				if (actualRange[i] != ""){	
					if (actualRange[i] > trimmedExpected[i] + 2 * trimmedExpectedSD[i] || actualRange[i] < trimmedExpected[i] - 2 * trimmedExpectedSD[i]){
						content += '<tr><td><font color="red">' + labels[i] + '</td><td>' + actualRange [i] + '</td><td>' + trimmedExpected[i] + '</td><td>' + trimmedExpectedSD[i] + '</td><td>' + Math.round([parseFloat(trimmedExpected[i] - trimmedExpectedSD[i]*2)]) + '</td><td>' + Math.round([parseFloat(trimmedExpected[i] + trimmedExpectedSD[i]*2)]) + '</td><td>' + trimmedCorrected[i] + '</td><td>' + trimmedCorrectedSD[i] + '</td><td>' + Math.round([parseFloat(trimmedCorrected[i] - trimmedCorrectedSD[i]*2)]) + '</td><td>' + Math.round([parseFloat(trimmedCorrected[i] + trimmedCorrectedSD[i]*2)]) + '</font></td></tr>';
					}
					else {
						content += '<tr><td>' + labels[i] + '</td><td>' + actualRange [i] + '</td><td>' + trimmedExpected[i] + '</td><td>' + trimmedExpectedSD[i] + '</td><td>' + Math.round([parseFloat(trimmedExpected[i] - trimmedExpectedSD[i]*2)]) + '</td><td>' + Math.round([parseFloat(trimmedExpected[i] + trimmedExpectedSD[i]*2)]) + '</td><td>' + trimmedCorrected[i] + '</td><td>' + trimmedCorrectedSD[i] + '</td><td>' + Math.round([parseFloat(trimmedCorrected[i] - trimmedCorrectedSD[i]*2)]) + '</td><td>' + Math.round([parseFloat(trimmedCorrected[i] + trimmedCorrectedSD[i]*2)]) + '</td></tr>';
						
					}
				}
				else {
						content += '<tr><td>' + labels[i] + '</td><td>' + actualRange [i] + '</td><td>' + trimmedExpected[i] + '</td><td>' + trimmedExpectedSD[i] + '</td><td>' + Math.round([parseFloat(trimmedExpected[i] - trimmedExpectedSD[i]*2)]) + '</td><td>' + Math.round([parseFloat(trimmedExpected[i] + trimmedExpectedSD[i]*2)]) + '</td><td>' + trimmedCorrected[i] + '</td><td>' + trimmedCorrectedSD[i] + '</td><td>' + Math.round([parseFloat(trimmedCorrected[i] - trimmedCorrectedSD[i]*2)]) + '</td><td>' + Math.round([parseFloat(trimmedCorrected[i] + trimmedCorrectedSD[i]*2)]) + '</td></tr>';
				}
			}
		}
	}

	content += "</table>"

	$('#add_table').append(content);
	$('#report-output').show();
		 
 
}
 
