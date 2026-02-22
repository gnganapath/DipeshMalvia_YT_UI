

import {  Outlet, useSearchParams } from 'react-router-dom';


export const Users =()=>{
const [searchParams, setSearchParams] = useSearchParams();
const showActiveUser = searchParams.get('filter') === 'active'
    return(
        <div>
            <h4> User 1 </h4>
            <h4> User 2</h4>
            <h4> User 3 </h4>

            <Outlet />
            <div>
                <button onClick={()=>setSearchParams({ filter :'active' }) }>Active user</button>
                <button onClick={()=>setSearchParams({}) }>reset filter</button>

                {showActiveUser && <h3> List of active users </h3> }
            </div>
        </div>
    )
}

export default Users;