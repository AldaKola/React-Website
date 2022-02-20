import React from 'react';
import './Cards.css';
import CardItem from './CardsItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Let me present my work</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='img/img-1.jpg'
              text='Together we can build amazing things'
              label='Creation'
              path='/'
            />
            <CardItem
              src='img/img-2.jpg'
              text='Design is about creating reality through a simple idea.'
              label='Design'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='img\portfolio-img-1.png'
              text='This is one of my first projects.'
              label='Projects'
              path='/about'
            />
            <CardItem
              src='img/img-3.jpg'
              text='Contact me to get more details.'
              label='Contact'
              path='/contact'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;