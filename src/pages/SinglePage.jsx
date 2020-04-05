import React from "react"
import { useParams } from "react-router-dom"
import Country from "../components/Country"
import History from "../components/History"
import "../css/SinglePage.css"

export const SinglePage = () => {
	const { country } = useParams()

	return (
		<div className="section">
			<div className="title">Country Statistics</div>
			<Country country={country} />
			<History country={country} />
		</div>
	)
}
