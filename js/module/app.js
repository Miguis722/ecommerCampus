import { headers } from "../components/env.js";

export const getAllproductName = async({search:text} = {search:"Phone"}) => {
    console.log("Esperando ...");
    const url = 'https://real-time-amazon-data.p.rapidapi.com/asin-to-gtin?asin=B01FHOWYA2&country=US';
const options = {
	method: 'GET',
	headers
};
let res = await fetch(url, options);
let data = res.json();
return data;
}