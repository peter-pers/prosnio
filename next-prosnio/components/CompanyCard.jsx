import { useState } from "react";

const CompanyCard = ({ company }) => {
  const [imgSrc, setImgSrc] = useState(company.logo);
  const onError = () => setImgSrc("/placeholder.jpeg");

  return (
    <a href={`/company/${company.sys.id}`}>
      <div className="md:col-span-1 md:flex md:flex-col bg-white border-2 md:h-[28rem] p-4 overflow-hidden">
        <div className="flex justify-center items-center md:h-80 mb-2">
          <img
            className="h-full"
            src={imgSrc ? imgSrc : "/placeholder.jpeg"}
            loading="lazy"
            alt="logo"
            onError={onError}
          />
        </div>
        <h2 className="mb-2 font-bold text-2xl md:h-24">{company.name}</h2>
        <p className="text-md text-justify md:h-8">Read more</p>
      </div>
    </a>
  );
};

export default CompanyCard;
