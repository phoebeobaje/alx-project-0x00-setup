import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
return(
    <div>
        <h1 className="text-xl font-extralight text-center mt-20">Landing Page</h1>
        <Card />
        <Card />
        <Card />
        <Card />
<div className="space-x-4 my-10">
          <Button title="Small Rounded-sm" styles="small rounded-sm px-3 py-1 text-sm " />
          <Button title="Medium Rounded-md" styles="small rounded-md px-4 py-2 text-base " />
          <Button title="Large Rounded-lg" styles="small rounded-lg px-5 py-3 text-lg " />
          <Button title="Large Rounded-full"styles="small rounded-full px-6 py-4 text-lg " />
        </div>


    </div>
)
}
export default Landing;