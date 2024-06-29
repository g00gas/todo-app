import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider} from "@chakra-ui/react";
import theme from "./theme/theme.ts";
import {QueryClientProvider} from "@tanstack/react-query";
import queryClient from "./api/queryClient.ts";
import Navbar from "./components/Navbar/Navbar.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage.tsx";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainPage/>
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <Navbar />
                <RouterProvider router={router} />
            </QueryClientProvider>
        </ChakraProvider>
    </React.StrictMode>,
)
