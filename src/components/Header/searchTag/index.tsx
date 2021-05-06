import React from 'react'
import { Input } from 'antd';

const { Search } = Input;

export const SearchTag:React.FC = () => {
    const onSearch = (value: any) => console.log(value);
    return (
            <div style={{width: '400px'}}>
                <Search placeholder="请输入目的地" onSearch={onSearch} enterButton />
            </div>
    )
}