import React, { forwardRef, useEffect, useRef } from "react";

export default forwardRef((props, ref) => {
  return (
    <div>
      <img src={props.value} alt="Profile" className="profile-image" />
    </div>
  );
});
