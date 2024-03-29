---
title: A server with NodeJS and Fastify
date: 2022-02-02T19:14:33.089Z
image: /assets/node_plus_fastify.png
---
We normally use [Express](https://expressjs.com/) to create REST applications but this is not the only web framework out there. Today I will try to introduce you to one that I found incredibly good, its name is [Fastify](https://www.fastify.io/).

Fastify is a very fast and low-cost web framework that is entirely plugin-based. This makes it very easy to scale projects that you have with the framework since it allows NodeJS's own modularity and due to how it handles the context within the plugins, its scope is clear.

To start with the creation of a project we are going to use Fastify to create the project structure for us but first, we must create the folder in which the project will be.

```
mkdir fastify-server
```

After having created the folder we get into it and execute the following command

```
npm init fastify
```

As a result, we will obtain a series of folders and files that represent the structure of the project. In the structure, we can find two very important folders that are plugins and routes, which, as their names indicate, will agglomerate the plugins and routes of the application. We also have the tests folder (Fastify installs and uses Tap by default) and not least our entry point, the app.js file.

```
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

If you are wondering what data.js is. It is the file that we are going to create next, this file is going to be our database, in which we are going to save the data for this project and it looks like this.

https://carbon.now.sh/?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=cobalt&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=module.exports%2520%253D%2520%255B%250A%2520%2520%257B%250A%2520%2520%2520%2520id%253A%25201%252C%250A%2520%2520%2520%2520task%253A%2520%27clean%2520the%2520room%27%250A%2520%2520%257D%252C%250A%2520%2520%257B%250A%2520%2520%2520%2520id%253A%25202%252C%250A%2520%2520%2520%2520task%253A%2520%2522study%2520the%2520concepts%2520of%2520JavaScript%2522%250A%2520%2520%257D%250A%255D

Now the next step would be to create our first route but before I start with the routes I want to explain how Fastify works and how it handles the *context.*

We are going to move to the main file *app.js,* here we find the following

https://carbon.now.sh/?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=cobalt&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%27use%2520strict%27%250A%250Aconst%2520path%2520%253D%2520require%28%27path%27%29%250Aconst%2520AutoLoad%2520%253D%2520require%28%27fastify-autoload%27%29%250A%250Amodule.exports%2520%253D%2520async%2520function%2520%28fastify%252C%2520opts%29%2520%257B%250A%250A%2520%2520fastify.register%28AutoLoad%252C%2520%257B%250A%2520%2520%2520%2520dir%253A%2520path.join%28__dirname%252C%2520%27plugins%27%29%252C%250A%2520%2520%2520%2520options%253A%2520Object.assign%28%257B%257D%252C%2520opts%29%250A%2520%2520%257D%29%250A%250A%250A%2520%2520fastify.register%28AutoLoad%252C%2520%257B%250A%2520%2520%2520%2520dir%253A%2520path.join%28__dirname%252C%2520%27routes%27%29%252C%250A%2520%2520%2520%2520options%253A%2520Object.assign%28%257B%257D%252C%2520opts%29%250A%2520%2520%257D%29%250A%257D%250A

I'm going to try to break down what we found in the file. First, we are exporting an asynchronous function that receives two parameters, *Fastify* and *opts*, the first is the application instance and the second, as the name implies, are the options that could be passed to it. This configuration is known as a *plugin* in Fastify.

To be more clear and emphatic, to create a plugin you just have to create a function that receives the application instance as the first parameter and the second parameter, the options it can receive, as simple as it sounds, that's a plugin.

> Note: I use async functions but it doesn't really have to be, you can handle it callback-based if that's your preference.

```
module.exports = async function (fastify, opts) {}
```

The second thing we can see is that inside this plugin we are using the Fastify instance to register another plugin, in this case, one called *[fastify-autoload](https://www.npmjs.com/package/fastify-autoload)*, this plugin allows you to load several files/plugins that are grouped in a folder, it receives as a second argument an object with two properties, *dir* and *options,* the first refers to the location ( path ) of the folder that we want to load and the second to the options that we want to pass.

By default, it is loading the files found in the *plugins* and *routes folders.* If you want to have plugins that are active in the global context of the application you must register them at this point.

If you want to read a little more about the subject, I recommend these readings that are found in the official documentation of Fastify. *[Fastify Register](https://www.fastify.io/docs/latest/Reference/Server/#register)* and *[Plugins Guide](https://www.fastify.io/docs/latest/Guides/Plugins-Guide/)*.

Let's start with the good stuff, In the *routes* folder we find a file called *root.js,* in which we are going to import the *data* file that refers to our DB. Within the main plugin, we are going to define the route '/' of type GET, which would be our main route where we will receive the information contained in *data.*

https://carbon.now.sh/?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=cobalt&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%27use%2520strict%27%250Aconst%2520data%2520%253D%2520require%28%27..%252Fdata%27%29%250A%250Amodule.exports%2520%253D%2520async%2520function%2520%28fastify%252C%2520opts%29%2520%257B%250A%2520%2520fastify.get%28%27%252F%27%252C%2520async%2520function%2520%28request%252C%2520reply%29%2520%257B%250A%2520%2520%2520%2520return%2520%257B%2520data%2520%257D%250A%2520%2520%257D%29%250A%257D%250A

As you can see it is very simple, with the instance we define the method of the route, in this case of type GET but it can also be POST, PUT, etc. This function receives two parameters, the first the path, of type string, and the second an asynchronous function that in turn receives two parameters, *request* and *reply.* If you are familiar with ExpressJS, these refer to * objects. req* and *res* with a different and separate API.

If you want to know more about them, I recommend *["Fastify: Request"](https://github.com/fastify/fastify/blob/master/docs/Request.md)* and *["Fastify: Reply"](https://github.com/fastify/fastify/blob/master/docs/Reply.md).*

Inside the same folder you will find another folder with the name *example* and inside a file *index.js.* Fastify takes the name of the folder as the name of the path, that is, if the folder is called *edit, * there will be a route called the same as '/edit'. If you've worked with NextJS, you'll feel right at home (in case you didn't know, NextJS uses Fastify under the hook).

With the above in mind, we are going to rename the folder to suit our purpose. Change the name to *create* and open the file inside it and change the code as follows.

https://carbon.now.sh/?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=cobalt&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%27use%2520strict%27%250Aconst%2520data%2520%253D%2520require%28%27..%252F..%252Fdata%27%29%250A%250A%252F%252F%2520JSON-schema%250A%252F%252F%2520it%2520is%2520use%2520to%2520validate%2520the%2520input%2520of%2520the%2520data%250A%252F%252F%2520in%2520this%2520case%2520the%2520request%27s%2520body%250Aconst%2520schema%2520%253D%2520%257B%250A%2520%2520schema%253A%2520%257B%250A%2520%2520%2520%2520body%253A%2520%257B%250A%2520%2520%2520%2520%2520%2520type%253A%2520%27object%27%252C%250A%2520%2520%2520%2520%2520%2520required%253A%2520%255B%27task%27%255D%252C%250A%2520%2520%2520%2520%2520%2520additionalProperties%253A%2520false%252C%250A%2520%2520%2520%2520%2520%2520properties%253A%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520task%253A%2520%257B%2520type%253A%2520%27string%27%2520%257D%250A%2520%2520%2520%2520%2520%2520%257D%250A%2520%2520%2520%2520%257D%250A%2520%2520%257D%250A%257D%250A%250Amodule.exports%2520%253D%2520async%2520function%2520%28fastify%252C%2520opts%29%2520%257B%250A%2520%2520fastify.post%28%27%252F%27%252C%2520schema%252C%2520async%2520function%2520%28request%252C%2520reply%29%2520%257B%250A%2520%2520%2520%2520%252F%252F%2520Get%2520the%2520body%2520from%2520the%2520request%250A%2520%2520%2520%2520const%2520todo%2520%253D%2520request.body%250A%250A%2520%2520%2520%2520%252F%252F%2520Calculate%2520the%2520unique%2520ID%2520for%2520the%2520todo%250A%2520%2520%2520%2520const%2520id%2520%253D%2520data.length%2520%252B%25201%250A%2520%2520%2520%2520%252F%252F%2520Assign%2520the%2520regenerated%2520ID%2520to%2520the%2520todo%250A%2520%2520%2520%2520todo.id%2520%253D%2520id%250A%2520%2520%2520%2520%252F%252F%2520Add%2520the%2520new%2520todo%2520to%2520the%2520list%2520of%2520todos%250A%2520%2520%2520%2520data.push%28todo%29%250A%250A%2520%2520%2520%2520%252F%252F%2520return%2520the%2520list%2520of%2520todos%2520with%2520the%2520new%2520todo%250A%2520%2520%2520%2520return%2520%257B%2520data%2520%257D%250A%2520%2520%257D%29%250A%257D%250A

Let's break down the code. First, we create a route of type POST, this route has path '/' because the name of the folder defines the name of the route, that is, we will have this route '/create' when we run the project. The second parameter it receives is optional, and it defines the route options. In this case, I am defining the *schema* of the route, specifically its *body.* This is intended to make Fastify perform validations on the data that enters and leaves the route. If you want to know more about this visit [JSON-schema](https://json-schema.org/).

As the third parameter, we pass an asynchronous function that receives two parameters, *request* and *reply,* in the body of the function we are going to place our logic on how the route should handle our request.

I should not explain this because it is very simple but in case someone does not understand it, the explanation is as follows.

From the *request* object we extract the body that contains the information that the user sent. To that data, which in this case is a *todo*, we add the *id* property and then add that *todo* to the list of *todos* and return that updated list to the user.

Things to keep in mind. By default Fastify supports *application/json request*, if you need to handle other formats you can use *fastify-multipart* to support *multipart/formdata request* and *fastify-formbody* to support *application/x-www-form-urlencoded request .*

Now all that remains is to run the project, for this, you can use either of these two commands.

```
npm run start

or

npm run dev
```

I hope you have been able to learn something from this and if you already knew, congratulations! you're well on your way.

Sorry if it was too long but when I thought about writing about this topic I didn't see it so extensive (and that there are many topics here that I haven't touched haha).

I leave you to complete the CRUD of the project, so you reinforce 😜.