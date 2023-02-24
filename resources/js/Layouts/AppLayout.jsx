import { Link } from "@inertiajs/react";
import React from "react";

const AppLayout = ({ children }) => {
    return (
        <main>
            <header>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </header>
            {children}
        </main>
    );
};

export default AppLayout;
