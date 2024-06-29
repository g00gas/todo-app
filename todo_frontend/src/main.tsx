import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider} from "@chakra-ui/react";
import theme from "./theme/theme.ts";
import {QueryClientProvider} from "@tanstack/react-query";
import queryClient from "./api/queryClient.ts";
import Navbar from "./components/Navbar/Navbar.tsx";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage.tsx";
import AboutPage from "./components/AboutPage/AboutPage.tsx";

function NavbarWrapper(){
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
};
const router = createBrowserRouter([
    {
        path:"/",
        element: <NavbarWrapper/>,
        children:[
            {
                path:"/",
                element:<MainPage/>
            },
            {
                path:"/about",
                element:<AboutPage/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </ChakraProvider>
    </React.StrictMode>,
)
