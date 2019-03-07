// variables ----------------------------->
const todayFullDate = DayOfWeek.toISOLocal(new Date());
const sundayDate = DayOfWeek.toISOLocal(DayOfWeek.getSunday(new Date()));
const mondayDate = DayOfWeek.toISOLocal(DayOfWeek.getMonday(new Date()));
const tuesdayDate = DayOfWeek.toISOLocal(DayOfWeek.getTuesday(new Date()));
const wednesdayDate = DayOfWeek.toISOLocal(DayOfWeek.getWednesday(new Date()));
const thursdayDate = DayOfWeek.toISOLocal(DayOfWeek.getThursday(new Date()));
const fridayDate = DayOfWeek.toISOLocal(DayOfWeek.getFriday(new Date()));
const saturdayDate = DayOfWeek.toISOLocal(DayOfWeek.getSaturday(new Date()));
tempFlag = "undefined"
getShowsURL = `http://api.tvmaze.com/schedule?country=US&date=`
userId = ""

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
const dayHeaderRow = document.querySelector('.row.seven-cols');
dayHeaderRow.addEventListener('click', handleColumnClick);
const showDetailDiv = document.getElementById('show-detail');
// showDetailDiv.addEventListener('click', handleDetailPatch);
const showDetailParent = document.querySelector('.row')
showDetailParent.addEventListener('click', handleFaveClick)
listGroups = {
			sunday: listGroupUl, 
			monday: listGroupUl2, 
			tuesday: listGroupUl3, 
			wednesday:listGroupUl4, 
			thursday: listGroupUl5, 
			friday: listGroupUl6, 
			saturday: listGroupUl7
		}
allShows = {}
// code ----------------------------->

Adapter.getSundayShows().then(json=>{
	sundayShowsArray = json
	allShows.sunday = sundayShowsArray
	// json.forEach(show=>{
	// 	let showObj = new Show(show)
	// 	listGroupUl.innerHTML += showObj.renderNameItem(listGroupUl.parentElement.id)
	// })
}) //end getSundayShows
Adapter.getMondayShows().then(json=>{
	mondayShowsArray = json
	allShows.monday = mondayShowsArray
	// json.forEach(show=>{
	// 	// let showObj = new Show(show)
	// 	// listGroupUl2.innerHTML += showObj.renderNameItem(listGroupUl2.parentElement.id)
	// 	// listGroupUl2.innerHTML += createShowNameItem(show)
	// })
}) //end getMondayShows
Adapter.getTuesdayShows().then(json=>{
	tuesdayShowsArray = json
	allShows.tuesday = tuesdayShowsArray
	// json.forEach(show=>{
	// 	let showObj = new Show(show)
	// 	listGroupUl3.innerHTML += showObj.renderNameItem(listGroupUl3.parentElement.id)
	// 	// listGroupUl3.innerHTML += createShowNameItem(show)
	// })
}) //end getTuesdayShows
Adapter.getWednesdayShows().then(json=>{
	wednesdayShowsArray = json
	allShows.wednesday = wednesdayShowsArray
	// json.forEach(show=>{
	// 	let showObj = new Show(show)
	// 	listGroupUl4.innerHTML += showObj.renderNameItem(listGroupUl4.parentElement.id)
	// 	// listGroupUl4.innerHTML += createShowNameItem(show)
	// })
}) //end getWednesdayShows
Adapter.getThursdayShows().then(json=>{
	thursdayShowsArray = json
	allShows.thursday = thursdayShowsArray
	// json.forEach(show=>{
	// 	let showObj = new Show(show)
	// 	listGroupUl5.innerHTML += showObj.renderNameItem(listGroupUl5.parentElement.id)
	// 	// listGroupUl5.innerHTML += createShowNameItem(show)
	// })
}) //end getThursdayShows
Adapter.getFridayShows().then(json=>{
	fridayShowsArray = json
	allShows.friday = fridayShowsArray
	// json.forEach(show=>{
	// 	let showObj = new Show(show)
	// 	listGroupUl6.innerHTML += showObj.renderNameItem(listGroupUl6.parentElement.id)
	// 	// listGroupUl6.innerHTML += createShowNameItem(show)
	// })
}) //end getFridayShows
Adapter.getSaturdayShows().then(json=>{
	saturdayShowsArray = json
	allShows.saturday = saturdayShowsArray
	// json.forEach(show=>{
	// 	let showObj = new Show(show)
	// 	listGroupUl7.innerHTML += showObj.renderNameItem(listGroupUl7.parentElement.id)
	// 	// listGroupUl7.innerHTML += createShowNameItem(show)
	// })
}) //end getSaturdayShows


