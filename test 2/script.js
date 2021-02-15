
let arr = ['SUN-MEDIA', 4, 'JULY', 2];

arr = arr.map(v => v.toString()).sort((a, b) => b.length - a.length)

const maxLength = arr[0].length

const result = arr.map(v => {
	const characters = [...v];
	const stars = "*" .repeat(maxLength - characters.length)
	return [...characters, stars].join('')
}).reverse().join('');

document.write(result);