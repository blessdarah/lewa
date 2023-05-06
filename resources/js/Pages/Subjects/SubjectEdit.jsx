import { PageContainer, ProCard } from "@ant-design/pro-components";
import { router, usePage } from "@inertiajs/react";
import { Form, message } from "antd";
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import BackButton from "../../Components/Common/BackButton";
import { SubjectFormFields } from "../../Components/Subjects/SubjectFormFields";
import AppShell from "../../Layouts/AppShell";

const SubjectEdit = ({ subject }) => {
    const { errors } = usePage().props;

    const onFinish = (values) => {
        router.patch(`/subjects/${subject.id}`, values);
        message.success("Subject updated");
        console.log("edit: ", errors);
    };

    return (
        <PageContainer
            loading={false}
            title="Subject"
            subTitle="Edit subject"
            backIcon={<AiOutlineLeft />}
            extra={
                <>
                    <BackButton />
                </>
            }
        >
            <ProCard size="small">
                <Form
                    name="edit-subject-form"
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={subject}
                >
                    <SubjectFormFields errors={errors} />
                </Form>
            </ProCard>
        </PageContainer>
    );
};

SubjectEdit.layout = (page) => <AppShell children={page} />;
export default SubjectEdit;
