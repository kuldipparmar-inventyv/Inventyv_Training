# Shopping Cart

A reactive Angular application (in Angular 16,18,21 versions) demonstrating component communication through a **Shared Service** and state management for a shopping experience. This project focuses on building a seamless data flow between product selection and cart management. 

### Project Overview

The application is structured into a single parent container that orchestrates two primary child components. All business logic and state are centralized in a dedicated **Cart Service**.

### Data Flow & Components
* **Product-List Component:** Renders product cards and handles "Add to Cart" actions and A dynamic counter reflecting the total items in the cart.
* **Cart Component:** Manages the summary, quantities, and financial calculations.
* **Cart Service:** The "Source of Truth" that maintains the cart state across the entire app.

---

## How to Run
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `ng serve` to start the application.
4. Navigate to `http://localhost:4200/`.