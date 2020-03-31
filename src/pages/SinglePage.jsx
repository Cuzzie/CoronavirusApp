import React from "react"
import { useParams } from "react-router-dom"
import Country from "../components/Country"
import "../css/SinglePage.css"

export const SinglePage = () => {
	const { country } = useParams()

	return (
		<div className="section">
			<div className="title">Coronavirus Pandemic Statistics</div>
			<Country country={country} />
		</div>
	)
}
