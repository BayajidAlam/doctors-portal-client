import React from "react";

const Loading = () => {
  return (
    <div class="flex justify-center mt-80">
      <div class="relative">
        <div
          class="w-20 h-20 rounded-full absolute
                            border-4 border-solid border-gray-200"
        ></div>

        <div
          class="w-20 h-20 rounded-full animate-spin absolute
                            border-4 border-solid border-green-500 border-t-transparent"
        ></div>
      </div>
    </div>
  );
};

export default Loading;
