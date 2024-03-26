import React from "react";
import { Form, Input, Button, Space, Row, Col, DatePicker } from "antd";
import { AiOutlineClose, AiOutlineSend } from "react-icons/ai";


export const AcademicYearFormFields = ({ errors }) => {
    return (
        <>
            <Row gutter={[16, 16]}>
                <Col md={12} lg={6}>
                    <Form.Item
                        label="Name"
                        name="description"
                        validateStatus={errors.description ? "error" : ""}
                        help={errors.description ?? ""}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col md={12} lg={6}>
                    <Form.Item
                        label="Start date"
                        name="start_date"
                        validateStatus={errors.start_date ? "error" : ""}
                        help={errors.start_date ?? ""}
                    >
                        <DatePicker
                            format={"DD-MM-YYYY"}
                            placeholder="Select date"
                            style={{ width: "100%" }}
                        />
                    </Form.Item>
                </Col>
                <Col md={12} lg={6}>
                    <Form.Item
                        label="End date"
                        name="end_date"
                        validateStatus={errors.end_date ? "error" : ""}
                        help={errors.end_date ?? ""}
                    >
                        <DatePicker
                            format={"DD-MM-YYYY"}
                            placeholder="Select date"
                            style={{ width: "100%" }}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Space>
                <Button
                    type="primary"
                    icon={<AiOutlineSend />}
                    htmlType="submit"
                >
                    Save
                </Button>
                <Button
                    icon={<AiOutlineClose />}
                    danger
                    onClick={() => window.history.back()}
                >
                    Cancel
                </Button>
            </Space>
        </>
    );
};
