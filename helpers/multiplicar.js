const fs = require('fs');
const colors = require('colors');

const crearArchivo = ( base, listar = false, hasta = 10 )=>{
	return new Promise((resolve,reject) =>{
		try {
			console.clear();

			let salida, consola = '';
			for (let i = 1; i <= hasta; i++) {
				salida += `${ base } x ${ i } = ${ base * i }\n`;
				consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
			}
			// Se imprime si se manda la opciónd de impresión
			if ( listar ) {
				console.log('====================='.yellow);
				console.log('     Tabla del '.rainbow, colors.green(base));
				console.log('====================='.yellow);
				console.log(consola);
			}

			fs.writeFileSync(`./salida/Tabla-${base}.txt`,salida);

			resolve(`La tabla de multiplicar ${ base } se ha creado correctamente.`.green.underline);
		} catch(e) {
			throw e;
			// reject(e);
		}
	})
}


// const crearArchivo = async( base ) => {
// 	try {
// 		console.clear();
// 		console.log('=====================');
// 		console.log('     Tabla del 5 ',base);
// 		console.log('=====================');

// 		let salida = '';
// 		for (let i = 1; i <= 10; i++) {
// 			salida += `${ base } x ${ i } = ${ base * i }\n`;
// 		}

// 		console.log(salida);

// 		fs.writeFileSync(`Tabla-${base}.txt`,salida);
// 		return `La tabla de multiplicar ${ base } se ha creado correctamente.`;
// 	} catch(e) {
// 		throw e;
// 		return e;
// 	}
// }

module.exports = { crearArchivo };