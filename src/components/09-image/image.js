import React from "react";
import car from '../../assets/img/car.jpg';

const Image = () => {
  return (
    <div>
      {/* Staik yontemde imageler public klasorununun icersinde aranir */}
      <img src="assets/img/car.jpg" alt="image is missing" width="300" />

      {/*Extarnal image*/}
      <img
        src="https://cars.usnews.com/static/images/Auto/izmo/i159615234/2023_acura_integra_angularfront.jpg"
        alt="image is missing"
        width="300"
      />

    {/*import ve require yonteminde dosyalar src icerisinde olmali*/}
    <img src={car} alt="" width="300" />

    {/*Require yontemi , hic import yapmadan */}
    <img src={require('../../assets/img/car.jpg')} alt="" width="300" />

    {/*Hangisini ne zaman kullanmiyiz...*
    require backend gelen image var ve biz ismini bilmiyoruz.. o zaman kullaniriz veya json dan gelirse/}
    {/**/}





    </div>
  );
};

export default Image;
