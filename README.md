# Twelve-Factor App  

The *Twelve-Factor Methodology* is a set of 12 principles for building web applications, created by **Adam Wiggins** , co-founder of **Heroku**, in 2011. These principles offer a clear framework to ensure that web applications are scalable, maintainable, and easy to deploy. The goal is to help developers follow best practices that support growth and efficiency in their apps.

These principles work with any programming language and can be used with different services like databases, caches, and message systems. The aim is to build apps that are flexible and can easily work with different tools and technologies.
These principles work with any programming language and can be used with different services like databases, caches, and message systems. The aim is to build apps that are flexible and can easily work with different tools and technologies.

## CodeBase
Every app should have just one set of code, and this code should be stored in a *version control system*  (like Git or SVN). The same code is used for developing, testing, and running the app. The version control system keeps track of all the changes made to the code.

## Dependenices

In the Twelve-Factor methodology, you should clearly declare all the tools (dependencies) your app needs to run. In Node.js, this is done using a package.json file, which lists all the required dependencies. The actual tools are stored in a folder called node_modules. This ensures that your app behaves the same way on any machine or server.

## Config
Store configuration in the environment. The source code and configuration should be kept separate. All configurations, like database credentials or MongoDB URI, should be stored in environment variables. This follows the "Config" principle, ensuring that sensitive information is not hardcoded in the source code.

## Backing Services
Any service that your application consumes over the network is considered a backing service. For example, if you’re using *MongoDB* locally, that’s a service your app relies on. If you want to use *MongoDB Compass* to access and manage the data stored in MongoDB, it’s still a backing service, since it’s providing data over the network. These services can include databases, caches, message queues, etc.

## Build,Release and Run :
We should separate the build and run stages of the application.
- Build Phase:
This is where the code is compiled, and artifacts like JAR or WAR files are generated.

- Release Phase:
In this phase, environment-specific configurations (such as database URLs or API keys) are added to the application build.

- Run Phase:
Finally, the application is started, running as an instance on the server or platform.


## Processes 
Our app should consist of stateless processes. This means the app should not retain any information after completing a task. If the app needs to store data, it should use external services like databases or cloud storage. Developers should ensure that sticky sessions are avoided, meaning user data should not be tied to a specific server. This approach ensures that the app can scale more easily and remain flexible, as any server can handle any request.


## Port Binding 
This means the app should be standalone and independent. It should handle its own requests and not rely on an external server. The app must listen for and process requests on a specific port, making it self-contained. No external server is required for the app to run.

## Concurrency 
Concurrency helps make your app flexible and easily scalable. It allows developers to handle more users or traffic by simply adding more processes. The app is broken down into smaller, independent processes that work separately from each other. This approach helps manage traffic and ensures the app can scale efficiently to meet demand.

## Disposability
This principle makes the app reliable and robust by ensuring that its processes can start quickly and shut down gracefully. For example, if the app crashes unexpectedly during processing, it should be able to restart smoothly from the beginning without causing any interruptions. This ensures minimal downtime and keeps the app running seamlessly.

## Development/ Production parity 
This principle emphasizes keeping the production, staging, and development environments as similar as possible.

- Development: The environment where the code is written and tested by developers.

- Staging: A copy of the production environment, used for testing new features and changes before they go live.

- Production: The live environment where the app is used by real users.


## Logs 
Logs are messages that inform you about what's happening inside the app. The app itself shouldn’t be concerned with where or how these logs are stored. It simply generates log data, and the system should take care of storing and managing them.

## Admin processes
Sometimes, applications need to run special tasks before they start working normally. These tasks are usually not needed often, so people often create scripts to run them separately. However, the twelve-factor methodology suggests that these scripts should be part of the application's codebase and stored in version control (like Git). Additionally, these tasks should follow the same principles as the rest of the application.

![12-factor](https://github.com/user-attachments/assets/d36db2c4-a01b-4844-a3a5-a9ea6a88c27c)

# Atomic Designs
Atomic Design is a methodology for creating user interfaces in a more structured and modular way, aimed at building design systems. It breaks down UI components into smaller, reusable parts.

The 5 Levels of Atomic Design are:

- Atoms: 
The smallest UI elements that can't be broken down further, like buttons, icons, or colors.

- Molecules: Groups of atoms combined to form a functional unit, like a search bar or form field.

- Organisms: More complex UI structures made from multiple molecules, representing larger sections of the interface.

- Templates: Layouts that arrange organisms without real content, defining the page's structure.

- Pages: The final version of a page, where all components come together with real content for the end user.

![atomic designs](https://github.com/user-attachments/assets/f4ace078-3b2d-45cb-bd13-b909fff3c104)





