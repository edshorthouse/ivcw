$(function () { 
	const bodyWidth = $('body').width();
	const chartWidth = Math.floor(bodyWidth / 3);

	const chart = Highcharts.chart('i', {
		chart: {
			type: 'column',
			height: 350,
			width: chartWidth,
			spacingRight: 30 
		},
		title: {
			text: 'GVA'
		},
		subtitle: {
			text: '2021'
		},
		xAxis: {
			categories: ['Wholesale & Retail', 'Manufacturing', 'Construction', 'Human Health & Social Work', 'Education', 'Finance & Insurance', 'Administrative & Support', 
			'Professional, Scientific & Technical', 'Transportation & Storage', 'Public Administration & Defence', 'Accommodation & Food', 'Real Estate', 'Information & Communication', 
			'Agriculture, Forestry & Fishing', 'Arts, Entertainment & Recreation', 'Water Supply', 'Other Services', 'Mining & Quarrying', 'Electricity, Gas, Steam & AC'],
			tickInterval: 1
		},
		yAxis: {
			title: {
				text: 'GVA',
			},
			min: 0,
			tickInterval: 1000000000,
			
			labels: {
                formatter: function () {
                    return '£' +  this.value / 1000000000 + 'bn';
                }
            }

		},
		plotOptions: {
			series: {
				lineWidth: 2,
				colorByPoint: true,
				colors: ['purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', '#00affb', 'purple', 'purple', 'purple', 'purple', 'purple']
			}
		},
		
		legend: {
            enabled: false
		},
		
		series: [{
			name: 'GVA',
			data: [3489028147, 3006248312, 2987239203, 2916076927, 2217035649, 2156153382, 1927056454, 1728609833, 1518793866, 1413427586, 1242125874, 1184767001, 998545213, 888692740, 
			567779289, 496581799, 482127367, 435741049, 369582486]
		}]
	});
	
	const dropdown = document.querySelector("#dropdown");
	const originalColors = chart.series[0].options.data.map((point) => point.color);

	dropdown.addEventListener('change', (event) => {
		const selectedCategory = event.target.value;
		const categories = chart.xAxis[0].categories;
		
		const data = categories.map((category, index) => {
			const color = (category === selectedCategory) ? '#00affb' : 'purple';
			return {
				y: chart.series[0].data[index].y,
				color: color
			};
		});

		chart.series[0].update({
			name: selectedCategory,
			data: data
		});

		chart.series[0].points.forEach((point, index) => {
			if (categories[index] !== selectedCategory) {
				point.update({
					color: 'purple'
				}, false);
			}
		});

		chart.redraw();
	});
});