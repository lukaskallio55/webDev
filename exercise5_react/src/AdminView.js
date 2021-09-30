import React, { useState } from 'react'

export default function AdminView(props) {

    const [newItemName, setNewItemName] = useState("");
    const [newItemManufacturer, setNewItemManufacturer] = useState("");
    const [newItemPrice, setNewItemPrice] = useState("");
    const [newItemImage, setNewItemImage] = useState("");

    const addNewItem = () => {
        props.addNewItem(newItemName, newItemManufacturer, newItemPrice, newItemImage);
    }

    const onDeleteItemsClick = (itemId) => {
        console.log("clicked delete for item id " + itemId);
        props.deleteItem(itemId);
    }

    return (
        <div>
            <div>
                <h1>Add new items</h1>
                Add new item
                <div>
                    Manufacturer <input type="text" onChange={ (event) => setNewItemName(event.target.value)} />
                </div>
                <div>
                    Name <input type="text" onChange={ (event) => setNewItemManufacturer(event.target.value) } />
                </div>
                <div>
                    Price <input type="text" onChange={ (event) => setNewItemPrice(event.target.value)} />
                </div>
                <div>
                    Image <input type="text" onChange={ (event) => setNewItemImage(event.target.value)} />
                </div>
                <button onClick={ addNewItem }> Add item </button>
            </div>
            <button onClick={ props.disableAdminMode }> Customer view</button>

            <h1>List of items</h1>
            { props.items.map((item, index) =>
                <div key={index}>
                    <button onClick={() => onDeleteItemsClick(item.id)}>X</button>{item.manufacturer}, {item.name}, {item.price} </div>)}
        </div>
    )
}