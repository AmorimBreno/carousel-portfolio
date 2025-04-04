## Getting Started

To get started with this template, clone the repository and install the dependencies:

```bash
git clone https://github.com/Maua-Dev/hexagonal_arch_react_template.git
cd hexagonal_arch_react_template
npm install
```
## Running the Project

To run the project locally, use the following command:

```bash
npm run dev
```

This will start the development server, and you can view the application in your browser at `http://localhost:3000`.

## Folder Structure

```plaintext
src/
|-- application/
|   |-- usecases/
|
|-- domain/
|   |-- entities/
|   |-- interfaces/
|
|-- infrastructure/
|   |-- adapters/
|   |   |-- http/
|   |   |-- repositories/
|   |-- http/
```

- **domain**: Contains the domain entities and value objects representing the core business logic.
- **application**: Houses the application use cases (business logic) that interact with domain entities.
- **infrastructure**: Includes configurations and implementations of external services (e.g., API clients, databases).

## Core Concepts

### Domain

The **domain** layer is the heart of the application. It includes entities and value objects that represent the core business logic. This layer should not depend on any external libraries or frameworks.

### Use Cases

**Use cases** are application-specific business rules. They orchestrate the flow of data to and from the entities and manage the business logic. Use cases do not depend on the user interface or any external service.

### Adapters

Adapters are used to connect the core logic to the external world, such as UI components, APIs, databases, or any other external systems. In this template, we have three primary adapters:

- **HTTP Adapter**: Handles communication with external APIs.
- **Repositories Adapter**: Manages the persistence of domain entities.
- **UI Adapter**: Handles communication with the user interface.

## Testing

The project includes a set of tests to ensure the integrity of the core business logic and the adapters.

To run the tests:

```bash
npm run test
```

## Contributing

If you have any suggestions, improvements, or issues, feel free to open an issue or create a pull request.

## Authors

- [Enzo Sakamoto](https://www.linkedin.com/in/enzosakamoto/)