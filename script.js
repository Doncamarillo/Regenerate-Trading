const apiKey = 'crrd0h9r01qmgcu5vq40crrd0h9r01qmgcu5vq4g';

const tickerSymbol = document.querySelector('#tickerSymbol');
const button = document.querySelector('#submitButton');


const getFinnhub = async (tickerSymbol) => {

        const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${tickerSymbol}&token=crrd0h9r01qmgcu5vq40crrd0h9r01qmgcu5vq4g`);
        const stockData = response.data;
        console.log('Finnhub API:', stockData);

}

button.addEventListener('click', () => {
    const ticker = tickerSymbol.value; // Correctly get the input value
    getFinnhub(ticker);
});