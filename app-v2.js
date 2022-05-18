const { crearArchivo } = require('./helpers/multiplicar');

const argv = require('yargs')
.options({
	'b':{
		alias: 'base',
		demandOption: true,
		type: 'number'
	},
	'l':{
		alias: 'listar',
		demandOption: true,
		type: 'boolean',
		default: false
	}
})
.check((argv, options)=>{
	if ( isNaN(argv.b) ) {
		throw 'La base tiene que ser un número'
	}
	return true;
})
.argv;

console.clear();

// base=5
// crearArchivo(50);

// Recibir información desde línea de comandos

// const [ , , arg3 = 'base=5' ] = process.argv;
// const [, base = 5] = arg3.split('=');

// console.log(base);

crearArchivo( argv.b, argv.l )
	.then( msg =>{
		console.log('TODO BIEN!!');
		console.log(msg);
	})
	.catch( err => {
		console.log('TODO MAL!!');
		console.error( err );
	});

// console.log(argv)