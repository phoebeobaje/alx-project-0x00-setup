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
          <Button title="Small Rounded-sm" size="small" shape="rounded-sm" />
          <Button title="Small Rounded-md" size="small" shape="rounded-md" />
          <Button title="Small Rounded-full" size="small" shape="rounded-full" />
        </div>


    </div>
)
}
export default Landing;