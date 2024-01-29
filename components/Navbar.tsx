import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Navbar = () => {
    return (
        <nav>
            <div className="flex justify-between bg-black text-white text-3xl font-bold h-20 px-12">
                <div className="flex items-center gap-24">
                    <Link href="/" className="hover:scale-105">
                        Home
                    </Link>
                </div>
                <div className="flex items-center">
                    <ThemeSwitcher />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
