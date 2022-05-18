const argv = require('yargs')
.options({
	'b':{
		alias: 'base',
		demandOption: true,
		type: 'number',
		describe: 'Es la base de la tabla de multiplicar'
	},
	'l':{
		alias: 'listar',
		demandOption: true,
		type: 'boolean',
		default: false,
		describe: 'Muestra la impresión en consola de la tabla'
	},
	'h':{
		alias: 'hasta',
		demandOption: true,
		type: 'number',
		default: 10,
		describe: 'Hasta donde termina la tabla'
	}
})
.check((argv, options)=>{
	if ( isNaN(argv.b) ) {
		throw 'La base tiene que ser un número'
	}
	return true;
})
.argv;

module.exports =argv;