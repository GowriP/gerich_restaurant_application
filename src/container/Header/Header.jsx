import React from 'react';
import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'> The Key to Fine Dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>Maecenas tincidunt massa id augue volutpat faucibus. Pellentesque eu elit ut arcu dignissim semper. Nullam eleifend felis elit, non euismod nulla dignissim eget. Sed sit amet est vitae ex interdum varius. Etiam at purus eu orci convallis pellentesque.</p>
      <button type="button" className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="Header Image"/>
    </div>
  </div>
);

export default Header;
