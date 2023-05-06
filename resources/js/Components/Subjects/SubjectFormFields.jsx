import React from "react";
import { Form, Input, Button, Space } from "antd";
import { AiOutlineClose, AiOutlineSend } from "react-icons/ai";

export const SubjectFormFields = ({ errors }) => {
    return (
        <>
            <Form.Item
                label="Code"
                name="code"
                validateStatus={errors.code ? "error" : ""}
                help={errors.code ?? ""}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Title"
                name="title"
                validateStatus={errors.title ? "error" : ""}
                help={errors.title ?? ""}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Description"
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
