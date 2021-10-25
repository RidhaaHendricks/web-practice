import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddItem = () => {

    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemCategory, setItemCategory] = useState('');
    const [itemPrice, setItemPrice] = useState(0);
    const [itemPic, setItemPic] = useState('');
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(false);
    const history = useHistory();

    const handleSubmitAdd = (e) => {
        e.preventDefault();

        const items = { itemName, itemDescription, itemCategory, itemPrice, itemPic };
        setPending(true);

        fetch('http://localhost:4000/apiList/Items', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(items)
        }).then(() => {
            console.log(items);
            history.push('/created-list');
            setPending(false);
            console.log('New Item Added');
        }).catch((err) => {
            if (err.name === "AbortError") {
                console.log(err.name);
                setPending(true);
                setError(true);
            }
        })
        setTimeout(() => {
            setPending(false);
        }, 2000)
    }

    return (
        <div className="add-item">
            <h2 style={{
                paddingBottom: '15px',
                color: '#f1356d'
            }}>Add Item</h2>
            <div className="form">
                <form onSubmit={handleSubmitAdd}>
                    <label>Item Name: </label>
                    <input type="text" autoFocus required value={itemName} onChange={(e) => setItemName(e.target.value)} />
                    <label>Item Description: </label>
                    <input type="text" required value={itemDescription} onChange={(e) => setItemDescription(e.target.value)} />
                    <label>Item Category: </label>
                    <input type="text" required value={itemCategory} onChange={(e) => setItemCategory(e.target.value)} />
                    <label>Item Price: </label>
                    <input type="number" required value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} />
                    <label>Item Photo Url: </label>
                    <input type="text" required value={itemPic} onChange={(e) => setItemPic(e.target.value)} />
                    {!pending && <button>Add Item</button>}
                    {pending && <button disabled>Adding....</button>}
                    {error && <p>Error....</p>}
                </form>
            </div>
        </div>
    );
}

export default AddItem;
