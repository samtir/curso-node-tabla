const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/argv');
require('colors');

console.clear();

// base=5
// crearArchivo(50);

// Recibir información desde línea de comandos

// const [ , , arg3 = 'base=5' ] = process.argv;
// const [, base = 5] = arg3.split('=');

// console.log(base);

crearArchivo( argv.b, argv.l, argv.h )
	.then( msg =>{
		console.log('TODO BIEN!!');
		console.log(msg.rainbow);
	})
	.catch( err => {
		console.log('TODO MAL!!'.red);
		console.error( colors.red(err) );
	});

// console.log(argv)
// console.log('Hola mundo!!!'.red)