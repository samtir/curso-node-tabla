// Tabla del 5

const fs = require('fs');

console.clear();
console.log('=====================');
console.log('     Tabla del 5     ');
console.log('=====================');

let base = 4;
let salida = '';

for (let i = 1; i <= 10; i++) {
	salida +=` ${ base } x ${ i } = ${ base * i} \n`;
}

fs.writeFile(`Tabla-${base}.txt`,salida, ( err )=>{
	if ( err ) throw err;

	console.log(`La tabla de ${ base } se ha creado correctamente.`);
})

console.log(salida);
