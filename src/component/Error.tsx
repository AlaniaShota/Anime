import React from "react";
import ErrorNotFoundDetailPageData from "../assets/errorNotFoundDetailPageData.png";
import ErrorNotFoundData from "../assets/errorNotFoundData.png";
import { ButtonGoBack } from "./Button";

export const ErrorCard = () => (
  <div className="p-auto m-auto w-3/4 flex flex-row justify-center items-center bg-white/20 rounded-lg">
    <div className="flex flex-col flex-wrap items-center w-1/2">
      <h1 className="text-white text-xl font-bold">
        Something went wrong plz restart site
      </h1>
    </div>
    <div className="w-1/2 ">
      <img
        src={ErrorNotFoundDetailPageData}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

export const ErrorDetailTitle = ({ title, src }) => (
  <div className="p-auto m-auto w-3/4 flex flex-row justify-center items-end bg-white/20 rounded-lg">
    <div className="flex flex-col  items-end gap-4 w-1/2 mb-20">
      <h1 className="text-white text-2xl">Opps! We can't found {title}.</h1>
      <ButtonGoBack title={title} src={src} />
    </div>
    <div className="w-1/2 ">
      <img
        src={ErrorNotFoundDetailPageData}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

export const ErrorDataFound = ({ title }) => (
  <>
    <div className="flex flex-row justify-center items-end bg-white/20 rounded-lg">
      <div className="flex flex-col flex-wrap  w-auto mb-20">
        <h1 className="text-white text-2xl text-end">
          Opps! We can't find information about{" "}
          <span className="text-[#ffd700]">{title}</span>.
        </h1>
      </div>
      <div className="w-2/3">
        <img
          src={ErrorNotFoundData}
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  </>
);
