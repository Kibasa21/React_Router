import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {

    const navigate = useNavigate(); //Isso é bom quando você quer navegar de forma programada, por exemplo, algum tempo expirou ou algo do tipo.

    function navigateHandler() {
        navigate('products');
    }

    return (
        <>
            <h1>My Home Page</h1>
            <p>Go to <Link to="products">the list of products</Link>.</p>
            <p>
                <button onClick={navigateHandler}>Navigate</button>
            </p>
        </>
    );
}