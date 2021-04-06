import { owm } from "./owm.js";
import { dom } from "./dom.js";

import "core-js/";
import "regenerator-runtime/runtime";

owm.pullData("Minneapolis", "imperial").then((defaultCity) => {
  dom.updatePage(defaultCity);
});

window.onload = function () {
  const searchForm = document.getElementById("searchForm");
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector(".loading").style.display = "block";
    const query = document.getElementById("query").value;
    let units;
    dom.pageFarenheit() ? (units = "imperial") : (units = "metric");
    owm.pullData(query, units).then((response) => {
      dom.updatePage(response);
      dom.setUnits(units);
      document.querySelector(".loading").style.display = "none";
    });
  });

  const unitSlider = document.querySelector(".slider");
  unitSlider.addEventListener("click", () => {
    document.querySelector(".loading").style.display = "block";
    const location = document.getElementById("location");
    if (dom.pageFarenheit()) {
      owm.pullData(location.textContent, "metric").then((response) => {
        dom.updatePage(response);
        dom.setUnits("metric");
        document.querySelector(".loading").style.display = "none";
      });
    } else {
      owm.pullData(location.textContent, "imperial").then((response) => {
        dom.updatePage(response);
        dom.setUnits("imperial");
        document.querySelector(".loading").style.display = "none";
      });
    }
  });
};
