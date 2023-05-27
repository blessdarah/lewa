import { router } from "@inertiajs/react";
import { Button, Empty, Table } from "antd";
import React from "react";
import { teacherTableColumns } from "./TeacherTableColumns";

export const TeacherTable = ({ teachers }) => {
    return (
        <>
            {teachers.length > 0 ? (
                <Table
                    dataSource={teachers}
                    columns={teacherTableColumns}
                    size="small"
                    scroll={{ x: 600 }}
                    rowKey={"code"}
                    onRow={(record) => {
                        return {
                            onClick: (e) => {
                                router.get(`/teachers/${record.id}`);
                            },
                        };
                    }}
                />
            ) : (
                <Empty description="No teachers">
                    <Button onClick={() => router.get("/teachers/create")}>
                        Add teacher
                    </Button>
                </Empty>
            )}
        </>
    );
};
