# Product
The product is a todo management app that is used by our employees to write down their todos on a daily basis. They can enter todos and mark them as done.

Screenshots

# Technologies: 
React, Scss, Axios, npm, Vite.


Backend API
There is no backend since the tasks are on a daily basis.

# Folder Structure

│ ───package.json # npm dependencies and run scripts
│ ───Readme.md # Documentation
│ ───index.html # Entry point of application
│ ───app # Main application folder
│ ├───app.scss # Application stylesheet
│ ├───app.tsx # App component
│ │───index.tsx #React starting point
│ ├───routes.tsx # Router for views
│ ├───components # UI Components used
│ │ ├───todoButton # Markable todo list element
│ │ │ └───…
│ ├───config #Application configuration files
│ ├───modules
│ │ ├───listTodos # View for todo list for today
│ │ ├───createTodo # View for todo creation
│ ├───services # Data manipulation
│ └───shared # Models, reducers and util
│ │ ├───model
│ │ ├───reducers
│ │ └───util
│ ├───content # Static assets like images and fonts
│ ├───cypress # Cypress tests
│ ├───doc # Documentation data
│ ├───i18n # Internationalization
│ ├───node_modules # Dependencies
