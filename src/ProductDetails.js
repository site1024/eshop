import {NavLink,useParams,Outlet} from "react-router-dom"
import {useState,useEffect} from "react";
import useFetch from "./useFetch";

const ProductDetails = () =>{

    const params = useParams();
    const {get} = useFetch("https://eshopdemo12-default-rtdb.firebaseio.com/")

    const [product,setProduct]=useState([]);

    useEffect(()=>{
      get(`productinfo/id${params.id}.json`)
      .then(data=>setProduct(data))
      .catch(error=>console.log(error))
    },[])

    const {name,image} = product

    const getClassName = (props) =>{
      console.log(props.isActive)
      if (props.isActive){
        return "tab-active"
      }
    }

    return (<>
      <div className="product-details-layout">
      <div>
        <h2>{name}</h2>
        <img width="300" className="product-details-image" alt={name} src={image}
        />
      </div>
      <div>
      <div className="tabs">
          <ul>
            <li>
              <NavLink className={getClassName} to="info">Details</NavLink>
            </li>
            <li>
              <NavLink className={getClassName} to="prep">Preparation</NavLink>
            </li>
            <li>
              <NavLink className={getClassName} to="taste">Tasting Notes</NavLink>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </div>
    
    </>
)
}

export default ProductDetails;