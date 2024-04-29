import React from "react";
import BubbleContainer from "./BubbleContainer";
import Header from "./Header";
import HeaderButton from "./HeaderButton";

const App = () => {
  return (
  
    <div className="container mx-auto flex flex-col items-center justify-center mt-4">
      <div className="w-screen max-w-screen-lg h-auto bg-gray-100 bg-opacity-50 p-4 mx-auto my-4 rounded-full hover:bg-opacity-75 transition duration-300 ease-in-out">
          <HeaderButton />
          <Header />
    </div>

        

       <div>
       <BubbleContainer />
       </div>
  </div>
  );
};

export default App;
