import Image from "next/image";
import thumbnails from "./thumbnails.json";

const GridComponent = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        {thumbnails.map((item) => (
          <div
            key={item.id}
            className="rounded-[5px] md:rounded-[12.79px] overflow-hidden cursor-pointer hover:scale-105 hover:transition-all hover:duration-300 duration-300"
          >
            <div className="w-full rounded-[4px] md:rounded-[12.79px] overflow-hidden shadow-lg flex justify-center items-center">
              <Image
                src={item.image}
                width={360}
                height={360}
                alt="image"
                className="cover rounded-[4px] md:rounded-[12.79px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
