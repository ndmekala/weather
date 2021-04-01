import "./style.scss";
import { owm } from './owm.js'

// async function pullWeather() {
//     try {
//         const weather = await owm.testData();
//         return weather;
//     } catch (error) {
//         console.log(error);
//     }
// }
// owm.testModule();
// displayWeather().then(console.log())

const h1 = document.querySelector('h1')

let temp = owm.testData(55119).then(result => {
    console.table(result)
    h1.textContent = result.main.temp;
    return result.main.temp;
});

