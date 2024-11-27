"use client";
import React, { useState } from "react";
import {
  Select,
  InputNumber,
  Slider,
} from "antd";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "antd/dist/reset.css";
import "./Sidebar.css";

const { Option } = Select;

const Sidebar = () => {
  const [filters, setFilters] = useState({
    category: [],
    date: null,
    people: 1,
    price: 1000,
  });

  const handleCategoryChange = (value) => {
    console.log("Categories selected:", value);
    setFilters({ ...filters, category: value });
  };

  const handleDateChange = (date) => {
    console.log("Date changed:", date);
    setFilters({ ...filters, date });
  };

  const handlePeopleChange = (value) => {
    console.log("People count changed:", value);
    setFilters({ ...filters, people: value });
  };

  const handlePriceChange = (value) => {
    console.log("Price changed:", value);
    setFilters({ ...filters, price: value });
  };

  const handleSliderChange = (value) => {
    setFilters({ ...filters, price: value });
  };

  const options = [
    { value: "neighborhoods", label: "Neighborhoods" },
    { value: "broadway", label: "Broadway Shows" },
    { value: "museum", label: "Museums" },
    { value: "restaurants", label: "Restaurants" },
    { value: "bars", label: "Bars" },
    { value: "music", label: "Music" },
    { value: "miscellaneous", label: "Miscellaneous" },
    { value: "tourist_routes", label: "Tourist Routes" },
  ];

  const renderOption = (option) => {
    const isChecked = filters.category.includes(option.value);
    return (
      <label className="categoryoption">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            const newCategories = isChecked
              ? filters.category.filter((cat) => cat !== option.value)
              : [...filters.category, option.value];
            handleCategoryChange(newCategories);
          }}
        />
        {option.label}
      </label>
    );
  };


  return (
    <div className="sidebar">
      <h3>Category</h3>
      <Select
        mode="multiple"
        value={filters.category}
        style={{ width: "100%" }}
        onChange={handleCategoryChange}
        placeholder="Select Categories"
        className="customselect"
        dropdownRender={(menu) => (
          <div>
            {options.map((option) => (
              <div
                className="categoryoption"
                key={option.value}
                onClick={() => {
                  const newCategories = filters.category.includes(
                    option.value
                  )
                    ? filters.category.filter((cat) => cat !== option.value)
                    : [...filters.category, option.value];
                  handleCategoryChange(newCategories);
                }}
                style={{ padding: "4px 12px", textAlign: "left" }} // Align and add padding
              >
                {renderOption(option)}
              </div>
            ))}
          </div>
        )}
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value} style={{ display: "none" }}>
            {renderOption(option)}
          </Option>
        ))}
      </Select>

      <h3>When are you going?</h3>
      <DatePicker
        selected={filters.date}
        onChange={(date) => handleDateChange(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select Date"
        className="custom-datepicker"
      />

      <h3>How many people</h3>
      <InputNumber min={1} value={filters.people} onChange={handlePeopleChange} />

      <h3>Price</h3>
      <InputNumber
        min={100}
        max={2000}
        value={filters.price}
        onChange={handlePriceChange}
        style={{ width: "100%", marginTop: 10 }}
      />
      <Slider min={100} max={2000} value={filters.price} onChange={handleSliderChange} />
    </div>
  );
};

export default Sidebar;
