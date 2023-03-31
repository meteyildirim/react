import React from "react";
import images from "./image.json";
import "./gallery.scss"

const Gallery = () => {
  return (
    <div className="gallery">
      {images.map((img, i) => (
        <div key={i}>
            {console.log(img.name)}

            <a href={require(`../../assets/img/${img.name}`)} target="_blank"><img src={require(`../../assets/img/${img.name}`)} alt="" width={150}/></a>
          
        </div>
      ))}
    </div>
  );
};

export default Gallery;
