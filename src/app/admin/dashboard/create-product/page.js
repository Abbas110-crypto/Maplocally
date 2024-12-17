"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Form, Input, Button, message, Select, Space } from "antd";
import axios from "axios";
import dayjs from "dayjs";

const { TextArea } = Input;
const { Option } = Select;


const ProductForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [form] = Form.useForm();
  const [productId, setProductId] = useState(null); // Product ID from the route params
  const [productImages, setProductImages] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [includes, setIncludes] = useState([]);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [tourDate, setTourDate] = useState(null);

  useEffect(() => {
    const id = searchParams.get("id"); // Use `useSearchParams` to access query params in Next.js app directory
    if (id) {
      setProductId(id);
      fetchProductDetails(id);
    }
  }, [searchParams]);

  const fetchProductDetails = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3002/api/get-product/${id}`);
      const product = response.data.data;

      form.setFieldsValue({
        title: product.title || "",
        subTitle: product.subTitle || "",
        tags: product.tags.join(", ") || "",
        briefDescription: product.briefDescription || "",
        price: product.price || "",
        tourDuration: product.tourDuration || "",
        tourLanguage: product.tourLanguage || "",
        pickupOption: product.pickupOption || "",
        groupSize: product.groupSize || "",
        fullDescription: product.fullDescription || "",
        meetingPoint: product.meetingPoint || "",
      });

      setProductImages(product.productImages || []);
      setHighlights(product.highlights || []);
      setIncludes(product.includes || []);
      setSelectedCategory(product.category || "");
      setLatitude(product.latitude || "");
      setLongitude(product.longitude || "");
      setTourDate(product.tourDate ? dayjs(product.tourDate) : null);

      console.log("Fetched product details:", product);
    } catch (error) {
      console.error("Error fetching product details:", error);
      message.error("Failed to fetch product details.");
    }
  };

  const handleSubmit = async (values) => {
    try {
      if (productId) {
        // Update product
        await axios.put(`http://localhost:3002/api/update-product/${productId}`, {
          ...values,
          productImages,
          highlights,
          includes,
          latitude,
          longitude,
          category: selectedCategory,
          tourDate,
        });
        message.success("Product updated successfully!");
      } else {
        // Create product
        await axios.post(`http://localhost:3002/api/create-product`, {
          ...values,
          productImages,
          highlights,
          includes,
          latitude,
          longitude,
          category: selectedCategory,
          tourDate,
        });
        message.success("Product created successfully!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Failed to submit form.");
    }
  };

  return (
    <div>
      <h1>{productId ? "Edit Product" : "Create Product"}</h1>
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        {/* Basic Information */}
        <Form.Item label="Title" name="title" rules={[{ required: true, message: "Please enter the title" }]}>
          <Input placeholder="Enter product title" />
        </Form.Item>
        <Form.Item label="Subtitle" name="subTitle">
          <Input placeholder="Enter product subtitle" />
        </Form.Item>
        <Form.Item label="Tags (comma-separated)" name="tags">
          <Input placeholder="Enter tags (e.g., Broadway, entertainment)" />
        </Form.Item>
        <Form.Item label="Brief Description" name="briefDescription">
          <TextArea rows={4} placeholder="Enter brief description" />
        </Form.Item>
        <Form.Item label="Full Description" name="fullDescription">
          <TextArea rows={6} placeholder="Enter full description" />
        </Form.Item>
        <Form.Item label="Price" name="price" rules={[{ required: true, message: "Please enter the price" }]}>
          <Input type="number" placeholder="Enter price" />
        </Form.Item>

        {/* Highlights */}
        <Form.Item label="Highlights">
          <Space>
            <Input
              placeholder="Add highlight"
              onPressEnter={(e) => {
                addToList(setHighlights, e.target.value);
                e.target.value = "";
              }}
            />
            <Button onClick={() => setHighlights([])}>Clear</Button>
          </Space>
          <ul>
            {highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Form.Item>

        {/* Includes */}
        <Form.Item label="Includes">
          <Space>
            <Input
              placeholder="Add include"
              onPressEnter={(e) => {
                addToList(setIncludes, e.target.value);
                e.target.value = "";
              }}
            />
            <Button onClick={() => setIncludes([])}>Clear</Button>
          </Space>
          <ul>
            {includes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Form.Item>

        {/* Other Fields */}
        <Form.Item label="Tour Duration" name="tourDuration">
          <Input placeholder="Enter tour duration" />
        </Form.Item>
        <Form.Item label="Tour Language" name="tourLanguage">
          <Input placeholder="Enter tour language" />
        </Form.Item>
        <Form.Item label="Pickup Option" name="pickupOption">
          <Input placeholder="Enter pickup option" />
        </Form.Item>
        <Form.Item label="Group Size" name="groupSize">
          <Input placeholder="Enter group size" />
        </Form.Item>
        <Form.Item label="Meeting Point" name="meetingPoint">
          <Input placeholder="Enter meeting point" />
        </Form.Item>
        <Form.Item label="Latitude">
          <Input placeholder="Enter latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
        </Form.Item>
        <Form.Item label="Longitude">
          <Input placeholder="Enter longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
        </Form.Item>
        <Form.Item label="Category">
          <Select
            value={selectedCategory}
            onChange={(value) => setSelectedCategory(value)}
            placeholder="Select category"
          >
            <Option value="broadway">Broadway</Option>
            <Option value="concert">Concert</Option>
            <Option value="museum">Museum</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Tour Date">
          <Input
            type="date"
            value={tourDate ? tourDate.format("YYYY-MM-DD") : ""}
            onChange={(e) => setTourDate(dayjs(e.target.value))}
          />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          {productId ? "Update Product" : "Create Product"}
        </Button>
      </Form>
    </div>);
};

export default ProductForm;
