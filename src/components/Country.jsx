import React, { useState, useEffect } from 'react'
import ReactLoading from "react-loading"
import { fetchCountry } from "../util/util"
import Card from "../components/Card"
import "../css/Country.css"

const Country = ({ country }) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})

    useEffect(() => {
        (async () => {
            const data = await fetchCountry(country)
            setData(data)
            setLoading(false)
        })()
    }, [country])

    return (
        <>
            {loading ? (
                <ReactLoading style={{ margin: "auto" }} type="bars" color="#646464" />

            ) : (
                    <>
                        <div className="country-header">
                            <img src={data.countryInfo.flag} alt={country} className="country-flag" />
                            <span className="country-title">{country}</span>
                        </div>
                        <div className="cards">
                            <Card data={data.cases} type="cases" title="Total cases" />
                            <Card data={data.deaths} type="deaths" title="Total deaths" />
                            <Card data={data.recovered} type="recovered" title="Total recovered" />
                            <Card data={data.todayCases} type="todayCases" title="Cases today" />
                            <Card data={data.todayDeaths} type="todayDeaths" title="Deaths today" />
                            <Card data={data.critical} type="critical" title="Total critical" />
                        </div>
                    </>
                )}
        </>
    )
}

export default Country