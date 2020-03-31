import React, { useState, useEffect } from 'react'
import ReactLoading from "react-loading"
import { fetchAll } from "../util/util"
import Card from "../components/Card"
import "../css/Global.css"

const Global = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})

    useEffect(() => {
        (async () => {
            const data = await fetchAll()
            setData(data)
            setLoading(false)
        })()
    }, [])

    return (
        <div className="cards">
            {loading ? (
                <ReactLoading style={{ margin: "auto" }} type="bars" color="#646464" />
            ) : (
                    <>
                        <Card data={data.cases} type="cases" title="Total cases" />
                        <Card data={data.deaths} type="deaths" title="Total deaths" />
                        <Card data={data.recovered} type="recovered" title="Total recovered" />
                    </>
                )}
        </div>
    )
}

export default Global