// functions ----------------------------->
function handleFaveClick(event){
	event.preventDefault();
	if(event.target.id == "edit-show"){
			// debugger

		console.log('hello')
		//post show
		postShowInfo(event).then(json=>{
			console.log(json)
			postUserShow(userId, json.id, json.tvmaze_id).then(json=> console.log(json))
		})
	}
	if(event.target.id == "pic"){
		console.log('pic')
	}
	// debugger
}

function postUserShow(userId, tvshowId, tvmazeId){
	const postUserShowObj = {
		method: 'POST',
		headers: {
			'Content-Type':'application/json',
			'Accept':'application/json'
		},
		body: JSON.stringify({
			user_id: userId,
			tvshow_id: tvshowId,
			ext_tvmaze_id: tvmazeId
		})
	}
	return fetch(`http://localhost:3000/user_shows`, postUserShowObj).then(resp=>resp.json())
}

function postShowInfo(event){
	const showName = Show.all.find(show=>show.show.id==event.target.parentElement.children[0].dataset.id).show.name
	const showId = parseInt(event.target.parentElement.children[0].dataset.id)
	console.log(showId)
	const postShowObj = {
		method: 'POST',
		headers: {
			'Content-Type':'application/json',
			'Accept':'application/json'
		},
		body: JSON.stringify({
			name: showName,
			tvmaze_id: showId,
		})
	}
	return fetch(`http://localhost:3000/tvshows`, postShowObj).then(resp=>resp.json())
}

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

function handleColumnClick(event){
	// debugger
	event.preventDefault();
		if((listGroupUl2.style.display != "none")&&(tempFlag == "undefined")){
		tempFlag = event.target.id
		dayHeaderRow.children[tempFlag].style.backgroundImage = "linear-gradient(-225deg, #E3FDF5 20%, #FFE6FA 50%)";
		dayHeaderRow.children[tempFlag].style.borderRadius = "10px";
				removeMondayToSaturdayLists()
				// displayLargerList(event.target.dataset.dayId)
			fetch(`http://localhost:3000/user_shows`).then(resp=>resp.json())
			.then(json=>{
				newVar = (json.filter(userShow=>userShow.user_id==userId))
				let nvar = newVar.map(nvar=>{
					return nvar.ext_tvmaze_id;
				})
				console.log(event.target.dataset.dayId)
				// debugger
				listGroupUl.innerHTML = ""
				renderFaves(allShows[event.target.dataset.dayId], listGroupUl, nvar )


})
				displayDetails(allShows[event.target.dataset.dayId][0].id)
	}

	if((["0","1","2","3","4","5","6"].includes(event.target.id))&&(tempFlag!="undefined")&&(event.target.id != tempFlag)){
		dayHeaderRow.children[tempFlag].style.backgroundImage = ""
		tempFlag = event.target.id
		dayHeaderRow.children[tempFlag].style.backgroundImage = "linear-gradient(-225deg, #E3FDF5 20%, #FFE6FA 50%)";
		dayHeaderRow.children[tempFlag].style.borderRadius = "10px";

		displayLargerList(event.target.dataset.dayId)
	}

}

function handleItemClick(event){
	event.preventDefault();
	if(event.target.dataset.indexId != "undefined"){
		tempFlag = event.target.dataset.indexId
	}
	if(listGroupUl2.style.display == "none"){
		showDetailDiv.parentElement.style.display = "block"
		displayDetails(event.target.id)
	}else if(event.target.parentElement.id == 'sunday'){
		removeMondayToSaturdayLists()
		displayDetails(event.target.id)
		highlightDayOfWeekTab(event)
	}else{
		removeMondayToSaturdayLists()
		// displayLargerList(event.target.parentElement.id)
					fetch(`http://localhost:3000/user_shows`).then(resp=>resp.json())
			.then(json=>{
				newVar = (json.filter(userShow=>userShow.user_id==userId))
				let nvar = newVar.map(nvar=>{
					return nvar.ext_tvmaze_id;
				})
				// debugger
		listGroupUl.innerHTML = ""
		renderFaves(allShows[event.target.parentElement.id], listGroupUl, nvar)
	})
		displayDetails(event.target.id)
		// highlightDayOfWeekTab(event)
	}
}

function displayDetails(targetId){
	const showObj = Show.all.find(show=>show.id==targetId)
	showDetailDiv.innerHTML = showObj.renderShowDetails()
	// debugger

}

