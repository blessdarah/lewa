import { router } from "@inertiajs/react";
import { Table } from "antd";
import React from "react";
import { subjectClassroomTableColumns } from "./SubjectClassroomTableColumns";

export const SubjectClassroomTable = ({ classrooms }) => {
    return (
        <Table
            dataSource={classrooms}
            columns={subjectClassroomTableColumns}
            size="small"
            scroll={{ x: 600 }}
            rowKey={"code"}
            onRow={(record) => {
                return {
                    onClick: (e) => {
                        router.get(`/classrooms/${record.id}`);
                    },
                };
            }}
        />
    );
};
