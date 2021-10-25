import { Link } from 'react-router-dom';

const itemList = ({ items }) => {
    
    return (
        <div className="items"  >
            {items.map((item) => (
                <div className="item-preview" key={item.id} >
                    <Link to={`/item-list/${item.id}` }>
                        <h3>{item.itemName}</h3>
                        <img src={item.itemPic} alt="pic" />
                    </Link> 
                </div>
            ))}
        </div>
    );
}

export default itemList;
