<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">NestJS Dynamic Provider Retrieval Example.</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## NestJS Dynamic Provider Retrieval Example

This repository demonstrates an advanced feature of NestJS: dynamically retrieving instances of providers within the same module. It showcases how to use the ModuleRef class to access providers (ProviderA and ProviderB) dynamically within another provider (ProviderC) in a NestJS module. This example is particularly useful for scenarios where the dependencies of a provider are not statically known at compile time or can change based on runtime conditions.

## Features

- Custom Decorators: Utilizes custom decorators to enhance providers with additional metadata or behavior, showcasing how to leverage NestJS's powerful decorator-based extension capabilities.
- Dynamic Provider Retrieval: Implements the dynamic retrieval of ProviderA and ProviderB within ProviderC using the ModuleRef class, allowing for flexible and loose coupling between providers.
- Practical Use Case: Provides a practical example of using ProviderC to access and utilize functionality from ProviderA and ProviderB, demonstrating a real-world use case of dynamic dependency resolution in a modular NestJS application.

## Implementation Highlights

- ProviderA and ProviderB: Two services enhanced with a custom decorator, representing modular components of an application that might be needed dynamically based on runtime conditions.
- ProviderC: A service that dynamically retrieves instances of ProviderA and ProviderB using ModuleRef, showcasing the ability to interact with different parts of the application flexibly.
- Custom Decorator: A simple custom decorator applied to ProviderA and ProviderB to demonstrate how metadata can be attached to providers for identification, behavior alteration, or other purposes.

## Usage Scenario
This example is ideal for developers looking to understand or implement dynamic dependency injection in NestJS, where services need to be retrieved and used based on conditions that are not known until runtime. It's also useful for applications that require a high degree of modularity and flexibility in their architecture.

## Getting Started

To explore this example, clone the repository, install dependencies, and run the application using the standard NestJS development commands. The main focus is on the services located in the provider-a.service.ts, provider-b.service.ts, and provider-c.service.ts files, along with the custom decorator definition in custom-decorator.ts.

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
