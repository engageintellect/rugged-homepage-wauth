import { type PropsWithChildren } from "react";

type HeroProps = {
  title: string;
  description: string;
};

export default function Hero({
  title,
  description,
}: PropsWithChildren<HeroProps>) {
  return (
    <div className=" bg-hero flex h-72 md:h-96 items-center justify-center bg-gradient-to-r 
		from-blue-500 
		to-orange-500 
		via-purple-500 
		animate-gradient-x
		bg-cover bg-center shadow-lg
		">
      <div className="text-center text-white">
        <div className="my-5 text-7xl font-semibold tracking-tighter md:text-8xl">
          {/* {title} */}
          <a href="/">
            Ti<span className="text-purple-400">t</span>le
          </a>
        </div>
        <div className="text-xl tracking-tighter md:text-2xl">
          {description}
        </div>

        <div className="flex items-center justify-center gap-4">
          <a href="/#learn_more">
            <button className="mt-4 rounded-lg bg-purple-800 p-4 text-white shadow-lg hover:scale-105 hover:bg-purple-700">
              Learn More
            </button>
          </a>

          <a href="/#contribute">
            <button className="mt-4 rounded-lg bg-purple-800 p-4 text-white shadow-lg hover:scale-105 hover:bg-purple-700">
              Contribute
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
