$(function () { 
	const bodyWidth = $('body').width();
	const chartWidth = Math.floor(bodyWidth / 3);

	const chart = Highcharts.chart('h', {
		chart: {
			type: 'column',
			height: 350,
			width: chartWidth,
			spacingRight: 30 
		},
		title: {
			text: 'Business Units'
		},
		subtitle: {
			text: '2021'
		},
		xAxis: {
			categories: ['Wholesale & Retail', 'Construction', 'Professional, Scientific & Technical', 'Administrative & Support', 'Agriculture, Forestry & Fishing', 'Accommodation & Food', 
			'Transportation & Storage', 'Human Health & Social Work', 'Manufacturing', 'Information & Communication', 'Other Services', 'Real Estate', 'Arts, Entertainment & Recreation', 
			'Education', 'Finance & Insurance', 'Public Administration & Defence', 'Water Supply', 'Electricity, Gas, Steam & AC', 'Mining & Quarrying'],
			tickInterval: 1
		},
		yAxis: {
			title: {
				text: 'Business Units',
			},
			min: 0,
			tickInterval: 5000

		},
		plotOptions: {
			series: {
				lineWidth: 2,
				colorByPoint: true,
				colors: ['purple', 'purple', 'purple', 'purple', '#00affb', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple']
			}
		},
		
		legend: {
            enabled: false
		},
		
		series: [{
			name: 'Business Units',
			data: [12351, 9558, 8848, 5701, 5633, 5210, 3958, 3805, 3421, 2985, 2601, 2412, 2058, 1779, 1222, 1115, 307, 75, 52]
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