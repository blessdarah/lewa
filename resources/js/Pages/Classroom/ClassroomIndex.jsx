import { PageContainer, ProCard } from "@ant-design/pro-components";
import { router } from "@inertiajs/react";
import { Button, Input } from "antd";
import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlinePlus } from "react-icons/ai";
import { ClassroomTable } from "../../Components/Classroom/ClassroomTable.jsx";
import AppShell from "../../Layouts/AppShell.jsx";

const ClassroomIndex = ({ classrooms }) => {
    const [filteredData, setFilteredData] = useState(classrooms);

    const filter = ({ target: { value } }) => {
        setFilteredData(
            classrooms.filter(
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
                items: [
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
            title="Classroom"
            subTitle="Manage classrooms"
            backIcon={<AiOutlineArrowLeft />}
            extra={
                <>
                    <Button
                        type="primary"
                        onClick={() => router.get("/classrooms/create")}
                        icon={<AiOutlinePlus />}
                    >
                        New class
                    </Button>
                </>
            }
        >
            <ProCard
                size="small"
                extra={<Input placeholder="Filter" onChange={filter} />}
            >
                <ClassroomTable classrooms={filteredData} />
            </ProCard>
        </PageContainer>
    );
};

ClassroomIndex.layout = (page) => <AppShell children={page} />;

export default ClassroomIndex;
