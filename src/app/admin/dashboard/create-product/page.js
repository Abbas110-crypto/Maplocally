"use client";
import React, { useState } from "react";
import { Form, Input, Button, Upload, Select, Typography, message, DatePicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Sidebar from "../../Sidebar/Sidebar";
import styles from "./product.module.css";
import dayjs from "dayjs"; // For date formatting
import axios from "axios"; // Import axios for making HTTP requests

const { TextArea } = Input;
const { Title } = Typography;

const ProductForm = () => {
  const [form] = Form.useForm();
  const [productImages, setProductImages] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [includes, setIncludes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [tourDate, setTourDate] = useState(null); // State for tour date

  const categories = [
    "Broadway shows",
    "Museums",
    "Restaurants",
    "Bars",
    "Music",
    "Miscellaneous events",
    "Tourist routes",
    "Featured",
  ];

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=8e847b93a52f4c9ee3af71bb7f3462da`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      return data.data.url;
    } catch (error) {
      message.error("Image upload failed.");
      return null;
    }
  };

  const handleImageChange = async ({ fileList }) => {
    const links = await Promise.all(
      fileList.map(async (file) => {
        if (file.originFileObj) {
          const link = await uploadImage(file.originFileObj);
          return { ...file, url: link };
        }
        return file;
      })
    );
    setProductImages(links.filter((file) => file.url));
  };
  const onSubmit = async (values) => {
    // Prepare the form data
    const data = {
      ...values,
      productImages: productImages.map((img) => img.url), // Assuming productImages is an array of image objects with a URL property
      highlights, // Make sure this data is structured correctly
      includes, // Same for includes
      selectedCategory, // Ensure this is selected from the UI
      latitude, // Ensure these are correct values
      longitude,
      tourDate, // Include the selected tour date
    };
   console.log(data)
    try {
      // Send the form data to the backend
      const response = await fetch('http://localhost:3002/api/create-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Send the prepared data as a JSON string
      });
  
      // If the response is not OK, handle the error
      if (!response.ok) {
        const errorData = await response.json(); // Parse the response body
        console.error('Error response from API:', errorData); // Log the full error response
        throw new Error(errorData.message || 'Product creation failed. Please try again.'); // Throw a custom error message
      }
  
      // Parse the successful response
      const responseData = await response.json();
      console.log('Product creation response:', responseData); // Log the successful response
  
      // Check if the response indicates success
      if (responseData.message === 'Product created successfully!') {
        // Show a success message with the product details
        message.success(`Product created successfully! ID: ${responseData.product._id}`);
        console.log('Created product:', responseData.product);
  
        // Optionally reset the form fields
        form.resetFields();
      } else {
        throw new Error('Product creation failed. Please try again.');
      }
    } catch (error) {
      // Catch any error (network, unexpected, or custom error)
      console.error('Error creating product:', error); // Log the error in the console
      message.error(`Error creating product: ${error.message}`); // Display the error message to the user
    }
  };
   
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.formContainer}>
        <Title level={2} className={styles.formTitle}>
          Product Information Form
        </Title>

        <Form
          form={form}
          onFinish={onSubmit}
          layout="vertical"
          className={styles.form}
        >
          {/* Basic Details Section */}
          <div className={styles.formSection}>
            <Title level={3} className={styles.sectionTitle}>
              Basic Product Details
            </Title>
            <Form.Item
              name="productImages"
              label="Product Images"
              className={styles.formItem}
            >
              <Upload
                listType="picture-card"
                fileList={productImages}
                onChange={handleImageChange}
                beforeUpload={() => false}
                maxCount={5}
              >
                {productImages.length < 5 && (
                  <div>
                    <PlusOutlined /> Upload
                  </div>
                )}
              </Upload>
            </Form.Item>
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true }]}
              className={styles.formItem}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="subTitle"
              label="Subtitle"
              className={styles.formItem}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="tags"
              label="Tags (Max 3)"
              className={styles.formItem}
            >
              <Select mode="tags" maxTagCount={3} placeholder="Enter up to 3 tags" />
            </Form.Item>
            <Form.Item
              name="briefDescription"
              label="Brief Description"
              className={styles.formItem}
            >
              <TextArea rows={3} />
            </Form.Item>
            <Form.Item
              name="price"
              label="Price"
              className={styles.formItem}
            >
              <Input type="number" />
            </Form.Item>
          </div>

          {/* Tour Information Section */}
          <div className={styles.formSection}>
            <Title level={3} className={styles.sectionTitle}>
              Tour Information
            </Title>
            <Form.Item
              name="tourDuration"
              label="Duration (e.g., 3-11 hours)"
              className={styles.formItem}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="tourLanguage"
              label="Live Tour Language"
              className={styles.formItem}
            >
              <Input placeholder="e.g., French" />
            </Form.Item>
            <Form.Item
              name="pickupOption"
              label="Pickup Option"
              className={styles.formItem}
            >
              <TextArea rows={2} placeholder="e.g., Pickup included at hotels..." />
            </Form.Item>
            <Form.Item
              name="groupSize"
              label="Small Group Size"
              className={styles.formItem}
            >
              <Input placeholder="e.g., Limited to 14 participants" />
            </Form.Item>

            {/* Date Picker Field for Tour Date */}
            <Form.Item
              name="tourDate"
              label="Tour Date"
              className={styles.formItem}
              rules={[{ required: true, message: "Please select a tour date" }]}>
              <DatePicker
                value={tourDate ? dayjs(tourDate) : null}
                onChange={(date, dateString) => setTourDate(dateString)}
                format="YYYY-MM-DD"
                placeholder="Select tour date"
              />
            </Form.Item>
          </div>

          {/* Highlights and Additional Information Section */}
          <div className={styles.formSection}>
            <Title level={3} className={styles.sectionTitle}>
              Highlights and Additional Information
            </Title>
            <Form.Item label="Highlights" className={styles.formItem}>
              <Select
                mode="tags"
                placeholder="Add highlights"
                value={highlights}
                onChange={setHighlights}
              />
            </Form.Item>
            <Form.Item name="fullDescription" label="Full Description" className={styles.formItem}>
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item label="Inclusions" className={styles.formItem}>
              <Select
                mode="tags"
                placeholder="Add inclusions"
                value={includes}
                onChange={setIncludes}
              />
            </Form.Item>
            <Form.Item
              name="meetingPoint"
              label="Meeting Point"
              className={styles.formItem}
            >
              <Input placeholder="Enter one-line description" />
            </Form.Item>
            <Form.Item label="Latitude" className={styles.formItem}>
              <Input
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                placeholder="Enter latitude"
              />
            </Form.Item>
            <Form.Item label="Longitude" className={styles.formItem}>
              <Input
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                placeholder="Enter longitude"
              />
            </Form.Item>
            <Form.Item label="Category" className={styles.formItem}>
              {categories.map((category) => (
                <Button
                  key={category}
                  type={selectedCategory === category ? "primary" : "default"}
                  onClick={() => setSelectedCategory(category)}
                  className={`${styles.addButton} ${
                    selectedCategory === category ? styles.primaryButton : ""
                  }`}
                  style={{ margin: "4px" }}
                >
                  {category}
                </Button>
              ))}
            </Form.Item>
          </div>

          <div className={styles.buttonGroup}>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.secondaryButton}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ProductForm;
