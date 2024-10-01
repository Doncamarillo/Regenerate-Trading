const apiKey = 'crrd0h9r01qmgcu5vq40crrd0h9r01qmgcu5vq4g';

const tickerSymbol = document.querySelector('#tickerSymbol');
const button = document.querySelector('#submitButton');


const stockPrice = document.querySelector('#currentPrice');
const priceChange = document.querySelector('#change');
const percentChange = document.querySelector('#percentChange')
const dailyHigh = document.querySelector('#dailyHigh');
const dailyLow = document.querySelector('#openPrice');
const openPrice = document.querySelector('#openPrice');
const yesterdayClose = document.querySelector('#yesterdayClose');






const getFinnhub = async (tickerSymbol) => {

    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${tickerSymbol}&token=crrd0h9r01qmgcu5vq40crrd0h9r01qmgcu5vq4g`);
    const stockData = response.data;
    console.log('Finnhub API:', stockData);

    let priceQuote = stockData.c
    let changePrice = stockData.d
    let changePercent = stockData.dp
    let high = stockData.h
    let low = stockData.l
    let priceOpen =stockData.o
    let lastClose = stockData.pc

    changeBackground(changePercent)


    stockPrice.textContent = `${priceQuote}`
    priceChange.textContent = `${changePrice}`
    percentChange.textContent =`${changePercent}`
    dailyHigh.textContent =`${high}`
    dailyLow.textContent =`${low}`
    openPrice.textContent =`${priceOpen}`
    yesterdayClose.textContent =`${lastClose}`

}

//java audio Bro Code Youtube video
const playAudio = (audioFile) => {
    const audio = new Audio(`${audioFile}.mp3`); 
    audio.play().catch(error => console.error('Audio playback failed:', error));
};


const changeBackground = (changePercent) => {

    const fontColor = changePercent >= 0 ? 'green' : 'red';
    document.body.style.color = fontColor;

    if (changePercent >= 0) {
        document.body.style.backgroundImage = "url('greenDay.jpg')";
        playAudio('bigBank')
      
    
    } else {
        document.body.style.backgroundImage = "url('redDay.avif')";
        playAudio('sadBob')


    }
}

button.addEventListener('click', () => {
    const ticker = tickerSymbol.value.trim(); 
    getFinnhub(ticker);


    const refresh = document.querySelector('#refresh')

refresh.addEventListener('click', () => {
    location.reload()
})
});
