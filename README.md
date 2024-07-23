Documentation for Frontend Developer Assignment : -

Project Overview :-
This project is a frontend application developed using React, with the integration of several libraries
including React Router DOM for routing, Redux for state management, Material UI, Ant Design, and
Bootstrap for the UI components, Axios for data fetching.

Technologies Used:-
1. React: Framework for building the user interface.
2. React Router DOM: Library for routing within the React application.
3. Redux: State management library.
4. Material UI (MUI): Component library for UI elements.
5. Ant Design: Additional UI component library.
6. Bootstrap: CSS framework for responsive design.
7. Axios: Data fetch and displayed.

Process Documentation:-
1. Setup and Installation
    o Create App: Initialize the project using Create React App using Vite.
        npm create vite@latest
    o Installed Dependencies:
        npm install react-router-dom redux @material-ui/core @ant-design/icons
        react-bootstrap axios
2. Routing-
    o Implement routing using React Router DOM.
    o Defined routes for /dashboard, /list /list/details, and /notFound
3. State Management-
    o Setup Redux for global state management.
    o Create actions and reducers for managing items and user sessions.
4. UI Components-
    o Use Material UI, Ant Design, and Bootstrap for building responsive and interactive UI
        components.
    o Implement data tables, item details view, and loading effects using these libraries.
5. Session Management-
    o Implement login and logout functionality using cookies.
    o Manage user sessions and secure access to routes based on session state.
6. Data Handling-
    o Fetch data and manage it within the Redux store.
    o Data stored on github raw file in JSON format and fetched using Axios.
    o Implemented logic to handle item selection and display detailed views without unnecessary
        reloads.

How to use the system:-
1. Running the Application-
    o Clone the repository and navigate to the project directory.
    o Install the dependencies:
        npm install
    o Start the development server:
        npm run dev

2. Navigating the Application-
    o Login: Access the login page to authenticate and start a user session.
    o Dashboard: Navigate to /dashboard to view the dashboard after login.
    o List: Navigate to / or /list to view the data table of items.
    o Item Details: Click on an item in the list to view its details on the /list/details route.
    o Not Found: Navigate to any other route or path, Not found page will be displayed

3. Session Management-
    o Login: Enter credentials to login and create a session.
    o Logout: Use the logout button to end the session and secure the application.

4. Data Interaction-
    o View Items: Browse the list of items with brief descriptions.
    o Item Details: Click on an item to view detailed information, stored in session storage to
        prevent unnecessary reloads.

Deployment:-
 Deployed the application on Netlify - https://cyethack-assignment-2024.netlify.app/