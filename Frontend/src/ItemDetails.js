import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ItemDetails = () => {

    const { _id } = useParams();
    const { data: item, pending } = useFetch("http://localhost:4000/apiList/Lists/" + _id);
    const [itemQuant, setItemQuantity] = useState();
    
    const handleBuy = (e) => {
        e.preventDefault();
    }

    console.log(item);

    return (
        <div className="item-details">
            <h2 style={{
                paddingBottom: '15px',
                color: '#f1356d'
            }}>Item Description</h2>
            {pending && <div>Loading....</div>}
            <div className="items-details-layout">
                <div className="item-picture-layout">
                    {item &&
                        <article>
                            <h3 style={{
                                paddingBottom: '15px',
                                color: '#f1356d',
                                marginTop: '10px'
                            }}>{item.itemName}</h3>
                            <img src={item.itemPic} alt="" />
                            <p>Item Description: {item.itemDescription}</p>
                        </article>}
                </div>
                <div className="item-select">
                    {item &&
                        <article>
                            <form onSubmit={ handleBuy }>
                                <label>Quantity: </label>
                                <select value={parseInt(itemQuant)} onChange={(e) => setItemQuantity(e.target.value)}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                                <p>Item Price {item.itemPrice}</p>
                                <p>Item Total: {item.itemPrice * itemQuant}</p>
                                <button>Buy Now</button>
                            </form>
                        </article>
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetails;