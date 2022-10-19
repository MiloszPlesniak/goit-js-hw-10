const COUNTRIES = "https://restcountries.com/v3.1/name/"
export default function fetchCountries(name) {
    return fetch(`${COUNTRIES + name}?fields=name,capital,population,flags,languages`)
        .then(response => response.json())
}
export { fetchCountries };