import "./style.scss";
import { owm } from './owm.js'
import { dom } from './dom.js'

import "core-js/";
import "regenerator-runtime/runtime";

owm.pullData('Minneapolis', 'imperial').then(defaultCity => dom.updatePage(defaultCity));

// search form broken somehow

const searchForm = document.getElementById('searchForm');
searchForm.addEventListener(('submit'), (e) => {
    e.preventDefault();
    const query = document.getElemetById('query').value;
    let units;
    dom.pageFarenheit() ? units = 'imperial' : units = 'metric';
    owm.pullData(query, units).then(response => dom.updatePage(response));
    dom.setUnits(units)
});

window.onload = function () {
    const unitSlider = document.querySelector('.slider');
    unitSlider.addEventListener(('click'), () => {
        const location = document.getElementById('location')
        if (dom.pageFarenheit()) {
            owm.pullData(location.textContent, 'metric').then(response => dom.updatePage(response));
            dom.setUnits('metric')
        } else {
            owm.pullData(location.textContent, 'imperial').then(response => dom.updatePage(response));
            dom.setUnits('imperial')
        }
})
}
