import Image from "next/image";
import work from "./work.json";

const GridComponent = () => {
  return (
    <div className="flex justify-center items-center px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-2 md:gap-4">
        {work.map((item) => (
          <div
            key={item.id}
            className="rounded-[5px] md:rounded-[12.79px] overflow-hidden cursor-pointer hover:scale-105 hover:transition-all hover:duration-300 duration-300"
          >
            <div className="flex justify-center items-center">
              <Image
                src={item.image}
                width={460}
                height={460}
                alt="image"
                className="cover md:w-[268px] md:h-[151px] rounded-[5px] md:rounded-[12.79px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
