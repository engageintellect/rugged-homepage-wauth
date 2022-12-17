
import Form from "./Form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCode,
} from "@fortawesome/free-solid-svg-icons";



export default function Contribute(){
	return(
		<>
      <div
        className="bg-neutral-800 p-5 pb-10 text-white md:p-10"
        id="contribute"
      >
        <div className="">
          <div className="flex-cols flex items-center justify-center gap-4">
            <div className="text-5xl font-semibold sm:text-6xl md:text-7xl">
              Contr<span className="text-purple-400">i</span>bute
            </div>

            <div>
              <a
                target="_blank"
                href="/"
              >
                <button className="mt-4 rounded-lg bg-purple-800 p-4 text-white shadow-lg hover:bg-purple-700">
									<span className="pr-2">
      							<FontAwesomeIcon
        							icon={faCode}
      							/>
									</span>
                  Repository
                </button>
              </a>
            </div>
          </div>

          {/* //! TODO: Make this dynamic/interactive */}

          <div className="flex justify-center">
            <div className="w-full py-5 md:max-w-xl lg:w-1/2">
              <p>
                Ullamco elit occaecat excepteur eiusmod fugiat pariatur sint irure anim pariatur fugiat velit sit. Mollit et anim do officia officia excepteur qui voluptate. Occaecat dolor labore in qui amet veniam ullamco esse officia elit proident nostrud aliquip elit.
              </p>
            </div>
          </div>

          {/* //!--------------------------------------------- */}
        	<Form />

      	</div>
  		</div>
		</>
	)
}