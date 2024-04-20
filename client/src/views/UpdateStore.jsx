import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { updateOneStore } from "../services/StoreService";
import { getOneStore } from "../services/StoreService";
const UpdateStore = () => {

    const [name, setName] = useState("");
    const [storeNumber, setStoreNumber] = useState(1);
    const [open, setOpen] = useState(false);
    

    const [errors, setErrors] = useState({});
    const [store, setStore] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        getOneStore({_id:id})
        // axios.get(`http://localhost:8000/api//meals/${id}`)
            .then((res) => {
                console.log(res.data);
                setName(res.name);
                setStoreNumber(res.storeNumber);
                setOpen(res.open);
               
                setStore(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id])


    const nameHandler = (e) => {
        setName(e.target.value);
    }
    const storeNumberHandler = (e) => {
        setStoreNumber(e.target.value);
    }
    const openHandler = (e) => {
        setOpen(e.target.value);
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        updateOneStore({_id:id,name,storeNumber,open})
        
        // axios.put(`http://localhost:8000/api//meals/${id}`, {
        //     dishName,
        //     totalMinutes,
        //     directions,
        //     ingredient1,
        //     ingredient2,
        //     ingredient3
        // })
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => {
                console.log(err);
                setErrors(err.response.data.errors);
            })
    }
    return (
        <>
            <div className="navBar">
                <div className="navBarLeft">
                    <h1>Update Store {store.storeNumber}</h1>
                    <h3 style={{ color: 'grey' }} >Edit this store!</h3>

                </div>
                <div>
                    <Link to={"/"} className="link">Go back home</Link>
                    <br />
                    <br />
                    
                </div>
            </div>
            <div className="addStore">
                <div className="leftContainer">
                    <form onSubmit={submitHandler} className="form">
                        <label className="label" htmlFor="name">Store Name</label>
                        <br />
                        <input className="input" type="text" id="name" value={name} onChange={nameHandler} />
                        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                        <br />
                        <label className="label" htmlFor="storeNumber">Store Number</label>
                        <br />
                        <input className="input" type="number" id="storeNumber" value={storeNumber} onChange={storeNumberHandlerHandler} />
                        {errors.storeNumber && <p style={{ color: 'red' }}>{errors.storeNumber.message}</p>}
                        <br />
                        <label className="label" htmlFor="open">Open</label>
                        <br />
                        <input className="input" type="checkbox" id="open" checked={open} onChange={openHandler} />
                        {errors.open && <p style={{ color: 'red' }}>{errors.open.message}</p>}
                        <br />
                        <br />
                        <input type="submit" className="navButton" value="Edit Store" />
                    </form>
                </div>
               
            </div>
        </>
    )
}

export default UpdateStore