function displayLargerList(targetId){
	// debugger
		listGroupUl.innerHTML = ""
		allShows[targetId].forEach(show=>{
			let showObj = new Show(show)
			listGroupUl.innerHTML += showObj.renderNameItem()
		})
} //targetId is day string

function highlightDayOfWeekTab(event){
	event.target.parentElement.parentElement.style.backgroundImage = "linear-gradient(-225deg, #E3FDF5 20%, #FFE6FA 50%)";
	// const divBar = document.createElement('div')
	// debugger
	// divBar.style.width = "100%"
	// divBar.style.position = "absolute"
	// divBar.style.backgroundColor = "gray"
	// event.target.parentElement.append(divBar)
}

function removeMondayToSaturdayLists(){
		listGroupUl2.style.display = "none"
		listGroupUl3.style.display = "none"
		listGroupUl4.style.display = "none"
		listGroupUl5.style.display = "none"
		listGroupUl6.style.display = "none"
		listGroupUl7.style.display = "none"
		listGroupUl.classList.add("larger-list")
		showDetailDiv.parentElement.style.display = "block"
}

// log in functions
logInEvent();
function logInEvent() {
	const overlay = document.querySelector("#login");
	overlay.addEventListener('click', handleLogin)
}

function handleLogin(event) {
	event.preventDefault();
	const target = event.target;
	const username = document.querySelector('#login-id').value;




// using global 
	if (target.tagName === 'BUTTON') {
		logInUser(username).then(json=> {
			userId = json.id

			fetch(`http://localhost:3000/user_shows`).then(resp=>resp.json())
			.then(json=>{
				newVar = (json.filter(userShow=>userShow.user_id==userId))
				let nvar = newVar.map(nvar=>{
					return nvar.ext_tvmaze_id;
				})
				// let others = '';
				// for (const day in allShows) {
				// 	renderFaves(day);
				// }
				// allShows.forEach(day => {
					renderFaves(allShows.sunday, listGroupUl, nvar);
					renderFaves(allShows.monday, listGroupUl2, nvar);
					renderFaves(allShows.tuesday, listGroupUl3, nvar);
					renderFaves(allShows.wednesday, listGroupUl4, nvar);
					renderFaves(allShows.thursday, listGroupUl5, nvar);
					renderFaves(allShows.friday, listGroupUl6, nvar);
					renderFaves(allShows.saturday, listGroupUl7, nvar);

				// })
				// allShows.sunday.forEach(sundayShow=>{

				// 	if (nvar.includes(sundayShow.show.id)){
				// 		let showObj = new Show(sundayShow)
				// 		listGroupUl.innerHTML += showObj.renderFaveItem(listGroupUl.parentElement.id)
				// 	} else {
				// 		let showObj = new Show(sundayShow)
				// 		others += showObj.renderNameItem(listGroupUl.parentElement.id)
				// 	}
				// })
				// listGroupUl.innerHTML += others;


			})

		});
		// console.log(username)
		document.querySelector('#container').remove();
	}
}

function renderFaves(dayArr, listGroup, nvar) {
	let others = '';
	dayArr.forEach(show => {
			let showObj = new Show(show)

		if (nvar.includes(show.show.id)){
			listGroup.innerHTML += showObj.renderFaveItem(listGroup.parentElement.id)
		} else {
			others += showObj.renderNameItem(listGroup.parentElement.id)
		}
	})
	listGroup.innerHTML += others;
}

function logInUser(username) {
	return fetch('http://localhost:3000/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({name: username}) 
	}).then(response => response.json());
}


// --------------WINDOW RESIZE ------------------------- //
let rows = document.querySelector(".row.seven-cols")
// rows.querySelector("[data-day-id='sunday']")
// rows.querySelector("[data-day-id='tuesday']").firstElementChild.innerText
window.addEventListener('resize', week);
document.addEventListener('DOMContentLoaded', week);

function week(event){
  let weekH3 = rows.querySelectorAll("[data-day-id] h3")
	if (window.innerWidth < 822){
    weekH3.forEach(function(element){
      element.innerText = element.innerText[0];
    })
	} else {
    weekH3[0].innerText = "Sunday";
    weekH3[1].innerText = "Monday";
    weekH3[2].innerText = "Tuesday";
    weekH3[3].innerText = "Wednesday";
    weekH3[4].innerText = "Thursday";
    weekH3[5].innerText = "Friday";
    weekH3[6].innerText = "Saturday";
	}
}
