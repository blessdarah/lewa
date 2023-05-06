import { PageContainer, ProCard } from "@ant-design/pro-components";
import { router } from "@inertiajs/react";
import { Button, Input } from "antd";
import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlinePlus } from "react-icons/ai";
import { SubjectTable } from "../../Components/Subjects/SubjectTable.jsx";
import AppShell from "../../Layouts/AppShell.jsx";

const SubjectIndex = ({ subjects }) => {
    const [filteredData, setFilteredData] = useState(subjects);

    const filter = ({ target: { value } }) => {
        setFilteredData(
            subjects.filter(
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
            title="Subject"
            subTitle="Manage subjects"
            backIcon={<AiOutlineArrowLeft />}
            breadcrumb={{
                routes: [
                    {
                        path: "/",
                        breadcrumbName: "Subjects",
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
                        onClick={() => router.get("/subjects/create")}
                        icon={<AiOutlinePlus />}
                    >
                        New subject
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
                <SubjectTable subjects={filteredData} />
            </ProCard>
        </PageContainer>
    );
};

SubjectIndex.layout = (page) => <AppShell children={page} />;

export default SubjectIndex;
