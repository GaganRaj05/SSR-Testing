import { useNavigate } from "react-router-dom";

const About = ()=> {
    const navigate = useNavigate();
    return (
<>
        <h1>About fucking time</h1>
                <button onClick={()=>navigate('/')}>check source tab</button>

</>
    )
}
export default About;