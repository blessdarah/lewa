import { PageContainer, ProCard } from "@ant-design/pro-components";
import { router, usePage } from "@inertiajs/react";
import { Form, message } from "antd";
import React from "react";
import { ClassroomFormFields } from "../../Components/Classroom/ClassroomFormFields";
import AppShell from "../../Layouts/AppShell";

const ClassroomCreate = () => {
    const { errors } = usePage().props;

    const onFinish = (values) => {
        router.post("/classrooms", values);
        message.success("New class created");
    };

    return (
        <PageContainer
            loading={false}
            title="Classroom"
            subTitle="Manage classrooms"
            breadcrumb={{
                routes: [
                    {
                        path: "/classrooms",
                        breadcrumbName: "Classrooms",
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
                    name="create-classroom-form"
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <ClassroomFormFields errors={errors} />
                </Form>
            </ProCard>
        </PageContainer>
    );
};

ClassroomCreate.layout = (page) => <AppShell children={page} />;
export default ClassroomCreate;
