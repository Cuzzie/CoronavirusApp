import React from "react"
import Global from "../components/Global"
import Countries from "../components/Countries"
import "../css/MainPage.css"

export const MainPage = () => {
	return (
		<>
			<div className="section">
				<div className="title">Global Statistics</div>
				<Global />
			</div>
			<div className="section">
				<Countries />
			</div>
		</>
	)
}
