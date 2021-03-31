var owm = (function () {
    // starting out with zip code 55411
    async function getWeather() {
        console.log(new Date())
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?zip=55411&appid=e5842a3af074416871539c6f51af8b1a', {mode: 'cors'});
        const weatherData = await response.json();
        console.table(weatherData);
        console.table(weatherData.main);
        console.table(weatherData.main.temp);
        //what about errors? something like this:
        // try {

        // } catch (error) {
            
        // }
    }

    getWeather();

    return {
    // test: function() {
    //     console.log('hey')
    // },
  };
})();

export { owm };
