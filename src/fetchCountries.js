import { Notify } from 'notiflix/build/notiflix-notify-aio';
const COUNTRIES = "https://restcountries.com/v3.1/name/"
export default function fetchCountries(name) {
    return fetch(`${COUNTRIES + name}?fields=name,capital,population,flags,languages`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response
        }).then(response => response.json())
}
export { fetchCountries };