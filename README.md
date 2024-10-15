
# To-Do List App

A simple, fully responsive **To-Do List App** built with **React** and **Tailwind CSS**. The app allows users to add, complete, delete tasks, and store them locally with timestamps. It is designed with a clean and modern interface, suitable for daily task management.

## Features
- **Add Tasks**: Create new tasks with an automatically generated timestamp.
- **Mark as Done**: Mark tasks as complete or undo the completion.
- **Delete Tasks**: Remove tasks from the list.
- **Task Numbering**: Each task is automatically numbered.
- **Date & Time**: Each task shows the date and time it was added.
- **Total Tasks**: Displays the total number of tasks.
- **Local Storage**: All tasks are saved in local storage, so they persist across page reloads.
- **Responsive Design**: The app is fully responsive and works on all screen sizes.
- **Modern UI**: Designed with a clean and attractive UI using Tailwind CSS.

## Preview
![To-Do List App](path_to_your_image)

## Installation and Setup

### Prerequisites

To run this project, you need to have the following installed:

- **Node.js** (v14 or later)
- **npm** (comes with Node.js)

### Clone the Repository

\`\`\`bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
\`\`\`

### Install Dependencies

Run the following command to install all required dependencies:

\`\`\`bash
npm install
\`\`\`

### Start the Development Server

To run the app in development mode, use:

\`\`\`bash
npm start
\`\`\`

This will open the app at [http://localhost:3000](http://localhost:3000) in your browser.

### Build the Project

To create a production-ready build of the app, use:

\`\`\`bash
npm run build
\`\`\`

This will generate an optimized build in the `build` folder.

## How to Use

1. **Add a Task**: Enter the task description in the input field and click the "Add" button.
2. **Mark as Done**: Click the "Done" button to mark a task as completed. The task will have a strikethrough effect.
3. **Delete Task**: Click the "Delete" button to remove a task from the list.
4. **Task Number**: Each task will be numbered in the order it was added.
5. **Date and Time**: Each task will display the date and time when it was added.
6. **Total Tasks**: The total number of tasks is displayed at the top.

## Folder Structure

Here's an overview of the main folders and files in this project:

\`\`\`
todo-app/
│
├── public/
│   └── index.html            # The HTML template
│
├── src/
│   ├── Components/
│   │   ├── TodoForm.js       # Component to handle task input form
│   │   ├── TodoList.js       # Component to list tasks
│   │   ├── TodoItem.js       # Individual task component
│   ├── App.js                # Main application component
│   ├── index.css             # Tailwind CSS styles
│   ├── index.js              # Entry point of the application
│
├── package.json              # Project configuration and dependencies
└── README.md                 # Documentation (this file)
\`\`\`

## Dependencies

This project uses the following key dependencies:

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **LocalStorage**: Used to persist tasks across page reloads.

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request with your changes.

1. Fork the project
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add YourFeature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
