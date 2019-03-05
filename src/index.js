// variables ----------------------------->
const todayFullDate = toISOLocal(new Date());
getShowsURL = `http://api.tvmaze.com/schedule?country=US&date=${todayFullDate}`
const listGroupUl = document.getElementById('list-group');
listGroupUl.addEventListener('click', handleItemClick);
const showDetailDiv = document.getElementById('show-detail');
showDetailDiv.addEventListener('click', handleDetailPatch);
const getShowDetailsURL = `http://api.tvmaze.com/shows`;

// code ----------------------------->

getAllShows().then(json=>{
	// debugger
	allShowsArray = json
	json.forEach(show=>{
		listGroupUl.innerHTML += createShowNameItem(show)
	})
}) //end getAllShows


// functions ----------------------------->

function toISOLocal(d) {
  var z = n => (n<10? '0':'')+n;
  var off = d.getTimezoneOffset();
  var sign = off < 0? '+' : '-';
  off = Math.abs(off);

  return d.getFullYear() + '-' + z(d.getMonth()+1) + '-' +
         z(d.getDate())
}

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
	showDetailDiv.innerHTML = ""
	showDetailDiv.innerHTML += createShowDetailsItem(event.target)
}

function createShowDetailsItem(showData){
	// debugger
	console.log(showData)
	// console.log(event.target)
	console.log(allShowsArray.find(ele=>ele.id=showData.id))
// fetch(`${getShowDetailsURL}/${showData.dataset.id}`).then(resp=>resp.json()).then(json=>{
// 	console.log(json)
// })
	const showInfo = allShowsArray.find(show=>show.show.id==showData.dataset.id)
	// debugger
	return `<h1 data-id=${showData.dataset.id}>${showInfo.show.name}</h1>
			<img src=${showInfo.show.image.medium}>
			<h3> - Season ${showInfo.season} - Episode ${showInfo.number}</h3>

			<button id="edit-show" class="btn btn-info">
  			Favorite
			</button>
			`
}
			// <h3>${showInfo.tagline}</h3>
			// <textarea>${showInfo.description}</textarea>


function createShowNameItem(show){
	// debugger
	return `<li class="list-group-item" id=${show.id} data-id=${show.show.id}>${show.show.name}.s${show.season}.e${show.number}</li>`
}

function getAllShows(){
	return fetch(getShowsURL).then(resp=>{
		return resp.json()
	})

}