export const sourceData = {
	backgroundColor: "",
	grid: {
		containLabel: true,
		top: "50",
		bottom: "10",
		left: "10",
		right: "30",
	},
	tooltip: {
		show: true,
		trigger: "axis",
		backgroundColor: "rgba(50,50,50,0.7)",
		appendToBody: true,
		borderColor: "#333",
		borderWidth: 1,
		padding: 5,
		textStyle: {
			color: "#D8D8D8",
			fontSize: 16,
			fontFamily: "FZLTTHJW",
			fontWeight: "bold",
		},
	},
	legend: {
		show: false,
	},
	toolbox: {},
	xAxis: [
		{
			show: true,
			name: "x",
			fieldName: "x",
			nameRotate: 0,
			type: "category",
			scale: true,
			axisLine: {
				show: true,
				lineStyle: {
					width: 1,
					color: "#979797",
				},
			},
			axisLabel: {
				show: true,
				rotate: 0,
				color: "#D8D8D8",
				fontSize: 12,
				fontFamily: "FZLTTHJW",
				fontWeight: "bold",
				formatter: `function(data) {
return data;
}`,
			},
			nameTextStyle: {
				color: "#fff",
				fontWeight: "normal",
				fontFamily: "FZLTTHJW",
				fontSize: 12,
			},
			splitLine: {
				show: false,
				lineStyle: {
					width: 1,
					color: "#fff",
					type: "solid",
				},
			},
		},
	],
	yAxis: [
		{
			show: true,
			type: "value",
			name: "Y",
			fieldName: "Y",
			nameTextStyle: {
				color: "#fff",
				fontWeight: "normal",
				fontFamily: "FZLTTHJW",
				fontSize: 12,
			},
			nameRotate: 0,
			boundaryGap: false,
			splitNumber: 5,
			scale: false,
			axisLine: {
				show: true,
				lineStyle: {
					width: 1,
					color: "#979797",
				},
			},
			axisLabel: {
				show: true,
				rotate: 0,
				color: "#D8D8D8",
				fontSize: 12,
				fontFamily: "FZLTTHJW",
				fontWeight: "bold",
				formatter: `function(data) {
return data;
}`,
			},
			splitLine: {
				show: false,
				lineStyle: {
					width: 1,
					color: "#fff",
					type: "solid",
				},
			},
		},
	],
	series: [
		{
			name: "y",
			FieldName: "y",
			type: "bar",
			itemStyle: {
				color: "#21D9FF",
				borderColor: "#00000000",
				borderWidth: 2,
				barBorderRadius: [10, 10, 0, 0],
			},
			barWidth: "20",
			barCategoryGap: "30%",
			showBackground: false,
			backgroundStyle: {
				color: "rgba(180, 180, 180, 0.2)",
			},
			label: {
				show: true,
				rotate: 0,
				color: "#D8D8D8",
				fontSize: 12,
				fontFamily: "FZLTTHJW",
				fontWeight: "bold",
				position: "top",
				formatter: `function(data) {
return data.value;
}`,
			},
		},
		{
			name: "y",
			FieldName: "y",
			type: "bar",
			itemStyle: {
				color: "#21D9FF",
				borderColor: "#00000000",
				borderWidth: 2,
				barBorderRadius: [10, 10, 0, 0],
			},
			barWidth: "20",
			barCategoryGap: "30%",
			showBackground: false,
			backgroundStyle: {
				color: "rgba(180, 180, 180, 0.2)",
			},
			label: {
				show: true,
				rotate: 0,
				color: "#D8D8D8",
				fontSize: 12,
				fontFamily: "FZLTTHJW",
				fontWeight: "bold",
				position: "top",
				formatter: `function(data) {
return data.value;
}`,
			},
		},
		{
			name: "y",
			FieldName: "y",
			type: "bar",
			// itemStyle: {
			//   color: '#21D9FF',
			//   borderColor: '#00000000',
			//   borderWidth: 2,
			//   barBorderRadius: [10, 10, 0, 0],
			// },
			barWidth: "20",
			barCategoryGap: "30%",
			showBackground: false,
			backgroundStyle: {
				color: "rgba(180, 180, 180, 0.2)",
			},
			label: {
				show: true,
				rotate: 0,
				color: "#D8D8D8",
				fontSize: 12,
				fontFamily: "FZLTTHJW",
				fontWeight: "bold",
				position: "top",
				formatter: `function(data) {
return data.value;
}`,
			},
		},
	],
};

export const targetData = {
	outSide: "",
	array: [
		{
			array1: "",
			array2: [],
		},
	],
};
