import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemList from "./ItemList"
import useFetch from "./useFetch";

const CreatedList = () => {

    const { data: items, pending } = useFetch("http://localhost:4000/apiList/Lists");
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState(0);
    const [itemCate, setItemCate] = useState();



    const handleFilter = (e) => {
        e.preventDefault();

        fetch("http://localhost:4000/apiList/Lists/?name=" + itemName, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
            .then(res => {
                if (!res.ok) {
                    // error coming back from server
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(items => {
                console.log(items);
            })

    }

    return (
        <div className="created-list">
            <h2 style={{
                paddingBottom: '15px',
                color: '#f1356d'
            }}>Item List</h2>
            <div className="created-list-section">
                {items &&
                    <div className="filter">
                        <h3 style={{
                            paddingBottom: '15px',
                            color: '#f1356d',
                            marginTop: '10px'
                        }}>Filter Items</h3>
                        <form onSubmit={handleFilter}>
                            <input type="text" value={itemName} onChange={(e) => setItemName.target.value} placeholder="Enter Item Name" />
                            <input type="text" value={parseInt(itemPrice)} onChange={(e) => setItemPrice.target.value} placeholder="Enter Item Price" />
                            <select value={itemCate} onChange={(e) => setItemCate(e.target.value)}>
                                <option value="Category">Select Category...</option>
                                <option value="Utensils">Utensils</option>
                                <option value="Food">Food</option>
                                <option value="Accessories">Accessories</option>
                            </select>
                            <button>Filter</button>
                        </form>
                        <br />
                        <Link to="/addItem">
                            <h4>Add Item</h4>
                        </Link>
                    </div>}
                <div className="added-items">
                    <h3 style={{
                        paddingBottom: '15px',
                        color: '#f1356d',
                        marginTop: '10px'
                    }}>Items</h3>
                    {pending && <div>Loading... </div>}
                    {items && <ItemList items={items} />}
                </div>
            </div>
        </div>

    );
}

export default CreatedList;