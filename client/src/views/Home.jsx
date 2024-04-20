import { useEffect, useState, createContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import AddStore from "./AddStore";
import UpdateStore from "./UpdateStore";
import Details from "./Details";
import { getAllStores, deleteOneStore } from "../services/StoreService";

//context
// const MyContext = createContext();
// export { MyContext };

const Home = () => {

    const deleteStore = () => {
        deleteOneStore({ _id: id })
            .then((res) => {
                console.log(res);
                navigate("/");
            })
    }

   

    const { id } = useParams();

 

    const [stores, setStores] = useState([]);

    useEffect(() => {
        getAllStores()
            .then((res) => {
                console.log(res);
                setStores(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    

    return (
        <>

            {/* <MyContext.Provider value={{ meals, setMeals }}>
                
            </MyContext.Provider > */}

            <div className="navBar">
                <div className="navBarLeft">
                    <h1>Store Finder</h1>

                    <h3 style={{ color: 'grey' }}>Find stores in your area!</h3>

                </div>

            </div>

            <div className="storesTable">

                <table>
                    <thead>
                        <tr>
                            <th>Store</th>
                            <th>Store Number</th>
                            <th>Open</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stores.map((store) => (
                                <tr key={store._id}>

                                    {/* <td>{store.dishName} {store.ingredient1 !== '' && store.ingredient2 !== '' && store.ingredient3 !== '' ? (<img className="custom-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Full_Star_Yellow.svg/64px-Full_Star_Yellow.svg.png" alt="" />) : null}</td> */}
                                    <td>{store.name}</td>
                                    <td>{store.storeNumber}</td>
                                    <td>{store.open}</td>
                                    <td> <button onClick={deleteStore}>Delete</button></td>
                                    {/* <td><Link to={`/meals/${meal._id}/details`} className="link">details</Link>|<Link to={`/meals/${meal._id}/edit`} className="link">edit</Link></td> */}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="navBar">
                <Link to={"/stores/new"} className="link"><button>Can't find your store</button></Link>
            </div>
        </>

    )
}

export default Home