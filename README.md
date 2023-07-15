# Description

This is a shop api using clean architecture and it is properly documented with swagger.

In a Clean Architecture design pattern, the folders "domain", "infrastructure", and "usecases" represent different layers of the application, each with its own responsibilities. 

Domain: The "domain" folder contains the core business logic and domain models of the application. It represents the heart of the system and defines the entities, value objects, and business rules. This layer should be independent of any external frameworks or technologies and focus solely on the business domain.

Infrastructure: The "infrastructure" folder houses the implementation details and external dependencies of the application. It includes code related to databases, external APIs, file systems, and other infrastructure-related concerns. This layer acts as an interface between the domain layer and the external world, providing data access and integration capabilities.

Usecases: The "usecases" folder contains the application-specific use cases or application services. It represents the application's high-level actions or operations that can be performed. This layer orchestrates the interactions between the domain and infrastructure layers to execute the use cases defined by the application.


#  Running in Development

1. Clone the repository.
2. Run the following command:
 ```yarn install```
3. Start the database:

```
docker-compose up -d

```
4. Clone the .env.template file and rename the copy to .env.
5. Fill in the environment variables defined in the .env file.`
6. Run the application in development mode:
 ```yarn start:dev```

#Stack USed
1. PostgresDb
2. Nest 
3. Docker 