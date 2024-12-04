"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import PostSection from "./PostSection";
import { Layout } from "antd";
import styles from "./Post.module.css";

const { Sider, Content } = Layout;

function Post() {
  const [filters, setFilters] = useState({
    category: [],
    date: null,
    people: "",
    priceRange: [0, 2000],
  });

  // Function to update flters
  const handleFiltersChange = (updatedFilters) => {
    setFilters(updatedFilters);
  };

  return (
    <Layout className={styles.mainSection}>
      <Sider width={350} style={{ padding: "20px", background: "#fff" }}>
        {/* Pass the current filters and update function to Sidebar */}
        <Sidebar filters={filters} onFiltersChange={handleFiltersChange} />
      </Sider>
      <Layout className={styles.mainSection} style={{ padding: "20px" }}>
        <Content>
          {/* Pass the filters to PostSection */}
          <PostSection filters={filters} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Post;
