const usuarios = [
	{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
	{ nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
	{ nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// 2.1 - map()
const arr = usuarios.map(item => {
	return item.idade;
});

console.log(arr);

// 2.2 - Filter()
const arr2 = usuarios.filter(item => {
	return ((item.idade>18) && (item.empresa=='Rocketseat' ))
});

console.log(arr2);

// 2.3 - Find()
const arr3 = usuarios.find(item => {
	return item.empresa =='Google'
});

console.log(arr3);

// 2.4 - Unindo metodos

// criando nova array
const newArray = usuarios.map(item=>  {
    return {
		idade: item.idade * 2,
		nome: item.nome,
		empresa: item.empresa
    };
});

const arr4 = newArray.filter(item=>  {
	return item.idade <= 50;
});	

console.log(arr4);

// usando spread
const arr5 = usuarios.map(item => 
	({...item, idade : item.idade * 2})).filter(item => users.idade <= 50)
console.log(arr5);