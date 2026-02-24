
import { Link, Outlet } from 'react-router-dom';



export  const ProductsFeatures =()=>{
    return(
        <> <h6> product features are descibed </h6> </>
    )
}

export  const ProductsDetails =()=>{
    return(
        <> <h6> Detail of the product listed </h6> </>
    )
}

export const Products =()=>{

    return(
        <>
            <div>
               Search product : <input type="search" />
            </div>
            <nav>
                <Link to="feature" > Features </Link>
                <Link to="details" > Details </Link>

                {/*<Link to="/product/feature" > Features </Link>     /// relative paths
                <Link to="/product/details" > Details </Link>*/}

                {/*<Link to="/details" > Details </Link    // localhost:3000/details go to the absolute path*/}
            </nav>
            <Outlet />
        </>
    )
}
export default Products;
