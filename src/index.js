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
tempDay = "undefined"
const daysOfWeek = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

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
// dayHeaderRow.addEventListener('click', handleColumnClick);
const showDetailDiv = document.getElementById('show-detail');
// showDetailDiv.addEventListener('click', handleDetailPatch);
const showDetailParent = document.querySelector('.row')
showDetailParent.addEventListener('click', handleFaveClick)
const sunday1 = document.querySelector('.sunday')
sunday1.addEventListener('click', handleTabClick)
const monday1 = document.querySelector('.monday')
monday1.addEventListener('click', handleTabClick)
const tuesday1 = document.querySelector('.tuesday')
tuesday1.addEventListener('click', handleTabClick)
const wednesday1 = document.querySelector('.wednesday')
wednesday1.addEventListener('click', handleTabClick)
const thursday1 = document.querySelector('.thursday')
thursday1.addEventListener('click', handleTabClick)
const friday1 = document.querySelector('.friday')
friday1.addEventListener('click', handleTabClick)
const saturday1 = document.querySelector('.saturday')
saturday1.addEventListener('click', handleTabClick)
const sunday2 = document.querySelector('h3.sunday')
// sunday2.addEventListener('click', handleTabClick)
const monday2 = document.querySelector('h3.monday')
// monday2.addEventListener('click', handleTabClick)
const tuesday2 = document.querySelector('h3.tuesday')
// tuesday2.addEventListener('click', handleTabClick)
const wednesday2 = document.querySelector('h3.wednesday')
// wednesday2.addEventListener('click', handleTabClick)
const thursday2 = document.querySelector('h3.thursday')
// thursday2.addEventListener('click', handleTabClick)
const friday2 = document.querySelector('h3.friday')
// friday2.addEventListener('click', handleTabClick)
const saturday2 = document.querySelector('h3.saturday')
// saturday2.addEventListener('click', handleTabClick)

const dayTabs = [sunday1, monday1, tuesday1, wednesday1, thursday1, friday1, saturday1, sunday2, monday2, tuesday2, wednesday2, thursday2, friday2, saturday2]

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

function handleAllListings(event){
	event.preventDefault();
		fetch(`https://bettertv.herokuapp.com/user_shows`).then(resp=>resp.json())
			.then(json=>{
				
			dayTabs.forEach(tab=>{
				tab.style.backgroundImage = ""
			}) 

			returnMondayToSaturdayLists()
			let newVar = (json.filter(userShow=>userShow.user_id==userId))
				let nvar = newVar.map(nvar=>{
					return nvar.ext_tvmaze_id;
				})
		listGroupUl.innerText = ""
		listGroupUl2.innerText = ""
		listGroupUl3.innerText = ""
		listGroupUl4.innerText = ""
		listGroupUl5.innerText = ""
		listGroupUl6.innerText = ""
		listGroupUl7.innerText = ""
		renderFaves(allShows.sunday, listGroupUl, nvar, "sunday");
		renderFaves(allShows.monday, listGroupUl2, nvar, "monday");
		renderFaves(allShows.tuesday, listGroupUl3, nvar, "tuesday");
		renderFaves(allShows.wednesday, listGroupUl4, nvar, "wednesday");
		renderFaves(allShows.thursday, listGroupUl5, nvar, "thursday");
		renderFaves(allShows.friday, listGroupUl6, nvar, "friday");
		renderFaves(allShows.saturday, listGroupUl7, nvar, "saturday");
	})
}

function handleDeleteClick(event){
	// debugger
	fetch(`https://bettertv.herokuapp.com/user_shows`).then(resp=>resp.json())
			.then(json=>{
				myUserShows = (json.filter(userShow=>userShow.user_id==userId))
					let myTvmazeIds = myUserShows.map(nvar=>{
						return nvar.ext_tvmaze_id;
					})
					// debugger
					for(let i = 0; i<myTvmazeIds.length; i++){
						if(myTvmazeIds[i] == event.target.parentElement.children[0].dataset.id){
							postDeleteRequest(myUserShows[i].id).then(json => {
						      console.log(json)
						    });
						}
					}
				setTimeout(function(){ deleteRerender(event); }, 200);

				})

}

