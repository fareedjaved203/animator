import Image from "next/image";
import thumbnails from "./thumbnails.json";

const GridComponent = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap -mx-4">
        {thumbnails.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 cursor-pointer hover:scale-105 hover:transition-all"
          >
            <div className="bg-gray-200 w-full rounded-xl overflow-hidden shadow-lg flex justify-center items-center">
              <Image
                src={item.image}
                width={400}
                height={400}
                alt="image"
                className="cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
