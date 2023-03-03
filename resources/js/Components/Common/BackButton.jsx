import { Button } from "antd";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const BackButton = () => {
    return (
        <Button
            icon={<AiOutlineArrowLeft />}
            onClick={() => window.history.go(-1)}
        >
            back
        </Button>
    );
};

export default BackButton;
