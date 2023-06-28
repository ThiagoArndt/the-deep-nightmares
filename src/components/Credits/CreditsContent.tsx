import React from "react";
import CreditsItem from "./CreditsItem";

function CreditsContent() {
  return (
    <>
          <div className='flex flex-col gap-8 w-full items-center mb-20 mt-20 px-16'>
          <h1 className='text-white text-8xl'>Creditos</h1>
          <h2 className='text-white text-4xl -mt-8'>Catolica-SC Eng.Software</h2>
          <div className='w-full h-[1px] bg-white'></div>
        </div>
    <div className="flex flex-col items-center justify-between gap-10">
      <div className="flex flex-col gap-16 md:gap-[345px] md:flex-row">
        <CreditsItem name="Hoffman" role="Designer" image="/images/character-review-1.png" />
        <CreditsItem name="Matheus" role="Designer" image="/images/character-review-2.png" />
        <CreditsItem name="Gustavo" role="Dev" image="/images/character-review-2.png" />
      </div>
      <div className="flex flex-col gap-16 md:gap-[400px] md:flex-row">
        <CreditsItem name="Lukas" role="Escritor" image="/images/character-review-2.png" />
        <CreditsItem name="Taiga" role="Designer" image="/images/character-review-2.png" />
        <CreditsItem name="Eduardo" role="Dev(main)" image="/images/character-review-2.png" />
      </div>
      <div className="flex flex-col gap-16 md:gap-[350px] md:flex-row">
        <CreditsItem name="Akira" role="Sonoplasta" image="/images/character-review-2.png" />
        <CreditsItem name="Claudinei" role="Professor" image="/images/character-review-5.png" />
        <CreditsItem name="Thigas" role="Dev(page)" image="/images/character-review-2.png" />
      </div>
      </div>
    </>
  );
}

export default CreditsContent;
