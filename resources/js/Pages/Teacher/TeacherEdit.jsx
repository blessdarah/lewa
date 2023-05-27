import { PageContainer, ProCard } from "@ant-design/pro-components";
import { router, usePage } from "@inertiajs/react";
import { Form, message } from "antd";
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { TeacherFormFields } from "../../Components/Teacher/TeacherFormFields";
import BackButton from "../../Components/Common/BackButton";
import AppShell from "../../Layouts/AppShell";
import dayjs from "dayjs";
import { useDate } from "../../Hooks/date.hook";

const TeacherEdit = ({ teacher }) => {
    const { formatDate } = useDate();
    const { errors } = usePage().props;

    const onFinish = (values) => {
        router.patch(`/teachers/${teacher.id}`, {
            ...values,
            dob: formatDate(values.dob),
        });
        message.success("Teacher updated");
    };

    return (
        <PageContainer
            loading={false}
            title="Teacher"
            subTitle="Edit teacher"
            breadcrumb={{
                routes: [
                    {
                        path: "/teachers",
                        breadcrumbName: "Teachers",
                    },
                    {
                        path: "/",
                        breadcrumbName: "Edit",
                    },
                ],
            }}
            backIcon={<AiOutlineLeft />}
            extra={
                <>
                    <BackButton />
                </>
            }
        >
            <ProCard size="small">
                <Form
                    name="edit-teacher-form"
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={{ ...teacher, dob: dayjs(teacher.dob) }}
                >
                    <TeacherFormFields errors={errors} />
                </Form>
            </ProCard>
        </PageContainer>
    );
};

TeacherEdit.layout = (page) => <AppShell children={page} />;
export default TeacherEdit;
