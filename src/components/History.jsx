import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import FadeIn from "react-fade-in"
import { fetchCountryHistory } from '../util/util'
import HistoryCases from "./HistoryCases"
import HistoryDeaths from "./HistoryDeaths"
import "../css/History.css"

export const History = ({ country }) => {
    const [loading, setLoading] = useState(true)
    const [history, setHistory] = useState({})

    useEffect(() => {
        (async () => {
            const history = await fetchCountryHistory(country)
            setHistory(history)
            setLoading(false)
        })()
    }, [country])
    return (
        <div>
            {loading ? (
                <ReactLoading className="loading" type="bars" color="#646464" />
            ) : (
                    <FadeIn>
                        <HistoryCases country={country} data={history.cases} />
                        <HistoryDeaths country={country} data={history.deaths} />
                    </FadeIn>
                )}
        </div>
    )
}

export default History