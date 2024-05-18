import axios from "axios";

const productionUrl = 'http://localhost:3000/'


export const customFetch = axios.create({
    baseURL: productionUrl
})

export const FormatPrice = (price) => {
    const dollarAmount = new Intl.NumberFormat('en-US', {
        currency: 'USD',
        style: 'currency',
    }).format((price).toFixed())
    return dollarAmount
}