import {PieChart} from "react-native-chart-kit";
import React from "react";
import {Dimensions} from "react-native";
import {Stats} from "@/types";

const PROTEIN_CHART_COLOR = "rgb(190,72,72)";
const CARBS_CHART_COLOR = "rgb(210,164,131)";
const FATS_CHART_COLOR = "rgb(229,206,106)";

const PieChartGraph = (stats: Stats) => {

    const chartConfig = {
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2,
        barPercentage: 0.5,
        useShadowColorFromDataset: false
    };

    const pieChartData = [
        {
            name: "Proteins",
            quantity: stats.proteins,
            color: PROTEIN_CHART_COLOR,
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Carbohydrates",
            quantity: stats.carbohydrates,
            color: CARBS_CHART_COLOR,
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Fats",
            quantity: stats.fats,
            color: FATS_CHART_COLOR,
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

export default PieChartGraph;