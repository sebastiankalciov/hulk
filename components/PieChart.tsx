import {PieChart} from "react-native-chart-kit";
import React from "react";
import {Dimensions} from "react-native";

interface Stats {
    proteins: number;
    carbohydrates: number;
    fats: number;
}
const PieChart = (stats: Stats) => {

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2,
        barPercentage: 0.5,
        useShadowColorFromDataset: false
    };
    const pieChartData = [
        {
            name: "Proteins",
            quantity: stats.proteins,
            color: "rgb(190,72,72)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Carbohydrates",
            quantity: stats.carbohydrates,
            color: "rgb(210,164,131)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Fats",
            quantity: stats.fats,
            color: "rgb(229,206,106)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        }
    ];

    const screenWidth = Dimensions.get("window").width;

    return (
        <PieChart
            data={pieChartData}
            width={screenWidth}
            height={120}
            chartConfig={chartConfig}
            accessor={"quantity"}
            backgroundColor={"transparent"}
            paddingLeft={"-42"}
        />
    )
}

export default PieChart;