import Layout from "./Layout";
import MyComponent from "../Example/MyComponent";
import Home from "./Home";
import ListToDo from "../Todos/ListToDo";
import { Route,BrowserRouter,Routes } from "react-router-dom";
import './Router.scss';

const RouteTest = () => {
    return(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>} >
                    <Route path="/test" element={<MyComponent/>} />
                    <Route path="/todo" element={<ListToDo/>} />
                    <Route index element={<Home/>} exact={true}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
    )
}

export default RouteTest; 