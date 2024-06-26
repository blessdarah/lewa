import React from "react";
import { useForm, Link } from '@inertiajs/react'
import { Card, Flex, Form, Input, Button } from 'antd'

const Home = () => {
    const { errors, setData, processing, post } = useForm();

    const onFinish = (values) => {
        setData(values);
        post('/login');
    }

    return (
        <Card style={{ width: '40rem', margin: '2rem auto' }} title="Login">
            <Form onFinish={onFinish} size="large" layout="vertical">
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
                    <Button htmlType="submit" type="primary" loading={processing}>Login</Button>
                    <Link href="/register">Register new user</Link>
                </Flex>
            </Form>
        </Card>
    )
};

// Home.layout = (page) => <AppLayout children={page} />;

export default Home;
