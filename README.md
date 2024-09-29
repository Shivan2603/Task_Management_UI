# Task Management UI

This is the frontend application for the Task Management App, built using Angular and Bootstrap. It provides a user interface to interact with the backend API and manage tasks.

## Features

*   **Task List:** Displays a list of tasks, allowing users to view, edit, and delete tasks.
*   **Task Form:** Provides a form to create new tasks and edit existing ones.
*   **Bootstrap Styling:** Uses Bootstrap for a responsive and visually appealing design.
*   **State Management:** Manages the state of tasks using a service.
*   **Routing:** Implements routing to navigate between the task list and the task form.

## Prerequisites

*   Node.js and npm
*   Angular CLI (`npm install -g @angular/cli`)

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone 
    cd your-frontend-repo
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the application:**

    ```bash
    ng serve -o
    ```

    This will start the development server, and you can access the application in your browser at `http://localhost:4200/`.

## Configuration

*   **API URL:** Update the `apiUrl` in `src/environments/environment.ts` to point to your backend API's URL.
