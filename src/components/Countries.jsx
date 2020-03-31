import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import ReactLoading from "react-loading"
import FadeIn from "react-fade-in"
import { fetchCountries } from "../util/util"
import "../css/Countries.css"

export const Countries = () => {
    const [loading, setLoading] = useState(true)
    const [countryData, setCountryData] = useState([{}])

    useEffect(() => {
        (async () => {
            const data = await fetchCountries()
            setCountryData(data)
            setLoading(false)
        })()
    }, [])

    return (
        <div className="country-card">
            {loading ? (
                <ReactLoading type="bars" color="#646464" />
            ) : (
                    <FadeIn>
                        <table>
                            <thead>
                                <tr>
                                    <th>Country</th>
                                    <th>Cases</th>
                                    <th>Deaths</th>
                                    <th>Recovered</th>
                                </tr>
                            </thead>
                            <tbody>
                                {countryData.sort((countryA, countryB) => countryB.cases - countryA.cases)
                                    .map(({ country, countryInfo, cases, deaths, recovered }, idx) => {
                                        const formattedCases = cases ? cases.toLocaleString() : ""
                                        const formattedDeaths = deaths ? deaths.toLocaleString() : ""
                                        const formattedRecovered = recovered ? recovered.toLocaleString() : ""
                                        return (
                                            <tr key={idx}>
                                                <td style={{ minWidth: "150px" }}>
                                                    <img className="flag" src={countryInfo.flag} alt={country} />
                                                    <Link to={`/${country}`}>{country}</Link>
                                                </td>
                                                <td>{formattedCases}</td>
                                                <td>{formattedDeaths}</td>
                                                <td>{formattedRecovered}</td>
                                            </tr>
                                        )
                                    })}
                            </tbody>
                        </table>
                    </FadeIn>
                )}
        </div>
    )
}

export default Countries
