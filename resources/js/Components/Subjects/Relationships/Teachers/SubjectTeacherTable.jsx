import { router } from "@inertiajs/react";
import { Table } from "antd";
import React from "react";
import { subjectTeacherTableColumns } from "./SubjectTeacherTableColumns";

export const SubjectTeacherTable = ({ teachers }) => {
    return (
        <Table
            dataSource={teachers}
            columns={subjectTeacherTableColumns}
            size="small"
            scroll={{ x: 600 }}
            rowKey={"email"}
            onRow={(record) => {
                return {
                    onClick: (e) => {
                        router.get(`/teachers/${record.id}`);
                    },
                };
            }}
        />
    );
};
