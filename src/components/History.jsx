import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import FadeIn from "react-fade-in"
import { Line } from 'react-chartjs-2'
import { fetchCountryHistory } from '../util/util'

export const History = ({ country }) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})

    useEffect(() => {
        (async () => {
            const history = await fetchCountryHistory(country)
            const data = prepareData(history)
            setData(data)
            setLoading(false)
        })()
    }, [country])

    const prepareData = (history) => {
        // Get data in the form of an array of {date: num} object, sorted in reverse
        let data = Object.entries(history).map(([date, num]) => ({ [date]: num })).reverse()

        // Filter duplicates by removing data with similar number of earlier date
        data = data.reduce((acc, obj, idx) => {
            if (idx < data.length - 1) {
                if (Object.values(obj)[0] !== Object.values(data[idx + 1])[0]) {
                    acc = [...acc, obj]
                }
            } else {
                acc = [...acc, obj
                ]
            }
            return acc
        }, [])

        // Reverse the data again so that it's back in ascending order by date
        data = data.reverse()

        // Retrieve array of keys and array of values from the data
        const labels = data.flatMap(obj => Object.keys(obj))
        const values = data.flatMap(obj => Object.values(obj))

        // Prepare data for Chart.js
        const chartData = ({
            labels,
            datasets: [
                {
                    label: "Date",
                    data: values
                }
            ]
        })
        return chartData
    }

    return (
        <FadeIn>
            <div style={{ backgroundColor: "white", padding: "20px" }}>
                {loading ? (
                    <ReactLoading className="loading" type="bars" color="#646464" />
                ) : (
                        <Line data={data}
                            options={{
                                title: {
                                    display: true,
                                    text: `Coronavirus cases in ${country}`,
                                    fontSize: 25,
                                    position: "left"
                                }
                            }} />
                    )}
            </div>
        </FadeIn>
    )
}

export default History