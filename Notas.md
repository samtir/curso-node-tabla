# Temas de la sección:
La sección se enfoca en los siguientes temas:
-	Requerir información de otros archivos
-	Requerir paquetes
-	Importar archivos personalizados
-	NPM
-	Install
-	Uninstall
-	Package.json
-	Yargs
-	Recibir parámetros por línea de comando
-	Colores para la consola

## Require

## Importar archivos personalizados
Se debe utilizar `module.exports = { crearArchivo };` para exportar nuestro código y poderlo llamar con `require()` en otro archivo.

## Recibir información desde la consola

Para capturar los comandos que vienen desde la consola, una opción es utilizar `process.argv`.

## NPM
Para instalar cualquier dependencia de terceros desde `NPM` se debe crear el `package.json`. Para crearlo utilizamos el siguiente comando `npm init`. 
Si requiere crear el `package.json` con sus valores por defecto se debe utilizar el argumento `-Y`, ejemplo: `npm init -Y`.	

Si se requiere instalar una versión especifica de alguna dependencia se debe colocar la versión después del nombre de la dependencia seguido de un `@`, ejemplo: `npm install color@1.0.0`.

Para instalar un paquete como dependencias de desarrollo se debe utilizar el comando `--save-dev`.  
Ejemplo: `npm install nodemon --save-dev`.