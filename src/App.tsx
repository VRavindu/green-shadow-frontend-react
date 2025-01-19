// import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RouteLayout} from "./components/RouteLayout.tsx";
import {SignInSignUp} from "./pages/SignInSignUp.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import {FieldPage} from "./pages/FieldPage.tsx";
import {StaffPage} from "./pages/StaffPage.tsx";
import {VehiclePage} from "./pages/VehiclePage.tsx";
import {EquipmentPage} from "./pages/EquipmentPage.tsx";
import {CropPage} from "./pages/CropPage.tsx";
import {CropDetailsPage} from "./pages/CropDetailsPage.tsx";

function App() {

    const routes = createBrowserRouter([
        {
            path: "/",
            element: <RouteLayout />,
            children: [
                {path: '/', element: <SignInSignUp />},
                {path: '/dashboard', element: <Dashboard />},
                {path: '/field', element: <FieldPage/>},
                {path: '/staff', element: <StaffPage/>},
                {path: '/vehicle', element: <VehiclePage/>},
                {path: '/equipment', element: <EquipmentPage/>},
                {path: '/crop', element: <CropPage/>},
                {path: '/cropdetails', element: <CropDetailsPage/>},

            ]
        },
    ])

    return (
        <RouterProvider router={routes}></RouterProvider>
    )
}

export default App;
