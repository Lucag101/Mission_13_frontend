import React from 'react';

function TopHeader(props: any) {
  return (
    <>
      <div className="row">
        <div className="text-center">
          <h2>{props.title}</h2>
        </div>
        <p></p>
        <div className="text-center">
          <img src="./Joel.jpg" alt="Joel the great" />
        </div>
        <div className="text-center">
          <h3>
            This website is a collection of the recent movies Joel has watched.
          </h3>
          <h3> It includes ratings and basic movie information</h3>
        </div>
      </div>
    </>
  );
}

export default TopHeader;
