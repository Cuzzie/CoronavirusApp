import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import FadeIn from "react-fade-in"
import { Line } from 'react-chartjs-2'
import { fetchCountryHistory } from '../util/util'
import "../css/History.css"

export const HistoryCases = ({ country }) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})

    useEffect(() => {
        (async () => {
            const history = await fetchCountryHistory(country, "cases")
            const data = prepareChartData(history)
            setData(data)
            setLoading(false)
        })()
    }, [country])

    const prepareChartData = ({ labels, values }) => {
        // Prepare data for Chart.js
        const chartData = ({
            labels,
            datasets: [
                {
                    label: "Date",
                    data: values,
                    backgroundColor: 'rgb(114,61,70,0.4)',
                    pointBackgroundColor: 'rgb(114,61,70,0.7)'
                }
            ]
        })
        return chartData
    }

    return (
        <FadeIn>
            <div className="chart-container">
                {loading ? (
                    <ReactLoading className="loading" type="bars" color="#646464" />
                ) : (
                        <div className="canvas-container">
                            <Line data={data}
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
                    )}
            </div>
        </FadeIn>
    )
}

export default HistoryCases