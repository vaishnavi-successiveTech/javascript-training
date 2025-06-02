# javascript-training








the 12 th factor methodology is a set of 12 principles for building web applications.
It was published by the co-founder of "Heroku, Mr. Adam Wiggins, in 2011".

the 12 th factor methodology is applied over any programming languages and which use any combination of backing services:
the backing services are :
1. database 
2. queu cache
3. memory cache 

the following 12 factors are  :

1. Codebase :
 codes per application tracked in different version control system.
 Each application must have only a single codebase.
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

4. Backing Services: Any services our application consumes over the network.

5. build , Release and Run :
we should separate  built and run stages from each other.
first phase-->  compliation of the code which generates jar and war file

second phase--> add the particular environments to the previous stage.

third stage-->running of the instance of the application.



