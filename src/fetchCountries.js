const COUNTRY = "https://restcountries.com/v3.1/name/"
export default function fetchCountries(name) {
    return fetch(`${COUNTRY + name}`).then((response) => {
    const countryData = response.json()
    return countryData
})
}