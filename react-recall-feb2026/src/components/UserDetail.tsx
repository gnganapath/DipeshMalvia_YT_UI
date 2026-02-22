
import { useParams } from "react-router-dom";


export const UserDetail=()=>{
 //const params = useParams();  const userID = params.userId   // make to show {userID}

 const {userId } = useParams();  // call the direct destructure to get url value i.e use params
    return(
        <> <h4> UserDetail user - {userId} </h4> 
                
        </>
    )
}

export default UserDetail;