function deleteRerender(event){
	fetch(`https://bettertv.herokuapp.com/user_shows`).then(resp=>resp.json())
		.then(json=>{
			newVar = (json.filter(userShow=>userShow.user_id==userId))
			let nvar = newVar.map(nvar=>{
				return nvar.ext_tvmaze_id;
			})
		listGroupUl.innerHTML = ""
		renderFaves(allShows[tempDay], listGroupUl, nvar, tempDay)
	})
}

function postDeleteRequest(id){
	const deleteObj = {
		method: 'DELETE',
		headers:{
			'Content-Type':'application/json',
			'Accept':'application/json'
		}
	}
	return fetch(`https://bettertv.herokuapp.com/user_shows/${id}`, deleteObj).then(resp=>resp.json())
}

function highlightDayOfWeekTab(event){
	if((daysOfWeek.includes(event.target.dataset.dayId))&&(daysOfWeek.includes(event.target.parentElement.dataset.dayId))){
		event.target.style.backgroundImage = "linear-gradient(-225deg, #E3FDF5 20%, #FFE6FA 50%)";
		event.target.parentElement.style.backgroundImage = "linear-gradient(-225deg, #E3FDF5 20%, #FFE6FA 50%)";
	}else if((daysOfWeek.includes(event.target.dataset.dayId))&&(daysOfWeek.includes(event.target.children[0].dataset.dayId))){
		event.target.style.backgroundImage = "linear-gradient(-225deg, #E3FDF5 20%, #FFE6FA 50%)";
		event.target.children[0].style.backgroundImage = "linear-gradient(-225deg, #E3FDF5 20%, #FFE6FA 50%)";
	}
}

function highlightTabFromItemClick(event){
	event.target.parentElement.parentElement.style.backgroundImage = "linear-gradient(-225deg, #E3FDF5 20%, #FFE6FA 50%)";
}

function handleItemClick(event){
	event.preventDefault();
	// console.log(event.target)
	// console.log(tempDay)
	if(event.target.tagName == "LI"){
		tempDay = event.target.dataset.dayId
		// debugger
		if(listGroupUl2.style.display == "none"){
			showDetailDiv.parentElement.style.display = "block"
			displayDetails(event.target.id)
		}else if(event.target.parentElement.id == 'sunday'){
			removeMondayToSaturdayLists()
			displayDetails(event.target.id)
			highlightTabFromItemClick(event)
		}else{
			removeMondayToSaturdayLists()
			// displayLargerList(event.target.parentElement.id)
			fetch(`https://bettertv.herokuapp.com/user_shows`).then(resp=>resp.json())
				.then(json=>{
					newVar = (json.filter(userShow=>userShow.user_id==userId))
					let nvar = newVar.map(nvar=>{
						return nvar.ext_tvmaze_id;
					})
					// debugger
			listGroupUl.innerHTML = ""
			renderFaves(allShows[event.target.dataset.dayId], listGroupUl, nvar, event.target.dataset.dayId)
		})
			displayDetails(event.target.id)
			highlightTabFromItemClick(event)
		}
	}
}

function handleTabClick(event){
	event.preventDefault();
	// debugger
	// console.log(tempDay)
	if(event.target.tagName != "LI"){
		if(tempDay != event.target.dataset.dayId){
			dayTabs.forEach(tab=>{
				tab.style.backgroundImage = ""
			}) 
		}
		tempDay = event.target.dataset.dayId

		if(listGroupUl2.style.display != "none"){
			removeMondayToSaturdayLists()
			getPreferenceAndRenderList(event)
			displayDetails(allShows[event.target.dataset.dayId][0].id)
			highlightDayOfWeekTab(event)
		}else{
			getPreferenceAndRenderList(event)
			displayDetails(allShows[event.target.dataset.dayId][0].id)
			highlightDayOfWeekTab(event)
		}
	}
}

