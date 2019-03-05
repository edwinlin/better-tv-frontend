// variables ----------------------------->
const todayFullDate = toISOLocal(new Date());
const sundayDate = toISOLocal(getSunday(new Date()));
const mondayDate = toISOLocal(getMonday(new Date()));
const tuesdayDate = toISOLocal(getTuesday(new Date()));
const wednesdayDate = toISOLocal(getWednesday(new Date()));
const thursdayDate = toISOLocal(getThursday(new Date()));
const fridayDate = toISOLocal(getFriday(new Date()));
const saturdayDate = toISOLocal(getSaturday(new Date()));
allShowsArray = []
getShowsURL = `http://api.tvmaze.com/schedule?country=US&date=`
const listGroupUl = document.getElementById('list-group');
listGroupUl.addEventListener('click', handleItemClick);
const listGroupUl2 = document.getElementById('list-group2');
listGroupUl2.addEventListener('click', handleItemClick);
const listGroupUl3 = document.getElementById('list-group3');
listGroupUl3.addEventListener('click', handleItemClick);
const listGroupUl4 = document.getElementById('list-group4');
listGroupUl4.addEventListener('click', handleItemClick);
const listGroupUl5 = document.getElementById('list-group5');
listGroupUl5.addEventListener('click', handleItemClick);
const listGroupUl6 = document.getElementById('list-group6');
listGroupUl6.addEventListener('click', handleItemClick);
const listGroupUl7 = document.getElementById('list-group7');
listGroupUl7.addEventListener('click', handleItemClick);

const showDetailDiv = document.getElementById('show-detail');
showDetailDiv.addEventListener('click', handleDetailPatch);
const getShowDetailsURL = `http://api.tvmaze.com/shows`;

// code ----------------------------->

getSundayShows().then(json=>{
	sundayShowsArray = json
	allShowsArray.push(sundayShowsArray)
	json.forEach(show=>{
		listGroupUl.innerHTML += createShowNameItem(show)
	})
}) //end getSundayShows
getMondayShows().then(json=>{
	mondayShowsArray = json
	allShowsArray.push(mondayShowsArray)
	json.forEach(show=>{
		listGroupUl2.innerHTML += createShowNameItem(show)
	})
}) //end getMondayShows
getTuesdayShows().then(json=>{
	tuesdayShowsArray = json
	allShowsArray.push(tuesdayShowsArray)
	json.forEach(show=>{
		listGroupUl3.innerHTML += createShowNameItem(show)
	})
}) //end getTuesdayShows
getWednesdayShows().then(json=>{
	wednesdayShowsArray = json
	allShowsArray.push(wednesdayShowsArray)
	json.forEach(show=>{
		listGroupUl4.innerHTML += createShowNameItem(show)
	})
}) //end getWednesdayShows
getThursdayShows().then(json=>{
	thursdayShowsArray = json
	allShowsArray.push(thursdayShowsArray)
	json.forEach(show=>{
		listGroupUl5.innerHTML += createShowNameItem(show)
	})
}) //end getThursdayShows
getFridayShows().then(json=>{
	fridayShowsArray = json
	allShowsArray.push(fridayShowsArray)
	json.forEach(show=>{
		listGroupUl6.innerHTML += createShowNameItem(show)
	})
}) //end getFridayShows
getSaturdayShows().then(json=>{
	saturdayShowsArray = json
	allShowsArray.push(saturdayShowsArray)
	json.forEach(show=>{
		listGroupUl7.innerHTML += createShowNameItem(show)
	})
}) //end getSaturdayShows


// functions ----------------------------->

function getSunday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:0);
  return new Date(d.setDate(diff));
}
function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1);
  return new Date(d.setDate(diff));
}
function getTuesday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:2);
  return new Date(d.setDate(diff));
}
function getWednesday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:3);
  return new Date(d.setDate(diff));
}
function getThursday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:4);
  return new Date(d.setDate(diff));
}
function getFriday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:5);
  return new Date(d.setDate(diff));
}
function getSaturday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:6);
  return new Date(d.setDate(diff));
}

