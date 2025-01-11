// import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RouteLayout} from "./components/RouteLayout.tsx";
import {SignInSignUp} from "./pages/SignInSignUp.tsx";
import Dashboard from "./pages/Dashboard.tsx";

function App() {

    const routes = createBrowserRouter([
        {
            path: "/",
            element: <RouteLayout />,
            children: [
                {path: '/', element: <SignInSignUp />},
                {path: '/dashboard', element: <Dashboard />},
            ]
        },
    ])

    return (
        <RouterProvider router={routes}></RouterProvider>
    )
}

export default App;
