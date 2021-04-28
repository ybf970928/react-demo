import React from 'react'
import { Layout } from 'antd';
import styles from './header.module.css'
import { Navbar } from './navBar/index'

export const Header:React.FC = () => {
    return (
        <Layout.Header className={styles['headerMain']}>
            <Navbar />
        </Layout.Header>
    )
}
