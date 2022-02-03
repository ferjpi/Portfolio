---
title: Un simple servidor de NodeJS con Fastify
date: 2022-02-02T18:55:29.785Z
image: /assets/node_plus_fastify.png
---
Nosotros normalmente usamos [Express](https://expressjs.com/) para crear aplicaciones REST pero este no es el único web framework que existe. Hoy tratare de introducirles uno que me ha parecido increíblemente bueno, su nombre es [Fastify](https://www.fastify.io/).

Fastify es un muy rápido y bajo costo web framework  que esta basado completamente en Plugins. Esto hace que sea muy fácil escalar proyectos que tengas con el framework ya que permite una modularidad propia de NodeJS y debido a como maneja el contexto dentro de los plugins sea claro el alcance de este.

Para empezar con la creación de un proyecto vamos a usar a Fastify para que nos cree la estructura del proyecto pero primero debemos crear la carpeta en la cual el proyecto va estar

```bash
mkdir fastify-server
```

Despues de haber creado la carpeta nos metemos en ella y ejecutamos el siguiente comando

```bash
npm init fastify
```

Como resultado obtendremos una serie de carpetas y archivos que representan la estructura del proyecto. En la estructura podemos encontrar dos carpetas muy importantes que son *plugins* y *routes,* que como sus nombres indican aglomeraran los plugins y rutas de la aplicación. También tenemos la carpeta de pruebas (Fastify instala y usa por defecto [Tap](https://node-tap.org/)) y no menos importante nuestro punto de entrada, el archivo *app.js.*

```bash
.
├── app.js
├── data.js
├── package-lock.json
├── package.json
├── plugins
│   ├── README.md
│   ├── sensible.js
│   └── support.js
├── routes
│   ├── README.md
│   ├── example
│   │   └── index.js
│   └── root.js
└── test
    ├── helper.js
    ├── plugins
    │   └── support.test.js
    └── routes
        ├── example.test.js
        └── root.test.js
```

Si te estas preguntando que es *data.js. Es* el archivo que vamos a crear a continuación, este archivo va hacer de nuestra base de datos, en el vamos a guardar la data para este proyecto y se ve de la siguiente manera

https://carbon.now.sh/?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=cobalt&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=module.exports%2520%253D%2520%255B%250A%2520%2520%257B%250A%2520%2520%2520%2520id%253A%25201%252C%250A%2520%2520%2520%2520task%253A%2520%27clean%2520the%2520room%27%250A%2520%2520%257D%252C%250A%2520%2520%257B%250A%2520%2520%2520%2520id%253A%25202%252C%250A%2520%2520%2520%2520task%253A%2520%2522study%2520the%2520concepts%2520of%2520JavaScript%2522%250A%2520%2520%257D%250A%255D

Ahora el siguiente paso seria crear nuestra primera ruta pero antes de empezar con las rutas quiero explicar como funciona Fastify y su manejo del *context.*

Nos vamos a mover al archivo principal *app.js,* aquí encontramos lo siguiente

https://carbon.now.sh/?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=cobalt&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%27use%2520strict%27%250A%250Aconst%2520path%2520%253D%2520require%28%27path%27%29%250Aconst%2520AutoLoad%2520%253D%2520require%28%27fastify-autoload%27%29%250A%250Amodule.exports%2520%253D%2520async%2520function%2520%28fastify%252C%2520opts%29%2520%257B%250A%250A%2520%2520fastify.register%28AutoLoad%252C%2520%257B%250A%2520%2520%2520%2520dir%253A%2520path.join%28__dirname%252C%2520%27plugins%27%29%252C%250A%2520%2520%2520%2520options%253A%2520Object.assign%28%257B%257D%252C%2520opts%29%250A%2520%2520%257D%29%250A%250A%250A%2520%2520fastify.register%28AutoLoad%252C%2520%257B%250A%2520%2520%2520%2520dir%253A%2520path.join%28__dirname%252C%2520%27routes%27%29%252C%250A%2520%2520%2520%2520options%253A%2520Object.assign%28%257B%257D%252C%2520opts%29%250A%2520%2520%257D%29%250A%257D%250A

Voy a tratar de desglosar lo que encontramos en el archivo. Primero, se esta exportanto una funcion asincrona que recibe dos parametros, *fastify* y *opts*, el primero es la instancia de la aplicacion y el segundo, como el nombre lo indica, son las opciones que se le pudiesen pasar. Esta configuración es conocida como un *plugin* en Fastify.

Para ser mas claro y enfático, para crear un plugin solo debes crear una function que reciba como primer parámetro la instancia de la aplicación y el segundo parámetro, las opciones que pueda recibir, has simple como suena, eso es un plugin.

> Nota: Yo utilizo funciones asíncronas pero en realidad no tiene que serlo, puedes manejarlo en callback-based si es tu preferencia.


```bash
module.exports = async function (fastify, opts) {}
```

Lo segundo que podemos observar, es que dentro de este plugin estamos usando la instancia de Fastify para registrar otro plugin, en este caso uno llamado *[fastify-autoload](https://www.npmjs.com/package/fastify-autoload)*, este plugin permite cargar varios archivos/plugins que se encuentren agrupados en una carpeta, recibe como segundo argumento un objeto con dos propiedades, *dir* y *options,* el primero hace referencia a la ubicación ( path ) de la carpeta que queremos cargar y el segundo a las opciones que queramos pasar.

Por defecto esta cargando los archivos que se encuentren en la carpetas  *plugins*  y *routes.* Si tú quieres tener plugins que estén activos en el contexto global de la aplicación debes registrarlos en este punto.

Si quieres leer un poco mas sobre el tema, te recomiendo estas lecturas que se encuetran en la documentación oficial de Fastify. *[Fastify Register](https://www.fastify.io/docs/latest/Reference/Server/#register)* y *[Plugins Guide.](https://www.fastify.io/docs/latest/Guides/Plugins-Guide/)*

Empecemos con lo bueno, En la carpeta *routes* encontramos un archivo llamado *root.js,* en el vamos a importar el archivo *data* que hace referencia a nuestra DB. Dentro del plugin principal vamos a definir la ruta ‘/’ de tipo GET, que seria nuestra ruta principal donde recibiremos la información contenida en *data.*

https://carbon.now.sh/?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=cobalt&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%27use%2520strict%27%250Aconst%2520data%2520%253D%2520require%28%27..%252Fdata%27%29%250A%250Amodule.exports%2520%253D%2520async%2520function%2520%28fastify%252C%2520opts%29%2520%257B%250A%2520%2520fastify.get%28%27%252F%27%252C%2520async%2520function%2520%28request%252C%2520reply%29%2520%257B%250A%2520%2520%2520%2520return%2520%257B%2520data%2520%257D%250A%2520%2520%257D%29%250A%257D%250A

Como puedes ver es muy sencillo, con la instancia definimos el método de la ruta, en este caso de tipo GET pero también puede ser POST, PUT, etc. Esta función recibe dos parámetros, el primero la ruta, de tipo string, y el segundo una función asíncrona que a su vez recibe dos parámetros, *request* y  *reply.*  Si estas familiarizado con ExpressJS, estos hacen referencia a los objetos *req* y *res* con un diferente y separado API.

Si quieres saber mas sobre ellos, te recomiendo *["Fastify: Request"](https://github.com/fastify/fastify/blob/master/docs/Request.md)* and *["Fastify: Reply"](https://github.com/fastify/fastify/blob/master/docs/Reply.md).*

Dentro de la misma carpeta vas a encontrar otra carpeta con el nombre *example* y dentro un archivo *index.js.* Fastify toma el nombre de la carpeta como el de la ruta, es decir, si la carpeta se llama *edit,* va a existir una ruta llamada igual ‘/edit’. Si has trabajo con NextJS, te vas a sentir como en casa ( por si no lo sabias, NextJS usa a Fastify under the hook).

Teniendo lo anterior en cuenta, vamos a cambiar el nombre de la carpeta para que se ajuste a nuestro proposito. Cambia el nombre a *create* y abre el archivo en su interior y cambia el código de la siguiente manera.

https://carbon.now.sh/?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=cobalt&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%27use%2520strict%27%250Aconst%2520data%2520%253D%2520require%28%27..%252F..%252Fdata%27%29%250A%250A%252F%252F%2520JSON-schema%250A%252F%252F%2520it%2520is%2520use%2520to%2520validate%2520the%2520input%2520of%2520the%2520data%250A%252F%252F%2520in%2520this%2520case%2520the%2520request%27s%2520body%250Aconst%2520schema%2520%253D%2520%257B%250A%2520%2520schema%253A%2520%257B%250A%2520%2520%2520%2520body%253A%2520%257B%250A%2520%2520%2520%2520%2520%2520type%253A%2520%27object%27%252C%250A%2520%2520%2520%2520%2520%2520required%253A%2520%255B%27task%27%255D%252C%250A%2520%2520%2520%2520%2520%2520additionalProperties%253A%2520false%252C%250A%2520%2520%2520%2520%2520%2520properties%253A%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520task%253A%2520%257B%2520type%253A%2520%27string%27%2520%257D%250A%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%257D%250A%2520%2520%257D%250A%257D%250A%250Amodule.exports%2520%253D%2520async%2520function%2520%28fastify%252C%2520opts%29%2520%257B%250A%2520%2520fastify.post%28%27%252F%27%252C%2520schema%252C%2520async%2520function%2520%28request%252C%2520reply%29%2520%257B%250A%2520%2520%2520%2520%252F%252F%2520Get%2520the%2520body%2520from%2520the%2520request%250A%2520%2520%2520%2520const%2520todo%2520%253D%2520request.body%250A%250A%2520%2520%2520%2520%252F%252F%2520Calculate%2520the%2520unique%2520ID%2520for%2520the%2520todo%250A%2520%2520%2520%2520const%2520id%2520%253D%2520data.length%2520%252B%25201%250A%2520%2520%2520%2520%252F%252F%2520Assign%2520the%2520regenerated%2520ID%2520to%2520the%2520todo%250A%2520%2520%2520%2520todo.id%2520%253D%2520id%250A%2520%2520%2520%2520%252F%252F%2520Add%2520the%2520new%2520todo%2520to%2520the%2520list%2520of%2520todos%250A%2520%2520%2520%2520data.push%28todo%29%250A%250A%2520%2520%2520%2520%252F%252F%2520return%2520the%2520list%2520of%2520todos%2520with%2520the%2520new%2520todo%250A%2520%2520%2520%2520return%2520%257B%2520data%2520%257D%250A%2520%2520%257D%29%250A%257D%250A

Vamos a desglosar el código. Primero creamos una ruta de tipo POST, ésta ruta tiene como path ‘/’ porque el nombre de la carpeta define el nombre de la ruta, es decir, vamos a tener esta ruta ‘/create’ cuando corramos el proyecto. El segundo parámetro que recibe es opcional, y en el se definen las opciones de la ruta. En este caso estoy definiendo el *schema* de la ruta, especificamente su *body.* Con esto se busca generar que Fastify realice validaciones a la data que entra y sale de la ruta. Si quieres saber más acerca de esto visita [JSON-schema](https://json-schema.org/).

Como tercer parámetro, pasamos una función asíncrona que recibe dos parámetros, *request* y *reply,* en el body de la función vamos a colocar nuestra lógica de como la ruta debe manejar nuestra petición.

No debería explicar esto porque es muy simple pero por si alguien no lo entiende, la explicación es la siguiente.

Del objeto *request* extraemos el body que contiene la información que el usuario envió. A esa data, que en este caso es un *todo*, le agregamos la propiedad *id* y luego agregamos ese *todo* a la lista de *todos* y le devolvemos esa lista actualizada al usuario.

Cosas a tener en cuenta. Por defecto Fastify soporta *application/json request*, si necesitas manejar otros formatos puedes usar *fastify-multipart* para soportar *multipart/formdata request* y *fastify-formbody* para soportar *application/x-www-form-urlencoded request.*

Ahora solo queda correr el proyecto, para esto puedes usar cualquiera de estos dos comandos

```bash
npm run start

or

npm run dev
```

Espero hayas podido aprender algo de esto y si ya lo sabias ¡felicidades! vas bien encaminado.

Disculpa si se hizo muy largo pero cuando pensé en escribir sobre este tema no lo vi tan extenso ( y eso que aquí hay muchos temas que no he tocado haha ).

Te dejo para que completes el CRUD del proyecto, así refuerzas  😜