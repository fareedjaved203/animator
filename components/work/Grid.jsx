import Image from "next/image";
import work from "./work.json";

const GridComponent = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 md:grid-cols-3 md:w-[65%] xl:2/3">
        {work.map((item) => (
          <div
            key={item.id}
            className="space-y-5 rounded-xl m-2 mt-8 overflow-hidden cursor-pointer hover:scale-105 hover:transition-all hover:duration-300 duration-300"
          >
            <div className="w-full rounded-[20px] border border-blue-400 overflow-hidden shadow-lg flex justify-center items-center">
              <Image
                src={item.image}
                width={360}
                height={360}
                alt="image"
                className="cover rounded-[20px] border-3 border-blue-400"
              />
            </div>
            <div className="space-y-1 text-white text-center">
              <div className="text-[#e2b203] text-md md:text-xl font-semibold">
                {item.title}
              </div>
              <div className="text-sm md:text-md">{item.name}</div>
              <div className="text-sm md:text-md">{item.views}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
