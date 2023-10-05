import { ReactNode } from "react";
import IconClose from "./icons/IconClose";

type Props = {
    children: ReactNode;
    open: boolean;
    onClose: () => void;

}

export const Sidebar = ({ open, onClose, children }: Props) => {
    return (
        <section className={`fixed left-0 top-0 bottom-0 text-white 
        ${open ? 'w-screen bg-gray-600/75' : 'w-0'} md:w-64 md:static`}>
            <div className={`flex h-screen ${open ? 'ml-0' : '-ml-96'}`}>

                <div className="">
                    barra
                </div>
                <div onClick={onClose} className="flex justify-center items-center w-10 h-10 cursor-pointe md:hidden">
                    <IconClose width={24} height={24} />
                </div>
            </div>
        </section>
    );
}