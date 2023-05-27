import React from "react";
import {
    Form,
    Input,
    Button,
    Space,
    Row,
    Col,
    DatePicker,
    Select,
    Checkbox,
} from "antd";
import { AiOutlineClose, AiOutlineSend } from "react-icons/ai";

export const StudentFormFields = ({ errors, guardians, classrooms }) => {
    return (
        <Row gutter={[8, 8]}>
            <Col lg={6}>
                <Form.Item
                    label="Name"
                    name="name"
                    validateStatus={errors.name ? "error" : ""}
                    help={errors.name ?? ""}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col lg={6}>
                <Form.Item
                    label="Surname"
                    name="surname"
                    validateStatus={errors.surname ? "error" : ""}
                    help={errors.surname ?? ""}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col lg={6}>
                <Form.Item
                    label="Date of birth"
                    name="dob"
                    validateStatus={errors.dob ? "error" : ""}
                    help={errors.dob ?? ""}
                >
                    <DatePicker format="DD MM YYYY" style={{ width: "100%" }} />
                </Form.Item>
            </Col>
            <Col lg={6}>
                <Form.Item
                    label="Place of birth"
                    name="pob"
                    validateStatus={errors.pob ? "error" : ""}
                    help={errors.pob ?? ""}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col lg={6}>
                <Form.Item
                    label="Country"
                    name="country"
                    validateStatus={errors.country ? "error" : ""}
                    help={errors.country ?? ""}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col lg={6}>
                <Form.Item
                    label="Region"
                    name="region"
                    validateStatus={errors.region ? "error" : ""}
                    help={errors.region ?? ""}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col lg={6}>
                <Form.Item
                    label="City"
                    name="city"
                    validateStatus={errors.city ? "error" : ""}
                    help={errors.city ?? ""}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col lg={6}>
                <Form.Item
                    label="Address"
                    name="address"
                    validateStatus={errors.address ? "error" : ""}
                    help={errors.address ?? ""}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col lg={6}>
                <Form.Item
                    label="Gender"
                    name="gender"
                    validateStatus={errors.gender ? "error" : ""}
                    help={errors.gender ?? ""}
                >
                    <Select>
                        <Select.Option value="male">Male</Select.Option>
                        <Select.Option value="female">Female</Select.Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col lg={6}>
                <Form.Item
                    label="Phone number"
                    name="phone_number"
                    validateStatus={errors.phone_number ? "error" : ""}
                    help={errors.phone_number ?? ""}
                >
                    <Input type="tel" />
                </Form.Item>
            </Col>
            <Col lg={6}>
                <Form.Item
                    label="Email"
                    name="email"
                    validateStatus={errors.email ? "error" : ""}
                    help={errors.email ?? ""}
                >
                    <Input type="email" />
                </Form.Item>
            </Col>
            <Col lg={6}>
                <Form.Item
                    label="Class"
                    name="classroom_id"
                    validateStatus={errors.classroom_id ? "error" : ""}
                    help={errors.classroom_id ?? ""}
                >
                    <Select>
                        {classrooms.map((classroom, index) => (
                            <Select.Option key={index} value={classroom.id}>
                                {classroom.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
            </Col>
            <Col lg={6}>
                <Form.Item
                    label="Is disabled"
                    name="is_disabled"
                    validateStatus={errors.is_disabled ? "error" : ""}
                    help={errors.is_disabled ?? ""}
                    valuePropName="checked"
                >
                    <Checkbox />
                </Form.Item>
            </Col>
            <Col lg={6}>
                <Form.Item
                    label="Disability type"
                    name="disability_type"
                    validateStatus={errors.disability_type ? "error" : ""}
                    help={errors.disability_type ?? ""}
                >
                    <Input />
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
