import { Link,Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>
            
            <ul>
                <li><Link to="/">Home Page</Link></li>
                <li> <Link to="/about">About Page</Link></li>
                <li> <Link to="/contact">Contact Page</Link></li>
                <li> <Link to="/products">Products Page</Link></li>
            </ul>
            
           <Outlet/>

           <h1>This is Footer</h1>
        </div>
    );
}

export default Layout;
