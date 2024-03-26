import { Table } from "antd";
import React from "react";

export const ClassroomSubjectTeachersTable = ({ data }) => {
    const columns = [
        {
            title: "Subject",
            dataIndex: "subject",
        },
        {
            title: "Teacher",
            dataIndex: "teacher",
        },
    ];

    return (
        <Table
            dataSource={data}
            columns={columns}
            size="small"
            scroll={{ x: 600 }}
        />
    );
};
