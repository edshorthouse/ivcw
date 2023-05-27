$(function () { 
    const chart = Highcharts.chart('k', {
		chart: {
			type: 'column',
			height: 600,
			width: $('body').width(),
			marginBottom: 200,
			spacingRight: 30 
		},
		title: {
			text: 'Jobs'
		},
		subtitle: {
			text: '2022'
		},
		xAxis: {
			categories: ['Wholesale & Retail', 'Human Health & Social Work', 'Administrative & Support', 'Manufacturing', 'Education', 'Accommodation & Food', 'Professional, Scientific & Technical',
			'Construction', 'Transportation & Storage', 'Public Administration & Defence', 'Finance & Insurance', 'Arts, Entertainment & Recreation', 'Information & Communication', 'Agriculture, Forestry & Fishing',
			'Real Estate', 'Other Services', 'Water Supply', 'Electricity, Gas, Steam & AC', 'Mining & Quarrying'],
			tickInterval: 1
		},
		yAxis: {
			title: {
				text: 'Jobs',
			},
			min: 0,
			tickInterval: 10000

		},
		plotOptions: {
			series: {
				lineWidth: 2,
				dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return Highcharts.numberFormat(this.y / 1000, 1) + 'k';
				}},
				colorByPoint: true,
				colors: ['purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple']
			}
		},
		
		legend: {
            enabled: false
		},
		
		series: [{
			name: 'Jobs',
			data: [114727, 98580, 66907, 66858, 62968, 62133, 43082, 43055, 35186, 31920, 20597, 18143, 17475, 17259, 11790, 11580, 4831, 2433, 829]
		}]
	});
	
	const dropdown = document.querySelector("#dropdown2");

	dropdown.addEventListener('change', (event) => {
	  const selectedOption = event.target.value;
	  
	  if (selectedOption === "Business Units") {
		const newChart = Highcharts.chart('k', {
		  chart: {
			type: 'column',
			height: 600,
			width: $('body').width(),
			marginBottom: 200,
			spacingRight: 30 
		  },
		  title: {
			text: 'Business Units'
		  },
		  subtitle: {
			text: '2021'
		  },
		  xAxis: {
			categories: ['Wholesale & Retail', 'Construction', 'Professional, Scientific & Technical', 'Administrative & Support', 'Agriculture, Forestry & Fishing', 'Accommodation & Food', 'Transportation & Storage', 'Human Health & Social Work', 'Manufacturing', 'Information & Communication', 'Other Services', 'Real Estate', 'Arts, Entertainment & Recreation', 'Education', 'Finance & Insurance', 'Public Administration & Defence', 'Water Supply', 'Electricity, Gas, Steam & AC', 'Mining & Quarrying'],
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
			  dataLabels: {
				enabled: true,
				formatter: function () {
				  return Highcharts.numberFormat(this.y / 1000, 1) + 'k';
				}
			  },
			  colorByPoint: true,
			  colors: ['purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple']
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
	} else if (selectedOption === "Jobs") {
		const newChart = Highcharts.chart('k', {
		  chart: {
			type: 'column',
			height: 600,
			width: $('body').width(),
			marginBottom: 200,
			spacingRight: 30 
		  },
			title: {
				text: 'Jobs'
			},
			subtitle: {
				text: '2022'
			},
			xAxis: {
				categories: ['Wholesale & Retail', 'Human Health & Social Work', 'Administrative & Support', 'Manufacturing', 'Education', 'Accommodation & Food', 'Professional, Scientific & Technical',
				'Construction', 'Transportation & Storage', 'Public Administration & Defence', 'Finance & Insurance', 'Arts, Entertainment & Recreation', 'Information & Communication', 'Agriculture, Forestry & Fishing',
				'Real Estate', 'Other Services', 'Water Supply', 'Electricity, Gas, Steam & AC', 'Mining & Quarrying'],
				tickInterval: 1
			},
			yAxis: {
				title: {
					text: 'Jobs',
				},
				min: 0,
				tickInterval: 10000
		  },
		  plotOptions: {
			series: {
			  lineWidth: 2,
			  dataLabels: {
				enabled: true,
				formatter: function () {
				  return Highcharts.numberFormat(this.y / 1000, 1) + 'k';
				}
			  },
			  colorByPoint: true,
			  colors: ['purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple']
			}
		  },
		  legend: {
			enabled: false
		  },
		  series: [{
			name: 'Jobs',
			data: [114727, 98580, 66907, 66858, 62968, 62133, 43082, 43055, 35186, 31920, 20597, 18143, 17475, 17259, 11790, 11580, 4831, 2433, 829]
		  }]
		});
	} else if (selectedOption === "Location Quotient") {
		const newChart = Highcharts.chart('k', {
		  chart: {
			type: 'column',
			height: 600,
			width: $('body').width(),
			marginBottom: 200,
			spacingRight: 30 
		  },
			title: {
				text: 'Location Quotient'
			},
			subtitle: {
				text: '2022'
			},
			xAxis: {
				categories: ['Agriculture, Forestry & Fishing', 'Manufacturing', 'Construction', 'Accommodation & Food', 'Wholesale & Retail', 'Arts, Entertainment & Recreation', 'Administrative & Support', 
				'Education', 'Human Health & Social Work', 'Public Administration & Defence', 'Transportation & Storage', 'Water Supply', 'Real Estate', 'Finance & Insurance', 'Other Services', 
				'Mining & Quarrying', 'Electricity, Gas, Steam & AC', 'Professional, Scientific & Technical', 'Information & Communication'],
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
			  lineWidth: 2,
			  dataLabels: {
				enabled: true,
				formatter: function () {
				  return Highcharts.numberFormat(this.y);
				}
			  },
			  colorByPoint: true,
			  colors: ['green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red']
			}
		  },
		  legend: {
			enabled: false
		  },
		  series: [{
			name: 'Location Quotient',
			data: [1.45, 1.22, 1.17, 1.15, 1.1, 1.07, 1.06, 1.02, 1.01, 0.97, 0.95, 0.94, 0.84, 0.81, 0.81, 0.79, 0.77, 0.67, 0.56]
		  }]
		});
	} else if (selectedOption === "Average Wage per Job") {
		const newChart = Highcharts.chart('k', {
		  chart: {
			type: 'column',
			height: 600,
			width: $('body').width(),
			marginBottom: 200,
			spacingRight: 30 
		  },
			title: {
				text: 'Average Wage per Job'
			},
			subtitle: {
				text: '2021'
			},
			xAxis: {
				categories: ['Mining & Quarrying', 'Electricity, Gas, Steam & AC', 'Information & Communication', 'Construction', 'Professional, Scientific & Technical', 'Manufacturing', 'Real Estate', 'Water Supply', 
				'Transportation & Storage', 'Finance & Insurance', 'Public Administration & Defence', 'Education', 'Human Health & Social Work', 'Agriculture, Forestry & Fishing', 'Wholesale & Retail', 'Other Services',
				'Arts, Entertainment & Recreation', 'Administrative & Support', 'Accommodation & Food'],
				tickInterval: 1
			},
			yAxis: {
				title: {
					text: 'Average Wage per Job',
				},
				min: 0,
				tickInterval: 10000,
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
			  },
			  colorByPoint: true,
			  colors: ['purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple']
			}
		  },
		  legend: {
			enabled: false
		  },
		  series: [{
			name: 'Average Wage per Job',
			data: [60141, 46733, 41322, 37724, 37271, 34622, 32142, 31989, 31958, 31852, 31022, 26725, 25597, 23841, 23373, 22087, 20961, 19767, 15715]
		  }]
		});
	} else if (selectedOption === "GVA") {
		const newChart = Highcharts.chart('k', {
		  chart: {
			type: 'column',
			height: 600,
			width: $('body').width(),
			marginBottom: 200,
			spacingRight: 30 
		  },
			title: {
				text: 'GVA'
			},
			subtitle: {
				text: '2021'
			},
			xAxis: {
				categories: ['Wholesale & Retail', 'Manufacturing', 'Construction', 'Human Health & Social Work', 'Education', 'Finance & Insurance', 'Administrative & Support', 'Professional, Scientific & Technical',
				'Transportation & Storage', 'Public Administration & Defence', 'Accommodation & Food', 'Real Estate', 'Information & Communication', 'Agriculture, Forestry & Fishing', 'Arts, Entertainment & Recreation',
				'Water Supply', 'Other Services', 'Mining & Quarrying', 'Electricity, Gas, Steam & AC'],	
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
				dataLabels: {
					enabled: true,
					formatter: function () {
						return '£' + Highcharts.numberFormat(this.y / 1000000000)+ 'bn';
					}
				},
				colorByPoint: true,
				colors: ['purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple']
				}
			},
			legend: {
				enabled: false
			},
			series: [{
				name: 'GVA',
				data: [3489028147, 3006248312, 2987239203, 2916076927, 2217035649, 2156153382, 1927056454, 1728609833, 1518793866, 1413427586, 1242125874, 1184767001, 998545213, 888692740, 567779289, 496581799, 482127367, 435741049, 369582486]
			}]
		});
	}
});
	
	const eventListener = dropdown.addEventListener('change', (event) => {
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