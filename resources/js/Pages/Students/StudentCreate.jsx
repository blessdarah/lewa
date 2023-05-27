import { PageContainer, ProCard } from "@ant-design/pro-components";
import { router, usePage } from "@inertiajs/react";
import { Form, message } from "antd";
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import BackButton from "../../Components/Common/BackButton";
import { StudentFormFields } from "../../Components/Students/StudentFormFields";
import AppShell from "../../Layouts/AppShell";
import { useDate } from "../../Hooks/date.hook";

const StudentCreate = ({ guardians, classrooms }) => {
    const { formatDate } = useDate();
    const { errors } = usePage().props;

    const onFinish = (values) => {
        router.post("/students", {
            ...values,
            dob: formatDate(values.dob),
        });
        message.success("New student created");
        console.log("error: ", errors);
    };

    return (
        <PageContainer
            loading={false}
            title="Students"
            subTitle="Manage students"
            backIcon={<AiOutlineLeft />}
            breadcrumb={{
                routes: [
                    {
                        path: "/",
                        breadcrumbName: "Students",
                    },
                    {
                        path: "/",
                        breadcrumbName: "Create",
                    },
                ],
            }}
            extra={
                <>
                    <BackButton />
                </>
            }
        >
            <ProCard size="small" title="Create student">
                <Form
                    name="create-student-form"
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <StudentFormFields
                        guardians={guardians}
                        classrooms={classrooms}
                        errors={errors}
                    />
                </Form>
            </ProCard>
        </PageContainer>
    );
};

StudentCreate.layout = (page) => <AppShell children={page} />;
export default StudentCreate;
