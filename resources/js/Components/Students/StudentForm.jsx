import { Form, Input } from "antd";
import React from "react";
import { FORM_MODE } from "../../Constants";

const StudentForm = ({ mode = FORM_MODE.CREATE }) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        if (mode === FORM_MODE.CREATE) {
            console.log("create: ", values);
        }

        if (mode === FORM_MODE.EDIT) {
            console.log("edit: ", values);
        }

        form.resetFields();
    };
    return (
        <Form
            name="create-student-form"
            onFinish={onFinish}
            form={form}
            layout="vertical"
        >
            <Form.Item
                name="firstname"
                label="First name"
                rules={[
                    {
                        required: true,
                        message: "Student first name is required",
                    },
                ]}
            >
                <Input />
            </Form.Item>
        </Form>
    );
};

export default StudentForm;
