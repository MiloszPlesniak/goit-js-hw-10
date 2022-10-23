import './css/styles.css';
import { fetchCountries } from './fetchCountries'
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const inputSerch = document.querySelector('#search-box')
const countryList = document.querySelector('.country-list')
const countryInfo = document.querySelector('.country-info')

inputSerch.addEventListener('input', debounce((e) => {
    countryInfo.innerHTML = ''
    countryList.innerHTML= ''

    fetchCountries(e.target.value.trim()).then((countries) => {
        // console.log(countries)
        if (countries.length > 10) {
            Notify.info('Too many matches found. Please enter a more specific name.')
        } else if (countries.length >1 && countries.length <10) {
            for (const country of countries) {
                
                let listItem = document.createElement('li');
                listItem.style.display = 'flex'
                let icon = document.createElement('img');
                let nameOfCountry = document.createElement('p')
                nameOfCountry.textContent = country.name.official;
                icon.setAttribute('src', country.flags.png);
                icon.setAttribute('alt', country.name.official);
                icon.setAttribute('width', '40');
                icon.setAttribute('height', '30');
                listItem.append(icon);
                countryList.append(listItem);
                listItem.append(nameOfCountry)
            }
        } else if (countries.length===1) {
            let country = countries[0]
            let languages = Object.values(country.languages).join()
            countryInfo.innerHTML = `<h2>
            <img src='${country.flags.png}' alt='${country.name.common}' width='50' height='40'/>
            ${country.name.official}
            </h2>
            <p>Capital: ${country.capital}</p>
            <p>Population: ${country.population}</p>
            <p>Languages:${languages}</p>`
            
        }   else if (countries.length === 0) {
            Notify.failure("Oops, there is no country with that name")
        }
    })
},DEBOUNCE_DELAY))











