# Comandos utilizados con frecuencia
* crea un package.json
```
npm init
```

* Instalar express (framework de NodeJs)
```
npm install express
```

* Instalar body-parser
```
npm install body-parser
```

* Instalar mysql (permite la conexion de mysql con NodeJs)
```
npm install mysql
```

* Instalar nodemon (permite escuchar constantemente el código para saber en que momento ha cambiado, y se puede instalar por aparte al colocar la `-D`, lo que nos permite utilizar solamente cuando se desarrolle la aplicación)
```
npm install nodemon -D
```

  * Para automatizar la consatante escucha del cambio de código, es necesario colocar `"dev": "nodemon build/index.js"` dentro del archivo `package.json` en el apartado de `"scripts":`
  ```
  "dev": "nodemon build/index.js"
  ```

  * Para ejecutar constantemente la aplicación
  ```
  npm run dev
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

  * Crear el archivo de configuración para typescript
  ```
  tsc --init
  ```

  * Para automatizar la traducción de código constante es necesario escribir `"build": "tsc -w",` en el archivo `package.json` en el apartado de `"scripts":`
  ```
  "build": "tsc -w",
  ```

  * Para ejecutar constantemente los cambios, en lugar de utiilzar `tsc`
  ```
  npm run build
  ```

* Instalar types para que typescript me devuelva el autocompletado
```
npm i @types/express -D
npm i @types/morgan -D
npm i @types/cors -D
npm i @types/mysql -D
```




https://www.youtube.com/watch?v=lxYB79ANJM8
1:24:49 / 3:09:42