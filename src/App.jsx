import Header from "./componant/header";
import Serchinput from "./componant/serchinput";
import APIComponent from "./componant/APIComponent";
import { useState } from "react";

const App = () => {
  const [searchWord, setSearchWord] = useState("");
  return (
    <div className="flex flex-col items-center  dark:min-h-screen w-full dark:bg-black">
      <div className="w-full  max-w-4xl p-4 sm:p-6 md:p-8 lg:p-10">
        <Header />
        <div className="mt-4 flex justify-center">
          <Serchinput  onSearch={setSearchWord}/>
        </div>
        <div/>
        <APIComponent searchWord={searchWord} />
      </div>
    </div>
  );
};

export default App;
