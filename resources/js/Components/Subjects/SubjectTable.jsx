import { router } from "@inertiajs/react";
import { Table } from "antd";
import React from "react";
import { subjectTableColumns } from "./SubjectTableColumns";

export const SubjectTable = ({ subjects }) => {
    return (
        <Table
            dataSource={subjects}
            columns={subjectTableColumns}
            size="small"
            scroll={{ x: 600 }}
            rowKey={"code"}
            onRow={(record) => {
                return {
                    onClick: (e) => {
                        router.get(`/subjects/${record.id}`);
                    },
                };
            }}
        />
    );
};
