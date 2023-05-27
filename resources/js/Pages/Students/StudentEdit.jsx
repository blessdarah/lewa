import { PageContainer, ProCard } from "@ant-design/pro-components";
import { router, usePage } from "@inertiajs/react";
import { Form, message } from "antd";
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import BackButton from "../../Components/Common/BackButton";
import { StudentFormFields } from "../../Components/Students/StudentFormFields";
import AppShell from "../../Layouts/AppShell";
import { useDate } from "../../Hooks/date.hook";
import dayjs from "dayjs";

const StudentEdit = ({ student, classrooms }) => {
    const { formatDate } = useDate();
    const { errors } = usePage().props;

    const onFinish = (values) => {
        router.patch(`/students/${student.id}`, {
            ...values,
            dob: formatDate(values.dob),
        });
        message.success("Student updated");
    };

    return (
        <PageContainer
            loading={false}
            title="Student"
            subTitle="Edit student"
            backIcon={<AiOutlineLeft />}
            extra={
                <>
                    <BackButton />
                </>
            }
        >
            <ProCard size="small">
                <Form
                    name="edit-student-form"
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={{
                        ...student,
                        dob: dayjs(student.dob),
                    }}
                >
                    <StudentFormFields
                        classrooms={classrooms}
                        errors={errors}
                    />
                </Form>
            </ProCard>
        </PageContainer>
    );
};

StudentEdit.layout = (page) => <AppShell children={page} />;
export default StudentEdit;
