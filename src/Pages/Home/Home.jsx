import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSum from './BusinessSum';
import Community from './Community';
import Products from './Products';
import WhyUS from './WhyUs';

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Products></Products>
         <BusinessSum></BusinessSum>
         <WhyUS></WhyUS>
         <Community></Community>
         <Footer></Footer>
      </div>
   );
};

export default Home;