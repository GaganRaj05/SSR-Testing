import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();

    return (
        <>
                <h1>Welcome fucking SEO setup</h1>
        <button onClick={()=>navigate('/about')}>check source tab</button>

        </>
    )
}

export default Home;