# HTTP Interceptors & Auth Flow

An implementation of authentication patterns in Angular. This project demonstrates how to capture a JWT (JSON Web Token) via a login flow and automatically attach it to outgoing API requests using **HTTP Interceptors**.



## Project Overview

Using the **DummyJSON API**, this application simulates a real-world security architecture. It ensures that once a user logs in, every subsequent request is "signed" with an `authToken` without manually editing every service call.

### Key Requirements
* **Authentication:** Login implementation using the `/login` endpoint.
* **Token Storage:** Securing the `accessToken` in local storage.
* **Interception:** A global interceptor that clones outgoing requests to add `Authorization: Bearer <token>` headers.
* **Routing:** Guarded navigation from Login to the Home Dashboard.
* **Data Fetching:** Retrieving protected user profile details to display on the home page.

---

## Version Control Breakdown

This project is implemented in three architectural styles to show how Interceptors have changed:

###  Angular 18 & 21
* Uses the modern **Functional Interceptor** approach.
* Configured within the `provideHttpClient(withInterceptors([...]))` provider.

### Angular 16 
* Uses the traditional **Class-based Interceptor** implementing the `HttpInterceptor` interface.
* Registered in `app.module.ts` using the `HTTP_INTERCEPTORS` multi-provider.
* Classic NgModules configuration.

---


## How to Run
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `ng serve` to start the application.
4. Navigate to `http://localhost:4200/`.