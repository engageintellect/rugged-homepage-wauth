import { type PropsWithChildren } from "react";

import Logo from "../public/favicon.ico";

type CardProps = {
  title: string;
  description: string;
  url: string;
};

export default function Tweet({
  title,
  description,
	url,
}: PropsWithChildren<CardProps>) {
  return (
		<>
   	 <a href={"/"}>
      	<div className="overflow-hidden rounded-lg w-48 md:w-64 h-24 lg:h-32 xl:h-32 bg-neutral-700 p-2 text-white hover:bg-neutral-600 transition-colors duration-300 shadow-md">
					<div className="flex gap-2 items-center">
						<div className="h-8 w-8 rounded-full bg-blue-500"></div>
        		<div className="text-md font-semibold md:text-lg">{title}</div>
					</div>
        	<div className="text-white text-sm p-2">{description}</div>
      	</div>
    	</a>
		</>
  );
}

