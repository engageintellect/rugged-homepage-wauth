import WideCard from "./WideCard"


export default function TeamSection(){
	return (
		<>
        <div className="py-10 md:py-0 px-2 md:px-10 xl:px-60 bg-neutral-800" id="learn_more">
          <div className="flex">
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