function toISOLocal(d) {
  var z = n => (n<10? '0':'')+n;
  var off = d.getTimezoneOffset();
  var sign = off < 0? '+' : '-';
  off = Math.abs(off);

  return d.getFullYear() + '-' + z(d.getMonth()+1) + '-' +
         z(d.getDate())
}
// Date functions ^

// __________________________________
function patchshowDescription(event){
	const patchObj = {
		method: 'PATCH',
		headers: {
	    'Content-Type': 'application/json',
	    'Accept': 'application/json'
	  	},
	  	body:JSON.stringify({
	  		description: showDetailDiv.getElementsByTagName('textarea')[0].value
	  	})
	}

	return fetch(`${getShowsURL}/${event.target.parentElement.querySelector('h1').dataset.id}`, patchObj).then(resp=>resp.json())
}

function handleDetailPatch(event){
	event.preventDefault();
	if(event.target.id == 'edit-show'){
		// console.log(showDetailDiv.getElementsByTagName('textarea')[0].value)
		patchShowDescription(event)
		.then(json=>{
			// console.log(json)
			const showInfo = allShowsArray.find(show=>show.id==event.target.parentElement.querySelector('h1').dataset.id)
			// debugger
			showInfo.description = json.description
		})
	}
	//console.log(event.target.parentElement.querySelector('h1').dataset.id)
}

function handleItemClick(event){
// debugger 


	// if(event.target == )
	showDetailDiv.innerHTML = createShowDetailsItem(event.target)
}

function createShowDetailsItem(showData){
	// debugger
	console.log(showData)
	// console.log(event.target)
// fetch(`${getShowDetailsURL}/${showData.dataset.id}`).then(resp=>resp.json()).then(json=>{
// 	console.log(json)
// })
	const showInfo = allShowsArray.flat().find(show=>show.id==showData.id)
	// debugger
	const imageToUse = showInfo.show.image
	const placeholder = 'https://www.l-nutra.com/wp-content/uploads/2018/07/placeholder.png'
	// debugger
	if(imageToUse != null){
		return `<h1 data-id=${showData.dataset.id}>${showInfo.show.name}</h1>
				<img src=${imageToUse.original}>
				<h3> - Season ${showInfo.season} - Episode ${showInfo.number}</h3>

				<button id="edit-show" class="btn btn-info">
	  			Favorite
				</button>
				`
	}else{
		return `<h1 data-id=${showData.dataset.id}>${showInfo.show.name}</h1>
				<img src=${placeholder}>
				<h3> - Season ${showInfo.season} - Episode ${showInfo.number}</h3>

				<button id="edit-show" class="btn btn-info">
	  			Favorite
				</button>
				`
	}
}
			// <h3>${showInfo.tagline}</h3>
			// <textarea>${showInfo.description}</textarea>


function createShowNameItem(show){
	// debugger
	return `<li class="list-group-item" id=${show.id} data-id=${show.show.id}>${show.show.name}.s${show.season}.e${show.number}</li>`
}

function getTodayShows(){
	return fetch(`${getShowsURL}${todayFullDate}`).then(resp=>{
		return resp.json()
	})
}
function getSundayShows(){
	return fetch(`${getShowsURL}${sundayDate}`).then(resp=>{
		return resp.json()
	})
}
function getMondayShows(){
	return fetch(`${getShowsURL}${mondayDate}`).then(resp=>{
		return resp.json()
	})
}
function getTuesdayShows(){
	return fetch(`${getShowsURL}${tuesdayDate}`).then(resp=>{
		return resp.json()
	})
}
function getWednesdayShows(){
	return fetch(`${getShowsURL}${wednesdayDate}`).then(resp=>{
		return resp.json()
	})
}
function getThursdayShows(){
	return fetch(`${getShowsURL}${thursdayDate}`).then(resp=>{
		return resp.json()
	})
}
function getFridayShows(){
	return fetch(`${getShowsURL}${fridayDate}`).then(resp=>{
		return resp.json()
	})
}
function getSaturdayShows(){
	return fetch(`${getShowsURL}${saturdayDate}`).then(resp=>{
		return resp.json()
	})
}



