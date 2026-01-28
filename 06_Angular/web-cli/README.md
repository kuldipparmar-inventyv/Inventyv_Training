# WebCLI - Angular Terminal Simulator

## Project Description
A lightweight Angular web application that mimics a Command Line Interface (CLI), allowing users to type and execute mocked commands like `ng generate` and `ng build` directly in the browser.

## Features
- **Terminal Simulation**: Realistic shell interface with a prompt and input area.
- **Mocked Angular CLI**: Supports commands like `ng help`, `ng version`, `ng build`, and `ng generate`.
- **Auto-Scroll**: Automatically scrolls to the bottom of the terminal on new input.

## Key Learnings
Building this project provided experience in the following areas:
- **Angular Control Flow**: Utilizing modern syntax like `@if` and `@for` for cleaner template rendering.
- **DOM Manipulation**: Using `@ViewChild` and `ElementRef` to programmatically control scroll position and input focus.

## How to Run
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `ng serve` to start the application.
4. Navigate to `http://localhost:4200/`.