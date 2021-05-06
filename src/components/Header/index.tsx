import React from 'react'
import { Layout } from 'antd';
import { Navbar } from './navBar/index'
import { SearchTag } from './searchTag/index'
import styles from './header.module.css'

const Header:React.FC = () => {
    return (
        <Layout.Header className={styles['headerMain']}>
            <Navbar />
            <SearchTag />
        </Layout.Header>
    )
}
export default Header