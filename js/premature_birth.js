var preemieHC = {
    //	  3RD	50TH  97TH	
    M22: [16.8, 19.5, 22],
    M23: [18, 21, 23.5],
    M24: [19, 22, 25],
    M25: [20.2, 23, 26],
    M26: [21, 24.3, 27.1],
    M27: [22, 25.3, 28.2],
    M28: [23, 26, 29.2],
    M29: [24, 27.2, 30],
    M30: [25, 28, 31],
    M31: [25.8, 29, 32],
    M32: [26.5, 29.8, 33],
    M33: [27, 30.5, 33.8],
    M34: [28, 31.4, 34.6],
    M35: [28.5, 32, 35.3],
    M36: [29.2, 32.8, 36],
    M37: [30, 33.4, 36.7],
    M38: [30.7, 34, 37.3],
    M39: [31.2, 34.8, 38],
    M40: [32, 35.4, 38.5],
    M41: [32.5, 36, 39],
    M42: [33, 36.5, 39.6],
    M43: [33.5, 37, 40],
    M44: [34, 37.6, 40.6],
    M45: [34.7, 38, 41],
    M46: [35, 38.5, 41.5],
    M47: [35.4, 38.9, 42],
    M48: [36, 39.2, 42.2],
    M49: [36.3, 39.7, 42.5],
    M50: [36.7, 39.9, 42.7]

};

var preemieLength = {
    //	  3rd	50th  97th	
    M22: [24.6, 28.9, 33.7],
    M23: [26, 30.3, 35],
    M24: [27.5, 32, 36.8],
    M25: [29, 33.5, 38.2],
    M26: [30.2, 35, 39.8],
    M27: [31.8, 36.3, 41],
    M28: [33, 38, 42.5],
    M29: [34.2, 39, 43.9],
    M30: [35.8, 40.5, 45],
    M31: [37, 41.8, 46],
    M32: [38, 43, 47.3],
    M33: [39.2, 44, 48.2],
    M34: [40.4, 45.1, 49.5],
    M35: [41.7, 46, 50.5],
    M36: [42.8, 47, 51.5],
    M37: [43.9, 48, 52.5],
    M38: [45, 49, 53.2],
    M39: [45.8, 50, 54.3],
    M40: [46.8, 51, 55.2],
    M41: [47.7, 52, 56],
    M42: [48.6, 52.6, 57],
    M43: [49.3, 53.2, 57.8],
    M44: [50, 54.1, 58.5],
    M45: [51, 55, 59.4],
    M46: [51.6, 55.8, 60],
    M47: [52, 56.3, 60.8],
    M48: [52.8, 57, 61.5],
    M49: [53.3, 57.6, 62.1],
    M50: [54, 58.1, 63]


};

var preemieWT = {
    //	3rd	  50th	97th	Fenton
    M22: [310, 500, 620],
    M23: [400, 580, 800],
    M24: [450, 690, 920],
    M25: [500, 800, 1100],
    M26: [550, 900, 1270],
    M27: [600, 1000, 1400],
    M28: [680, 1150, 1630],
    M29: [740, 1300, 1870],
    M30: [850, 1500, 2100],
    M31: [1000, 1650, 2350],
    M32: [1130, 1850, 2600],
    M33: [1300, 2050, 2880],
    M34: [1500, 2300, 3140],
    M35: [1700, 2500, 3400],
    M36: [1980, 2800, 3690],
    M37: [2150, 3000, 3900],
    M38: [2300, 3200, 4100],
    M39: [2500, 3400, 4380],
    M40: [2610, 3600, 4590],
    M41: [2800, 3750, 4800],
    M42: [2950, 3950, 5000],
    M43: [3100, 4100, 5200],
    M44: [3230, 4300, 5400],
    M45: [3380, 4500, 5600],
    M46: [3500, 4650, 5800],
    M47: [3620, 4800, 6000],
    M48: [3750, 4980, 6200],
    M49: [3900, 5130, 6400],
    M50: [4080, 5300, 6600]


};

var preemie_birth = function (valGAA) {
	//HC, length, wt will be different
	useGA(valGAA);
	
}

var define_preemie_params = function (detAge) {
	if (detAge == "Foot Length"){
		useDet = 0;
        detEntry = parseFloat(FL.value);
	}
	if (detAge == "Body Weight"){
		
	}
	//else use Fenton charts
	
}

var pull_preemie_percentiles = function (){
				
				p_age = "M" + GA.value; 
				//[0]
                midPercentiles[0] = preemieLength[p_age][1];
                midPercentiles[1] = preemieHC[p_age][1];
                midPercentiles[2] = preemieWT[p_age][1];
                lowPercentiles[0] = preemieLength[p_age][0];
                lowPercentiles[1] = preemieHC[p_age][0];
                lowPercentiles[2] = preemieWT[p_age][0];
                highPercentiles[0] = preemieLength[p_age][2];
                highPercentiles[1] = preemieHC[p_age][2];
                highPercentiles[2] = preemieWT[p_age][2];

				
}

var pull_preemie_percentiles_corrected = function(){
	
				c_age = "M" + GA.value;
				
				cmidPercentiles[0] = preemieLength[c_age][1];
                cmidPercentiles[1] = preemieHC[c_age][1];
                cmidPercentiles[2] = preemieWT[c_age][1];
                clowPercentiles[0] = preemieLength[c_age][0];
                clowPercentiles[1] = preemieHC[c_age][0];
                clowPercentiles[2] = preemieWT[c_age][0];
                chighPercentiles[0] = preemieLength[c_age][2];
                chighPercentiles[1] = preemieHC[c_age][2];
                chighPercentiles[2] = preemieWT[c_age][2];

				
}

