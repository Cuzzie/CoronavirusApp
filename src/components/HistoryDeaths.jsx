import React from 'react'
import { Line } from 'react-chartjs-2'
import "../css/History.css"

export const HistoryDeaths = ({ country, data }) => {
    const prepareChartData = ({ labels, values }) => {
        // Prepare data for Chart.js
        const chartData = ({
            labels,
            datasets: [
                {
                    label: "No. of Deaths",
                    data: values,
                    backgroundColor: 'rgb(114,61,70,0.4)',
                    pointBackgroundColor: 'rgb(114,61,70,0.7)'
                }
            ]
        })
        return chartData
    }
    const chartData = prepareChartData(data)

    return (
        <div className="chart-container">
            <div className="canvas-container">
                <Line data={chartData}
                    options={{
                        title: {
                            display: true,
                            text: `Coronavirus deaths in ${country}`,
                            fontSize: 25,
                            position: "left"
                        },
                        maintainAspectRatio: false
                    }} />
            </div>
        </div>
    )
}

export default HistoryDeaths
