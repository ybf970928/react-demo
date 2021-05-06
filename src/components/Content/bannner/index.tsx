import React, { ReactElement } from 'react'
import { Carousel } from 'antd';

export const Banner: React.FC = ():ReactElement => {
    const contentStyle: React.CSSProperties = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
      function onChange(currentSlide: number) {
        console.log(currentSlide);
      }
    return (
        <Carousel afterChange={onChange}>
            <div>
            <h3 style={contentStyle}>1</h3>
            </div>
            <div>
            <h3 style={contentStyle}>2</h3>
            </div>
            <div>
            <h3 style={contentStyle}>3</h3>
            </div>
            <div>
            <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    )
}