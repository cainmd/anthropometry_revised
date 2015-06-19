var singleton_placenta = {
	
11	:["	(13.3 - 17.0 g expected)	"],
12	:["	(27.2 - 30.4 g expected)	"],
13	:["	(41.1 - 43.8 g expected)	"],
14	:["	(54.8 - 57.3 g expected)	"],
15	:["	(68.4 - 71.0 g expected)	"],
16	:["	(81.8 - 84.8 g expected)	"],
17	:["	(95.2 - 98.6 g expected)	"],
18	:["	(108.5 - 112.5 g expected)	"],
19	:["	(121.8 - 126.6 g expected)	"],
20	:["	(135 - 140 g expected)	"],
21	:["	(114 - 172 g expected)	"],
22	:["	(122 - 191 g expected)	"],
23	:["	(133 - 211 g expected)	"],
24	:["	(145 - 233 g expected)	"],
25	:["	(159 - 256 g expected)	"],
26	:["	(175 - 280 g expected	"],
27	:["	(192 - 305 g expected)	"],
28	:["	(210 - 331 g expected)	"],
29	:["	(229 - 357 g expected)	"],
30	:["	(249 - 384 g expected)	"],
31	:["	(269 - 411 g expected)	"],
32	:["	(290 - 438 g expected)	"],
33	:["	(311 - 464 g expected)	"],
34	:["	(331 - 491 g expected)	"],
35	:["	(352 - 516 g expected)	"],
36	:["	(372 - 542 g expected)	"],
37	:["	(391 - 566 g expected)	"],
38	:["	(409 - 589 g expected)	"],
39	:["	(426 - 611 g expected)	"],
40	:["	(442 - 632 g expected)	"],
41	:["	(456 - 651 g expected)	"]
};

var twin_placenta = {
19	:["	(161 - 263 g expected)	"],
20	:["	(166 - 270 g expected)	"],
21	:["	(176 - 286 g expected)	"],
22	:["	(191 - 310 g expected)	"],
23	:["	(210 - 343 g expected)	"],
24	:["	(232 - 382 g expected)	"],
25	:["	(257 - 426 g expected)	"],
26	:["	(284 - 475 g expected)	"],
27	:["	(314 - 528 g expected)	"],
28	:["	(345 - 584 g expected)	"],
29	:["	(377 - 641 g expected)	"],
30	:["	(409 - 700 g expected)	"],
31	:["	(441 - 758 g expected)	"],
32	:["	(472 - 815 g expected)	"],
33	:["	(503 - 870 g expected)	"],
34	:["	(531 - 923 g expected)	"],
35	:["	(558 - 971 g expected)	"],
36	:["	(582 - 1014 g expected)	"],
37	:["	(602 - 1051 g expected)	"],
38	:["	(619 - 1082 g expected)	"],
39	:["	(631 - 1105 g expected)	"],
40	:["	(639 - 1118 g expected)	"],
41	:["	(642 - 1123 g expected)	"]
};

var triplet_placenta = {
20	:["	(226 - 285 g expected)	"],
21	:["	(257 - 320 g expected)	"],
22	:["	(289 - 345 g expected)	"],
23	:["	(331 - 400 g expected)	"],
24	:["	(371 - 445 g expected)	"],
25	:["	(408 - 498 g expected)	"],
26	:["	(444 - 558 g expected)	"],
27	:["	(480 - 630 g expected)	"],
28	:["	(516 - 697 g expected)	"],
29	:["	(553 - 772 g expected)	"],
30	:["	(591 - 849 g expected)	"],
31	:["	(631 - 925 g expected)	"],
32	:["	(674 - 1000 g expected)	"], 
33	:["	(719 - 1072 g expected)	"],
34	:["	(768 - 1139 g expected)	"],
35	:["	(821 - 1200 g expected)	"],
36	:["	(878 - 1253 g expected)	"],
37	:["	(940 - 1297 g expected)	"],
38	:["	(1007 - 1330 g expected) "]


}	

function evaluate_placenta (age, type){
	
	var output_placenta = 0;
	switch (type){
		case ("singleton"):
			output_placenta = singleton_placenta[age];
		break;
		case ("twin"):
			output_placenta = twin_placenta[age];
		break;
		case ("triplet"):
			output_placenta = triplet_placenta[age];
		break;
		default:
		alert("error evaluating placenta");
	}
	
	$('#report-output').text("The expected weight for a " + type + " placenta at an estimated gestational age of " + age + "weeks is " + output_placenta + "");
	$('#report-output').show();
}

	
