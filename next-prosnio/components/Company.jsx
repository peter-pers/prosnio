import { useState } from "react";

const Company = ({ company }) => {
  const [imgSrc, setImgSrc] = useState(company.logo);
  const onError = () => setImgSrc("/placeholder.jpeg");

  return (
    <>
      <div className="grid grid-cols-1 divide-y">
        <div className="bg-[url('/hero.jpeg')] py-16 sm:py-8 ">
          <div className="grid grid-cols-1 px-4 sm:grid-cols-6">
            <div className="col-span-2"></div>
            <div className="col-span-2">
              <h1 className="text-3xl font-text">{company.name}</h1>
              <ul className="grid grid-cols-1 md:grid-cols-2 pl-4 mt-4 list-disc">
                {company.specialities &&
                  company.specialities.map((speciality, i) => {
                    return (
                      <li key={i} className="pr-2 font-bold">
                        {speciality}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 px-4 sm:grid-cols-6">
            <div className="hidden sm:block"></div>
            <div className="flex justify-center items-center bg-white -mt-16 w-32 p-2 border-2">
              <img
                src={imgSrc ? imgSrc : "/placeholder.jpeg"}
                loading="lazy"
                alt="logo"
                className=""
                onError={onError}
              />
            </div>
            <div className="col-span-4 mt-4">
              {company.location && (
                <h1 className="text-1xl font-bold ">{company.location}</h1>
              )}
              {company.website && (
                <a href={company.website}>{company.website}</a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 px-4 sm:grid-cols-6 mt-4 mb-8">
        <div className="col-span-2"></div>
        <div className="col-span-3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
            cursus orci. Fusce eget tellus dignissim, congue augue non, bibendum
            risus. Praesent malesuada, est in vulputate laoreet, orci augue
            finibus leo, volutpat aliquam massa purus id augue. Suspendisse at
            nisi dui. Donec blandit posuere ex quis imperdiet. Sed vel lorem in
            turpis blandit commodo. Maecenas odio urna, porttitor ut tincidunt
            sit amet, cursus at risus. Nunc condimentum diam diam, at gravida mi
            hendrerit eget. Donec luctus purus nunc, auctor interdum turpis
            tristique venenatis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
            urna orci. Suspendisse vitae sem finibus, volutpat mi at, mattis
            augue. Nam enim libero, aliquet ac facilisis eu, sagittis pulvinar
            nisl. In augue lectus, interdum eget mollis eget, molestie quis
            velit. Nam tincidunt quis mi sit amet consequat. Nunc at magna
            ligula. Aenean lorem dolor, placerat eget feugiat eget, imperdiet
            sed ipsum. Cras sed eleifend quam. Mauris lectus quam, rhoncus et
            nisi nec, semper pretium felis.
          </p>
        </div>
      </div>
    </>
  );
};

export default Company;
