
import { useNavigate } from 'react-router-dom';


export const Login =()=>{

const navigate = useNavigate();
    return(
        <>
        Wel come to Login page

        <button onClick={()=> navigate(-1)}> Back to prevoius </button>
        <button onClick={()=> navigate("/")}> Back to home </button>

        <button onClick={()=> navigate('home', {replace: true})}>clear browse history </button>

        </>
    )
};

export default Login;