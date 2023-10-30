import AlfaOmega from "./AlfaOmega";
import Another from "./Another";
import Messaje from "./Messaje";
import PetroQuiz from "./PetroQuiz";

export default function Cards () { 
    return (
        <div className="h-[1200px] grid grid-cols-1 grid-rows-6 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-2 gap-5">
<AlfaOmega />
<PetroQuiz />
<Another />
<Messaje />
        </div>
    )
}