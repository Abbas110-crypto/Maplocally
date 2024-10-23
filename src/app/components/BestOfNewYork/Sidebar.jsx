"use client";
import React, { useState } from 'react';
import { Select, DatePicker, InputNumber, Slider } from 'antd';
import 'antd/dist/reset.css';
import './Sidebar.css';

const { Option } = Select;

const Sidebar = () => {
  const [filters, setFilters] = useState({
    category: [],
    date: null,
    people: 1,
    price: 1000, // Use a single value for the price
  });

  const handleCategoryChange = (value) => {
    console.log('Categories selected:', value);
    setFilters({ ...filters, category: value });
  };

  const handleDateChange = (date, dateString) => {
    console.log('Date changed:', dateString);
    setFilters({ ...filters, date });
  };

  const handlePeopleChange = (value) => {
    console.log('People count changed:', value);
    setFilters({ ...filters, people: value });
  };

  const handlePriceChange = (value) => {
    console.log('Price changed:', value);
    setFilters({ ...filters, price: value });
  };

  const handleSliderChange = (value) => {
    setFilters({ ...filters, price: value });
  };

  return (
    <div className="sidebar">
      <h3>Category</h3>
      <Select
        mode="multiple" // Allows multiple selection
        value={filters.category}
        style={{ width: '100%' }}
        onChange={handleCategoryChange}
        placeholder="Select Categories"
        optionLabelProp="label" // Displays the label in the input
      >
        <Option value="neighborhoods" label="Neighborhoods">
          Neighborhoods
        </Option>
        <Option value="broadway" label="Broadway Shows">
          Broadway Shows
        </Option>
        <Option value="museum" label="Museums">
          Museums
        </Option>
        <Option value="Restaurants" label="Restaurants">
          Restaurants
        </Option>
        <Option value="Bars" label="Bars">
          Bars
        </Option>
        <Option value="Music" label="Musics">
          Music
        </Option>
        <Option value="Miscellaneou" label="Miscellaneous">
          Miscellaneous
        </Option>
        <Option value="Tourist routes" label="Tourist routes">
          Tourist routes
        </Option>
      </Select>

      <h3>When are you going?</h3>
      <DatePicker style={{ width: '100%' }} onChange={handleDateChange} />

      <h3>How many people</h3>
      <InputNumber min={1} value={filters.people} onChange={handlePeopleChange} />

      <h3>Price</h3>
      <InputNumber 
        min={100} 
        max={2000} 
        value={filters.price} 
        onChange={handlePriceChange} 
        style={{ width: '100%', marginTop: 10 }} 
      />
      <Slider
        min={100}
        max={2000}
        value={filters.price}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default Sidebar;
