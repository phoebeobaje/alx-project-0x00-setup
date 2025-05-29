import { ButtonProps } from "@/interfaces";
const Button: React.FC <ButtonProps>=({title, styles=''})=>{
    return (
        <button
        className={`bg-teal-500 text-white ${styles}`}
        >
        {title}
        </button>
    );
    }
export default Button;