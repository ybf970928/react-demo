import React from 'react';
import {
    GlobalOutlined,
    TaobaoCircleOutlined
} from '@ant-design/icons';
import { Menu, Dropdown, Button} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import { CHANGE_LANGUAGE } from '../../../redux/actions/changeLanguageState'
import styles from './navbar.module.css';
import { RootState } from '../../../redux/store';

export const Navbar:React.FC = () => {
    const language = useSelector((state:RootState) => state.changeLanguage.language)
    const languageList = useSelector((state:RootState)=> state.changeLanguage.languageList)
    const dispatch = useDispatch()
    const handleLanguage = (e:any) => {
      dispatch({
        type: CHANGE_LANGUAGE,
        language: e.key
      })
    }
    const menu = (
        <Menu onClick={handleLanguage}>
          {languageList.map((item) => {
            return(
              <Menu.Item icon={<TaobaoCircleOutlined />} key={`${item.type}`}>
                <span>{item.name}</span>
              </Menu.Item>
            )
          })}
        </Menu>
      );
      
    return (
        <div className={styles['nav-bar']}>
            <div className={styles['language']}>
                <GlobalOutlined style={{color:'#1890ff'}} className={styles['language-icon']}/>
                <Dropdown overlay={menu} trigger={['click']}>
                <Button size="small">{language}</Button>
                </Dropdown>
            </div>
            <div className={styles['login']}>
              <span>您好，请登录</span>
              <span>免费注册</span>
            </div>
        </div>
    )
}
