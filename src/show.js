class Show{
	constructor(episode){
		const {id, url, name, season, number, airdate, summary, show} = episode
		this.id = id
		this.url = url
		this.name = name
		this.season = season
		this.number = number
		this.airdate = airdate
		this.summary = summary
		this.show = show

		Show.all.push(this)
	}

    renderNameItem(indexId, dayString){
		return `<li class="list-group-item" id=${this.id} data-id=${this.show.id} data-day-id=${dayString} data-index-id=${indexId}>${this.show.name}.s${this.season}.e${this.number}</li>`
	}
	renderFaveItem(indexId, dayString){
		return `<li style="background-color: yellow" class="list-group-item" id=${this.id} data-id=${this.show.id} data-day-id=${dayString} data-index-id=${indexId}>${this.show.name}.s${this.season}.e${this.number}</li>`
	}


	renderShowDetails(){
		// debugger
		const imageToUse = this.show.image
		const placeholder = 'https://www.l-nutra.com/wp-content/uploads/2018/07/placeholder.png'
		if(imageToUse != null){
			return `<h1 id="show-title" data-id=${this.show.id}>${this.show.name}</h1>
					<img id="pic" src=${imageToUse.original}>
					<h3> - Season ${this.season} - Episode ${this.number}</h3>

					<button id="edit-show" class="btn btn-info">
		  			Favorite
					</button>
					<button id="delete-show" class="btn btn-info">
		  			Remove
					</button>
					<div>
					<button id="all-shows" class="btn btn-info">
		  			Back to All Listings
					</button>
					</div>
					<div id=extra>
					<p>Show Summary</p>
					<p>${this.show.summary}</p>
					<p>Days Aired: ${this.show.schedule.days}</p>
					<p>Network: ${this.show.network.name}</p>
					</div>
					`
		}else{
			return `<h1 data-id=${this.show.id}>${this.show.name}</h1>
					<img src=${placeholder}>
					<h3> - Season ${this.season} - Episode ${this.number}</h3>

					<button id="edit-show" class="btn btn-info">
		  			Favorite
					</button>
					<button id="delete-show" class="btn btn-info">
		  			Remove
					</button>
					<div>
					<button id="all-shows" class="btn btn-info">
		  			Back to All Listings
					</button>
					</div>
					<div id=extra>
					<p>Show Summary</p>
					<p>${this.show.summary}</p>
					<p>Days Aired: ${this.show.schedule.days}</p>
					<p>Network: ${this.show.network.name}</p>
					</div>
					`
		}
	}
}

Show.all = []