import { type PropsWithChildren } from "react";

type CardProps = {
  title: string;
  description: string;
  url: string;
};

export default function WideCard({
  title,
  description,
  url,
}: PropsWithChildren<CardProps>) {
  return (
		<>
  	  <a href={url}>
      	<div className="h-32 overflow-hidden rounded-lg bg-neutral-800 p-4 text-white xl:hover:scale-105 xl:h-48 flex flex-col justify-center items-center xl:transition-transform">
        	<div className="text-xl font-semibold md:text-2xl">{title}</div>
        	<div className="text-sm md:text-lg text-neutral-400 italic">"{description}"</div>
      	</div>
    	</a>
		</>
  );
}
