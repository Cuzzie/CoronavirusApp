import React from 'react'
import { Line } from 'react-chartjs-2'
import "../css/History.css"

export const HistoryCases = ({ country, data }) => {
    const prepareChartData = ({ labels, values }) => {
        // Prepare data for Chart.js
        const chartData = ({
            labels,
            datasets: [
                {
                    label: "No. of Cases",
                    data: values,
                    backgroundColor: 'rgba(14,99,105,0.2)',
                    pointBackgroundColor: 'rgba(23,163,173,0.7)'
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
                            text: `Coronavirus cases in ${country}`,
                            fontSize: 25,
                            position: "left"
                        },
                        maintainAspectRatio: false
                    }} />
            </div>
        </div>
    )
}

export default HistoryCases