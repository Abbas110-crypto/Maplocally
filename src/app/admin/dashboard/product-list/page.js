"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../../Sidebar/Sidebar';
import styles from './ProductList.module.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Mock data for demonstration; replace this with data from your API or database
    setProducts([
      {
        id: 1,
        name: 'Dog Food',
        productId: '#7712309',
        price: '$1,452.50',
        createdAt: '2024-11-09',
        category: 'Pet Supplies',
        imageUrl: 'https://i.ibb.co/Vt1k2NN/Group-1000003420.png',
      },
      {
        id: 2,
        name: 'Cat Food',
        productId: '#7712310',
        price: '$1,299.99',
        createdAt: '2024-11-08',
        category: 'Pet Supplies',
        imageUrl: 'https://i.ibb.co/Vt1k2NN/Group-1000003420.png',
      },
      // Add more products here
    ]);
  }, []);

  const handleAddNew = () => {
    router.push('/admin/dashboard/create-product');
  };

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.mainLayout}>
      <Sidebar />
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Product List</h1>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          <button className={styles.addNewBtn} onClick={handleAddNew}>Add New</button>
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.productTable}>
            <thead>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeader}>Product</th>
                <th className={styles.tableHeader}>Category</th>
                <th className={styles.tableHeader}>Product ID</th>
                <th className={styles.tableHeader}>Price</th>
                <th className={styles.tableHeader}>Created At</th>
                <th className={styles.tableHeader}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr className={styles.tableRow} key={product.id}>
                  <td className={styles.tableCell}>
                    <div className={styles.productInfo}>
                      <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
                      <span>{product.name}</span>
                    </div>
                  </td>
                  <td className={styles.tableCell}>{product.category}</td>
                  <td className={styles.tableCell}>{product.productId}</td>
                  <td className={styles.tableCell}>{product.price}</td>
                  <td className={styles.tableCell}>{product.createdAt}</td>
                  <td className={styles.tableCell}>
                    <div className={styles.actionBtns}>
                      <button className={styles.viewBtn}>View</button>
                      <button className={styles.editBtn}>Edit</button>
                      <button className={styles.deleteBtn}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
