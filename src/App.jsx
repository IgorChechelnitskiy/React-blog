import "./App.css";
import Home from "./pages/home/Home.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import Settings from "./pages/settings/Settings.jsx";
import Single from "./components/single/Single.jsx";
import Write from "./pages/write/Write.jsx";
import RootLayout from "./pages/Root.jsx";

function App() {
  const user = true;

  const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "login",
        element: !user ? <Home/> : <Login/>
      },
      {
        path: "register",
        element: !user ? <Home/> : <Register/>
      },
      {
        path: "settings",
        element: user ? <Settings/> : <Register/>
      },
      {
        path: "write",
        element: user ? <Write/> : <Register/>
      },
      {
        path: "post/:postId",
        element: <Single/>
      }
    ]
  }

  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
