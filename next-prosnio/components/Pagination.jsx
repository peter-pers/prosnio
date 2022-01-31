import { useState } from "react";

const Pagination = ({ pagination: { page, setPage }, total }) => {
  const totalPages = Math.ceil(total / 6);
  const [selected, setSelected] = useState(Math.ceil(page / 6));
  return (
    <div className="flex mt-3 px-6 md:px-0">
      {[...Array(totalPages).keys()].map((i) => (
        <p
          className={`flex px-3 py-1 mx-1 ${
            selected === i ? "bg-black text-white" : "bg-zinc-200"
          } rounded-full`}
          key={i}
          onClick={() => {
            setPage(i * 6);
            setSelected(i);
          }}
        >
          {i + 1}
        </p>
      ))}
    </div>
  );
};

export default Pagination;
