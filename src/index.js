// variables ----------------------------->
const todayFullDate = DayOfWeek.toISOLocal(new Date());
const sundayDate = DayOfWeek.toISOLocal(DayOfWeek.getSunday(new Date()));
const mondayDate = DayOfWeek.toISOLocal(DayOfWeek.getMonday(new Date()));
const tuesdayDate = DayOfWeek.toISOLocal(DayOfWeek.getTuesday(new Date()));
const wednesdayDate = DayOfWeek.toISOLocal(DayOfWeek.getWednesday(new Date()));
const thursdayDate = DayOfWeek.toISOLocal(DayOfWeek.getThursday(new Date()));
const fridayDate = DayOfWeek.toISOLocal(DayOfWeek.getFriday(new Date()));
const saturdayDate = DayOfWeek.toISOLocal(DayOfWeek.getSaturday(new Date()));

getShowsURL = `http://api.tvmaze.com/schedule?country=US&date=`

const listGroupUl = document.getElementById('sunday');
listGroupUl.addEventListener('click', handleItemClick);
const listGroupUl2 = document.getElementById('monday');
listGroupUl2.addEventListener('click', handleItemClick);
const listGroupUl3 = document.getElementById('tuesday');
listGroupUl3.addEventListener('click', handleItemClick);
const listGroupUl4 = document.getElementById('wednesday');
listGroupUl4.addEventListener('click', handleItemClick);
const listGroupUl5 = document.getElementById('thursday');
listGroupUl5.addEventListener('click', handleItemClick);
const listGroupUl6 = document.getElementById('friday');
listGroupUl6.addEventListener('click', handleItemClick);
const listGroupUl7 = document.getElementById('saturday');
listGroupUl7.addEventListener('click', handleItemClick);

const showDetailDiv = document.getElementById('show-detail');
showDetailDiv.addEventListener('click', handleDetailPatch);
// const getShowDetailsURL = `http://api.tvmaze.com/shows`;
allShows = {}
// code ----------------------------->

Adapter.getSundayShows().then(json=>{
	sundayShowsArray = json
	allShows.sunday = sundayShowsArray
	json.forEach(show=>{
		// debugger
		let showObj = new Show(show)
		listGroupUl.innerHTML += showObj.renderNameItem()
		// listGroupUl.innerHTML += createShowNameItem(show)
	})
}) //end getSundayShows
Adapter.getMondayShows().then(json=>{
	mondayShowsArray = json
	allShows.monday = mondayShowsArray
	json.forEach(show=>{
		let showObj = new Show(show)
		listGroupUl2.innerHTML += showObj.renderNameItem()
		// listGroupUl2.innerHTML += createShowNameItem(show)
	})
}) //end getMondayShows
Adapter.getTuesdayShows().then(json=>{
	tuesdayShowsArray = json
	allShows.tuesday = tuesdayShowsArray
	json.forEach(show=>{
		let showObj = new Show(show)
		listGroupUl3.innerHTML += showObj.renderNameItem()
		// listGroupUl3.innerHTML += createShowNameItem(show)
	})
}) //end getTuesdayShows
Adapter.getWednesdayShows().then(json=>{
	wednesdayShowsArray = json
	allShows.wednesday = wednesdayShowsArray
	json.forEach(show=>{
		let showObj = new Show(show)
		listGroupUl4.innerHTML += showObj.renderNameItem()
		// listGroupUl4.innerHTML += createShowNameItem(show)
	})
}) //end getWednesdayShows
Adapter.getThursdayShows().then(json=>{
	thursdayShowsArray = json
	allShows.thursday = thursdayShowsArray
	json.forEach(show=>{
		let showObj = new Show(show)
		listGroupUl5.innerHTML += showObj.renderNameItem()
		// listGroupUl5.innerHTML += createShowNameItem(show)
	})
}) //end getThursdayShows
Adapter.getFridayShows().then(json=>{
	fridayShowsArray = json
	allShows.friday = fridayShowsArray
	json.forEach(show=>{
		let showObj = new Show(show)
		listGroupUl6.innerHTML += showObj.renderNameItem()
		// listGroupUl6.innerHTML += createShowNameItem(show)
	})
}) //end getFridayShows
Adapter.getSaturdayShows().then(json=>{
	saturdayShowsArray = json
	allShows.saturday = saturdayShowsArray
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
	event.preventDefault();
	// debugger
	if(listGroupUl2.style.display == "none"){
		showDetailDiv.parentElement.style.display = "block"
		const showObj = Show.all.find(show=>show.id==event.target.id)
		showDetailDiv.innerHTML = showObj.renderShowDetails()
	}else if(event.target.parentElement.id == 'sunday'){
		listGroupUl2.style.display = "none"
		listGroupUl3.style.display = "none"
		listGroupUl4.style.display = "none"
		listGroupUl5.style.display = "none"
		listGroupUl6.style.display = "none"
		listGroupUl7.style.display = "none"
		listGroupUl.classList.add("larger-list")
		showDetailDiv.parentElement.style.display = "block"

		const showObj = Show.all.find(show=>show.id==event.target.id)
		showDetailDiv.innerHTML = showObj.renderShowDetails()
	}else{
		listGroupUl2.style.display = "none"
		listGroupUl3.style.display = "none"
		listGroupUl4.style.display = "none"
		listGroupUl5.style.display = "none"
		listGroupUl6.style.display = "none"
		listGroupUl7.style.display = "none"
		listGroupUl.innerHTML = ""
		listGroupUl.classList.add("larger-list")
		showDetailDiv.parentElement.style.display = "block"
		// listGroupUl.classList.remove("col-md-1")
		// console.log(event.target.parentElement)
		allShows[event.target.parentElement.id].forEach(show=>{
			let showObj = new Show(show)
			listGroupUl.innerHTML += showObj.renderNameItem()
		})
			const showObj = Show.all.find(show=>show.id==event.target.id)
			showDetailDiv.innerHTML = showObj.renderShowDetails()
	}


}





