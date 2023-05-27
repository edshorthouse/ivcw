$(function () { 

	
	var seriesName = 'OECD_GDP_hr';
	var chartType = 'line';
	var start = 2003;
	var year = 2014;
	var finish = 2022;
	var ncol = {
		curr:3,
		prev:3,
	};
	
	
	var seriesY = getSeries(seriesName);
	var chartTitle = [];	
	
		
	for (var i=0; i<seriesY.dataset.length; i++){ 
		chartTitle.push(seriesY.dataset[i].name);
	
	};
	
	console.log('starting data',seriesY.yAxis.max);

	addCharts(chartTitle, seriesY, chartType, ncol);

	makeMenu(chartTitle, seriesName, chartType, ncol);

	makeMapMenu(year, seriesName, chartType);
	
	displayMap(year, seriesY);
	addSlider(start, finish, year, seriesY);
	runSeries(start, finish, seriesY);
	
	
	makePopMenu(chartTitle, 'OECD_pop_2019', ncol);
	seriesY = getSeries('OECD_pop_2019');
	chartTitle = [];
	for (i=0; i<seriesY.dataset.length; i++){
		chartTitle.push(seriesY.dataset[i].iso3);
	};

	prepPopPyramid(chartTitle, getSeries('OECD_pop_2019'), 'bar', ncol);
	
	function getSeries(seriesName){
		
		var OECD_GDP_hr = [
			 {name: 'Agriculture, Forestry & Fishing', data: [17944,19445,18632,19321,19649,19467,20616,22088,21908,19391,17742,20485,18949,20005,19496,18540,18899,19801,17308,17259]},
			 {name: 'Mining & Quarrying', data: [1618,1237,1067,971,1063,682,730,810,895,851,987,1043,1166,950,1265,1171,1192,739,857,829]},
			 {name: 'Manufacturing', data: [86699,85682,81465,78449,76006,72414,67604,67885,70857,68306,65593,66192,64788,66533,68471,65971,65824,61600,66159,66858]},
			 {name: 'Electricity, Gas, Steam & AC', data: [3217,2266,2198,2431,2871,2574,2151,2426,3292,2575,2688,3047,2504,3231,3162,3059,3167,3254,2441,2433]},
			 {name: 'Water Supply', data: [2170,1529,2275,2771,2666,3675,4434,4828,4603,5216,4918,4711,5671,4875,3787,7497,4692,4889,4809,4831]},
			 {name: 'Construction', data: [34244,40421,38867,40322,40423,42237,42580,36020,36732,35499,34454,38000,40686,37979,39256,39306,42450,42869,42407,43055]},
			 {name: 'Wholesale & Retail', data: [121116,123298,120236,118668,117019,116507,113834,118818,119771,113337,117087,119076,123800,118369,118195,122127,115211,118824,114122,114727]},
			 {name: 'Transportation & Storage', data: [34495,32190,35998,33100,31310,31954,36965,32332,33316,33928,33100,31073,33472,36801,34124,36590,33147,34110,34853,35186]},
			 {name: 'Accommodation & Food', data: [40868,42656,44966,52194,47496,48245,45346,47252,44840,50734,50085,57136,53859,54826,57528,55780,57870,59542,61261,62133]},
			 {name: 'Information & Communication', data: [15733,15180,14701,15695,14717,15354,14958,13156,13104,13995,14315,17504,17539,17025,17327,15810,17000,17004,17265,17475]},
			 {name: 'Finance & Insurance', data: [22319,21107,20307,20329,20292,26211,23477,22127,22222,21221,21323,21847,19311,21261,20806,21656,21788,21840,20330,20597]},
			 {name: 'Real Estate', data: [7065,7768,7702,7497,8219,10277,11473,13332,10425,10691,10919,9529,9925,9779,10480,11526,12299,11185,11720,11790]},
			 {name: 'Professional, Scientific & Technical', data: [27544,29355,30576,34693,34255,37864,34429,34110,32937,38103,34582,39308,37342,40738,44982,44999,44768,41814,42897,43082]},
			 {name: 'Administrative & Support', data: [41597,43837,44506,46072,46133,51029,48257,42196,44842,54500,55186,59429,61470,63544,62642,62971,63665,64765,65899,66907]},
			 {name: 'Public Administration & Defence', data: [31835,32686,33565,33483,33695,30892,35152,33620,30124,28777,27831,26834,26218,28757,27734,27489,30714,31897,31537,31920]},
			 {name: 'Education', data: [43620,44057,46307,50607,51101,56015,55318,55033,57119,55920,59027,55186,55927,56388,55972,59104,60425,54013,62538,62968]},
			 {name: 'Human Health & Social Work', data: [70312,75043,77419,80046,79735,79079,82900,85904,84729,84960,90288,91734,93692,92800,100163,93942,96880,100847,98031,98580]},
			 {name: 'Arts, Entertainment & Recreation', data: [21059,20101,22300,19637,19394,17167,16923,18620,18943,16826,18037,17800,19156,22981,22060,20132,22600,15962,18431,18143]},
			 {name: 'Other Services', data: [14551,10961,13037,12406,12362,12329,14035,13726,13026,9415,11217,10916,15438,13555,13368,12460,13510,12005,11649,11580]}
		];
		var OECD_GDP_cap = [
			 {name: 'Agriculture, Forestry & Fishing', data: [0.86,1.49,1.02,1.26,1.54,1.86,1.92,2.04,1.95,1.7,1.62,1.8,1.73,1.77,1.69,1.51,1.58,1.68,1.46,1.45]},
			 {name: 'Mining & Quarrying', data: [1.2,0.94,0.82,0.7,0.78,0.51,0.54,0.62,0.64,0.55,0.74,0.72,0.84,0.76,1.08,0.99,0.95,0.62,0.81,0.79]},
			 {name: 'Manufacturing', data: [1.2,1.22,1.22,1.17,1.18,1.17,1.15,1.19,1.25,1.21,1.17,1.15,1.14,1.18,1.18,1.15,1.15,1.11,1.22,1.22]},
			 {name: 'Electricity, Gas, Steam & AC', data: [1.53,1.28,1.28,1.32,1.45,1.37,0.82,0.9,1.22,0.93,1.04,1.17,0.86,1.1,1.01,0.93,1.02,1.02,0.79,0.77]},
			 {name: 'Water Supply', data: [0.67,0.46,0.68,0.78,0.73,0.96,1.18,1.19,1.09,1.21,1.13,1.08,1.28,1.07,0.78,1.5,0.98,0.99,0.96,0.94]},
			 {name: 'Construction', data: [1.09,1.22,1.14,1.14,1.13,1.14,1.18,1.11,1.15,1.14,1.13,1.19,1.24,1.13,1.11,1.13,1.17,1.21,1.17,1.17]},
			 {name: 'Wholesale & Retail', data: [1.08,1.07,1.06,1.06,1.07,1.06,1.04,1.09,1.12,1.06,1.1,1.09,1.13,1.09,1.09,1.12,1.06,1.12,1.09,1.1]},
			 {name: 'Transportation & Storage', data: [1.24,1.09,1.2,1.09,1.03,1.05,1.22,1.09,1.12,1.15,1.13,1.02,1.05,1.09,1.02,1.08,0.95,0.95,0.96,0.95]},
			 {name: 'Accommodation & Food', data: [0.96,0.97,1.03,1.16,1.08,1.05,1,1.08,0.99,1.12,1.07,1.17,1.07,1.04,1.08,1.03,1.05,1.16,1.14,1.15]},
			 {name: 'Information & Communication', data: [0.66,0.64,0.61,0.63,0.59,0.61,0.59,0.53,0.52,0.56,0.55,0.64,0.62,0.59,0.57,0.54,0.56,0.55,0.56,0.56]},
			 {name: 'Finance & Insurance', data: [0.89,0.84,0.83,0.8,0.81,0.99,0.93,0.91,0.89,0.86,0.89,0.89,0.81,0.87,0.85,0.9,0.89,0.91,0.81,0.81]},
			 {name: 'Real Estate', data: [0.95,0.95,0.89,0.89,0.95,1.01,1.01,1.27,0.97,0.93,0.89,0.78,0.78,0.79,0.83,0.87,0.89,0.8,0.85,0.84]},
			 {name: 'Professional, Scientific & Technical', data: [0.74,0.75,0.75,0.78,0.76,0.78,0.69,0.71,0.67,0.76,0.65,0.7,0.63,0.67,0.74,0.72,0.71,0.67,0.67,0.67]},
			 {name: 'Administrative & Support', data: [0.95,0.94,0.92,0.9,0.88,0.92,0.95,0.82,0.86,1,1.02,1.02,1.01,1.02,0.98,0.99,1.02,1.06,1.05,1.06]},
			 {name: 'Public Administration & Defence', data: [0.95,0.94,0.96,0.94,0.97,0.9,0.98,0.92,0.9,0.89,0.88,0.87,0.87,0.96,0.92,0.91,0.99,1,0.97,0.97]},
			 {name: 'Education', data: [0.82,0.8,0.83,0.89,0.91,0.94,0.92,0.9,0.95,0.92,0.97,0.9,0.91,0.92,0.9,0.96,0.99,0.87,1.02,1.02]},
			 {name: 'Human Health & Social Work', data: [0.98,0.99,1.01,1.01,1.01,0.99,0.98,1,0.98,0.97,1.01,1.01,1.03,1.01,1.07,1.01,1.04,1.06,1.01,1.01]},
			 {name: 'Arts, Entertainment & Recreation', data: [1.39,1.3,1.43,1.21,1.24,1.05,1.04,1.11,1.17,1.02,1.09,1.06,1.14,1.29,1.21,1.14,1.27,0.99,1.09,1.07]},
			 {name: 'Other Services', data: [1.07,0.81,0.96,0.87,0.91,0.85,0.98,0.97,0.92,0.71,0.81,0.79,1.02,0.9,0.9,0.84,0.89,0.85,0.82,0.81]}
		];
		var OECD_pop_2019 = [
			{iso3: "AUS", year: 2019, totalPop: 25203200, series: [{ name:"Male",  data:[849691, 833875, 809143, 767904, 820079, 914654, 934339, 897596, 803525, 825466, 766933, 762569, 679944, 593932, 509764, 347087, 231870, 132577, 55712, 13809, 842],}, { name: "Female",  data:[805166, 791506, 768625, 733706, 788473, 878319, 932747, 897661, 812678, 840928, 785997, 778154, 710836, 620305, 535305, 376503, 272568, 188213, 98707, 32256, 3236]}]},
			{iso3: "BEL", year: 2019, totalPop: 11539326, series: [{ name:"Male",  data:[327390, 344926, 340771, 326407, 340912, 371730, 372493, 377285, 382329, 395349, 408318, 403771, 357371, 301701, 250119, 166017, 131910, 77144, 28633, 6627, 276],}, { name: "Female",  data:[308558, 324345, 322428, 309364, 323835, 358908, 371464, 377293, 369188, 377286, 393958, 395844, 364628, 323996, 284860, 207729, 189656, 136774, 66198, 20038, 1497]}]},
			{iso3: "BRA", year: 2019, totalPop: 211049519, series: [{ name:"Male",  data:[7454197, 7469798, 7727130, 8383635, 8711984, 8542090, 8623220, 8511655, 7523486, 6616618, 6107921, 5376802, 4275622, 3261073, 2234841, 1422037, 888580, 402311, 156399, 38661, 5100],}, { name: "Female",  data:[7117753, 7146432, 7424459, 8097851, 8494800, 8432526, 8639595, 8661714, 7780880, 6981933, 6593438, 5948447, 4880012, 3875478, 2810744, 1933468, 1342561, 714933, 331531, 94171, 13633]}]},
			{iso3: "CAN", year: 2019, totalPop: 37411037, series: [{ name:"Male",  data:[1013876, 1012761, 1006817, 1027473, 1231211, 1371604, 1296540, 1300549, 1205213, 1185947, 1246964, 1388976, 1242201, 1020920, 830665, 534137, 342113, 201199, 83472, 19512, 1387],}, { name: "Female",  data:[965981, 967470, 961187, 978597, 1176141, 1331426, 1296437, 1311383, 1219488, 1187043, 1237596, 1386533, 1259298, 1076000, 888164, 623661, 443609, 307866, 166833, 56067, 6720]}]},
			{iso3: "CHE", year: 2019, totalPop: 8591361, series: [{ name:"Male",  data:[229951, 219242, 208921, 218281, 248920, 282834, 302273, 307034, 284928, 307425, 344478, 316685, 259827, 213168, 198533, 144916, 93949, 53876, 20294, 4825, 301],}, { name: "Female",  data:[218975, 207631, 198889, 209572, 240157, 275410, 297211, 304630, 281261, 303472, 337299, 311380, 256238, 224641, 216689, 171858, 126257, 87552, 46501, 13718, 1359]}]},
			{iso3: "CHI", year: 2019, totalPop: 18952035, series: [{ name:"Male",  data:[602428, 645142, 632595, 641475, 728499, 805090, 764207, 691971, 654436, 617365, 591914, 541202, 455800, 361689, 250321, 168238, 103598, 56139, 23498, 5455, 712],}, { name: "Female",  data:[580540, 622808, 611047, 620555, 706345, 780271, 742222, 680407, 654753, 630221, 616998, 578471, 503474, 416383, 303865, 227915, 161835, 102949, 51371, 15068, 2763]}]},
			{iso3: "CHN", year: 2019, totalPop: 1433783692, series: [{ name:"Male",  data:[45106267, 46319087, 45044032, 44286173, 46956410, 54633535, 65544747, 49370823, 51155493, 62836913, 60946291, 47588180, 38607054, 35185041, 19746314, 11801212, 6808650, 2787103, 748881, 140322, 11731],}, { name: "Female",  data:[39934767, 40225712, 38648113, 38535391, 41620012, 49681080, 61670474, 46920301, 48766184, 60442592, 59710325, 46379016, 38368062, 36260434, 21631501, 13715744, 9097473, 4583542, 1525990, 386612, 56108]}]},
			{iso3: "CZE", year: 2019, totalPop: 10689213, series: [{ name:"Male",  data:[285503, 289380, 288155, 242044, 250759, 335017, 370779, 406424, 481359, 427866, 343847, 327985, 317708, 319726, 262393, 160990, 83923, 48029, 15511, 3159, 71],}, { name: "Female",  data:[270080, 274045, 273494, 230222, 239437, 320767, 350669, 382488, 457067, 407941, 332671, 328624, 338324, 369130, 333059, 230885, 142438, 96488, 40096, 10370, 290]}]},
			{iso3: "DEN", year: 2019, totalPop: 5771877, series: [{ name:"Male",  data:[155083, 156940, 174005, 174082, 194805, 201921, 174221, 160544, 183041, 192779, 214342, 189732, 166561, 155332, 169371, 101656, 60952, 29424, 11890, 2786, 205],}, { name: "Female",  data:[147270, 148573, 164774, 167137, 184717, 193548, 168222, 159588, 183106, 193165, 208243, 191628, 171478, 163813, 177201, 118718, 79493, 46718, 25074, 8669, 1070]}]},
			{iso3: "DEU", year: 2019, totalPop: 83517045, series: [{ name:"Male",  data:[2045919, 1928580, 1971230, 2163070, 2376291, 2538483, 2812868, 2711490, 2512560, 2724685, 3448195, 3347849, 2776121, 2228280, 1796065, 1681060, 1335326, 573159, 228579, 46133, 3172],}, { name: "Female",  data:[1941523, 1810893, 1826839, 1987285, 2175056, 2331831, 2630783, 2615298, 2475429, 2687529, 3415871, 3362968, 2889856, 2453269, 2037511, 2074960, 1871223, 978729, 521298, 165259, 14520]}]},
			{iso3: "ESP", year: 2019, totalPop: 46736782, series: [{ name:"Male",  data:[1038501, 1198575, 1276540, 1135092, 1158980, 1214262, 1360661, 1718964, 2057321, 1983751, 1801956, 1649984, 1377492, 1126819, 1008116, 775359, 523802, 378061, 142700, 31325, 2387],}, { name: "Female",  data:[977680, 1125661, 1195708, 1074999, 1106079, 1172812, 1355721, 1722935, 1993237, 1901196, 1790229, 1702474, 1462902, 1233249, 1167409, 970866, 758672, 657830, 308267, 88285, 9923]}]},
			{iso3: "FIN", year: 2019, totalPop: 5532159, series: [{ name:"Male",  data:[138799, 157414, 157056, 151427, 163961, 183471, 178654, 184284, 173268, 161315, 179859, 184281, 174827, 173915, 161514, 93247, 61977, 32984, 12351, 2460, 146],}, { name: "Female",  data:[132269, 150318, 150194, 144081, 156039, 175178, 168118, 174157, 165091, 155649, 178661, 186174, 182750, 189201, 183387, 118061, 92652, 61228, 31786, 9183, 772]}]},
			{iso3: "FRA", year: 2019, totalPop: 65129729, series: [{ name:"Male",  data:[1875383, 2011880, 2040340, 1974988, 1867826, 1843171, 1949911, 1981008, 1969854, 2187504, 2142209, 2062831, 1891456, 1793134, 1553223, 928599, 737011, 467972, 192992, 50390, 2811],}, { name: "Female",  data:[1793838, 1925529, 1947414, 1894312, 1830692, 1873759, 2023620, 2053344, 2020238, 2230886, 2215992, 2179885, 2060753, 2013370, 1806321, 1168168, 1079459, 845248, 462602, 164018, 15788]}]},
			{iso3: "GBR", year: 2019, totalPop: 67530161, series: [{ name:"Male",  data:[2022994, 2105263, 1985332, 1879833, 2096581, 2285353, 2343986, 2245818, 2129100, 2154010, 2300871, 2196916, 1868565, 1658433, 1595596, 1088727, 748505, 431640, 170828, 40247, 2837],}, { name: "Female",  data:[1928052, 2008974, 1899294, 1804701, 2023688, 2224992, 2339650, 2274115, 2141685, 2199884, 2374047, 2266531, 1930920, 1748557, 1733900, 1255234, 950525, 631795, 323197, 106470, 12515]}]},
			{iso3: "GRE", year: 2019, totalPop: 10473452, series: [{ name:"Male",  data:[216451, 253446, 280406, 268733, 272260, 282340, 323905, 386289, 398538, 398718, 387235, 338703, 314633, 267821, 246822, 182106, 166763, 103198, 41596, 9555, 1002],}, { name: "Female",  data:[203212, 237406, 264522, 257553, 258641, 255675, 302756, 371561, 387338, 400318, 399436, 364202, 351118, 309645, 287440, 224295, 232087, 150664, 58670, 14900, 1493]}]},
			{iso3: "HUN", year: 2019, totalPop: 9684680, series: [{ name:"Male",  data:[234915, 233064, 249120, 250302, 275462, 326497, 310891, 339518, 415693, 377723, 306356, 266829, 299351, 283612, 183128, 131806, 72257, 36894, 11273, 3429, 130],}, { name: "Female",  data:[222223, 221780, 236705, 236607, 262118, 312078, 298281, 334800, 410376, 375633, 319035, 297158, 364797, 374740, 275943, 231264, 161654, 93490, 35585, 11718, 445]}]},
			{iso3: "IDN", year: 2019, totalPop: 270625567, series: [{ name:"Male",  data:[12232223, 12291353, 11811649, 12016177, 11486572, 10467344, 10045083, 10592522, 9777813, 9021602, 7791556, 6338734, 4945148, 3347235, 1980318, 1236841, 609406, 206571, 62920, 8356, 338],}, { name: "Female",  data:[11707538, 11746372, 11155693, 11326565, 10924467, 10190453, 10137485, 10578564, 9645670, 8848317, 7751237, 6444108, 4977672, 3380722, 2425934, 1633555, 967968, 370803, 120504, 21118, 1061]}]},
			{iso3: "IND", year: 2019, totalPop: 1366417755, series: [{ name:"Male",  data:[61184852, 62910580, 66812183, 66525043, 64478247, 61604481, 58243202, 52838830, 45523908, 39881404, 34484803, 29500956, 24129236, 18287177, 10982591, 6861862, 3746644, 1554275, 461093, 102398, 15806],}, { name: "Female",  data:[55596970, 57039427, 60172728, 59164382, 57319089, 55079640, 52817775, 48499876, 42635961, 37840217, 32947978, 28445217, 23591764, 18288098, 11861814, 7794418, 4538052, 1903736, 576998, 145066, 28978]}]},
			{iso3: "IRL", year: 2019, totalPop: 4882498, series: [{ name:"Male",  data:[165556, 185392, 178146, 154815, 143818, 140082, 158450, 188985, 190761, 176844, 151941, 139947, 121036, 111960, 91630, 60085, 37505, 17812, 5955, 1586, 112],}, { name: "Female",  data:[155965, 176449, 171158, 149281, 139430, 135780, 161964, 201208, 200187, 179874, 153394, 142713, 124886, 115982, 96611, 66234, 46129, 25576, 12363, 4407, 489]}]},
			{iso3: "ISL", year: 2019, totalPop: 339037, series: [{ name:"Male",  data:[10580, 11709, 11821, 10789, 11670, 13075, 11752, 11911, 10859, 10638, 10294, 10555, 10001, 8382, 6680, 4198, 2733, 1733, 674, 166, 10],}, { name: "Female",  data:[10132, 11247, 11122, 10537, 11140, 12353, 11363, 11438, 10716, 10409, 10550, 10877, 9997, 8255, 6633, 4712, 3281, 2511, 1141, 355, 38]}]},
			{iso3: "ISR", year: 2019, totalPop: 8519372, series: [{ name:"Male",  data:[434238, 414837, 370373, 337166, 314172, 289372, 283682, 277209, 266913, 238609, 199868, 180228, 166600, 164253, 126116, 71719, 51032, 32174, 13942, 4407, 416],}, { name: "Female",  data:[412559, 392896, 350772, 319510, 298165, 277171, 278948, 278066, 270218, 243330, 206909, 192137, 185322, 186262, 144534, 88503, 72125, 50697, 25502, 7721, 699]}]},
			{iso3: "ITA", year: 2019, totalPop: 60550092, series: [{ name:"Male",  data:[1227140, 1400399, 1476556, 1484452, 1533272, 1630731, 1711693, 1861234, 2157716, 2432025, 2410929, 2221334, 1854790, 1680438, 1553702, 1163633, 942098, 484087, 186445, 45405, 2956],}, { name: "Female",  data:[1155405, 1320632, 1392257, 1387067, 1422049, 1549174, 1678215, 1849601, 2166599, 2468825, 2484894, 2336011, 2003108, 1852790, 1771151, 1446562, 1331834, 868523, 448312, 143036, 13012]}]},
			{iso3: "JPN", year: 2019, totalPop: 126860299, series: [{ name:"Male",  data:[2518725, 2802042, 2867767, 2951127, 3092270, 3195642, 3558876, 3988022, 4474486, 5059545, 4251511, 3914985, 3794708, 4237635, 4249293, 3029250, 2142122, 1236610, 473936, 102550, 9208],}, { name: "Female",  data:[2386805, 2655854, 2718854, 2799999, 2938195, 3041975, 3394703, 3821077, 4323266, 4896450, 4187198, 3869646, 3832432, 4453649, 4770203, 3765873, 3064600, 2278049, 1224732, 422445, 63984]}]},
			{iso3: "KOR", year: 2019, totalPop: 51225320, series: [{ name:"Male",  data:[1011337, 1166864, 1182869, 1353570, 1747374, 1856271, 1756422, 2001445, 2046048, 2205709, 2165615, 2066858, 1775200, 1209711, 891774, 638576, 378896, 145865, 39759, 8777, 517],}, { name: "Female",  data:[958165, 1104519, 1105654, 1244531, 1578873, 1615387, 1581655, 1857327, 1944249, 2134000, 2144863, 2065585, 1840304, 1310502, 1036309, 877984, 649984, 352443, 133738, 36441, 3350]}]},
			{iso3: "LDC", year: 2019, totalPop: 1033388868, series: [{ name:"Male",  data:[74583921, 68062287, 62024857, 55573075, 48463948, 41275479, 34628689, 29435520, 24118912, 20064963, 16444342, 13028192, 9585054, 6822971, 4713403, 2924533, 1452766, 566070, 151433, 28647, 2350],}, { name: "Female",  data:[72549814, 66421724, 60703252, 54593507, 48172470, 41783954, 35851001, 30938936, 25297741, 21008860, 17381628, 13972169, 10603539, 7792421, 5677280, 3667653, 1927570, 807071, 234106, 48095, 4665]}]},
			{iso3: "LTU", year: 2019, totalPop: 2759631, series: [{ name:"Male",  data:[75812, 76670, 61976, 65345, 76661, 100465, 94561, 79018, 84130, 94585, 92920, 106120, 80082, 62766, 40036, 38428, 27800, 13334, 4748, 953, 67],}, { name: "Female",  data:[71384, 72501, 59362, 61461, 72343, 91874, 87983, 75336, 86571, 101594, 103300, 126464, 104886, 94867, 72320, 77227, 57207, 41989, 19230, 4884, 371]}]},
			{iso3: "LUX", year: 2019, totalPop: 615730, series: [{ name:"Male",  data:[17043, 16433, 16017, 17894, 20594, 23065, 23992, 24156, 23751, 25073, 25023, 21202, 16985, 13333, 10320, 6857, 5151, 3093, 957, 162, 9],}, { name: "Female",  data:[16045, 15692, 15484, 16861, 19251, 21715, 23876, 23890, 22039, 22673, 22433, 20109, 16543, 13283, 11017, 8482, 6958, 5169, 2406, 640, 54]}]},
			{iso3: "MEX", year: 2019, totalPop: 127575528, series: [{ name:"Male",  data:[5645905, 5729384, 5698877, 5680011, 5501809, 5309027, 4660173, 4292520, 4001703, 3715950, 3156565, 2662963, 2096926, 1587946, 1081587, 749124, 442153, 245661, 107042, 33468, 4599],}, { name: "Female",  data:[5395051, 5475043, 5461498, 5516572, 5441620, 5371472, 4980203, 4703729, 4467304, 4158216, 3586287, 2991678, 2413178, 1848282, 1279995, 913256, 585051, 355945, 166168, 53553, 8034]}]},
			{iso3: "NLD", year: 2019, totalPop: 17097122, series: [{ name:"Male",  data:[442763, 461810, 489546, 523735, 524858, 549796, 539920, 508911, 511924, 589411, 646351, 623258, 551311, 495210, 449729, 284531, 185303, 96352, 32418, 7268, 429],}, { name: "Female",  data:[420544, 437573, 463379, 496808, 501474, 530594, 526820, 500207, 510587, 590037, 638561, 612200, 552790, 510171, 472296, 320348, 240606, 157992, 73475, 23477, 2349]}]},
			{iso3: "NOR", year: 2019, totalPop: 5378859, series: [{ name:"Male",  data:[154949, 161739, 164194, 165011, 182699, 190792, 189987, 184163, 181125, 196341, 191583, 168960, 154618, 137412, 127084, 78651, 46609, 26812, 10997, 2899, 187],}, { name: "Female",  data:[146248, 153307, 156184, 157659, 170906, 180031, 181972, 171603, 168698, 184636, 180026, 160888, 151467, 138294, 132020, 89389, 62371, 43323, 23498, 8691, 836]}]},
			{iso3: "NZL", year: 2019, totalPop: 4783062, series: [{ name:"Male",  data:[154689, 162623, 163180, 154675, 169502, 176812, 156540, 137805, 134820, 150090, 149942, 151743, 132393, 114573, 99683, 65859, 41270, 22528, 10109, 2171, 155],}, { name: "Female",  data:[146747, 154088, 154557, 148582, 159942, 167601, 160235, 150168, 147283, 166275, 163534, 162088, 142145, 122315, 106571, 74119, 51370, 31535, 17228, 5010, 507]}]},
			{iso3: "POL", year: 2019, totalPop: 37887770, series: [{ name:"Male",  data:[964314, 991380, 993697, 886244, 1046877, 1312405, 1514944, 1645236, 1465413, 1253659, 1104646, 1173169, 1295073, 1065584, 726086, 380148, 303405, 162989, 60395, 13820, 1054],}, { name: "Female",  data:[914496, 942504, 947024, 856641, 1014649, 1240527, 1396891, 1541735, 1428527, 1249804, 1125203, 1250062, 1468595, 1326105, 1005676, 624294, 590749, 383593, 171659, 45106, 3392]}]},
			{iso3: "PRT", year: 2019, totalPop: 10226178, series: [{ name:"Male",  data:[209341, 231121, 254479, 270360, 269162, 263470, 280509, 328741, 377694, 386741, 352050, 344442, 308794, 282335, 247453, 186448, 136924, 76580, 24097, 5577, 356],}, { name: "Female",  data:[196940, 219202, 244044, 260139, 271175, 272726, 295067, 349323, 405206, 417471, 387875, 388021, 355727, 335445, 308283, 255346, 210691, 141339, 58215, 15775, 1494]}]},
			{iso3: "ROM", year: 2019, totalPop: 19364558, series: [{ name:"Male",  data:[483091, 513440, 553094, 510419, 531643, 600726, 727100, 630002, 790468, 770588, 727046, 506130, 616867, 537737, 365194, 231306, 189108, 93835, 33138, 6882, 473],}, { name: "Female",  data:[457120, 485483, 523602, 481968, 494396, 548216, 667127, 596912, 766251, 748793, 731353, 544195, 719920, 685095, 512796, 373620, 356871, 175560, 63240, 13101, 652]}]},
			{iso3: "RUS", year: 2019, totalPop: 145872257, series: [{ name:"Male",  data:[4829595, 4702459, 4054317, 3514510, 3497025, 4952556, 6408679, 5776911, 5052778, 4556018, 4040879, 4775206, 4178725, 3125008, 1767780, 964092, 962876, 301779, 129258, 11757, 730],}, { name: "Female",  data:[4570444, 4459404, 3866509, 3360519, 3355361, 4794402, 6362169, 5904988, 5402179, 4972579, 4705000, 5928651, 5831635, 4958868, 3208370, 2326630, 2587982, 1017348, 554212, 94056, 8013]}]},
			{iso3: "SVK", year: 2019, totalPop: 5457012, series: [{ name:"Male",  data:[145277, 145505, 142843, 135241, 155506, 192913, 212950, 227873, 232491, 197764, 171329, 177723, 170030, 144355, 92918, 56764, 31790, 16651, 5269, 1263, 58],}, { name: "Female",  data:[138604, 139008, 136120, 128560, 147842, 184267, 204133, 215817, 220706, 193019, 175253, 189896, 193831, 179496, 132088, 98291, 66274, 39773, 14215, 3205, 101]}]},
			{iso3: "SWE", year: 2019, totalPop: 10036391, series: [{ name:"Male",  data:[307116, 304759, 296771, 270840, 291723, 376952, 343311, 315086, 312017, 336452, 342117, 306949, 279609, 265511, 273061, 195029, 113166, 61775, 26170, 6768, 415],}, { name: "Female",  data:[290553, 288817, 280944, 257677, 274760, 361526, 330153, 300752, 301288, 327453, 331458, 300084, 280009, 272149, 286879, 212480, 143654, 97633, 52624, 18130, 1771]}]},
			{iso3: "USA", year: 2019, totalPop: 329064917, series: [{ name:"Male",  data:[10019240, 10371128, 10805817, 10837194, 11423547, 12104301, 11512068, 10672776, 10039561, 10029885, 10471185, 10754302, 9912939, 8262182, 6356712, 4116773, 2711133, 1508564, 705344, 192914, 18734],}, { name: "Female",  data:[9584856, 9916621, 10341652, 10413408, 11012420, 11638797, 11191353, 10603872, 10112012, 10106982, 10395279, 10936920, 10516713, 9153264, 7402146, 5133603, 3534132, 2354382, 1348383, 470608, 71215]}]},
			{iso3: "WORLD", year: 2019, totalPop: 7713468201, series: [{ name:"Male",  data:[349247348, 341670620, 328942130, 314806147, 307809031, 307548367, 305762271, 270507560, 247594384, 239897308, 218833001, 187135108, 153758680, 124471230, 82793263, 53073892, 33071682, 15423679, 5370654, 1203726, 114528],}, { name: "Female",  data:[328119059, 320090537, 307203261, 293931999, 288834393, 290783757, 293702434, 262936512, 242696599, 237022350, 219504648, 190624979, 161570707, 136004171, 96515002, 66973202, 47305811, 25733670, 11222622, 3239297, 418582]}]}
		];

		var datasets = [
			{
				seriesName: "OECD_GDP_hr",
				seriesTitle: "Lightcast 2023", 
				yAxis: {
					min: 0,
					max: 150000,
					tickInterval: 50000
				},
				dataset: OECD_GDP_hr
			},{
				seriesName: "OECD_GDP_cap",
				seriesTitle: "Lightcast 2023", 
				yAxis: {
					type: 'logarithmic',
					min: 0.4,
					max: 2.5,
					tickInterval: 0.2
				},
				dataset: OECD_GDP_cap,
				zones: [
					{
						value: 1,
						color: 'red'
					},
					{
						value: Number.MAX_VALUE,
						color: 'green'
					}
				]
			},
			{
				seriesName: "OECD_pop_2019",
				seriesTitle: "Lightcast 2023", 
				categories: ['0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80-84', '85-89', '90-94', '95-99', '100 + '],
				yAxis: {
					min: 0,
					max: 120000,
					tickInterval: 2000
				},
				dataset: OECD_pop_2019
			}
		];
		
		for (var i=0; i<datasets.length; i++){ 
			if(datasets[i].seriesName === seriesName){
				$('#subheading').remove();
				$('header').append('<span id="subheading"><br />Dataset: '+datasets[i].seriesTitle+'</span>');
				
				return (datasets[i]);
			}
		};
		alert('Error: no dataset matching '+seriesName);
		console.log ('no dataset matching ', seriesName);
		return ;
	};

	


	function addCharts(chartTitle, seriesY, chartType, ncol){
		const seriesToPlot = [];
	
		$('#chartbox').empty();
	
		$('#chartbox').removeClass('container'+ncol.prev); 

		for (var i=0; i<chartTitle.length; i++){
			$('#chartbox').append('<div id="chart'+i+'" class="container'+ncol.curr+'"></div>');
			$('#chart'+i).append(chartTitle[i]);
			for (var n=0; n<seriesY.dataset.length; n++){
				if (seriesY.dataset[n].name === chartTitle[i]){
					seriesToPlot.push(seriesY.dataset[n]);
					break;
				};
			};
			
		};
		
		
		$('#chartbox').addClass('container'+ncol.curr);
		
		
		for (var i=0; i<chartTitle.length; i++){
			var renderto = 'chart'+i;
			
			makeChart('#chart'+i, chartTitle[i], seriesToPlot[i], chartType, seriesY.yAxis);
		};
	};


	function makeMenu(chartTitle, seriesName, chartType, ncol){
	
		var seriesY	= getSeries(seriesName);

		
		$('#menubox').empty();
	
		
		$('#menubox').append('<p><button name="select" id="menuListSelect">Display changes</button></p>');

		
		$('#menubox').append('Chart type ');
		$('#menubox').append('<select name="cChoice" id="chartChoice"  ></select><br>');
		$('#chartChoice').append('<option value="line">line</option>');
		$('#chartChoice').append('<option value="column">column</option>');
		$('#chartChoice').append('<option value="area">area</option>');
		
		
		$('#chartChoice').on( 'change', function() {
			chartType = $('#chartChoice option:selected').val();
		});

		$('#menubox').append('Data to display ');
		$('#menubox').append('<select name="dChoice" id="dataChoice"  ></select><br>');
		$('#dataChoice').append('<option value="OECD_GDP_hr">Jobs</option>');
		$('#dataChoice').append('<option value="OECD_GDP_cap">Location Quotient</option>');
		
		
		$('#dataChoice').on( 'change', function() {
			seriesName = $('#dataChoice option:selected').val();
			seriesY	= getSeries(seriesName);
			
		});

		
		$('#menubox').append('No. columns <br />');
		$('#menubox').append('<select name="nCols" id="colChoice"  ></select><br>');
		$('#colChoice').append('<option value="3">3</option>');
		$('#colChoice').append('<option value="5">2</option>');
		$('#colChoice').append('<option value="8">1</option>');
		
		
		$('#colChoice').on( 'change', function() {
			ncol.prev = ncol.curr;
			ncol.curr = $('#colChoice option:selected').val();
		});

		
		$('#menubox').append('<br />Select the charts to display');	
	
		
		$('#menuListSelect').on('click', function() {
			chartTitle = [];
			$('input:checkbox[name=ys]:checked').each(function(){
				if ($(this).val() === 'All'){
					
					for (i=0; i<seriesY.dataset.length; i++){
						chartTitle.push(seriesY.dataset[i].name);
					};
				} else {
					chartTitle.push(seriesY.dataset[$(this).val()].name);
					console.log('country list', seriesName, $(this).val(), seriesY.dataset[$(this).val()].name);
				};
			});
			
			
	
			
			addCharts(chartTitle, seriesY, chartType, ncol)
		});
		
		$('#menubox').append('<ul id="menulist"></ul>');
		
		$('#menulist').append('<li><input type="checkbox" class="menuitem" name="ys" value="All" checked>All</li>');
		
		for (var i=0; i<seriesY.dataset.length; i++){
			$('#menulist').append('<li><input type="checkbox" class="menuitem" name="ys" value="'+i+'" >'+seriesY.dataset[i].name+' </li>');
		};
  		return;
	};
	

	function makeChart(renderto, chartTitle, seriesY, chartType, options){
		
		seriesY.type = chartType; 
		
/*		var yA = {
			min: 0,
			max: 150000,
			tickInterval: 50000
		};
*/
		
		var yAxisOptions = {
			type: options.type,
			min: options.min,
			max: options.max,
			tickInterval: options.tickInterval,
			plotBands: options.zones
		};

		  if (options.zones && options.zones.length > 0) {
			yAxisOptions.plotBands = options.zones;
		}

	
		// the highcharts object
		$(renderto).highcharts({
			chart: {
			  height: (9 / 16 * 100) + '%',
			  spacingRight: 30
			},
			legend: {
			  enabled: false
			},
			title: {
			  text: chartTitle
			},
			xAxis: {
				categories: ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
				tickInterval: 1
			},
			yAxis: yAxisOptions,
			plotOptions: {
				series: {
					lineWidth: 2
				}
			},
			series: [seriesY]
		});
	}


/* functions for drawing and managing maps */


	function makeMapMenu(year, seriesName, chartType){
	// populates the menu area
		var seriesY	= getSeries(seriesName);

		// clear the menu of existing content
		$('#menubox2').empty();
	
		//add the select button
		$('#menubox2').append('<p><button name="select" id="menuListSelect2">Display changes</button></p>');

		// add the dataset selection options
		$('#menubox2').append('Data to display ');
		$('#menubox2').append('<select name="dChoice" id="dataChoice2"  ></select><br>');
		$('#dataChoice2').append('<option value="OECD_GDP_hr">Jobs</option>');
		$('#dataChoice2').append('<option value="OECD_GDP_cap">Location Quotient</option>');
		
		// add a listener to get the new values when the chart type is changed
		$('#dataChoice2').on( 'change', function() {
			seriesName = $('#dataChoice2 option:selected').val();
			seriesY	= getSeries(seriesName);
			//console.log('dataChoice2', seriesName, seriesY.dataset[0].data[0])
		});

		$('#menuListSelect2').on('click', function() {

			//console.log(chartTitle, seriesY, chartType, ncol);
			$('#sliderbox').empty();
			displayMap(year, seriesY);
			addSlider(start, finish, year, seriesY);
			runSeries(start, finish, seriesY)
		});
  		return;
	};
	
	
	function displayMap(year, seriesY){
		var selectedData = [];
		$('#chartbox2').empty();

		for (var i=0; i<seriesY.dataset.length; i++){
			// need to generate: {"iso-a3": "xxx", "value": nnnnn}
			selectedData.push({"iso-a3":seriesY.dataset[i].name, "value":seriesY.dataset[i].data[year-1980]});
			//console.log({"iso-a3":seriesY.dataset[i].name, "value":seriesY.dataset[i].data[year-1980]});

			//console.log(seriesToPlot.push({"name":seriesY.dataset[i].name, "value", :seriesY.dataset[i].data[year-1980]}));
			//console.log({"iso-a3":allData[i][0].iso3, "value":allData[i][0].data[year-1980]});
		};
		//console.log('displayMap', year, selectedData);
		drawMap(year, seriesY.seriesTitle, seriesY.seriesName, selectedData);
	};


	function drawMap(year, seriesTitle, seriesName, selectedData){
		console.log('drawMap', year, selectedData);
		// Initiate the chart
		$('#chartbox2').highcharts('Map', {
			chart: {
				height: (9/16 * 100)+'%', // 16:9  aspect ratio, chart fills the box
				spacingRight: 30 
			},

			title: {
				text: seriesTitle+' '+year
			},

			subtitle: {
				text: 'Source map: <a href="https://code.highcharts.com/mapdata/custom/world-robinson.js">World, Robinson projection, medium resolution</a>'
			},

			mapNavigation: {
				enabled: true,
				buttonOptions: {
					verticalAlign: 'bottom'
				}
			},

			colorAxis: {
				minColor: '#E6E6FF',
				maxColor: '#3333FF',
			},

			series: [{
				data: selectedData,
				mapData: Highcharts.maps['custom/world-robinson'],
				joinBy: 'iso-a3',
				name: seriesName+' '+year,
				states: {
					hover: {
						color: 'palegreen'
					}
				},
				dataLabels: {
					enabled: false,
					format: '{point.name}'
				}
			}]
		});
	};

	
	function addSlider(start, finish, year, seriesY) {
		console.log(start, finish, year);
		$('#sliderbox').empty();

		$('#sliderbox').append('<div id="slider"></div>');
		$('#sliderbox').append('<div id="sliderStartVal"></div>');
		$('#sliderbox').append('<div id="sliderEndVal"></div>');
		$('#sliderStartVal').append(start);
		$('#sliderEndVal').append(finish);

		$('#slider').append('<div id="custom-handle" class="ui-slider-handle"></div>');
		//$('#sliderbox').append(finish);
		var handle = $('#custom-handle');
		$('#slider').slider({
			min: start,
			max: finish,
			value: year,
			create: function() {
				handle.text($(this).slider('value') );
			},
			slide: function(event, ui) {
				handle.text(ui.value);
				//console.log (ui.value);
				displayMap(ui.value, seriesY);
			}
		});		
	};


	function runSeries(start, finish, seriesY){
		$('#sliderbox').append('<button type="button" id="runSeries">&gtcc;</button>');
		$('#runSeries').on('click', function() {
			var i = start;
			var intervalID = setInterval(function () {
				addSlider(start, finish, i);
				displayMap(i, seriesY);
				i++;
				if (i > finish){
					clearInterval(intervalID);
					// need to put the runSeries button back at the end
					runSeries(start, finish);
				}
			}, 100);
		});
	
	};

	
/* functions for drawing and managing population pyramid charts */


	function makePopMenu(chartTitle, seriesName, ncol){
		console.log('makePopMenu', seriesName);
	// populates the menu area
		var seriesY	= getSeries(seriesName);

		// clear the menu of existing content
		$('#menubox3').empty();
	
		//add the select button
		$('#menubox3').append('<p><button name="select" id="menuListSelect3">Display changes</button></p>');


		// add the number of columns options
		$('#menubox3').append('No. columns <br />');
		$('#menubox3').append('<select name="nCols" id="colChoice3"  ></select><br>');
		$('#colChoice3').append('<option value="3">3</option>');
		$('#colChoice3').append('<option value="5">5</option>');
		$('#colChoice3').append('<option value="8">8</option>');
		
		// add a listener to get the new values when the number of columns is changed
		$('#colChoice3').on( 'change', function() {
			ncol.prev = ncol.curr;
			ncol.curr = $('#colChoice3 option:selected').val();
		});

		// add the countries options
		$('#menubox3').append('<br />Select the charts to display');	
	
		// start the menu list
		$('#menuListSelect3').on('click', function() {
			chartTitle = [];
			$('input:checkbox[name=ys3]:checked').each(function(){
				if ($(this).val() === 'All'){
					console.log('makePopMenu ys3 values', seriesName, $(this).val());
					for (i=0; i<seriesY.dataset.length; i++){
						chartTitle.push(seriesY.dataset[i].iso3);
					};
				} else {
					chartTitle.push(seriesY.dataset[$(this).val()].iso3);
					console.log('country list', seriesName, $(this).val(), seriesY.dataset[$(this).val()].iso3);
				};
			});
			console.log ('makePopMenu end', chartType, ncol);
			
			prepPopPyramid(chartTitle, seriesY, chartType, ncol);
		});
		
		$('#menubox3').append('<ul id="menulist3"></ul>');
		// append the select "All" item
		$('#menulist3').append('<li><input type="checkbox" class="menuitem" name="ys3" value="All" checked>All</li>');
		// append the list of series in the dataset
		for (var i=0; i<seriesY.dataset.length; i++){
			$('#menulist3').append('<li><input type="checkbox" class="menuitem" name="ys3" value="'+i+'" >'+seriesY.dataset[i].iso3+' </li>');
		};
  		return;
	};

	function prepPopPyramid(chartTitle, seriesY, chartType, ncol){
		console.log('prepPopPyramid', chartTitle, seriesY, chartType, ncol)
		$('#chartbox3').empty();
		// jQuery does not allow wildcards in class name matching 
		// solution: make ncols an object (or array) containing current and previous values of ncol
		$('#chartbox3').removeClass('container'+ncol.prev); 
		// add CSS class to displayarea to position the boxes
		$('#chartbox').addClass('container'+ncol.curr);

		for (var i=0; i<chartTitle.length; i++){
			$('#chartbox3').append('<div id="chart'+100+i+'" class="container'+ncol.curr+'"></div>');
			$('#chart'+100+i).append(chartTitle[i]);
			for (var n=0; n<seriesY.dataset.length; n++){
				if (seriesY.dataset[n].iso3 === chartTitle[i]){
					var male = [];
					var female = [];
					for (var k = 0; k<seriesY.dataset[n].series[0].data.length; k++){
						male.push(-100*seriesY.dataset[n].series[0].data[k]/seriesY.dataset[n].totalPop);
						female.push(100*seriesY.dataset[n].series[1].data[k]/seriesY.dataset[n].totalPop);
					};
					//console.log('prepPopPyramid male', male, 'female ', female)
					seriesToPlot = {
						iso3: seriesY.dataset[n].iso3,
						totalPop: seriesY.dataset[n].totalPop,
						year: seriesY.dataset[n].year,
						categories: seriesY.categories,
						seriesTitle: seriesY.seriesTitle,
						series: [
							{name: 'Male', data: male}, 
							{name: 'Female', data: female}
						]
					};
					drawPopPyramid('#chart'+100+i, seriesToPlot);
					break;
				};
			};
			//console.log('addCharts appending: <div id="chart'+i+'" class="container'+ncol+'"></div>');
		};
		// add CSS class to chartbox to position the boxes
		// TBD look at whether this can be done earlier to avoid need to resize to display correctly
		$('#chartbox3').addClass('container'+ncol.curr);

	};



	function drawPopPyramid(renderto, seriesToPlot){
		console.log('drawPopPyramid', seriesToPlot.series);
		$(renderto).append('<p>'+renderto+'</p>');
		
		$(renderto).highcharts({
			chart: {
				type: 'bar'
			},
			title: {
				text: 'Population pyramid for '+seriesToPlot.iso3+' '+seriesToPlot.year,
			},
			subtitle: {
				text: 'Total '+seriesToPlot.totalPop+' Source: https://www.populationpyramid.net',
			},
			accessibility: {
				point: {
					valueDescriptionFormat: '{index}. Age {xDescription}, {value}%.'
				}
			},
			xAxis: [{
				categories: seriesToPlot.categories,
				//categories: ['0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80-84', '85-89', '90-94', '95-99', '100 + '],
				reversed: false,
				labels: {
					step: 1
				},
				accessibility: {
					description: 'Age (male)'
				}
			}, { // mirror axis on right side
				opposite: true,
				reversed: false,
				categories: seriesToPlot.categories,
				//categories: ['0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80-84', '85-89', '90-94', '95-99', '100 + '],
				linkedTo: 0,
				labels: {
					step: 1
				},
				accessibility: {
					description: 'Age (female)'
				}
			}],
			yAxis: {
				title: {
					text: null
				},
				labels: {
					formatter: function () {
						return Math.abs(this.value) + '%';
					}
				},
				accessibility: {
					description: 'Percentage population',
					rangeDescription: 'Range: 0 to 5%'
				}
			},

			plotOptions: {
				series: {
					stacking: 'normal'
				}
			},

			tooltip: {
				formatter: function () {
					return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
						'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 1) + '%';
				}
			},

			series: seriesToPlot.series
	});

	};
	
/*	function () { 
    const chart = Highcharts.chart('e', {
		chart: {
			height: 350,
			spacingRight: 30 
		},
		title: {
			text: 'Jobs: Norfolk & Suffolk'
		},
		subtitle: {
			text: '2003 - 2022'
		},
		xAxis: {
			categories: ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', 
			'2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', 
			'2020', '2021', '2022'],
			tickInterval: 1
		},
		yAxis: {
			title: {
				text: 'Jobs',
			},
			min: 0

		},
		plotOptions: {
			series: {
				lineWidth: 2
			}
		},
		
		series: [{
			name: 'Agriculture, Forestry & Fishing',
			data: [17944,19445,18632,19321,19649,19467,20616,22088,21908,19391,
			17742,20485,18949,20005,19496,18540,18899,19801,17308,17259]
		}]
	});
	
	const dropdown = document.querySelector("#dropdown");

	dropdown.addEventListener('change', (event) => {
		let value = event.target.value;
			data1 = [17944,19445,18632,19321,19649,19467,20616,22088,21908,19391,
			17742,20485,18949,20005,19496,18540,18899,19801,17308,17259];
			data2 = [1618,1237,1067,971,1063,682,730,810,895,851,987,1043,1166,950,
			1265,1171,1192,739,857,829];
			data3 = [86699,85682,81465,78449,76006,72414,67604,67885,70857,68306,
			65593,66192,64788,66533,68471,65971,65824,61600,66159,66858];
			data4 = [3217,2266,2198,2431,2871,2574,2151,2426,3292,2575,2688,3047,
			2504,3231,3162,3059,3167,3254,2441,2433];
			data5 = [2170,1529,2275,2771,2666,3675,4434,4828,4603,5216,4918,4711,
			5671,4875,3787,7497,4692,4889,4809,4831];
			data6 = [34244,40421,38867,40322,40423,42237,42580,36020,36732,35499,
			34454,38000,40686,37979,39256,39306,42450,42869,42407,43055];
			data7 = [121116,123298,120236,118668,117019,116507,113834,118818,119771,
			113337,117087,119076,123800,118369,118195,122127,115211,118824,114122,
			114727];
			data8 = [34495,32190,35998,33100,31310,31954,36965,32332,33316,33928,
			33100,31073,33472,36801,34124,36590,33147,34110,34853,35186];
			data9 = [40868,42656,44966,52194,47496,48245,45346,47252,44840,50734,
			50085,57136,53859,54826,57528,55780,57870,59542,61261,62133];
			data10 = [15733,15180,14701,15695,14717,15354,14958,13156,13104,13995,
			14315,17504,17539,17025,17327,15810,17000,17004,17265,17475];
			data11 = [22319,21107,20307,20329,20292,26211,23477,22127,22222,21221,
			21323,21847,19311,21261,20806,21656,21788,21840,20330,20597];
			data12 = [7065,7768,7702,7497,8219,10277,11473,13332,10425,10691,10919,
			9529,9925,9779,10480,11526,12299,11185,11720,11790];
			data13 = [27544,29355,30576,34693,34255,37864,34429,34110,32937,38103,
			34582,39308,37342,40738,44982,44999,44768,41814,42897,43082];
			data14 = [41597,43837,44506,46072,46133,51029,48257,42196,44842,54500,
			55186,59429,61470,63544,62642,62971,63665,64765,65899,66907];
			data15 = [31835,32686,33565,33483,33695,30892,35152,33620,30124,28777,
			27831,26834,26218,28757,27734,27489,30714,31897,31537,31920];
			data16 = [43620,44057,46307,50607,51101,56015,55318,55033,57119,55920,
			59027,55186,55927,56388,55972,59104,60425,54013,62538,62968];
			data17 = [70312,75043,77419,80046,79735,79079,82900,85904,84729,84960,
			90288,91734,93692,92800,100163,93942,96880,100847,98031,98580];
			data18 = [21059,20101,22300,19637,19394,17167,16923,18620,18943,16826,
			18037,17800,19156,22981,22060,20132,22600,15962,18431,18143];
			data19 = [14551,10961,13037,12406,12362,12329,14035,13726,13026,9415,
			11217,10916,15438,13555,13368,12460,13510,12005,11649,11580];
		if (value === 'Mining & Quarrying') {
			chart.series[0].update({
				name: 'Mining & Quarrying',
				data: data2
			});
		} else if (value === 'Manufacturing') {
			chart.series[0].update({
				name: 'Manufacturing',
				data: data3
			});
		} else if (value === 'Electricity, Gas, Steam & AC') {
			chart.series[0].update({
				name: 'Electricity, Gas, Steam & AC',
				data: data4
			});
		} else if (value === 'Water Supply') {
			chart.series[0].update({
				name: 'Water Supply',
				data: data5
			});
		} else if (value === 'Construction') {
			chart.series[0].update({
				name: 'Construction',
				data: data6
			});
		} else if (value === 'Wholesale & Retail') {
			chart.series[0].update({
				name: 'Wholesale & Retail',
				data: data7
			});
		} else if (value === 'Transportation & Storage') {
			chart.series[0].update({
				name: 'Transportation & Storage',
				data: data8
			});
		} else if (value === 'Accommodation & Food') {
			chart.series[0].update({
				name: 'Accommodation & Food',
				data: data9
			});
		} else if (value === 'Information & Communication') {
			chart.series[0].update({
				name: 'Information & Communication',
				data: data10
			});
		} else if (value === 'Finance & Insurance') {
			chart.series[0].update({
				name: 'Finance & Insurance',
				data: data11
			});
		} else if (value === 'Real Estate') {
			chart.series[0].update({
				name: 'Real Estate',
				data: data12
			});
		} else if (value === 'Professional, Scientific & Technical') {
			chart.series[0].update({
				name: 'Professional, Scientific & Technical',
				data: data13
			});
		} else if (value === 'Administrative & Support') {
			chart.series[0].update({
				name: 'Administrative & Support',
				data: data14
			});
		} else if (value === 'Public Administration & Defence') {
			chart.series[0].update({
				name: 'Public Administration & Defence',
				data: data15
			});
		} else if (value === 'Education') {
			chart.series[0].update({
				name: 'Education',
				data: data16
			});
		} else if (value === 'Human Health & Social Work') {
			chart.series[0].update({
				name: 'Human Health & Social Work',
				data: data17
			});
		} else if (value === 'Arts, Entertainment & Recreation') {
			chart.series[0].update({
				name: 'Arts, Entertainment & Recreation',
				data: data18
			});
		} else if (value === 'Other Services') {
			chart.series[0].update({
				name: 'Other Services',
				data: data19
			});
		} else {
			chart.series[0].update({
				name: 'Agriculture, Forestry & Fishing',
				data: data1
			});
		}
	});
*/
});
