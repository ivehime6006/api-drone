# api-rest-drone
Drones

Instructions

node.js it is a multiplatform Javascript code execution environment. To verify that you have node.js installed on your system you use this command in the terminal: <node -v>
  
Node package manager (npm) is the official package manager of node.js and is used to install and manage external modules of node.js projects. It keeps track in the package.json file of the project's installed modules, metadata such as author, version, and others, as well as scripts that help automate tasks.
        
See the web site: https://www.npmjs.com/
  
To start a node.js project, use <npm init> in the folder where you want to create it. Once the project is created you will have the file called package.json.
In the package.json file (in the scripts section) is where I modify the file that I am going to execute, in this case (start) and with the command <npm start> I start the server, (dev) with the command <npm run dev> initiate the connection to the database.
  
Development dependecy (-D)
    
nodemon it is a tool that allows you to automatically reset the application if it detects any type of change in your directory. The recommended way to install it is <npm install -g nodemon> but this is a global way so I installed directly in the project, using <npm install nodemon -D> 
        
See the web site: https://www.npmjs.com/package/nodemon
  
Middleware
express is a framework that allows you to create a server that can have different routes. How to install <npm install express>
        
See the web site: https://expressjs.com/es/
  
cors, to allow sharing responses cross-origin and allow for more versatile fetches. It is allows responses to declare they can be shared with other origins. To install it use: <npm install cors>
  
Insomnia is an open-source, cross-platform API Client, API testing tools.It can be installed on Mac, Linux, or Windows systems.
        
Get Insomnia from https://insomnia.rest. 
  
MongoDB is a database. To connect to the database go to the project file mongo.js
        
See the oficial web site: https://cloud.mongodb.com/
  
Mongoose is an elegant mongodb object modeling for node.js. To install use it <npm install mongoose>
  
cross-env makes it so you can have a single command without worrying about setting or using the environment variable properly for the platform. Just set it like you would if it's running on a POSIX system, and cross-env will take care of setting it properly. Installation.
  
Supertest is an HTTP assertions library that allows you to test your Node. js HTTP servers. It is built on top of SuperAgent library, wich is an HTTP client for Node.
  
Jest is a JavaScript Testing Framework with a focus on simplicity.
