import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import Root from '../pages/Root/Root';

export const router = createBrowserRouter([
    {
        path:'/',
        Component:Root
    }
])

