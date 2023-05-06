import { PageContainer, ProCard } from "@ant-design/pro-components";
import { router, usePage } from "@inertiajs/react";
import { Form, message } from "antd";
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import BackButton from "../../Components/Common/BackButton";
import { SubjectFormFields } from "../../Components/Subjects/SubjectFormFields";
import AppShell from "../../Layouts/AppShell";

const SubjectCreate = () => {
    const { errors } = usePage().props;

    const onFinish = (values) => {
        router.post("/subjects", values);
        message.success("New subject created");
    };

    return (
        <PageContainer
            loading={false}
            title="Subjects"
            subTitle="Manage subjects"
            backIcon={<AiOutlineLeft />}
            breadcrumb={{
                routes: [
                    {
                        path: "/",
                        breadcrumbName: "Classrooms",
                    },
                    {
                        path: "/",
                        breadcrumbName: "List",
                    },
                ],
            }}
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
                    <SubjectFormFields errors={errors} />
                </Form>
            </ProCard>
        </PageContainer>
    );
};

SubjectCreate.layout = (page) => <AppShell children={page} />;
export default SubjectCreate;
