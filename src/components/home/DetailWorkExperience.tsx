import { X } from "lucide-react";

interface DetailWorkExperienceItf {
    hiddenForm: () => void;
}
export default function DetailWorkExperience ({ hiddenForm }: DetailWorkExperienceItf) {
    return(
        <div className={`bg-[#312036] p-[1rem] rounded-[0.6rem]`}>
            <button onClick={hiddenForm}><X /></button>
            <div></div>
            <p>halola</p>
        </div>
    )
}