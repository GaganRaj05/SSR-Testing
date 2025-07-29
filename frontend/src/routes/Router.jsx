import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/about',
        element:<About/>
    }
])


const Router = () => {
    return (
        <RouterProvider router={routes}/>
    )
}
export default Router;