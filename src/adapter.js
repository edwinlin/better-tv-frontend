class Adapter{
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

