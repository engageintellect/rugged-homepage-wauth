import WideCard from "./WideCard"


export default function TeamSection(){
	return (
		<>
        <div className="px-2 pb-10 md:pb-10 md:px-10 bg-neutral-800" id="learn_more">
          <div className="grid grid-cols-1 gap-2 md:gap-4 md:w-1/2 mx-auto">
            <WideCard
              title="Rugged Solutions"
              description="Every organization is unique. Our experts are committed to helping you select a solution that matches your specific needs – from warehouse equipment to rugged computing and scanning."
              url="/"
            />
          </div>
        </div>
		</>
	)
}