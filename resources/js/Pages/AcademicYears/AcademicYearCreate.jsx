import { PageContainer, ProCard } from "@ant-design/pro-components";
import { router, usePage } from "@inertiajs/react";
import { Form, message } from "antd";
import React from "react";
import AppShell from "../../Layouts/AppShell";
import { AcademicYearFormFields } from "../../Components/AcademicYears/AcademicYearFormFields";
import { useDate } from "../../Hooks/date.hook";

const AcademicYearCreate = () => {
    const { errors } = usePage().props;
    const { formatDate } = useDate();

    const onFinish = (values) => {
        router.post("/academic-years", {
            ...values,
            start_date: formatDate(values.start_date),
            end_date: formatDate(values.end_date),
        });
        message.success("New academic year created");
    };

    return (
        <PageContainer
            loading={false}
            title="AcademicYear"
            subTitle="Manage academic years"
            breadcrumb={{
                routes: [
                    {
                        path: "/academic-years",
                        breadcrumbName: "Academic Years",
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
                    name="create-academicyear-form"
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <AcademicYearFormFields errors={errors} />
                </Form>
            </ProCard>
        </PageContainer>
    );
};

AcademicYearCreate.layout = (page) => <AppShell children={page} />;
export default AcademicYearCreate;
