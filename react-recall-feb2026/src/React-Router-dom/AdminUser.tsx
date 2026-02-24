import { useParams } from "react-router-dom";

export const AdminUser=()=>{
     const {userId } = useParams();  // we can't get here. it's specific route
    return(
        <> <h4> Admin user - {userId} - no dynamic route </h4> </>
    )
}

export default AdminUser;