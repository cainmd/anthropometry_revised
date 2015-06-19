
var liveBirthM = {
    //schulz  ROLLS TO 1 MO...
    //  Brain	liver	lungs		Heart		Thymus		Spleen		Kidneys		Adrenal

    M1: [460, 140, 64, 23, 7.8, 12, 34, 5.1],
    SD1: [47, 40, 21, 7, 5.3, 4, 9, 1.7],
    M2: [506, 160, 74, 27, 9.4, 15, 39, 5],
    SD2: [67, 46, 20, 7, 4.4, 5, 9, 1.6],
    M3: [567, 179, 89, 30, 10, 16, 45, 5],
    SD3: [81, 41, 23, 7, 5, 5, 10, 1.8],
    M4: [620, 195, 96, 31, 10, 17, 47, 4.9],
    SD4: [71, 41, 27, 7, 6, 5, 12, 2],
    M5: [746, 228, 93, 35, 12, 18, 54, 5.3],
    SD5: [91, 47, 18, 5, 7, 7, 11, 1.9],
    M6: [762, 259, 115, 40, 10, 20, 62, 5.2],
    SD6: [73, 58, 31, 8, 6, 7, 14, 2],
    M7: [767, 276, 118, 43, 12, 23, 69, 5.5],
    SD7: [32, 54, 33, 8, 9, 10, 14, 2.1],
    M8: [774, 285, 104, 44, 10, 20, 66, 5.4],
    SD8: [95, 57, 32, 8, 6, 7, 14, 2.3],
    M9: [820, 288, 109, 45, 10, 22, 67, 5.4],
    SD9: [49, 47, 33, 7, 4, 5, 16, 2],
    M10: [850, 300, 110, 46, 9, 24, 72, 5.7],
    SD10: [96, 69, 34, 6, 5, 11, 17, 2.1],
    M11: [875, 305, 130, 48, 19, 28, 76, 6.1],
    SD11: [89, 81, 31, 7, 4, 10, 19, 1.8],
    M12: [954, 325, 116, 50, 12, 28, 76, 6.3],
    SD12: [35, 39, 23, 6, 5, 7, 13, 2.2]

};

var liveBirthF = {

    M1: [433, 139, 64, 21, 6.6, 11, 31, 4.8],
    SD1: [59, 31, 27, 5, 4.9, 4, 8, 1.9],
    M2: [490, 159, 74, 26, 5.8, 14, 36, 4.7],
    SD2: [51, 31, 23, 6, 4.7, 5, 10, 1.4],
    M3: [525, 183, 81, 28, 9.7, 15, 42, 4.8],
    SD3: [89, 39, 14, 4, 6.9, 5, 12, 1.4],
    M4: [595, 204, 91, 30, 9, 17, 50, 4.6],
    SD4: [80, 49, 24, 6, 7.3, 5, 11, 2.1],
    M5: [725, 227, 102, 36, 13, 19, 52, 4.8],
    SD5: [62, 38, 22, 5, 5, 5, 13, 2.2],
    M6: [730, 242, 111, 37, 10, 18, 58, 4.6],
    SD6: [85, 58, 30, 7, 6, 8, 20, 1.5],
    M7: [750, 272, 111, 40, 10, 22, 65, 5.5],
    SD7: [92, 51, 38, 9, 8, 8, 14, 2.2],
    M8: [770, 276, 109, 41, 8, 20, 60, 5.3],
    SD8: [96, 54, 35, 7, 5, 9, 13, 2.3],
    M9: [810, 288, 105, 41, 9, 18, 62, 5.4],
    SD9: [82, 67, 28, 5, 5, 6, 10, 1.5],
    M10: [830, 284, 105, 43, 12, 25, 66, 5.7],
    SD10: [117, 48, 21, 7, 7, 11, 10, 1.7],
    M11: [875, 292, 125, 44, 15, 23, 68, 6.2],
    SD11: [64, 36, 31, 8, 8, 9, 14, 2],
    M12: [886, 315, 115, 49, 11, 27, 72, 6],
    SD12: [64, 38, 34, 6, 8, 9, 19, 1.4]



};

var CDCMHC = {

    //		5th		50th		95th	
    M0: [32.15, 35.81, 38.52],
    M1: [35.05, 38.20, 40.70],
    M2: [37.12, 39.93, 42.30],
    M3: [38.63, 41.21, 43.50],
    M4: [39.79, 42.21, 44.45],
    M5: [40.73, 43.03, 45.23],
    M6: [41.50, 43.72, 45.89],
    M7: [42.14, 44.31, 46.46],
    M8: [42.70, 44.82, 46.96],
    M9: [43.17, 45.27, 47.41],
    M10: [43.59, 45.67, 47.81],
    M11: [43.95, 46.02, 48.17],
    M12: [44.28, 46.35, 48.49]


};

