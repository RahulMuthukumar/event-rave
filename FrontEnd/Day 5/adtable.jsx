// adtable.js

import React, { useState } from 'react';
import '../assets/adtable.css';

export default function Adtable() {
  const [data, setData] = useState([
    { id: 1, theme: 'Unicorn', price: 'Rs 12,000/-' },
    { id: 2, theme: 'Sports', price: 'Rs 8,000/-' },
    { id: 3, theme: 'Star', price: 'Rs 10,000/-' },
  ]);

  const [formData, setFormData] = useState({ theme: '', price: '' });
  const [editingId, setEditingId] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddItem = () => {
    setData([
      ...data,
      {
        id: data.length + 1,
        theme: formData.theme,
        price: formData.price,
      },
    ]);
    setFormData({ theme: '', price: '' });
  };

  const handleEditItem = (id) => {
    const itemToEdit = data.find((item) => item.id === id);
    setFormData({ theme: itemToEdit.theme, price: itemToEdit.price });
    setEditingId(id);
  };

  const handleUpdateItem = () => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === editingId
          ? { ...item, theme: formData.theme, price: formData.price }
          : item
      )
    );
    setFormData({ theme: '', price: '' });
    setEditingId(null);
  };

  const handleDeleteItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className='outer'>
        <div className="adtable-container">
          <h2>Theme Table</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Theme</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.theme}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => handleEditItem(item.id)}>Edit</button>
                    <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div>
            <h2>{editingId ? 'Edit Item' : 'Add Item'}</h2>
            <label htmlFor="theme">Theme:</label>
            <input
              type="text"
              id="theme"
              name="theme"
              value={formData.theme}
              onChange={handleInputChange}
            />

            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />

            {editingId ? (
              <button onClick={handleUpdateItem}>Update Theme</button>
            ) : (
              <button onClick={handleAddItem}>Add Theme</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
