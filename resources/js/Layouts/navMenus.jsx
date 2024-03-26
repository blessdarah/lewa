import React from "react";
import {
    AppstoreOutlined,
    HomeOutlined,
    TagsOutlined,
} from "@ant-design/icons";

export default {
    route: {
        path: "/",
        routes: [
            {
                path: "/dashboard",
                name: "Dashboard",
                icon: <HomeOutlined />,
            },
            {
                name: "Settings",
                icon: <AppstoreOutlined />,
                path: "/settings",
                routes: [
                    {
                        path: "/academic-years",
                        name: "Academic years",
                        icon: <TagsOutlined />,
                    },
                ]
            },
            {
                name: "Management",
                icon: <AppstoreOutlined />,
                path: "/classroom",
                routes: [
                    {
                        path: "/classrooms",
                        name: "Classrooms",
                        icon: <TagsOutlined />,
                    },
                    {
                        path: "/subjects",
                        name: "Subjects",
                    },
                    {
                        path: "/teachers",
                        name: "Teachers",
                    },
                    {
                        path: "/students",
                        name: "Students",
                    },
                ],
            },
        ],
    },
    location: {
        pathname: "/",
    },
};
