import MobileCard from "./MobileCard";
import SolidCard from "./SolidCard";
import WebCard from "./WebCard";

export default function Cards() {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-3 gap-10 desktop:gap-0">
      <WebCard />
      <MobileCard  />
      <SolidCard />
    </div>
  );
}
