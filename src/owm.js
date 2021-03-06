import "core-js/";
import "regenerator-runtime/runtime";

var owm = (function () {
  return {
    pullData: async function (q, unit) {
      try {
        // Zip Code
        if (!isNaN(q) && q.length === 5) {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?zip=${q}&appid=e5842a3af074416871539c6f51af8b1a&units=${unit}`,
            { mode: "cors" }
          );
          if (response.status === 404 || response.status === 400) {
            throw new Error("bad input");
          } else {
            const errorMsg = document.querySelector(".error-msg");
            errorMsg.style.display = "none";
            const weatherData = await response.json();
            return weatherData;
          }
          // other queries
        } else {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=e5842a3af074416871539c6f51af8b1a&units=${unit}`,
            { mode: "cors" }
          );
          if (response.status === 404 || response.status === 400) {
            throw new Error("bad input");
          } else {
            const errorMsg = document.querySelector(".error-msg");
            errorMsg.style.display = "none";
            const weatherData = await response.json();
            return weatherData;
          }
        }
      } catch (error) {
        const errorMsg = document.querySelector(".error-msg");
        errorMsg.style.display = "block";
        document.querySelector(".loading").style.display = "none";
      }
    },
  };
})();

export { owm };
