import React from "react";
import AppShell from "../Layouts/AppShell.jsx";

const Home = () => {
    return <h3>Home</h3>;
};

Home.layout = (page) => <AppShell children={page} />;

export default Home;