function getPreferenceAndRenderList(event){
	fetch(`https://bettertv.herokuapp.com/user_shows`).then(resp=>resp.json())
			.then(json=>{
				newVar = (json.filter(userShow=>userShow.user_id==userId))
				let nvar = newVar.map(nvar=>{
					return nvar.ext_tvmaze_id;
				})
				// debugger
		listGroupUl.innerHTML = ""
		renderFaves(allShows[event.target.dataset.dayId], listGroupUl, nvar, event.target.dataset.dayId)
	})
}

function handleFaveClick(event){
	event.preventDefault();
	if(event.target.id == "edit-show"){
		postShowInfo(event).then(json=>{
			console.log(json)
			postUserShow(userId, json.id, json.tvmaze_id).then(json2=> {
				fetch(`https://bettertv.herokuapp.com/`).then(resp=>resp.json())
				.then(json3=>{
					newVar = (json3.filter(userShow=>userShow.user_id==userId))
						nvar = newVar.map(nvar=>{
							return nvar.ext_tvmaze_id;
						})
					listGroupUl.innerHTML = ""
					renderFaves(allShows[tempDay], listGroupUl, nvar, tempDay)
				})
			})
		})
	}
	if(event.target.id == "pic"){
		console.log('pic')
	}
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
	return fetch(`https://bettertv.herokuapp.com/user_shows`, postUserShowObj).then(resp=>resp.json())
}

function postShowInfo(event){
	// debugger
	const showName = Show.all.find(show=>show.show.id==event.target.parentElement.children[0].dataset.id).show.name
	// console.log(showName)
	const showId = parseInt(event.target.parentElement.children[0].dataset.id)
	// console.log(showId)
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
	return fetch(`https://bettertv.herokuapp.com/tvshows`, postShowObj).then(resp=>resp.json())
}


function displayDetails(targetId){
	const showObj = Show.all.find(show=>show.id==targetId)
	showDetailDiv.innerHTML = showObj.renderShowDetails()
	showDetailDiv.classList.add(tempDay)
	// debugger
	const deleteBtn = document.getElementById('delete-show')
	deleteBtn.addEventListener('click', handleDeleteClick)
	const allListBtn = document.getElementById('all-shows')
	allListBtn.addEventListener('click', handleAllListings)
}

function displayLargerList(targetId){
	// debugger
		listGroupUl.innerHTML = ""
		allShows[targetId].forEach(show=>{
			let showObj = new Show(show)
			listGroupUl.innerHTML += showObj.renderNameItem()
		})
} //targetId is day string

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

function returnMondayToSaturdayLists(){
		showDetailDiv.parentElement.style.display = "none"
		listGroupUl.classList.remove("larger-list")
		listGroupUl2.style.display = "block"
		listGroupUl3.style.display = "block"
		listGroupUl4.style.display = "block"
		listGroupUl5.style.display = "block"
		listGroupUl6.style.display = "block"
		listGroupUl7.style.display = "block"
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
					renderFaves(allShows.sunday, listGroupUl, nvar, "sunday");
					renderFaves(allShows.monday, listGroupUl2, nvar, "monday");
					renderFaves(allShows.tuesday, listGroupUl3, nvar, "tuesday");
					renderFaves(allShows.wednesday, listGroupUl4, nvar, "wednesday");
					renderFaves(allShows.thursday, listGroupUl5, nvar, "thursday");
					renderFaves(allShows.friday, listGroupUl6, nvar, "friday");
					renderFaves(allShows.saturday, listGroupUl7, nvar, "saturday");
			})
		});
		document.querySelector('#container').remove();
	}
}

function renderFaves(dayArr, listGroup, nvar, dayString) {
	let others = '';
	dayArr.forEach(show => {
			let showObj = new Show(show)

		if (nvar.includes(show.show.id)){
			listGroup.innerHTML += showObj.renderFaveItem(listGroup.parentElement.id, dayString)
		} else {
			others += showObj.renderNameItem(listGroup.parentElement.id, dayString)
		}
	})
	listGroup.innerHTML += others;
}

function logInUser(username) {
	return fetch('https://bettertv.herokuapp.com/users', {
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
