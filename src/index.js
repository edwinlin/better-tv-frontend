// variables ----------------------------->
const todayFullDate = DayOfWeek.toISOLocal(new Date());
const sundayDate = DayOfWeek.toISOLocal(DayOfWeek.getSunday(new Date()));
const mondayDate = DayOfWeek.toISOLocal(DayOfWeek.getMonday(new Date()));
const tuesdayDate = DayOfWeek.toISOLocal(DayOfWeek.getTuesday(new Date()));
const wednesdayDate = DayOfWeek.toISOLocal(DayOfWeek.getWednesday(new Date()));
const thursdayDate = DayOfWeek.toISOLocal(DayOfWeek.getThursday(new Date()));
const fridayDate = DayOfWeek.toISOLocal(DayOfWeek.getFriday(new Date()));
const saturdayDate = DayOfWeek.toISOLocal(DayOfWeek.getSaturday(new Date()));

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
// const getShowDetailsURL = `http://api.tvmaze.com/shows`;

// code ----------------------------->

Adapter.getSundayShows().then(json=>{
	sundayShowsArray = json
	allShowsArray.push(sundayShowsArray)
	json.forEach(show=>{
		// debugger
		let showObj = new Show(show)
		listGroupUl.innerHTML += showObj.renderNameItem()
		// listGroupUl.innerHTML += createShowNameItem(show)
	})
}) //end getSundayShows
Adapter.getMondayShows().then(json=>{
	mondayShowsArray = json
	allShowsArray.push(mondayShowsArray)
	json.forEach(show=>{
		let showObj = new Show(show)
		listGroupUl2.innerHTML += showObj.renderNameItem()
		// listGroupUl2.innerHTML += createShowNameItem(show)
	})
}) //end getMondayShows
Adapter.getTuesdayShows().then(json=>{
	tuesdayShowsArray = json
	allShowsArray.push(tuesdayShowsArray)
	json.forEach(show=>{
		let showObj = new Show(show)
		listGroupUl3.innerHTML += showObj.renderNameItem()
		// listGroupUl3.innerHTML += createShowNameItem(show)
	})
}) //end getTuesdayShows
Adapter.getWednesdayShows().then(json=>{
	wednesdayShowsArray = json
	allShowsArray.push(wednesdayShowsArray)
	json.forEach(show=>{
		let showObj = new Show(show)
		listGroupUl4.innerHTML += showObj.renderNameItem()
		// listGroupUl4.innerHTML += createShowNameItem(show)
	})
}) //end getWednesdayShows
Adapter.getThursdayShows().then(json=>{
	thursdayShowsArray = json
	allShowsArray.push(thursdayShowsArray)
	json.forEach(show=>{
		let showObj = new Show(show)
		listGroupUl5.innerHTML += showObj.renderNameItem()
		// listGroupUl5.innerHTML += createShowNameItem(show)
	})
}) //end getThursdayShows
Adapter.getFridayShows().then(json=>{
	fridayShowsArray = json
	allShowsArray.push(fridayShowsArray)
	json.forEach(show=>{
		let showObj = new Show(show)
		listGroupUl6.innerHTML += showObj.renderNameItem()
		// listGroupUl6.innerHTML += createShowNameItem(show)
	})
}) //end getFridayShows
Adapter.getSaturdayShows().then(json=>{
	saturdayShowsArray = json
	allShowsArray.push(saturdayShowsArray)
	json.forEach(show=>{
		let showObj = new Show(show)
		listGroupUl7.innerHTML += showObj.renderNameItem()
		// listGroupUl7.innerHTML += createShowNameItem(show)
	})
}) //end getSaturdayShows


// functions ----------------------------->

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
	const showObj = Show.all.find(show=>show.id==event.target.id)

	showDetailDiv.innerHTML = showObj.renderShowDetails(event.target)
}





