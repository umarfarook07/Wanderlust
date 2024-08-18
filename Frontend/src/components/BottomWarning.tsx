import { memo } from "react";
import { Link } from "react-router-dom";

interface IBottomWarning {
    label: string;
    to: string;
    buttonText: string;
}

export const BottomWarning = memo(({ label, to, buttonText }:IBottomWarning) => {
    return (
        <div className="py-2 text-base text-center">
            <span>{label}</span>
            <Link className=" pl-1 cursor-pointer text-skyBlue" to={to}>
                {buttonText}
            </Link>
        </div>
    );
});