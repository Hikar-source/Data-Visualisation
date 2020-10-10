
var body = document.querySelector('#body')
var path = document.querySelector('#map01')
/******************************************************************** */

let com_01001 = document.getElementById("f-path-01001");
let list_01001 = document.getElementById("list_01001");


function togg01001(){
  body.querySelectorAll('.is-actived').forEach(function (item) {
    item.classList.add('visible') 
  })
  path.querySelectorAll('.fill').forEach(function (item) {
    item.classList.remove('active_fill') 
  })
  document.querySelector('#bar-chart_01001-01').classList.remove('visible')
  document.querySelector('#polar-chart_01001-01').classList.remove('visible')
  document.querySelector('#polar-chart_01001-02').classList.remove('visible')
  document.querySelector('#polar-chart_01001-03').classList.remove('visible')
  document.querySelector('#bar-chart-grouped_01001').classList.remove('visible')
  document.querySelector('#f-path-01001').classList.add('active_fill')
}
com_01001.onclick = togg01001;
list_01001.onclick = togg01001;
/************************************************************************************* */
let com_01002 = document.getElementById("f-path-01002");
let list_01002 = document.getElementById("list_01002");

function togg01002(){
  body.querySelectorAll('.is-actived').forEach(function (item) {
    item.classList.add('visible')
  })
  path.querySelectorAll('.fill').forEach(function (item) {
    item.classList.remove('active_fill') 
  })
  document.querySelector('#bar-chart_01002-01').classList.remove('visible')
  document.querySelector('#polar-chart_01002-01').classList.remove('visible')
  document.querySelector('#polar-chart_01002-02').classList.remove('visible')
  document.querySelector('#polar-chart_01002-03').classList.remove('visible')
  document.querySelector('#bar-chart-grouped_01002').classList.remove('visible')
  document.querySelector('#f-path-01002').classList.add('active_fill')
}
com_01002.onclick = togg01002;
list_01002.onclick = togg01002;