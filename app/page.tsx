import Image from "next/image";

const page = () => {
  return (
    <div>
      <h1 className="text-[30px] text-center flex flex-wrap items-center justify-center gap-2">
        Treat yourself to
        <br className="flex md:hidden" /> a design
        <span className="relative inline-block h-[30px] w-[30px]">
          <Image
            src="/plusSpan.png"
            alt="plus"
            fill
            className="object-contain"
          />
        </span>
        development <br className="flex md:hidden" />
        <span>partnership</span>
      </h1>
    </div>
  );
};

export default page;
