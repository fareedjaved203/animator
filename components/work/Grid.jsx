import Image from "next/image";
import work from "./work.json";

const GridComponent = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 md:grid-cols-4 md:w-[1192px] place-items-center">
        {work.map((item) => (
          <div
            key={item.id}
            className="rounded-[12.73px] my-2 overflow-hidden cursor-pointer hover:scale-105 hover:transition-all hover:duration-300 duration-300"
          >
            <div className="flex justify-center items-center">
              <Image
                src={item.image}
                width={360}
                height={360}
                alt="image"
                className="cover w-[268px] h-[151px] rounded-[12.73px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridComponent;
