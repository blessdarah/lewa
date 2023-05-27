import { PageContainer, ProCard } from "@ant-design/pro-components";
import { router, usePage } from "@inertiajs/react";
import { Form, message } from "antd";
import React from "react";
import { TeacherFormFields } from "../../Components/Teacher/TeacherFormFields";
import AppShell from "../../Layouts/AppShell";
import { useDate } from "../../Hooks/date.hook";

const TeacherCreate = () => {
    const { formatDate } = useDate();
    const { errors } = usePage().props;

    const onFinish = (values) => {
        router.post("/teachers", {
            ...values,
            dob: formatDate(values.dob),
        });
        message.success("New class created");
    };

    return (
        <PageContainer
            loading={false}
            title="Teacher"
            subTitle="Manage teachers"
            breadcrumb={{
                routes: [
                    {
                        path: "/teachers",
                        breadcrumbName: "Teachers",
                    },
                    {
                        path: "/",
                        breadcrumbName: "Create",
                    },
                ],
            }}
        >
            <ProCard size="small">
                <Form
                    name="create-teacher-form"
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <TeacherFormFields errors={errors} />
                </Form>
            </ProCard>
        </PageContainer>
    );
};

TeacherCreate.layout = (page) => <AppShell children={page} />;
export default TeacherCreate;
