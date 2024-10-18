'use client';
import { Drawer, Dropdown, Space,Button } from 'antd';
import { CloseOutlined, DownOutlined, MenuOutlined } from '@ant-design/icons';
import styles from './Navbar.module.css';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [drawerVisible, setDrawerVisible] = useState(false);

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const onCloseDrawer = () => {
        setDrawerVisible(false);
    };

    const customCloseIcon = (
        <CloseOutlined style={{ fontSize: 24, color: '#000', marginRight: '300px' }} />
    );

    return (
        <nav className={styles.navbar}>
            <div className={styles.left}>
                <Link href="/">
                    <Image
                        src="https://i.ibb.co/HKMR9F8/maplocally.png"
                        alt="Logo"
                        width={125}
                        height={55}
                        className={styles.logo}
                    />
                </Link>
            </div>
            <div className={styles.center}>
                <ul className={styles.navLinks}>
                    <li>
                        <Link href="/help">
                            Help
                        </Link>
                    </li>
                    <li>
                        <Link href="/recently-viewed">
                            Recently Viewed
                        </Link>
                    </li>
                    <li>
                        <Link href="/signup">
                            Signup
                        </Link>
                    </li>
                    <li>
                        <Link href="/login">
                            <Button className={styles.loginbtn}>Login</Button>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.right}>
                <div className={styles.menuIcon} onClick={showDrawer}>
                    <MenuOutlined style={{ fontSize: '150%' }} />
                </div>
            </div>
            <Drawer
                title=""
                placement="right"
                onClose={onCloseDrawer}
                closeIcon={customCloseIcon}
                open={drawerVisible}
                className={styles.drawer}
            >
                <div className={styles.drawerHeader}>
                    <Link href="/">
                    <Image
                        src="https://i.ibb.co/HKMR9F8/maplocally.png"
                        alt="Logo"
                        width={125}
                        height={55}
                        className={styles.logo}
                    />
                    </Link>
                </div>
                <div className={styles.drawerMain}>
                    <ul className={styles.unorderedList}>
                    <li>
                        <Link href="/help">
                            Help
                        </Link>
                    </li>
                    <li>
                        <Link href="/recently-viewed">
                            Recently Viewed
                        </Link>
                    </li>
                    <li>
                        <Link href="/signup">
                            Signup
                        </Link>
                    </li>
                    <li>
                        <Link href="/login">
                            <Button className={styles.loginbtn}>Login</Button>
                        </Link>
                    </li>
                    </ul>
                </div>
            </Drawer>
        </nav>
    );
};

export default Navbar;