var CDCFHC = {
    //		5th		50th		95th	
    M0: [32.25, 34.71, 37.65],
    M1: [34.73, 37.01, 39.70],
    M2: [36.52, 38.68, 41.20],
    M3: [37.84, 39.92, 42.34],
    M4: [38.86, 40.91, 43.24],
    M5: [39.69, 41.72, 43.99],
    M6: [40.39, 42.40, 44.63],
    M7: [40.98, 42.98, 45.19],
    M8: [41.49, 43.49, 45.68],
    M9: [41.93, 43.94, 46.11],
    M10: [42.32, 44.35, 46.50],
    M11: [42.67, 44.71, 46.86],
    M12: [42.98, 45.04, 47.19]

};


var CDCML = {

    //   		5th		50th		95th	
    M0: [45.57, 49.99, 54.31],
    M1: [50.64, 54.66, 58.98],
    M2: [54.25, 58.12, 62.49],
    M3: [57.01, 60.84, 65.28],
    M4: [59.29, 63.15, 67.66],
    M5: [61.26, 65.17, 69.76],
    M6: [63.01, 66.99, 71.66],
    M7: [64.60, 68.66, 73.40],
    M8: [66.05, 70.20, 75.02],
    M9: [67.41, 71.65, 76.54],
    M10: [68.67, 73.01, 77.97],
    M11: [69.86, 74.29, 79.32],
    M12: [70.98, 75.52, 80.62]


};

var CDCFL = {

    //		5th		50th		95th	
    M0: [45.58, 49.29, 53.77],
    M1: [49.72, 53.48, 57.68],
    M2: [52.83, 56.69, 60.77],
    M3: [55.31, 59.28, 63.34],
    M4: [57.42, 61.50, 65.59],
    M5: [59.28, 63.47, 67.61],
    M6: [60.97, 65.26, 69.47],
    M7: [62.52, 66.91, 71.19],
    M8: [63.95, 68.45, 72.80],
    M9: [65.30, 69.89, 74.33],
    M10: [66.57, 71.26, 75.78],
    M11: [67.78, 72.55, 77.16],
    M12: [68.93, 73.79, 78.49]


};

var CDCMWT = {
    //   		5th		50th		95th	
    M0: [2527, 3530, 4340],
    M1: [3370, 4441, 5439],
    M2: [4139, 5276, 6444],
    M3: [4830, 6032, 7351],
    M4: [5451, 6717, 8169],
    M5: [6008, 7336, 8906],
    M6: [6509, 7897, 9571],
    M7: [6959, 8404, 10169],
    M8: [7364, 8863, 10710],
    M9: [7728, 9279, 11197],
    M10: [8057, 9656, 11638],
    M11: [8354, 9998, 12038],
    M12: [8623, 10310, 12401]



};

var CDCFWT = {
    //		5th		50th		95th	
    M0: [2548, 3399, 4153],
    M1: [3221, 4171, 5074],
    M2: [3849, 4888, 5926],
    M3: [4429, 5545, 6705],
    M4: [4964, 6149, 7417],
    M5: [5457, 6703, 8069],
    M6: [5912, 7211, 8666],
    M7: [6332, 7679, 9214],
    M8: [6719, 8108, 9717],
    M9: [7076, 8504, 10181],
    M10: [7406, 8868, 10609],
    M11: [7711, 9205, 11005],
    M12: [7992, 9516, 11374]


};


var liveMale = {
    //      CC    AC
    M0: [35.1, 34],
    M1: [36.3, 35.1],
    M2: [39.6, 38.6],
    M3: [41.7, 40.6],
    M4: [42.9, 41.9],
    M5: [43.7, 42.7],
    M6: [44.5, 43.4],
    M7: [45, 43.9],
    M8: [45.5, 44.5],
    M9: [45.7, 44.7],
    M10: [46.2, 45],
    M11: [46.5, 45.2],
    M12: [47, 45.5]
};

