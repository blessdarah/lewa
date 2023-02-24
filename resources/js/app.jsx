import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import React from "react";

createInertiaApp({
    resolve: (name = "Home") => {
        console.log("name: ", name);
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        console.log("pages: ", pages);
        return pages[`./Pages/${name}.jsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
