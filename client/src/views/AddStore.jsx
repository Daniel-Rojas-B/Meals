import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { addOneStore } from "../services/StoreService";

const AddStore = (props) => {

    // const [dishName, setDishName] = useState("");
    // const [totalMinutes, setTotalMinutes] = useState();
    // const [directions, setDirections] = useState("");
    // const [ingredient1, setIngredient1] = useState("");
    // const [ingredient2, setIngredient2] = useState("");
    // const [ingredient3, setIngredient3] = useState("");

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});


    const [storeState, setStoreState] = useState({
        name: "",
        storeNumber: 0,
        open: false,

    });

    // const dishNameHandler = (e) => {
    //     setDishName(e.target.value);
    // }
    // const totalMinutesHandler = (e) => {
    //     setTotalMinutes(e.target.value);
    // }
    // const directionsHandler = (e) => {
    //     setDirections(e.target.value);
    // }
    // const ingredient1Handler = (e) => {
    //     setIngredient1(e.target.value);
    // }
    // const ingredient2Handler = (e) => {
    //     setIngredient2(e.target.value);
    // }
    // const ingredient3Handler = (e) => {
    //     setIngredient3(e.target.value);
    // }

    const handleChange = (e) => {

        setStoreState((prevState) => ({
            ...storeState,
            [e.target.name]: e.target.value
        }));
    }

    const submitHandler = (e) => {
        e.preventDefault();

        // setMealState({
        //     dishName: "",
        //     totalMinutes: 0,
        //     directions: "",
        //     ingredient1: "",
        //     ingredient2: "",
        //     ingredient3: "",
        // })
        addOneStore(storeState)
            // axios.post('http://localhost:8000/api/meals', mealState)
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate("/stores/:id");
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
                    <h1>New Store</h1>

                    <h3 style={{ color: 'grey' }}>Add a store!</h3>
                </div>
                <div>

                    <Link to={"/"} className="link">Go back home</Link>
                </div>
            </div>
            <div className="addStore">
                <div className="leftContainer">
                    <form onSubmit={submitHandler} className="form">
                        <label className="label" htmlFor="name">Store Name</label>
                        <br />
                        <input style={{ borderColor: errors.name ? 'red' : '' }} name="name" className="input" type="text" id="name" value={storeState.name} onChange={handleChange} />
                        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                        <br />
                        <label className="label" htmlFor="storeNumber">Store Number</label>
                        <br />
                        <input style={{ borderColor: errors.storeNumber ? 'red' : '' }} name="storeNumber" className="input" type="number" id="storeNumber" value={storeState.storeNumber} onChange={handleChange} />
                        {errors.storeNumber && <p style={{ color: 'red' }}>{errors.storeNumber.message}</p>}
                        <br />
                        <label className="label" htmlFor="open">Open?</label>
                        <input className="input" type="checkbox" id="open" checked={storeState.open} onChange={handleChange} />
                        <br />
                        <br />
                        <input type="submit" className="navButton" value="Add a new Store" />
                    </form>
                </div>
                
            </div>
        </>
    )
}

export default AddStore