var liveFemale = {
    //       CC    AC
    M0: [34.5, 33.5],
    M1: [35.8, 34.5],
    M2: [38.9, 38.1],
    M3: [40.6, 39.9],
    M4: [41.9, 41.1],
    M5: [42.7, 41.9],
    M6: [43.2, 42.7],
    M7: [43.7, 43.2],
    M8: [44.2, 43.7],
    M9: [44.7, 43.9],
    M10: [45.2, 44.2],
    M11: [45.5, 44.4],
    M12: [46, 44.7]


};


var useLive = function (valAge, time) {
    //liveBirth table
    var jumper = 0;
    if (time == 0) {

        expectedRange = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
        
		//populate the weights depending on gender
		for (k = 7; k <= 14; k++) {
            if (gender == "male") {

                expectedRange[0][k + jumper] = liveBirthM["M" + age.value][k - 7];
                expectedRange[1][k + jumper] = liveBirthM["SD" + age.value][k - 7];

            }
            else {
                expectedRange[0][k + jumper] = liveBirthF["M" + age.value][k - 7];
                expectedRange[1][k + jumper] = liveBirthF["SD" + age.value][k - 7];
            };
            jumper += 2;
        };
    };


    var ageM = "M" + valAge;
    var ageSD = "SD" + valAge;
    alert (detAge);
	if (detAge != "None"){
        if (gender == "male") {
            switch (detAge) {
                case "Body Length":
                    rangeMeas = [CDCML[ageM][0], CDCML["M" + lvAge][2]];
                    break;
                case "Body Weight":
                    rangeMeas = [CDCMWT[ageM][0], CDCMWT["M" + lvAge][2]];
                    break;
                case "Head Circumference":
                //alert (lvAge + " " + CDCMHC["M" + lvAge][2])
                    rangeMeas = [CDCMHC["M" + lvAge][0], CDCMHC["M" + lvAge][2]];
                    break;
            };
        }
        else {
            switch (detAge) {
                case "Body Length":
                    rangeMeas = [CDCFL["M" + lvAge][0], CDCFL["M" + lvAge][2]];
                    break;
                case "Body Weight":
                    rangeMeas = [CDCFWT["M" + lvAge][0], CDCFWT["M" + lvAge][2]];
                    break;
                case "Head Circumference":
                    rangeMeas = [CDCFHC["M" + lvAge][0], CDCFHC["M" + lvAge][2]];
                    break;
            };

        }
		
		determine_live_range(rangeMeas, ageM, ageSD);
	}
    
}

var determine_live_range = function (rangeMeas, myMean, mySD) {
    
        //for LIVE infants
        var jumper = 0;
    
        if (detEntry > rangeMeas[1] && lvAge < 12) {
            
			compatible = false;
            
                lvAge++;
                useLive(lvAge, 1);
        }
        
        else if (detEntry < rangeMeas[0] && lvAge > 1) {
            compatible = false;
                
				lvAge--;
                useLive(lvAge, 1);
                alert (lvAge);
        }

        else if (detEntry > rangeMeas[0] && detEntry < rangeMeas[1]){


            correctedRange = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

            for (k = 7; k <= 14; k++) {
                if (gender == "male") {
                    //start at 7

                    correctedRange[0][k + jumper] = liveBirthM[myMean][k - 7];
                    correctedRange[1][k + jumper] = liveBirthM[mySD][k - 7];
                }
                else {
                    correctedRange[0][k + jumper] = liveBirthF[myMean][k - 7];
                    correctedRange[1][k + jumper] = liveBirthF[mySD][k - 7];
                };
                jumper += 2;
            };
            //need to make between 12 and 43
            // correctedRange = [liveBirth[myMean], liveBirth[mySD]];
            //generate_report();
        }
		else {
			alert ("The case data is outside the range of the live birth tables");
			stop();
		}
		
    };

	
