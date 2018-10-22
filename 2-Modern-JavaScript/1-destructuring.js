const [first, ...restOfItems] = [10, 20, 30, 40];
// first = 10
// restOfItems = [20, 30, 40]
const newArray = [...restOfItems];
// newArray = [20, 30, 40]

/*--------------------------*/
const data = {
	temp1: '001',
	temp2: '002',
	firstName: 'Muhammed',
	lastName: 'Alaa'
};

const {temp1, temp2, ...person} = data;
// temp1 = '001'
// temp2 = '002'
// person = {'firstName': 'Muhammed', 'lastName': 'Alaa'}


const newObject = {
	...person
};
// newObject = {'firstName': 'Muhammed', 'lastName': 'Alaa'}

/*------------------------------------------------------------------------------------*/

const {PI, E, SQRT2} = Math;


const { readFile } = require('fs');


const circle = {
	label: 'circleX',
	radius: 2
}


const circleArea = ({radius}, {precision = 2} = {}) => {
	(PI * radius * radius).toFixed(precision);
}

console.log(circleArea(circle));

console.log(circleArea(circle, { precision: 5}))


















