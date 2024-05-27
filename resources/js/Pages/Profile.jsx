import { PageContainer } from "@ant-design/pro-components";
import { useForm } from "@inertiajs/react";
import { Form, Input, Card, Button } from "antd";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import AppShell from "../Layouts/AppShell.jsx";

const Profile = ({ user }) => {
    const { post, processing, setData, errors } = useForm();

    function onFinish(values) {
        setData(values);
        post('/profile');
    }

    return (
        <PageContainer
            loading={false}
            title="Profile"
            subTitle="Manage Profile"
            backIcon={<AiOutlineArrowLeft />}
        >
            <Card
                size="small"
                style={{
                    width: '40rem',
                }}
            >
                <h3>User profile</h3>
                <Form onFinish={onFinish} initialValues={{ name: user.name }}>
                    <Form.Item label="Username" status={errors.name ? 'error' : ''}
                        help={errors.name}>
                        <Input />
                    </Form.Item>
                </Form>
            </Card>
            <Card title="Manage password" style={{ marginTop: '1rem', width: '40rem' }}>
                <Form onFinish={onFinish}>
                    <Form.Item name="old_password" label="Old password" status={errors.oldPassword ? 'error' : ''}
                        help={errors.oldPassword}>
                        <Input type="password" />
                    </Form.Item>
                    <Form.Item name="password" label="New password" status={errors.newPassword ? 'error' : ''}
                        help={errors.newPassword} rules={[{
                            required: true,
                            message: "Password must be at least 6 chars long with at least an uppercase char, lowercase char, digit and special char"
                        }]}>
                        <Input type="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$
" />
                    </Form.Item>
                    <Form.Item name="password_confirm" label="Confirm password" status={errors.confirmPassword ? 'error' : ''}
                        help={errors.confirmPassword}>
                        <Input type="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$
" />
                    </Form.Item>
                    <Button loading={processing} type="primary" htmlType="submit">Change password</Button>
                </Form>
            </Card>
        </PageContainer>
    );
};

Profile.layout = (page) => <AppShell children={page} />;

export default Profile;
