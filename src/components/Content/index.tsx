import React from 'react'
import { RouterLink } from './routerLink/index'
import { Banner } from './bannner/index'
import { Layout } from 'antd';
import styles from './Content.module.css'
const Content:React.FC = () => {
    return (
        <Layout.Content className={styles['contentBody']}>
            <RouterLink />
            <Banner />
        </Layout.Content>
    )
}
export default Content