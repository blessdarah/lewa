import { router } from "@inertiajs/react";
import { Button, Empty, Table } from "antd";
import React from "react";
import { academicYearTableColumns } from "./academicYearTableColumns";

export const AcademicYearTable = ({ academicYears }) => {
    return (
        <>
            {academicYears.length > 0 ? (
                <Table
                    dataSource={academicYears}
                    columns={academicYearTableColumns}
                    size="small"
                    scroll={{ x: 600 }}
                    rowKey={"code"}
                    onRow={(record) => {
                        return {
                            onClick: (e) => {
                                router.get(`/academic-years/${record.id}`);
                            },
                        };
                    }}
                />
            ) : (
                <Empty description="No academic years">
                    <Button onClick={() => router.get("/academic-years/create")}>
                        Add acadmeic year
                    </Button>
                </Empty>
            )}
        </>
    );
};
