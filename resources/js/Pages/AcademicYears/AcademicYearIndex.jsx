import { PageContainer, ProCard } from "@ant-design/pro-components";
import { router } from "@inertiajs/react";
import { Button, Input } from "antd";
import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlinePlus } from "react-icons/ai";
import AppShell from "../../Layouts/AppShell.jsx";
import { AcademicYearTable } from "../../Components/AcademicYears/AcademicYearTable.jsx";

const academicYearIndex = ({ academicYears }) => {
    const [filteredData, setFilteredData] = useState(academicYears);

    const filter = ({ target: { value } }) => {
        setFilteredData(
            academicYears.filter(
                (item) =>
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
                        breadcrumbName: "Academic Years",
                    },
                    {
                        path: "/",
                        breadcrumbName: "List",
                    },
                ],
            }}
            title="Academic Year"
            subTitle="Manage academic years"
            backIcon={<AiOutlineArrowLeft />}
            extra={
                <>
                    <Button
                        type="primary"
                        onClick={() => router.get("/academic-years/create")}
                        icon={<AiOutlinePlus />}
                    >
                        Add academic year
                    </Button>
                </>
            }
        >
            <ProCard
                size="small"
                extra={<Input placeholder="Filter" onChange={filter} />}
            >
                <AcademicYearTable academicYears={filteredData} />
            </ProCard>
        </PageContainer>
    );
};

academicYearIndex.layout = (page) => <AppShell children={page} />;

export default academicYearIndex;
