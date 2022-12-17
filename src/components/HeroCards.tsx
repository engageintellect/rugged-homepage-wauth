
import { motion } from "framer-motion";
import Card from "./Card";


export default function HeroCards() {
	return(
		<>
    	<motion.nav 
    	initial={{ 
      	y: +10,
				opacity: 0,
				scale: 1,
    	}}
    	animate={{
				y: 0,
				opacity: 1,
				scale: 1,
			}}

			transition={{
				duration: 2,
				type: 'spring',
				// stiffness: 100,
			}}>

      	<div className="p-2 md:p-10">
        	<div className="grid grid-cols-1 gap-1 md:grid-cols-1 md:gap-4 lg:grid-cols-3">
          	<Card
            	title="About T3d"
            	description="What is T3d , and how can it help me or my team?"
            	url="/"
          	/>
          	<Card
            	title="Getting Started"
            	description="Everything you need to get started with T3D."
            	url="/"
          	/>
          	<Card
            	title="Contact Us"
            	description="Get in touch with our team."
            	url="mailto:josh.chadwick@protonmail.com"
          	/>

        	</div>
      	</div>

			</motion.nav>
		</>
	)
		}