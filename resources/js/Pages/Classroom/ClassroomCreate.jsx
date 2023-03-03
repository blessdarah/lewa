import { PageContainer, ProCard } from "@ant-design/pro-components";
import { router, usePage } from "@inertiajs/react";
import { Form, message } from "antd";
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { ClassroomFormFields } from "../../Components/Classroom/ClassroomFormFields";
import BackButton from "../../Components/Common/BackButton";
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
            backIcon={<AiOutlineLeft />}
            extra={
                <>
                    <BackButton />
                </>
            }
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
