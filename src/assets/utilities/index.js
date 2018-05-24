export const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const convertTime = (time) => {
	let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
	d.setUTCSeconds(time);
	return d;
	//return d.toLocaleString();
};

const timeSegments = [
	3.154e10,
	2.628e9,
	6.048e8,
	8.64e7,
	3.6e6,
	60000,
	-Infinity
];
  
const makeTimeString = (unit, singularString) => (timeSegment, time) =>
	time >= 2 * timeSegment
	  ? `${Math.floor(time / timeSegment)} ${unit}s ago`
	  : singularString;
  
const timeFunctions = [
	makeTimeString('year', '1 year ago'),
	makeTimeString('month', '1 month ago'),
	makeTimeString('week', '1 week ago'),
	makeTimeString('day', '1 day ago'),
	makeTimeString('hour', 'an hour ago'),
	makeTimeString('minute', 'a minute ago'),
	() => 'just now'
];
  
export const timeSince = (timeStamp) => {
	const timeDifference = Date.now() - timeStamp;
	const index = timeSegments.findIndex(time => timeDifference >= time);
	const timeAgo = timeFunctions[index](timeSegments[index], timeDifference);
	return timeAgo;
};

export const isEmpty = (obj) => {
	if (Object.keys(obj).length === 0 && obj.constructor === Object) {
		return true;
	}
	return false;
};

export const capitalizeFirst = (word) => word.charAt(0).toUpperCase() + word.slice(1);