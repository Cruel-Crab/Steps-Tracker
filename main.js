window.onload=function(){
 document.getElementById("entry").focus();
}

const goal = 21;
document.getElementById('target').innerText = goal;
let entries = [];
const entryWrapper = document.querySelector("#entries"); //capturing ul tag
 
function addNewEntry (newEntry) {
	entryWrapper.removeChild(entryWrapper.firstElementChild);
	 const listItem = document.createElement('li'); //creates li tag
	 const listValue = document.createTextNode(newEntry.toFixed(1)); // captures value and places it inside tag as a content
	 listItem.appendChild(listValue);
	 entryWrapper.appendChild(listItem); //appending li tag's value at the end of ul
}
function reducer (total,currentValue) {
	return total + currentValue; 
}
function calcTotal () {
	const totalValue = entries.reduce(reducer).toFixed(1);
	document.getElementById('total').innerText = totalValue;
	document.getElementById('progressTotal').innerText = totalValue;
}
function calcAverage () {
	const avgValue = (entries.reduce(reducer) / entries.length).toFixed(1) ; // total / no. of values 
	document.getElementById('average').innerText = avgValue;
}
function calcHigh () {
	const highValue = Math.max(...entries); // ... = spread opeartor will extract values from array 
	document.getElementById('high').innerText = highValue;

}
function calcGoal () {
	const totalValue = entries.reduce(reducer).toFixed(1);
	const completedPercent = totalValue /(goal /100);
	const progressCircle  =document.querySelector('#progressCircle');
	if(completedPercent > 100) completedPercent === 100;
	progressCircle.style.background = `conic-gradient(#70db70 ${completedPercent}%,#2d3740 ${completedPercent}% 100%)`;
}

function handleSubmit (event) {
	event.preventDefault();
	const entry = Number(document.querySelector('#entry').value);
	if(!entry) return;
	document.querySelector('form').reset(); //clear input after submit

	entries.push(entry);
	addNewEntry(entry);
	calcTotal(); //it is fine even if we dont pass "Entries" array,as it is globally defined.
	calcAverage();
	calcHigh();
	calcGoal();

}





const form = document.querySelector('form');
form.addEventListener('submit',handleSubmit);