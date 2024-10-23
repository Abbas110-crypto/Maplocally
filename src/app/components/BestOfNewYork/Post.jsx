"use client"
import React from 'react';
// import { SidebarProvider } from './SidebarContext'; // Commented SidebarProvider for context api
import Sidebar from './Sidebar';
import PostSection from './PostSection';
import { Layout } from 'antd';
import styles from './Post.module.css'
const { Sider, Content } = Layout;

function Post() {

  return (
    // <SidebarProvider> // Commented out SidebarProvider wrapper
      <Layout className={styles.mainSection}>
        <Sider width={300} style={{ padding: '20px', background: '#fff' }}>
          <Sidebar />
        </Sider>
        <Layout className={styles.mainSection} style={{ padding: '20px' }}>
          <Content>
            <PostSection />
          </Content>
        </Layout>
      </Layout>
    // </SidebarProvider> // Commented out closing SidebarProvider tag
  );
}

export default Post;
