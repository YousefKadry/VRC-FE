# VRC

## Installation 🚀

1. **Clone the Repository:**
   ```bash
   git clone https://https://github.com/YousefKadry/VRC-FE
2. **Install Dependencies:**
   ```bash
   npm install
    #or
   yarn install
3. **Run Development Server:**
   ```bash
   npm run dev
    #or
   yarn dev

## Technologies 🛠️

| Technologies                                                                                                      | Description                                                                                        |
| ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [React.js](https://reactjs.org/)                                                                                  | Javascript Library for building user interfaces                                                    |
| [React Hooks](https://reactjs.org/docs/hooks-intro.html)                                                          | Functions that let you use state and lifecycle features in functional components.                  |
| [React Router](https://reactrouter.com/en/main)                                                                   | Declarative routing for React.js applications.                                                     |
| [React Lazy Loading](https://react.dev/reference/react/lazy)                                                      | A technique to load components only when needed, improving performance.                            |
| [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)                                                       | A React renderer for the Javascript Library "three.js"                                             |
| [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)                                                       | A React renderer for the Javascript Library "three.js"                                             |
| [React-Three/drei](https://github.com/pmndrs/drei)                                                                | A growing collection of useful helpers and ready-made abstractions for React Three Fiber           |
| [leva](https://github.com/pmndrs/leva)                                                                            | A React Three Fiber GUI component which allows user interaction with the scene                     |

## Routes 🌐

- **/login**: Displays the login page for users to log in.

- **/sign-up**: Presents the sign-up page for users to create a new account.

- **/dashboard**: Navigate to the user dashboard, showcasing personalized information.

- **/forgot-password**: Allows users to reset their password by providing necessary information.

- **/reset-password**: Functionality: Provides a form for users to set a new password after a password reset.

- **/**: Serves as the main layout for the application.
  - *Nested Routes:*
    - **/dashboard**: Allows user to navigate through different application features.
    - **/rooms**: Displays information and features related to the user's rooms.
    - **/simulation-room/:roomId**: Displays the simulation room creator (including sidebar and controls).
    - **/shared-room/:roomId**: Displays a public simulation room in share mode (user does not have to be the project owner).
