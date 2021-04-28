import {
    AliwangwangOutlined, GlobalOutlined,
    TaobaoCircleOutlined
} from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import React from 'react';
import styles from './navbar.module.css';

export const Navbar:React.FC = () => {
    const menu = (
        <Menu>
          <Menu.Item icon={<TaobaoCircleOutlined />}>
            <span>中文</span>
          </Menu.Item>
          <Menu.Item icon={<AliwangwangOutlined />}>
            <span>英文</span>
          </Menu.Item>
        </Menu>
      );
    return (
        <div className={styles['nav-bar']}>
            <div className={styles['language']}>
                <GlobalOutlined style={{color:'#1890ff'}} className={styles['language-icon']}/>
                <Dropdown overlay={menu} trigger={['click']}>
                <span className={styles['language-text']}
                onClick={e => e.preventDefault()}>Language</span>
                </Dropdown>
            </div>
            <div className={styles['login']}>
              <span>您好，请登录</span>
              <span>免费注册</span>
            </div>
        </div>
    )
}