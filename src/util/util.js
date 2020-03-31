import covid from "novelcovid"
// import globalData from "../test/global.json"
// import countriesData from "../test/countries.json"

export const fetchAll = async () => {
	const data = await covid.getAll()
	return data
	// return globalData
}

export const fetchCountries = async () => {
	const data = await covid.getCountry()
	return data
	// return countriesData
}

export const fetchCountry = async (country) => {
	const data = await covid.getCountry(country)
	return data
	// return countriesData.find(data => data.country === country)
}