$(function () { 
	const bodyWidth = $('body').width();
	const chartWidth = Math.floor(bodyWidth / 3);

	const chart = Highcharts.chart('g', {
		chart: {
			type: 'column',
			height: 350,
			width: chartWidth,
			spacingRight: 30 
		},
		title: {
			text: 'Average Wage per Job'
		},
		subtitle: {
			text: '2021'
		},
		xAxis: {
			categories: ['Agriculture, Forestry & Fishing', 'All Industries'],
			tickInterval: 1
		},
		yAxis: {
			title: {
				text: 'Average Wage per Job',
			},
			min: 0,
			tickInterval: 5000,
			labels: {
				formatter: function () {
					return '£' +  this.value / 1000 + 'k';
				}
			}

		},
		plotOptions: {
			series: {
				lineWidth: 2,
				dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return '£' + Highcharts.numberFormat(this.y / 1000, 1) + 'k';
                    }
				}
			}
		},
		
		legend: {
            enabled: false
		},
		
        series: [{
            name: 'Average Wages per Job',
            data: [{
                y: 23841,
            }, {
                y: 27340,
                color: 'purple'
            }],
		}]
	});
	
	const dropdown = document.querySelector("#dropdown");
	
	dropdown.addEventListener('change', (event) => {
		let value = event.target.value;

		chart.xAxis[0].categories[0] = value;

		chart.redraw();
	});

	dropdown.addEventListener('change', (event) => {
		let value = event.target.value;
			data1 = [23841,27340];
			data2 = [60141,27340];
			data3 = [34622,27340];
			data4 = [46733,27340];
			data5 = [31989,27340];
			data6 = [37724,27340];
			data7 = [23373,27340];
			data8 = [31958,27340];
			data9 = [15715,27340];
			data10 = [41322,27340];
			data11 = [31852,27340];
			data12 = [32142,27340];
			data13 = [37271,27340];
			data14 = [19767,27340];
			data15 = [31022,27340];
			data16 = [26725,27340];
			data17 = [25597,27340];
			data18 = [20961,27340];
			data19 = [22087,27340];
		if (value === 'Mining & Quarrying') {
			chart.series[0].update({
				name: 'Average Wage per Job',
				data: data2
			});
		} else if (value === 'Manufacturing') {
			chart.series[0].update({
				name: 'Average Wage per Job',
				data: data3
			});
		} else if (value === 'Electricity, Gas, Steam & AC') {
			chart.series[0].update({
				name: 'Average Wage per Job',
				data: data4
			});
		} else if (value === 'Water Supply') {
			chart.series[0].update({
				name: 'Average Wage per Job',
				data: data5
			});
		} else if (value === 'Construction') {
			chart.series[0].update({
				name: 'Average Wage per Job',
				data: data6
			});
		} else if (value === 'Wholesale & Retail') {
			chart.series[0].update({
				name: 'Average Wage per Job',
				data: data7
			});
		} else if (value === 'Transportation & Storage') {
			chart.series[0].update({
				name: 'Average Wage per Job',
				data: data8
			});
		} else if (value === 'Accommodation & Food') {
			chart.series[0].update({
				name: 'Average Wage per Job',
				data: data9
			});
		} else if (value === 'Information & Communication') {
			chart.series[0].update({
				name: 'Average Wage per Job',
				data: data10
			});
		} else if (value === 'Finance & Insurance') {
			chart.series[0].update({
				name: 'Average Wage per Job',
				data: data11
			});
		} else if (value === 'Real Estate') {
			chart.series[0].update({
				name: 'Average Wage per Job',
				data: data12
			});
		} else if (value === 'Professional, Scientific & Technical') {
			chart.series[0].update({
				name: 'Average Wage per Job',
				data: data13
			});
		} else if (value === 'Administrative & Support') {
			chart.series[0].update({
				name: 'Average Wage per Job',
				data: data14
			});
		} else if (value === 'Public Administration & Defence') {
			chart.series[0].update({
				name: 'Average Wage per Job',
				data: data15
			});
		} else if (value === 'Education') {
			chart.series[0].update({
				name: 'Average Wage per Job',
				data: data16
			});
		} else if (value === 'Human Health & Social Work') {
			chart.series[0].update({
				name: 'Average Wage per Job',
				data: data17
			});
		} else if (value === 'Arts, Entertainment & Recreation') {
			chart.series[0].update({
				name: 'Average Wage per Job',
				data: data18
			});
		} else if (value === 'Other Services') {
			chart.series[0].update({
				name: 'Average Wage per Job',
				data: data19
			});
		} else {
			chart.series[0].update({
				name: 'Average Wage per Job',
				data: data1
			});
		}
	});
});