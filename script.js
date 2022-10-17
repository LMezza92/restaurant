
var myArray = ["uno","due","tre","quattro"];
var numbArray = [98,12,31,42,58,52,11,18,98,22];

function myFunction() {
	console.log(myArray[0])
}

function printEach() {

/*	numbArray.forEach(element=> {
		if(element>=50){
			console.log(element);
		} 
	})
*/
/*
	let r= numbArray.map(element => {
		return element * 2;
	});
	console.log(r);
*/
/*
	let f = numbArray.find(x => {
		return x >= 50;
	});
	console.log(f);
*/
/*
	let g = numbArray.indexOf(98);

	console.log(g);
*/
	let j = numbArray.filter(x=>{
		x == 98;
	});
	console.log(j);

}
