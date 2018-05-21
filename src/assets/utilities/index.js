export const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const convertTime = (time) => {
	let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
	d.setUTCSeconds(time);
	return d.toLocaleString();
};

export const isEmpty = (obj) => {
	if (Object.keys(obj).length === 0 && obj.constructor === Object) {
		return true;
	}
	return false;
};

export const capitalizeFirst = (word) => word.charAt(0).toUpperCase() + word.slice(1);