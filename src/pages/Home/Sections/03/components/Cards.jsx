import Card from "./Card";

export default function Cards() {
  return (
    <div className="flex flex-wrap gap-10">
      <Card title="+10y" desc="We have surfed the digitalization process of several industries."/>
      <Card title="+300" desc="Innovation advisory services for start-ups and new big-tech products."/>
      <Card title="+200" desc="We have successfully completed a total of 200+ projects"/>
      <Card title="+150" desc="We have successfully give colour to start-ups and company re-branding."/>
    </div>
  );
}
