//react imports

import React, { useState } from "react";
import { tabsHandler } from "@/store/slice/tabsSlice";
import { useDispatch } from "react-redux";

const Pagination = ({ pages }) => {
  const dispatch = useDispatch();
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [staticPagenumber, setStaticPagenumber] = useState(1);
  console.log(selectedNumber);

  const pageHandler = (pageNumber) => {
    setStaticPagenumber(pageNumber);
  };

  const onCLickPageNumber = (page) => {
    pageHandler(page);
    setSelectedNumber(page);
    dispatch(tabsHandler(page));
  };
  let pageNumber = [];
  for (let i = 1; i < Math.ceil(pages / 20); i++) {
    pageNumber.push(i);
    if (i == 500) {
      break;
    }
  }

  return (
    <div className="flex flex-col justify-center  overflow-x-auto max-w-full ">
      <div className="flex  space-x-2 pt-4 ">
        {pageNumber.map((eachNumber, idx) =>
          selectedNumber === eachNumber ? (
            // eslint-disable-next-line react/jsx-key
            <button
              key={idx}
              className="px-3  py-2 bg-slate-900  text-slate-50 rounded-md"
              onClick={() => onCLickPageNumber(eachNumber)}
              type="button"
            >
              {eachNumber}
            </button>
          ) : (
            // eslint-disable-next-line react/jsx-key
            <button
              key={idx}
              className="px-3 py-2  bg-slate-500  text-slate-50 rounded-md"
              onClick={() => onCLickPageNumber(eachNumber)}
              type="button"
            >
              {eachNumber}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Pagination;
