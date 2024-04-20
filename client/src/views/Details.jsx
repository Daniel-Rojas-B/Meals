import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getOneStore } from "../services/StoreService";
import { deleteOneStore } from "../services/StoreService";

const Details = () => {

    const [store, setStore] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getOneStore({ _id: id })
            // axios.get(`http://localhost:8000/api//meals/${id}`)
            .then((res) => {
                console.log(res);
                setStore(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return (
        <>
            <div className="navBar">
                <div className="navBarLeft">
                    <h1>{store.storeNumber} Details</h1>
                </div>
                <div>

                    <Link to={"/"} className="link">Go back home</Link>
                    <br />

                </div>
            </div>
            <div className="details">
                <div className="detailsContainer">
                    <h3>{store.name}</h3>
                    <br />
                    <h3>Store Number: {store.storeNumber}</h3>                    
                    <br />
                    <h3>{store.open}</h3>                    
                    <br />
                </div>
                
            </div>
            <div className="navBar">
                <Link to={`/stores/edit/${store._id}`} className="link"><button>Edit Store Details</button></Link>
            </div>
        </>
    )
}

export default Details