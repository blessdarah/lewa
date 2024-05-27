import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import React from "react";
import { ConfigProvider } from "antd";
import locale from "antd/locale/en_US";

createInertiaApp({
    resolve: (name = "Home") => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return pages[`./Pages/${name}.jsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <ConfigProvider
                locale={locale}
            // componentSize="small"
            // theme={{
            //     token: {
            //         borderRadius: 0,
            //         colorPrimary: "#fb8b24",
            //         colorError: "#820263",
            //     },
            // }}
            >
                <App {...props} />
            </ConfigProvider>
        );
    },
});
