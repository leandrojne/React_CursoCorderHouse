import Item from "../Item/Item.jsx";

export default function ItemList({ products }) {
    return (
        <div className='items-list'>
            {products.map(item=> <Item key={item.id} item={item} /> )}
        </div>
    )
}
