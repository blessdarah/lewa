import { PageContainer, ProCard } from "@ant-design/pro-components";
import { router } from "@inertiajs/react";
import { Button, Input } from "antd";
import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlinePlus } from "react-icons/ai";
import { TeacherTable } from "../../Components/Teacher/TeacherTable.jsx";
import AppShell from "../../Layouts/AppShell.jsx";

const TeacherIndex = ({ teachers }) => {
    const [filteredData, setFilteredData] = useState(teachers);

    const filter = ({ target: { value } }) => {
        setFilteredData(
            teachers.filter(
                (item) =>
                    item.name.toLowerCase().includes(value.toLowerCase()) ||
                    item.description.toLowerCase().includes(value.toLowerCase())
            )
        );
    };
    return (
        <PageContainer
            loading={false}
            breadcrumb={{
                routes: [
                    {
                        path: "/",
                        breadcrumbName: "Teachers",
                    },
                    {
                        path: "/",
                        breadcrumbName: "List",
                    },
                ],
            }}
            title="Teacher"
            subTitle="Manage teachers"
            backIcon={<AiOutlineArrowLeft />}
            extra={
                <>
                    <Button
                        type="primary"
                        onClick={() => router.get("/teachers/create")}
                        icon={<AiOutlinePlus />}
                    >
                        Add teacher
                    </Button>
                </>
            }
        >
            <ProCard
                size="small"
                extra={<Input placeholder="Filter" onChange={filter} />}
            >
                <TeacherTable teachers={filteredData} />
            </ProCard>
        </PageContainer>
    );
};

TeacherIndex.layout = (page) => <AppShell children={page} />;

export default TeacherIndex;
