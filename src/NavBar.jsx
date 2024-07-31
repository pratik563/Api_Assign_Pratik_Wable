import React, { forwardRef, useEffect, useRef } from "react";
//set the navbar

export default forwardRef((props, ref) => {
  return (
    <div class="bg-gray-900 p-2 flex justify-between">
      <div class="p-3 text-3xl font-bold text-white ">Employees</div>
      <div class="flex flex-shrink-0 items-center cursor-pointer">
        <img
          class="h-12 w-auto mr-3"
          src="https://pixel6.co/wp-content/themes/new-pixel6-wp/assets/images/Pixel6.png"
          alt="Your Company"
        />
      </div>
    </div>
  );
});
