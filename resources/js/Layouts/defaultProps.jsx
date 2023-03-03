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
                path: "/students",
                name: "Students",
                icon: <HomeOutlined />,
            },
            {
                name: "Classroom",
                icon: <AppstoreOutlined />,
                path: "/classroom",
                routes: [
                    {
                        path: "/classrooms",
                        name: "Classrooms",
                        icon: <TagsOutlined />,
                    },
                ],
            },
        ],
    },
    location: {
        pathname: "/",
    },
};
