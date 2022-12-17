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
		to-blue-500 
		via-blue-500 
		animate-gradient-x
		bg-cover bg-center shadow-lg
		">
      <div className="text-center text-white">
        <div className="my-5 text-4xl sm:text-5xl font-semibold tracking-tighter md:text-7xl">
          {/* {title} */}
          <a href="/">
            Rugged<span className="text-blue-400"></span>Development
          </a>
        </div>
        <div className="text-xl tracking-tighter md:text-2xl">
          {description}
        </div>

        <div className="flex items-center justify-center gap-4">
          <a href="/#learn_more">
            <button className="mt-4 rounded-lg bg-blue-800 p-4 text-white shadow-lg hover:scale-105 hover:bg-blue-700">
              Learn More
            </button>
          </a>

          <a href="/#contribute">
            <button className="mt-4 rounded-lg bg-blue-800 p-4 text-white shadow-lg hover:scale-105 hover:bg-blue-700">
              Get a Quote
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
