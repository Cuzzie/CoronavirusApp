import { NovelCovid } from "novelcovid"
// import globalData from "../test/global.json"
// import countriesData from "../test/countries.json"
// import countryHistData from "../test/histories.json"

const covid = new NovelCovid()

export const fetchAll = async () => {
	const data = await covid.all()
	return data
	// return globalData
}

export const fetchCountries = async () => {
	const data = await covid.countries()
	return data
	// return countriesData
}

export const fetchCountry = async (country) => {
	const data = await covid.countries(country)
	return data
	// return countriesData.find(data => data.country.toUpperCase() === country.toUpperCase())
}

export const fetchCountryHistory = async (country) => {
	const data = await covid.historical(null, country)
	return data.timeline.cases
	// return countryHistData.find(elem => elem.country.toUpperCase() === country.toUpperCase()).timeline.cases
}