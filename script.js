const apiKey = 'crrd0h9r01qmgcu5vq40crrd0h9r01qmgcu5vq4g';

const tickerSymbol = document.querySelector('#tickerSymbol');



const stockPrice = document.querySelector('#currentPrice');
const priceChange = document.querySelector('#change');
const percentChange = document.querySelector('#percentChange')
const dailyHigh = document.querySelector('#dailyHigh');
const dailyLow = document.querySelector('#openPrice');
const openPrice = document.querySelector('#openPrice');
const yesterdayClose = document.querySelector('#yesterdayClose');
const marketData = document.querySelector('marketData')


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

   
  
    
    stockPrice.textContent = `$${tickerSymbol} Currently Trading at: $ ${priceQuote}`
    priceChange.textContent = `Change Since Last Close: $ ${changePrice}`
    percentChange.textContent =`Percent Change Since Last Close: ${changePercent} %`
    dailyHigh.textContent =`Daily High: $${high}`
    dailyLow.textContent =`Daily Low: ${low}`
    openPrice.textContent =`Price at Open: $ ${priceOpen}`
    yesterdayClose.textContent =`Last Close: $ ${lastClose}`

    changeBackground(changePercent)

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
        document.body.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/previews/006/638/905/non_2x/economic-critical-crisis-concept-a-low-polygon-with-a-wireframe-of-the-lower-arrow-and-shiny-red-background-recession-financial-cryptocurrency-gold-and-the-stock-market-losing-money-and-cash-vector.jpg')";
        playAudio('sadBob')


    }
}

tickerSymbol.addEventListener('input',() =>{
    tickerSymbol.value = tickerSymbol.value.toUpperCase();
})

tickerSymbol.addEventListener('keydown', (event) => {
    if (event.key === "Enter"){
    const ticker = tickerSymbol.value.trim(); 
    getFinnhub(ticker);
    
    }

    const refresh = document.querySelector('#refresh')

refresh.addEventListener('click', () => {
    location.reload()
})
});
