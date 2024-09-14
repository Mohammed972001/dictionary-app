import audioIcon from "/images/icon-play.svg"
import newWindow from "/images/icon-new-window.svg"

export default function DisplayResult({ data }) {

  const playAudio = (audioUrl) => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
    } else {
      alert("Audio not available");
    }
  };

    return (
      <div className="mt-4 p-4 bg-white  rounded-md w-full dark:h-full dark:bg-black dark:text-white">
      <div className=" flex justify-between font-lora-bold ">
      <h1 className="mt-[20px] tex" >{data[0].word}</h1>
      <div className="text-[#a645ec] mt-[15px] mb-[20px] text-[20px] font-normal">
        {data[0].phonetics.map((phonetic, index) => (
          <div key={index}>
            {phonetic.audio && (
              <img
                src={audioIcon}
                alt="audio"
                onClick={() => playAudio(phonetic.audio)}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
    {data[0].meanings.map((meaning, index) => (
      <div className="definition" key={index}>
      <div className="flex items-center">
  <h3 className=" mr-5 mt-8">{meaning.partOfSpeech}</h3>
  <hr className="flex-grow border-t-1 border-gray-400 mt-8" />
</div>

        <p className="mt-7">Meaning</p>
        {meaning.definitions.map((definition, defIndex) => (
          <>
            <ul key={defIndex}>
              <li className=" relative pl-5 before:content-['•']
               before:absolute before:left-0
                before:text-[#a645ec] mt-5 ml-10">
              
              {definition.definition}</li>
            </ul>
            {definition.example && (
              <p className="ml-14 text-[#818181]">"{definition.example}"</p>
            )}
          </>
        ))}
        {meaning.synonyms.length > 0 && (
          <>
            {meaning.synonyms.map((synonym, synIndex) => (
              <p className="mt-10 ml-4 text-[#818181]" key={synIndex}>
                Synonyms <span className="text-[#a645ec] pl-8">{synonym}</span>{" "}
              </p>
            ))}
          </>
        )}
      </div>
    ))}
    
    <hr className="mt-8" />
    <div className="w-full max-w-full mt-8">
    {data[0].sourceUrls && (
      <div className="flex md:ml-5 items-center gap-2 sm:gap-4 md:gap-6 md:mb-8 text-[#818181]">
        <span className="text-xs sm:text-sm md:text-base">Source</span>
        <a
          href={data[0].sourceUrls[0]}
          className="text-black flex items-center gap-2 sm:gap-4 md:gap-2 text-xs sm:text-sm md:text-base dark:text-white"
          target="_blank"
          rel="noreferrer"
        >
          {data[0].sourceUrls[0]}{" "}
          <img
            src={newWindow}
            alt="new-window"
            className="w-4 h-4"
          />
        </a>
      </div>
    )}
  </div>
    
      </div>
    );
  }
  