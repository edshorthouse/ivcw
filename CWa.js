$(function () { 
    const chart = Highcharts.chart('e', {
		chart: {
			height: 350,
			spacingRight: 30 
		},
		title: {
			text: 'Jobs'
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
});

