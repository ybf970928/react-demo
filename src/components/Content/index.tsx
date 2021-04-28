import React from 'react'
import { Layout } from 'antd';
import styles from './Content.module.css'
export const Content:React.FC = () => {
    return (
        <Layout.Content className={styles['contentBody']}>
            content
        </Layout.Content>
    )
}
