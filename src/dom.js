var dom = (function () {
    return {
        setUnits: function (unit) {
            const units = Array.from(document.querySelectorAll('.unit'))
            if (unit === 'imperial') {
                units.forEach(e => {
                    e.textContent = "F"
                })
            } else {
                units.forEach(e => {
                    e.textContent = "C"
                })
            }
        },
        pageFarenheit: function () {
            const unit = Array.from(document.querySelectorAll('.unit'))[0].textContent
            if (unit.includes('F')) {
                return true
            } else {
                return false
            }
        },
        updatePage: function (json) {
            const location = document.getElementById('location');
            const weather = document.getElementById('weather');
            const temp = document.getElementById('temp');
            const feels = document.getElementById('feels');
            const icon = document.getElementById('icon');
            console.table(json);
            weather.textContent = json.weather[0].main;
            icon.src = `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`;
            location.textContent = json.name;
            temp.textContent = Math.round(json.main.temp);
            feels.textContent = Math.round(json.main.feels_like);
        }
    };
})();

export { dom };

