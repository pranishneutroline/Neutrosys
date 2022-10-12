import React from 'react'

function OurPartnersDetails({ourPartnersDetail}) {
    const {name, address, description, img} = ourPartnersDetail;
  return (
        <div className="item">
            <div className="shadow-effect">
                <img className="img-circle" src={img} alt="review of the clients"/>
                <p>{description}</p>
            </div>
            <div className="testimonial-name">
                <h5>{name}</h5>
                <small>{address}</small>
            </div>
        </div>
  )
}

export default OurPartnersDetails