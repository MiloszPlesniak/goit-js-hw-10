import './css/styles.css';
import fetchCountries from './fetchCountries';
const debounce = require('lodash.debounce');
const inputSerch = document.querySelector('#search-box')
const DEBOUNCE_DELAY = 300;

inputSerch.addEventListener('input', (e) => {

})


fetchCountries("a").then((countries) => {
    
    for (const country of countries) {
        console.log(countries.length)
        
        if (countries.lengthM < 10) {
            
        }
    }
})





// fetchCountries("poland").then((updateCountryData) => {
//     const foundCountry = updateCountryData[0]
//     const countryDetails = {
//         nameOfCountry: foundCountry.name.official,
//         capital: foundCountry.capital[0],
//         population: foundCountry.population,
//         flags: foundCountry.flags.svg,
//         languages: foundCountry.languages.pol
//     }
//     return countryDetails
// }).then((countryDetails) => {
    
// })


