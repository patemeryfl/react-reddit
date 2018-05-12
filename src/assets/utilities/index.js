export const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const convertTime = (time) => {
	let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
	d.setUTCSeconds(time);
	return d.toLocaleString();
};