function pull_live_percentiles(compatible) {
    var oM = "M" + age.value;	
	
	

			if (gender == "Male"){
				midPercentiles[0] = CDCML[oM][1];
				midPercentiles[1] = CDCMHC[oM][1];
				midPercentiles[2] = CDCMWT[oM][1];
				midPercentiles[3] = liveMale[oM][0];
				midPercentiles[4] = liveMale[oM][1];
				
				lowPercentiles[0] = CDCML[oM][0];
				lowPercentiles[1] = CDCMHC[oM][0];
				lowPercentiles[2] = CDCMWT[oM][0];
				lowPercentiles[3] = "--";
				lowPercentiles[4] = "--";
				
				highPercentiles[0] = CDCML[oM][2];
				highPercentiles[1] = CDCMHC[oM][2];
				highPercentiles[2] = CDCMWT[oM][2];
                highPercentiles[3] = "--";
                highPercentiles[4] = "--";
                
			}
			else {
				midPercentiles[0] = CDCFL[oM][1];
				midPercentiles[1] = CDCFHC[oM][1];
				midPercentiles[2] = CDCFWT[oM][1];
				midPercentiles[3] = liveFemale[oM][0];
				midPercentiles[4] = liveFemale[oM][1];
				
				lowPercentiles[0] = CDCFL[oM][0];
				lowPercentiles[1] = CDCFHC[oM][0];
				lowPercentiles[2] = CDCFWT[oM][0];
				lowPercentiles[3] = "--";
				lowPercentiles[4] = "--";
				
				highPercentiles[0] = CDCFL[oM][2];
				highPercentiles[1] = CDCFHC[oM][2];
				highPercentiles[2] = CDCFWT[oM][2];
                highPercentiles[3] = "--";
                highPercentiles[4] = "--";
                
				
			}
		
}

function pull_corrected_live_percentiles (){
    var oM = "M" + age.value;	
	var nM = "M" + lvAge;
	

			if (gender == "Male"){
				midPercentiles[0] = CDCML[oM][1];
				midPercentiles[1] = CDCMHC[oM][1];
				midPercentiles[2] = CDCMWT[oM][1];
				midPercentiles[3] = liveMale[oM][0];
				midPercentiles[4] = liveMale[oM][1];
				
				lowPercentiles[0] = CDCML[oM][0];
				lowPercentiles[1] = CDCMHC[oM][0];
				lowPercentiles[2] = CDCMWT[oM][0];
				lowPercentiles[3] = "--";
				lowPercentiles[4] = "--";
				
				highPercentiles[0] = CDCML[oM][2];
				highPercentiles[1] = CDCMHC[oM][2];
				highPercentiles[2] = CDCMWT[oM][2];
                highPercentiles[3] = "--";
                highPercentiles[4] = "--";
                
				cmidPercentiles[0] = CDCML[nM][0];
				cmidPercentiles[1] = CDCML[nM][0];
				cmidPercentiles[2] = CDCML[nM][0];
				cmidPercentiles[3] = liveMale[nM][0];
				cmidPercentiles[4] = liveMale[nM][1];
				
				clowPercentiles[0] = CDCML[nM][0];
                clowPercentiles[1] = CDCMHC[nM][0];
                clowPercentiles[2] = CDCMWT[nM][0];
                clowPercentiles[3] = "--";
				clowPercentiles[4] = "--";
				
				chighPercentiles[0] = CDCML[nM][2];
                chighPercentiles[1] = CDCMHC[nM][2];
                chighPercentiles[2] = CDCMWT[nM][2];
				chighPercentiles[3] = "--";
				chighPercentiles[4] = "--";
						
			}
			else {
				midPercentiles[0] = CDCFL[oM][1];
				midPercentiles[1] = CDCFHC[oM][1];
				midPercentiles[2] = CDCFWT[oM][1];
				midPercentiles[3] = liveFemale[oM][0];
				midPercentiles[4] = liveFemale[oM][1];
				
				lowPercentiles[0] = CDCFL[oM][0];
				lowPercentiles[1] = CDCFHC[oM][0];
				lowPercentiles[2] = CDCFWT[oM][0];
				lowPercentiles[3] = "--";
				lowPercentiles[4] = "--";
				
				highPercentiles[0] = CDCFL[oM][2];
				highPercentiles[1] = CDCFHC[oM][2];
				highPercentiles[2] = CDCFWT[oM][2];
                highPercentiles[3] = "--";
                highPercentiles[4] = "--";
                
				cmidPercentiles[0] = CDCFL[nM][0];
				cmidPercentiles[1] = CDCFHC[nM][0];
				cmidPercentiles[2] = CDCFWT[nM][0];
				cmidPercentiles[3] = liveFemale[nM][0];
				cmidPercentiles[4] = liveFemale[nM][1];
				
				clowPercentiles[0] = CDCFL[nM][0];
                clowPercentiles[1] = CDCFHC[nM][0];
                clowPercentiles[2] = CDCFWT[nM][0];
                clowPercentiles[3] = "--";
				clowPercentiles[4] = "--";
				
				chighPercentiles[0] = CDCFL[nM][2];
                chighPercentiles[1] = CDCFHC[nM][2];
                chighPercentiles[2] = CDCFWT[nM][2];
				chighPercentiles[3] = "--";
				chighPercentiles[4] = "--";
				
			}
		
		
	
	
}
    



