import { memo } from "react";
import { Link } from "react-router-dom";

interface IBottomWarning {
    label: string;
    to: string;
    buttonText: string;
}

export const BottomWarning = memo(({ label, to, buttonText }:IBottomWarning) => {
    return (
        <div className="py-2 text-base flex">
            <span>{label}</span>
            <Link className="underline pl-1 cursor-pointer" to={to}>
                {buttonText}
            </Link>
        </div>
    );
});