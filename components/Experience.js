import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import Wipro from './works/Wipro';
import Qdesq from './works/Qdesq';

function Experience() {
  const [com, setCom] = useState("Wipro")
  const handleButtonClick = (option) => {
    setCom(option);
  };
  return (
    <section id='Experience' className='  max-w-containerSmall mx-auto py-10 lgl:py-24 px-4'>
      <SectionTitle title="Where I have Worked" titleNo="02" />
        <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
          <ul className='md:w-32 flex flex-col'>
            <li onClick={() => handleButtonClick("Wipro")}
              className={`border-l-2 bg-transparent hover:bg-[#112240] ${com=="Wipro"? "border-l-textGreen text-textGreen":"border-l-hoverColor text-textDark"}
            \py-3 text-sm cursor-pointer duration-300 px-8 `}
            >
              Wipro</li>
              <li onClick={() => handleButtonClick("Qdesq")}
              className={`border-l-2 bg-transparent hover:bg-[#112240] ${com=="Qdesq"? "border-l-textGreen text-textGreen":"border-l-hoverColor text-textDark"}
              py-3 text-sm cursor-pointer duration-300 px-8 `}
            >
              Qdesq</li>
          </ul>
          {com=="Wipro" && <Wipro/>}
          {com=="Qdesq" && <Qdesq/>}
        </div>

    </section>
  )
}

export default Experience