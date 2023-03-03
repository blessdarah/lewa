import { PageContainer, ProCard } from "@ant-design/pro-components";
import { router, usePage } from "@inertiajs/react";
import { Form, message } from "antd";
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { ClassroomFormFields } from "../../Components/Classroom/ClassroomFormFields";
import BackButton from "../../Components/Common/BackButton";
import AppShell from "../../Layouts/AppShell";

const ClassroomEdit = ({ classroom }) => {
    const { errors } = usePage().props;

    const onFinish = (values) => {
        router.patch(`/classrooms/${classroom.id}`, values);
        message.success("Classroom updated");
        console.log("edit: ", errors);
    };

    return (
        <PageContainer
            loading={false}
            title="Classroom"
            subTitle="Edit classroom"
            backIcon={<AiOutlineLeft />}
            extra={
                <>
                    <BackButton />
                </>
            }
        >
            <ProCard size="small">
                <Form
                    name="edit-classroom-form"
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={classroom}
                >
                    <ClassroomFormFields errors={errors} />
                </Form>
            </ProCard>
        </PageContainer>
    );
};

ClassroomEdit.layout = (page) => <AppShell children={page} />;
export default ClassroomEdit;
