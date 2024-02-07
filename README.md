# Virtual Room Creator (VRC)
## About The Project

<img width="500" height="280" alt="Screenshot 2024-02-07 at 3 39 43 PM" src="https://github.com/YousefKadry/VRC-FE/assets/115303359/2ad1312c-6a42-4300-aa5f-1068c8cc80bf">

<img width="500" height="280" alt="Screenshot 2024-02-07 at 3 33 16 PM" src="https://github.com/YousefKadry/VRC-FE/assets/115303359/706044b6-2b2d-4cb6-958f-e57ba271c7ef">

Our Virtual Room Creator (VRC) is an innovative tool revolutionizing VR environment design with its user-friendly drag-and-drop interface.
1. Construct fully customizable VR spaces without any coding or design experience
2. Choose from pre-made assets like 360-ready-made environments and 3D-models - anything you need to build your vision
3. Watch your creations come to life in real-time 3D rendering as you design
   
With the virtual space creator, you have the tools to design intricate VR worlds, whether for personal enjoyment, creative projects, or commercial applications.

In just minutes, you can place virtual trees, customize a dream home, or set up an otherworldly alien landscape. The simple controls allow you to focus on bringing your ideas to virtual reality, not wrestling with complex software.

Your custom VR spaces can be experienced on any VR-ready device, letting you walk through your own designs. Don't just imagine your perfect virtual retreat - construct it yourself without limits using the virtual space creator.


## Technologies 🛠️

| Technologies                                                 | Description                                                                              |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| [React.js](https://reactjs.org/)                             | Javascript Library for building user interfaces                                          |
| [React Hooks](https://reactjs.org/docs/hooks-intro.html)     | Functions that let you use state and lifecycle features in functional components.        |
| [React Router](https://reactrouter.com/en/main)              | Declarative routing for React.js applications.                                           |
| [React Lazy Loading](https://react.dev/reference/react/lazy) | A technique to load components only when needed, improving performance.                  |
| [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)  | A React renderer for the Javascript Library "three.js"                                   |
| [React-Three/drei](https://github.com/pmndrs/drei)           | A growing collection of useful helpers and ready-made abstractions for React Three Fiber |
| [leva](https://github.com/pmndrs/leva)                       | A React Three Fiber GUI component which allows user interaction with the scene           |

## Deployment

You can try a fully functional version of the application [here](https://vrc-pe8g.onrender.com/)

## Installation 🚀

1. **Clone the Repository:**
    ```bash
    git clone https://https://github.com/YousefKadry/VRC-FE
    ```
2. **Install Dependencies:**
    ```bash
    npm install
     #or
    yarn install
    ```
3. **Run Development Server:**
    ```bash
    npm run dev
     #or
    yarn dev
    ```

## Routes 🌐

-   **/login**: Displays the login page for users to log in.

-   **/sign-up**: Presents the sign-up page for users to create a new account.

-   **/dashboard**: Navigate to the user dashboard, showcasing personalized information.

-   **/forgot-password**: Allows users to reset their password by providing necessary information.

-   **/reset-password**: Functionality: Provides a form for users to set a new password after a password reset.

-   **/**: Serves as the main layout for the application.
    -   _Nested Routes:_
        -   **/rooms**: Displays information and features related to the user's rooms.
        -   **/simulation-room/:roomId**: Displays the simulation room creator (including sidebar and controls).
        -   **/shared-room/:roomId**: Displays a public simulation room in share mode (user does not have to be the project owner).
