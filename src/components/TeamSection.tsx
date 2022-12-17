import WideCard from "./WideCard"


export default function TeamSection(){
	return (
		<>
        <div className="px-2 pb-10 md:pb-10 md:px-10 bg-neutral-800" id="learn_more">
          <div className="grid grid-cols-1 gap-2 md:gap-4">
            <WideCard
              title="Team Name"
              description="Learn more about the team, and how we're using Nexum to connect with one another."
              url="/"
            />
          </div>
        </div>
		</>
	)
}