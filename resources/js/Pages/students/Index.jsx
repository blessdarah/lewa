import React from "react";
import AppShell from "../../Layouts/AppShell";
import { PageContainer } from "@ant-design/pro-components";
import { Button } from "antd";
import { useModalContext } from "../../Contexts/AppModalContext";
import StudentForm from "../../Components/Students/StudentForm";

const StudentsPage = () => {
    const { setShow, setContent } = useModalContext();
    const createStudent = () => {
        setShow(true);
        setContent(<StudentForm />);
    };

    return (
        <PageContainer
            loading={false}
            title="Students"
            subTitle="Manage students"
            extra={
                <>
                    <Button onClick={createStudent}>Add student</Button>
                </>
            }
        >
            <h3>Student table goes here</h3>
            <StudentForm />
        </PageContainer>
    );
};

StudentsPage.layout = (page) => <AppShell children={page} />;

export default StudentsPage;
