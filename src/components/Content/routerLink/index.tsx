import React, { ReactElement } from 'react'
import {
    BrowserRouter as Router, withRouter, RouteComponentProps
  } from "react-router-dom";
import styles from './routerLink.module.css'

interface PropsType extends RouteComponentProps {}
const RouterLinkComponent:React.FC<PropsType> = ({ history}):ReactElement => {
    const routerList = [
        {name: '首页', path: '/Home'}, 
        {name: '酒店', path: '/Hotel'}, 
        {name: '旅游', path: '/Travel'}, 
        {name: '跟团游', path: '/TourGroup'}, 
        {name: '自由行', path: '/FreeTravel'}
    ]
    return (
        <Router>
            <div className={styles['router-link']}>
                <div className={styles.links}>
                    {routerList.map((ele, index) => {
                        return (
                                <div className={styles['link-item']} key={`${ele.name}${index}`}
                                onClick={() => history.push(`${ele.path}/${Math.random()* 99}`)}
                                >
                                    {ele.name}
                                </div>
                        )
                    })}
                </div>
            </div>
        </Router>
    )
}
export const RouterLink = withRouter(RouterLinkComponent)