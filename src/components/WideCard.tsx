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
      	<div className="h-full overflow-hidden rounded-lg bg-neutral-800 p-4 text-white xl:hover:scale-105 xl:h-48 flex flex-col justify-center items-center xl:transition-transform">
        	<div className="text-xl font-semibold md:text-2xl">{title}</div>
        	<div className="text-neutral-400 italic md:text-xl xl:text-2xl">"{description}"</div>
      	</div>
    	</a>
		</>
  );
}
