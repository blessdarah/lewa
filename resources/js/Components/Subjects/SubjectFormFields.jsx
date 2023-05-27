import React from "react";
import { Form, Input, Button, Space, Row, Col, InputNumber } from "antd";
import { AiOutlineClose, AiOutlineSend } from "react-icons/ai";

export const SubjectFormFields = ({ errors }) => {
    return (
        <Row gutter={[8, 8]}>
            <Col lg={6}>
                <Form.Item
                    label="Code"
                    name="code"
                    validateStatus={errors.code ? "error" : ""}
                    help={errors.code ?? ""}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col lg={6}>
                <Form.Item
                    label="Title"
                    name="title"
                    validateStatus={errors.title ? "error" : ""}
                    help={errors.title ?? ""}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col lg={6}>
                <Form.Item
                    label="Description"
                    name="description"
                    validateStatus={errors.description ? "error" : ""}
                    help={errors.description ?? ""}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col lg={6}>
                <Form.Item
                    label="Coefficient"
                    name="coefficient"
                    validateStatus={errors.coefficient ? "error" : ""}
                    help={errors.coefficient ?? ""}
                >
                    <InputNumber min={0} style={{ width: "100%" }} />
                </Form.Item>
            </Col>
            <Col span={24}>
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
            </Col>
        </Row>
    );
};
