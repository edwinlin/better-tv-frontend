class DayOfWeek{


	static getSunday(d) {
	  d = new Date(d);
	  var day = d.getDay(),
	      diff = d.getDate() - day + (day == 0 ? -6:0);
	  return new Date(d.setDate(diff));
	}
	static getMonday(d) {
	  d = new Date(d);
	  var day = d.getDay(),
	      diff = d.getDate() - day + (day == 0 ? -6:1);
	  return new Date(d.setDate(diff));
	}
	static getTuesday(d) {
	  d = new Date(d);
	  var day = d.getDay(),
	      diff = d.getDate() - day + (day == 0 ? -6:2);
	  return new Date(d.setDate(diff));
	}
	static getWednesday(d) {
	  d = new Date(d);
	  var day = d.getDay(),
	      diff = d.getDate() - day + (day == 0 ? -6:3);
	  return new Date(d.setDate(diff));
	}
	static getThursday(d) {
	  d = new Date(d);
	  var day = d.getDay(),
	      diff = d.getDate() - day + (day == 0 ? -6:4);
	  return new Date(d.setDate(diff));
	}
	static getFriday(d) {
	  d = new Date(d);
	  var day = d.getDay(),
	      diff = d.getDate() - day + (day == 0 ? -6:5);
	  return new Date(d.setDate(diff));
	}
	static getSaturday(d) {
	  d = new Date(d);
	  var day = d.getDay(),
	      diff = d.getDate() - day + (day == 0 ? -6:6);
	  return new Date(d.setDate(diff));
	}

	static toISOLocal(d) {
	  var z = n => (n<10? '0':'')+n;
	  var off = d.getTimezoneOffset();
	  var sign = off < 0? '+' : '-';
	  off = Math.abs(off);

	  return d.getFullYear() + '-' + z(d.getMonth()+1) + '-' +
	         z(d.getDate())
	}

}