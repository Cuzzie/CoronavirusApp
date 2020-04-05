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
	const cases = prepareHistoryData(data.timeline.cases)
	const deaths = prepareHistoryData(data.timeline.deaths)
	const result = { cases, deaths }
	return result
	// return countryHistData.find(elem => elem.country.toUpperCase() === country.toUpperCase()).timeline.cases
}

const prepareHistoryData = (history) => {
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

	return ({
		labels,
		values
	})
}