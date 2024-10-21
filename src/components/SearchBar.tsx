import React from "react";
import FormInput from "./form/FormInput";
import Btn from "./common/Btn";

const SearchBar = ({ styling }: { styling: string }) => {
  return (
    <div className={styling}>
      <FormInput
        styling="border h-full flex-1 border-black flex items-center pl-[6px] pr-8"
        inputStyle="w-full h-[calc(100%-10px)] border pl-2"
        placeholder="search for documents"
      />
      <Btn
        text="Search"
        styling="bg-blue font-bold h-full flex-center px-1 rounded-md text-[18px]"
      />
    </div>
  );
};

export default SearchBar;
