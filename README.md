# Product

The product is a simple pokemon data table with pagination that displays most of pokemons with their appropriate attributes (name, type, attack, defense..). In addition to the ability of search bu name and power thershold.

Screenshots

# Technologies:

React, Scss, Axios, npm, Vite, Json-Sever, concurrently, Material UI.

Backend API
No backend, just local data handled by Json-Server.

# Folder Structure

```
│ ─── .github # CI/CD workflow
│ ─── public
│ ├─── pokemon.json # local pokemon data
│ ├─── vite.svg # Placeholder
│ ───src # Main application folder
│ ├───assets # Application assets: Pictures, Icons.
│ ├───components # UI Components used
│ │ ├─── DataTable # element for rendering data as a table
│ │ │ └── DataTable.jsx # DataTable component
│ │ │ └── DataTable.scss # DataTable stylesheeet
│ │ ├─── SummarySectio # element for pagination creeated with MUI
│ │ │ └── SummarySection.jsx # Pagination component
│ │ ├───SearchBar # element for rendering search input
│ │ │ └── SearchBar.jsx # SearchBar component
│ │ │ └── SearchBar.scss # SearchBar stylesheeet
│ ├───hooks
│ │ ├───useField.js # hook for facillitating the control of input elements
│ │ ├───useDebounce.js # hook for debouncing search for better optimization
│ ├───services # Data manipulation
│ ├───pages
│ │ ├─── PokemonTable # View for pokemon table
│ │ │ └── PokemonTable.jsx # PokemonTable component
│ │ │ └── PokemonTable.scss # PokemonTable stylesheeet
│ └─── index.js # file for facillitationg imports
│ ├───services
│ │ ├─── pokemon.json # Pokemon data fetching and manipulation
│ ├───styles
│ │ ├─── _base.scss # CSS reset file
│ │ ├─── _variable.scss # CSS variables
│ │ ├─── index.scss # common css classes
│ ├───utils
│ │ ├─── helper.js # Useful manipulation functions
│ ├───app.jsx # App component
│ ├───index.scss # Application stylesheet
│ │───main.jsx #React starting point
│ ─── .eslintrc.cjs # ESlint configuration
│ ─── .gitignore # git ignore file
│ ───index.html # Entry point of application
│ ───package.json # npm dependencies and run scripts
│ ───Readme.md # Documentation
│ ─── vite.config.js # Vite configuration
```

# Remarks

1. The project is supported with a simple deployment pipline. you can find the project in github pages at this link [https://fadibenz.github.io/Legal-Doctrine-Frontend/]
2. I used a debounce function on the search to limit filtering times, the search might seem slow but it's intended.
3. the search is by 'name' and the power is calccultated by summing all attributes of the pokemon.
