# User Profile Card 

A comprehensive training task designed to master core Angular concepts across different evolution cycles of the framework (v16, v18, and v21). This project demonstrates data binding, component communication, lifecycle hooks, and View Queries , Angular Material.

##  Project Overview

The goal is to build a dynamic **User Profile Card** that showcases the transition from traditional Angular patterns to modern Signal-based reactivity.

### Key Requirements
* **Data Binding:** Interpolation, Property Binding, Two-way binding (`[(ngModel)]`), and Event Binding.
* **Styling:** Dynamic Class Binding for status-based UI changes.
* **Communication:** Parent-to-Child via `@Input()` and Child-to-Parent via `@Output()`.
* **View Queries:** DOM and Component interaction using `@ViewChild` and `@ViewChildren`.
* **Material Design:** Integration of `MatCard`, `MatInput`, and `MatButton`.

---

## Different Versions

This assignment is implemented in three distinct Angular versions to demonstrate the evolution of the framework:

### 1. Angular 21
* Signals & Standalone Components.
* Uses `signal` for state management.
* Modern control flow (`@if`, `@for`).

### 2. Angular 18
* Standalone architecture without Signals.
* Traditional Zone.js-based change detection.

### 3. Angular 16
* Module-based configuration (`app.module.ts`).
* Classic structural directives (`*ngIf`, `*ngFor`).
* Standard `@Input`/`@Output` decorators.

---

## How to Run
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `ng serve` to start the application.
4. Navigate to `http://localhost:4200/`.