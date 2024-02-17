# Comandos utilizados con frecuencia
* crea un package.json
```
npm init --yes
```

* Instalar express (framework de NodeJs)
```
npm install express
```

* Instalar morgan (permite ver en consola, las solicitudes del cliente)
```
npm install morgan
```

* Instalar mysql (permite la conexion de mysql con NodeJs)
```
npm install mysql
```

* Instalar promise-mysql (permite instalar la conexion de mysql con promesas `async away`)
```
npm install promise-mysql
```

* Instalar cors (permite la conexion entre servidores)
```
npm install cors
```

* Instalar typescript (permite utilizar las dependencias de tsc, por ejemplo, para la traducción de código typescript a javascript)
```
npm install -g typescript
```

  - Crear el archivo de configuración para typescript
```
tsc --init
```

  - Para automatizar la traducción de código constante es necesario escribir `"build": "tsc -w",` en el archivo ```package.json``` en el apartado de `"scripts":`
```
"build": "tsc -w",
```

  - Para ejecutar constantemente los cambios, en lugar de utiilzar `tsc`
```
npm run build
```

* Instalar nodemon (permite instalar por aparte por -D solamente cuando se desarrollen la aplicación)
```
npm install nodemon -D
```