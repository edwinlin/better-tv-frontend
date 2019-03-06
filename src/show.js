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

    renderNameItem(indexId){
		return `<li class="list-group-item" id=${this.id} data-id=${this.show.id} data-index-id=${indexId}>${this.show.name}.s${this.season}.e${this.number}</li>`
	}


	renderShowDetails(){
		const imageToUse = this.show.image
		const placeholder = 'https://www.l-nutra.com/wp-content/uploads/2018/07/placeholder.png'
		if(imageToUse != null){
			return `<h1 data-id=${this.show.id}>${this.show.name}</h1>
					<img src=${imageToUse.original}>
					<h3> - Season ${this.season} - Episode ${this.number}</h3>

					<button id="edit-show" class="btn btn-info">
		  			Favorite
					</button>
					`
		}else{
			return `<h1 data-id=${this.show.id}>${this.show.name}</h1>
					<img src=${placeholder}>
					<h3> - Season ${this.season} - Episode ${this.number}</h3>

					<button id="edit-show" class="btn btn-info">
		  			Favorite
					</button>
					`
		}
	}

}

Show.all = []