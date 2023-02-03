import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="home-layout">
            <div>
                <h1>Welcome to Windmill Brew.</h1>
                <p>
                Here, you'll find a variety of Rooibos tea blends. So, grab a cup and let the “gezellig” experience begin!”
                </p>
                <p>
                <img width="500" src="https://res.cloudinary.com/dp9jgdu2h/image/upload/v1675430539/tea/cover_adqoea.webp" alt=""/>
                </p>
                
                
                <Link to="/products" className="btn btn-default">
                    Start shopping
                </Link>
            </div>
        </div>
    )
}

export default Home;
