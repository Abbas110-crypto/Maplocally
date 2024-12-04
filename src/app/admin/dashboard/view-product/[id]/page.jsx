"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewProduct = ({ params }) => {
  const [product, setProduct] = useState(null);
  const { id } = params; // Access the dynamic route parameter

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`http://localhost:3002/api/get-product/${id}`);
          console.log(response.data); // Log product details
          setProduct(response.data); // Set the product data in the state
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <p><strong>Title:</strong> {product.title}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Product ID:</strong> {product._id}</p>
      <p><strong>Created At:</strong> {product.date}</p>
      <div>
        <img
          src={product.productImages?.[0] || "/placeholder.png"}
          alt={product.title}
          style={{ width: "200px", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default ViewProduct;
