import React from "react";
import { useForm, Link } from '@inertiajs/react'
import { Card, Flex, Form, Input, Button } from 'antd'

const Register = () => {
    const { errors, setData, processing, post } = useForm();

    const onFinish = (values) => {
        setData(values);
        post('/register');
    }

    return (
        <Card style={{ width: '40rem', margin: '2rem auto' }} title="Create new account">
            <Form onFinish={onFinish} size="large" layout="vertical">
                <Form.Item
                    label="Username"
                    name="name"
                    validateStatus={errors.name ? "error" : ""}
                    help={errors.name ?? ""}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    validateStatus={errors.email ? "error" : ""}
                    help={errors.email ?? ""}
                >
                    <Input type="email" />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    validateStatus={errors.password ? "error" : ""}
                    help={errors.password ?? ""}
                >
                    <Input type="password" />
                </Form.Item>
                <Flex align="center" justify="space-between">
                    <Button htmlType="submit" type="primary" loading={processing}>Create account</Button>
                    <Link href="/login">Login instead</Link>
                </Flex>
            </Form>
        </Card>
    )
};

export default Register;
