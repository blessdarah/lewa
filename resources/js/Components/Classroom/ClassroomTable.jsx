import { router } from "@inertiajs/react";
import { Table } from "antd";
import React from "react";
import { classroomTableColumns } from "./ClassroomTableColumns";

export const ClassroomTable = ({ classrooms }) => {
    return (
        <Table
            dataSource={classrooms}
            columns={classroomTableColumns}
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
