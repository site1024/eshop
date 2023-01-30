import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="home-layout">
            <div>
                <h1>Easy shop, easy order.</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?

                </p>
                <Link to="/products" className="btn btn-default">
                    Start shopping
                </Link>
            </div>
        </div>
    )
}

export default Home;
