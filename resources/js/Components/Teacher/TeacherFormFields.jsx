import React from "react";
import { Form, Input, Button, Space, Row, Col, Select, DatePicker } from "antd";
import { AiOutlineClose, AiOutlineSend } from "react-icons/ai";

const titleOptions = ["Mr", "Mrs", "Dr", "Miss", "Prof", "Hon", "Chief"];

export const TeacherFormFields = ({ errors }) => {
    return (
        <>
            <Row gutter={[16, 16]}>
                <Col md={12} lg={6}>
                    <Form.Item
                        label="Title"
                        name="prefix"
                        validateStatus={errors.prefix ? "error" : ""}
                        help={errors.prefix ?? ""}
                    >
                        <Select>
                            {titleOptions.map((title, index) => (
                                <Select.Option key={index} value={title}>
                                    {title}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Col>
                <Col md={12} lg={6}>
                    <Form.Item
                        label="First name"
                        name="firstname"
                        validateStatus={errors.firstname ? "error" : ""}
                        help={errors.firstname ?? ""}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col md={12} lg={6}>
                    <Form.Item
                        label="Last name"
                        name="lastname"
                        validateStatus={errors.lastname ? "error" : ""}
                        help={errors.lastname ?? ""}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col md={12} lg={6}>
                    <Form.Item
                        label="Date of birth"
                        name="dob"
                        validateStatus={errors.dob ? "error" : ""}
                        help={errors.dob ?? ""}
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
                        label="IDC number"
                        name="idc_number"
                        validateStatus={errors.idc_number ? "error" : ""}
                        help={errors.idc_number ?? ""}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col md={12} lg={6}>
                    <Form.Item
                        label="Gender"
                        name="gender"
                        validateStatus={errors.gender ? "error" : ""}
                        help={errors.gender ?? ""}
                    >
                        <Select
                            options={[
                                {
                                    label: "Male",
                                    value: "male",
                                },
                                {
                                    label: "Female",
                                    value: "female",
                                },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col md={12} lg={6}>
                    <Form.Item
                        label="Address"
                        name="address"
                        validateStatus={errors.address ? "error" : ""}
                        help={errors.address ?? ""}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col md={12} lg={6}>
                    <Form.Item
                        label="Email"
                        name="email"
                        validateStatus={errors.email ? "error" : ""}
                        help={errors.email ?? ""}
                    >
                        <Input type="email" />
                    </Form.Item>
                </Col>
                <Col md={12} lg={6}>
                    <Form.Item
                        label="Phone number"
                        name="phone_number"
                        validateStatus={errors.phone_number ? "error" : ""}
                        help={errors.phone_number ?? ""}
                    >
                        <Input type="tel" />
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
