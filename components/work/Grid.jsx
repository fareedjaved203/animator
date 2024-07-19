import Image from "next/image";
import work from "./work.json";

const GridComponent = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 md:grid-cols-4 md:w-[75%] xl:2/3">
        {work.map((item) => (
          <div
            key={item.id}
            className="rounded-xl m-2 overflow-hidden cursor-pointer hover:scale-105 hover:transition-all hover:duration-300 duration-300"
          >
            <div className="w-full rounded-[20px] overflow-hidden shadow-lg flex justify-center items-center">
              <Image
                src={item.image}
                width={360}
                height={360}
                alt="image"
                className="cover rounded-[20px] border-3 border-blue-400"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
