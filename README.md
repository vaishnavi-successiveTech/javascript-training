
The 12 th factor methodology is a set of 12 principles for building web applications.
It was published by the co-founder of "Heroku, Mr. Adam Wiggins, in 2011".

the 12 th factor methodology is applied over any programming languages and which use any combination of backing services:
the backing services are :
1. database 
2. queu cache
3. memory cache 

the following 12 factors are  :

1. Codebase :
 codes per application tracked in different version control system.
 Each application must have only a single codebase ( single code for testing , deployment and development ).
 codebase- human written source codes 
 version control example -git,svn.

2. Dependenices:
 explicitly declare and isolate dependenices. 
In the 12-Factor methodology, you must clearly declare the tools (dependencies) your app needs to run. 
In Node.js, this is done using a package.json file, which lists all the required tools and dependenices whichever is required., while the actual tools themselves are stored in a folder called node_modules. This makes sure that your app behaves the same way on any machine or server.

3.Config:
Store config in the environment.
the source code and configurations should be different from each other .  
we must store all the configurations like db credentials, mongodb Uri in the environment variables. Should follow Config Principle.

4.Backing Services: Any services our application consumes over the network.

5.build , Release and Run :
we should separate  built and run stages from each other.
first phase-->  compliation of the code which generates jar and war file

second phase--> add the particular environments to the previous stage.

third stage-->running of the instance of the application.

Processes: we want our app should be stateless processes.
our  app should not remember things after it has completed a task . 
if the app needs to store the information it should be stored using database or cloud services.
In this the developer should be known that in app , sticky sessions should not be created , where user's data tied to one specific server.


Port Binding: this means a app should be standalone or independent . 
It has to handle its request on its own .Our app should not used any externbal server to run. It has to listen and handling requests directly on a specific port.
It's self-contained, and you don’t need an external server for it to run.

Concurrency :  It helps to make your app flexible and easily scalable , , allowing the developer to handle more users or traffic by simply adding more proceesses..
break the app in smaller processes which work independently to each other 
(basically to handle traffic over the app.)

Disposability: this principle makes our app reliable and robust by ensuring that its processes can start quickly and shut down gracefully.
for example :  sometimes app just crashed automaticaaly during some proccessing  but if it start gracefully from the beginning withourt any interruptions.


10. Development/ production parity 
Keeps production and development staging as same  to each other.
development -> the environment where  we write the codes. 
staging -> a copy of the production environment , used for testing things.
Production--> live project 
to fix bugs and issue basically both are same.



11. Logs 
logs are messages that tell you what 's is happening inside our app.
our app shouldn't worry about where or how logs are stored. 

12. Admin processes
run admin / management tasks as on -off processes.
Manage special tasks directly within the app at time to time .







