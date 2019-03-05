class Adapter{
this.todayFullDate = toISOLocal(new Date());
this.sundayDate = toISOLocal(getSunday(new Date()));
this.mondayDate = toISOLocal(getMonday(new Date()));
this.tuesdayDate = toISOLocal(getTuesday(new Date()));
this.wednesdayDate = toISOLocal(getWednesday(new Date()));
this.thursdayDate = toISOLocal(getThursday(new Date()));
this.fridayDate = toISOLocal(getFriday(new Date()));
this.saturdayDate = toISOLocal(getSaturday(new Date()));

getShowsURL = `http://api.tvmaze.com/schedule?country=US&date=`

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

// actual functions for fetching shows on that day of the current week
	static getTodayShows(){
		return fetch(`${getShowsURL}${todayFullDate}`).then(resp=>{
			return resp.json()
		})
	}
	static getSundayShows(){
		return fetch(`${getShowsURL}${sundayDate}`).then(resp=>{
			return resp.json()
		})
	}
	static getMondayShows(){
		return fetch(`${getShowsURL}${mondayDate}`).then(resp=>{
			return resp.json()
		})
	}
	static getTuesdayShows(){
		return fetch(`${getShowsURL}${tuesdayDate}`).then(resp=>{
			return resp.json()
		})
	}
	static getWednesdayShows(){
		return fetch(`${getShowsURL}${wednesdayDate}`).then(resp=>{
			return resp.json()
		})
	}
	static getThursdayShows(){
		return fetch(`${getShowsURL}${thursdayDate}`).then(resp=>{
			return resp.json()
		})
	}
	static getFridayShows(){
		return fetch(`${getShowsURL}${fridayDate}`).then(resp=>{
			return resp.json()
		})
	}
	static getSaturdayShows(){
		return fetch(`${getShowsURL}${saturdayDate}`).then(resp=>{
			return resp.json()
		})
	}

}

