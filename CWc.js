$(function () { 
    const chart = Highcharts.chart('f', {
		chart: {
			height: 350,
			spacingRight: 30 
		},
		title: {
			text: 'Location Quotient'
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
				text: 'Location Quotient',
			},
			type: 'logarithmic',
			min: 0.4,
			max: 2.5,
			tickInterval: 0.2

		},
		plotOptions: {
			series: {
				lineWidth: 2
			}
		},
		
		series: [{
			name: 'Agriculture, Forestry & Fishing',
			data: [0.86,1.49,1.02,1.26,1.54,1.86,1.92,2.04,1.95,1.7,1.62,1.8,1.73,1.77,1.69,1.51,1.58,1.68,1.46,1.45],
			zones: [{
				value: 1,
				color: 'red'
			}, {
				color: 'green'
			}]
		}]
	});
	
	const dropdown = document.querySelector("#dropdown");

	dropdown.addEventListener('change', (event) => {
		let value = event.target.value;
			data1 = [0.86,1.49,1.02,1.26,1.54,1.86,1.92,2.04,1.95,1.7,1.62,1.8,1.73,1.77,1.69,1.51,1.58,1.68,1.46,1.45];
			data2 = [1.2,0.94,0.82,0.7,0.78,0.51,0.54,0.62,0.64,0.55,0.74,0.72,0.84,0.76,1.08,0.99,0.95,0.62,0.81,0.79];
			data3 = [1.2,1.22,1.22,1.17,1.18,1.17,1.15,1.19,1.25,1.21,1.17,1.15,1.14,1.18,1.18,1.15,1.15,1.11,1.22,1.22];
			data4 = [1.53,1.28,1.28,1.32,1.45,1.37,0.82,0.9,1.22,0.93,1.04,1.17,0.86,1.1,1.01,0.93,1.02,1.02,0.79,0.77];
			data5 = [0.67,0.46,0.68,0.78,0.73,0.96,1.18,1.19,1.09,1.21,1.13,1.08,1.28,1.07,0.78,1.5,0.98,0.99,0.96,0.94];
			data6 = [1.09,1.22,1.14,1.14,1.13,1.14,1.18,1.11,1.15,1.14,1.13,1.19,1.24,1.13,1.11,1.13,1.17,1.21,1.17,1.17];
			data7 = [1.08,1.07,1.06,1.06,1.07,1.06,1.04,1.09,1.12,1.06,1.1,1.09,1.13,1.09,1.09,1.12,1.06,1.12,1.09,1.1];
			data8 = [1.24,1.09,1.2,1.09,1.03,1.05,1.22,1.09,1.12,1.15,1.13,1.02,1.05,1.09,1.02,1.08,0.95,0.95,0.96,0.95];
			data9 = [0.96,0.97,1.03,1.16,1.08,1.05,1,1.08,0.99,1.12,1.07,1.17,1.07,1.04,1.08,1.03,1.05,1.16,1.14,1.15];
			data10 = [0.66,0.64,0.61,0.63,0.59,0.61,0.59,0.53,0.52,0.56,0.55,0.64,0.62,0.59,0.57,0.54,0.56,0.55,0.56,0.56];
			data11 = [0.89,0.84,0.83,0.8,0.81,0.99,0.93,0.91,0.89,0.86,0.89,0.89,0.81,0.87,0.85,0.9,0.89,0.91,0.81,0.81];
			data12 = [0.95,0.95,0.89,0.89,0.95,1.01,1.01,1.27,0.97,0.93,0.89,0.78,0.78,0.79,0.83,0.87,0.89,0.8,0.85,0.84];
			data13 = [0.74,0.75,0.75,0.78,0.76,0.78,0.69,0.71,0.67,0.76,0.65,0.7,0.63,0.67,0.74,0.72,0.71,0.67,0.67,0.67];
			data14 = [0.95,0.94,0.92,0.9,0.88,0.92,0.95,0.82,0.86,1,1.02,1.02,1.01,1.02,0.98,0.99,1.02,1.06,1.05,1.06];
			data15 = [0.95,0.94,0.96,0.94,0.97,0.9,0.98,0.92,0.9,0.89,0.88,0.87,0.87,0.96,0.92,0.91,0.99,1,0.97,0.97];
			data16 = [0.82,0.8,0.83,0.89,0.91,0.94,0.92,0.9,0.95,0.92,0.97,0.9,0.91,0.92,0.9,0.96,0.99,0.87,1.02,1.02];
			data17 = [0.98,0.99,1.01,1.01,1.01,0.99,0.98,1,0.98,0.97,1.01,1.01,1.03,1.01,1.07,1.01,1.04,1.06,1.01,1.01];
			data18 = [1.39,1.3,1.43,1.21,1.24,1.05,1.04,1.11,1.17,1.02,1.09,1.06,1.14,1.29,1.21,1.14,1.27,0.99,1.09,1.07];
			data19 = [1.07,0.81,0.96,0.87,0.91,0.85,0.98,0.97,0.92,0.71,0.81,0.79,1.02,0.9,0.9,0.84,0.89,0.85,0.82,0.81];
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