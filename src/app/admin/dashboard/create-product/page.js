"use client";
import React, { useState } from 'react';
import { Form, Input, Button, Upload, Select, Steps, Typography, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Sidebar from '../../Sidebar/Sidebar';
import styles from './product.module.css';

const { TextArea } = Input;
const { Option } = Select;
const { Title } = Typography;

const ProductForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();

  const [productImages, setProductImages] = useState([]);
  const [highlights, setHighlights] = useState(['']);
  const [includes, setIncludes] = useState(['']);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const categories = [
    'Broadway shows', 'Museums', 'Restaurants', 'Bars', 
    'Music', 'Miscellaneous events', 'Tourist routes', 'Featured'
  ];

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    try {
      const response = await fetch(`https://api.imgbb.com/1/upload?key=8e847b93a52f4c9ee3af71bb7f3462da`, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      return data.data.url;
    } catch (error) {
      message.error("Image upload failed.");
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
    setProductImages(links);
  };

  const onSubmit = (values) => {
    console.log('Submitted Data:', { 
      ...values, 
      productImages: productImages.map(img => img.url), 
      highlights, 
      includes, 
      selectedCategory, 
      latitude, 
      longitude 
    });
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.formContainer}>
        <Title level={2} className={styles.formTitle}>Product Information Form</Title>

        <Steps current={currentStep} className={styles.formSteps}>
          <Steps.Step title="Basic Details" />
          <Steps.Step title="Tour Details" />
          <Steps.Step title="Additional Information" />
        </Steps>

        <Form form={form} onFinish={onSubmit} layout="vertical" className={styles.form}>
          {currentStep === 0 && (
            <div className={styles.formSection}>
              <Title level={3} className={styles.sectionTitle}>Basic Product Details</Title>
              <Form.Item name="productImages" label="Product Images" className={styles.formItem}>
                <Upload
                  listType="picture-card"
                  fileList={productImages}
                  onChange={handleImageChange}
                  beforeUpload={() => false}
                  maxCount={5}
                >
                  {productImages.length < 5 && <div><PlusOutlined /> Upload</div>}
                </Upload>
              </Form.Item>
              <Form.Item name="title" label="Title" rules={[{ required: true }]} className={styles.formItem}>
                <Input />
              </Form.Item>
              <Form.Item name="subTitle" label="Subtitle" className={styles.formItem}>
                <Input />
              </Form.Item>
              <Form.Item name="tags" label="Tags (Max 3)" className={styles.formItem}>
                <Select mode="tags" maxTagCount={3} placeholder="Enter up to 3 tags" />
              </Form.Item>
              <Form.Item name="shortDescription" label="Short Description" className={styles.formItem}>
                <TextArea rows={3} />
              </Form.Item>
              <Form.Item name="price" label="Price" className={styles.formItem}>
                <Input type="number" />
              </Form.Item>
              <div className={styles.buttonGroup}>
                <Button type="primary" onClick={nextStep} className={styles.secondaryButton}>Next</Button>
              </div>
            </div>
          )}
          {currentStep === 1 && (
            <div className={styles.formSection}>
              <Title level={3} className={styles.sectionTitle}>Tour Details</Title>
              <Form.Item name="placeBrief" label="Place Brief" className={styles.formItem}>
                <TextArea rows={3} />
              </Form.Item>
              {[...Array(4)].map((_, idx) => (
                <Form.Item key={idx} name={`tourInfo${idx}`} label={`Tour Info ${idx + 1}`} className={styles.formItem}>
                  <Select>
                    <Option value="Option1">Option 1</Option>
                    <Option value="Option2">Option 2</Option>
                  </Select>
                </Form.Item>
              ))}
              <div className={styles.buttonGroup}>
                <Button onClick={prevStep} className={styles.primaryButton}>Previous</Button>
                <Button type="primary" onClick={nextStep} className={styles.secondaryButton}>Next</Button>
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div className={styles.formSection}>
              <Title level={3} className={styles.sectionTitle}>Highlights and Additional Information</Title>
              <Form.Item label="Highlights" className={styles.formItem}>
                {highlights.map((_, idx) => (
                  <Input
                    key={idx}
                    placeholder="Enter highlight"
                    value={highlights[idx]}
                    onChange={e => {
                      const newHighlights = [...highlights];
                      newHighlights[idx] = e.target.value;
                      setHighlights(newHighlights);
                    }}
                    style={{ marginBottom: '8px' }}
                  />
                ))}
                {highlights.length < 5 && (
                  <Button onClick={() => setHighlights([...highlights, ''])} className={styles.addButton}>Add New</Button>
                )}
              </Form.Item>
              <Form.Item name="fullDescription" label="Full Description" className={styles.formItem}>
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item label="Inclusions" className={styles.formItem}>
                {includes.map((_, idx) => (
                  <Input
                    key={idx}
                    placeholder="Enter inclusion"
                    value={includes[idx]}
                    onChange={e => {
                      const newIncludes = [...includes];
                      newIncludes[idx] = e.target.value;
                      setIncludes(newIncludes);
                    }}
                    prefix={<PlusOutlined />}
                    style={{ marginBottom: '8px' }}
                  />
                ))}
                {includes.length < 5 && (
                  <Button onClick={() => setIncludes([...includes, ''])} className={styles.addButton}>Add New</Button>
                )}
              </Form.Item>
              <Form.Item name="meetingPoint" label="Meeting Point" className={styles.formItem}>
                <Input placeholder="Enter one-line description" />
              </Form.Item>
              <Form.Item label="Latitude" className={styles.formItem}>
                <Input value={latitude} onChange={e => setLatitude(e.target.value)} placeholder="Enter latitude" />
              </Form.Item>
              <Form.Item label="Longitude" className={styles.formItem}>
                <Input value={longitude} onChange={e => setLongitude(e.target.value)} placeholder="Enter longitude" />
              </Form.Item>
              <Form.Item label="Category" className={styles.formItem}>
                {categories.map(category => (
                  <Button
                    key={category}
                    type={selectedCategory === category ? 'primary' : 'default'}
                    onClick={() => setSelectedCategory(category)}
                    className={`${styles.addButton} ${selectedCategory === category ? styles.primaryButton : ''}`}
                    style={{ margin: '4px' }}
                  >
                    {category}
                  </Button>
                ))}
              </Form.Item>
              <div className={styles.buttonGroup}>
                <Button onClick={prevStep} className={styles.primaryButton}>Previous</Button>
                <Button type="primary" htmlType="submit" className={styles.secondaryButton}>Submit</Button>
              </div>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
};

export default ProductForm;
