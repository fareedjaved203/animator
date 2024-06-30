import Image from "next/image";
import thumbnails from "./thumbnails.json";

const GridComponent = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap">
        {thumbnails.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-1/2 lg:w-1/3 p-4 cursor-pointer hover:scale-105 hover:transition-all hover:duration-300 duration-300"
          >
            <div className="w-full rounded-xl overflow-hidden shadow-lg flex justify-center items-center">
              <Image
                src={item.image}
                width={400}
                height={400}
                alt="image"
                className="cover rounded-xl border border-3 border-blue-400"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
