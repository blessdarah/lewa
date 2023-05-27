import { PageContainer, ProCard } from "@ant-design/pro-components";
import { router } from "@inertiajs/react";
import { Button, Input } from "antd";
import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlinePlus } from "react-icons/ai";
import { StudentTable } from "../../Components/Students/StudentTable.jsx";
import AppShell from "../../Layouts/AppShell.jsx";

const StudentIndex = ({ students }) => {
    const [filteredData, setFilteredData] = useState(students);

    const filter = ({ target: { value } }) => {
        setFilteredData(
            students.filter(
                (item) =>
                    item.code.toLowerCase().includes(value.toLowerCase()) ||
                    item.title.toLowerCase().includes(value.toLowerCase()) ||
                    item.description.toLowerCase().includes(value.toLowerCase())
            )
        );
    };

    return (
        <PageContainer
            loading={false}
            title="Student"
            subTitle="Manage students"
            backIcon={<AiOutlineArrowLeft />}
            breadcrumb={{
                routes: [
                    {
                        path: "/",
                        breadcrumbName: "Students",
                    },
                    {
                        path: "/",
                        breadcrumbName: "List",
                    },
                ],
            }}
            extra={
                <>
                    <Button
                        type="primary"
                        onClick={() => router.get("/students/create")}
                        icon={<AiOutlinePlus />}
                    >
                        New student
                    </Button>
                </>
            }
        >
            <ProCard
                size="small"
                extra={
                    <Input
                        allowClear
                        type="search"
                        placeholder="Filter"
                        onChange={filter}
                    />
                }
            >
                <StudentTable students={filteredData} />
            </ProCard>
        </PageContainer>
    );
};

StudentIndex.layout = (page) => <AppShell children={page} />;

export default StudentIndex;
