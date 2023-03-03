import React from "react";
import { Form, Input, Button, Space } from "antd";
import { AiOutlineClose, AiOutlineSend } from "react-icons/ai";

export const ClassroomFormFields = ({ errors }) => {
    return (
        <>
            <Form.Item
                label="code"
                name="code"
                validateStatus={errors.code ? "error" : ""}
                help={errors.code ?? ""}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="name"
                name="name"
                validateStatus={errors.name ? "error" : ""}
                help={errors.name ?? ""}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="description"
                name="description"
                validateStatus={errors.description ? "error" : ""}
                help={errors.description ?? ""}
            >
                <Input />
            </Form.Item>
            <Space>
                <Button
                    icon={<AiOutlineClose />}
                    onClick={() => window.history.back()}
                >
                    Cancel
                </Button>
                <Button
                    type="primary"
                    icon={<AiOutlineSend />}
                    htmlType="submit"
                >
                    Save
                </Button>
            </Space>
        </>
    );
};
