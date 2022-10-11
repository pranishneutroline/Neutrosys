import React from "react";

function ServiceItemProps({image}) {
  return (
    <div className="services_item">
      {/* <img src="" alt="" /> */}
      <img src={image} alt="services of the company" width="200px" />
      <h2>Mobile App Development</h2>
      <p>
        Developing and maintaining smooth cross platform mobile application and
        providing end to end testing.
      </p>
    </div>
  );
}

export default ServiceItemProps;
