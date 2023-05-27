import { router } from "@inertiajs/react";
import { Table } from "antd";
import React from "react";
import { studentTableColumns } from "./StudentTableColumns";

export const StudentTable = ({ students }) => {
    return (
        <Table
            dataSource={students}
            columns={studentTableColumns}
            size="small"
            scroll={{ x: 600 }}
            rowKey={"code"}
            onRow={(record) => {
                return {
                    onClick: (e) => {
                        router.get(`/students/${record.id}`);
                    },
                };
            }}
        />
    );
};
