import { PageContainer, ProCard } from "@ant-design/pro-components";
import { router } from "@inertiajs/react";
import {
    Button,
    Col,
    Descriptions,
    message,
    Popconfirm,
    Row,
    Space,
    Tabs,
} from "antd";
import React from "react";
import {
    AiOutlineDelete,
    AiOutlineEdit,
    AiOutlineUsergroupAdd,
} from "react-icons/ai";
import AppShell from "../../Layouts/AppShell";

const StudentShow = ({ student }) => {
    const onChange = (key) => {
        console.log(key);
    };

    const items = [
        {
            key: "1",
            label: (
                <span>
                    <AiOutlineUsergroupAdd /> Personal info
                </span>
            ),
            children: `Content of Tab Pane 1`,
        },
        {
            key: "2",
            label: "Parental info",
            children: `Content of Tab Pane 2`,
        },
        {
            key: "3",
            label: "Class",
            children: `Content of Tab Pane 3`,
        },
        {
            key: "4",
            label: "Disciplinary info",
            children: `Content of Tab Pane 3`,
        },
        {
            key: "5",
            label: "Test history",
            children: `Content of Tab Pane 3`,
        },
    ];
    const handleDelete = (e) => {
        router.delete(`/students/${student.id}`);
        message.success("Student deleted successfully");
    };

    return (
        <PageContainer
            title="Student detail"
            extra={
                <Space>
                    <Button
                        icon={<AiOutlineEdit />}
                        onClick={() =>
                            router.get(`/students/${student.id}/edit`)
                        }
                    >
                        Edit
                    </Button>
                    <Popconfirm
                        title="Delete the student"
                        description="Are you sure to delete this class?"
                        onConfirm={handleDelete}
                        onCancel={undefined}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button
                            type="primary"
                            danger
                            icon={<AiOutlineDelete />}
                        >
                            Delete
                        </Button>
                    </Popconfirm>
                </Space>
            }
        >
            <ProCard extra={[]} style={{ marginBottom: "1rem" }}></ProCard>
            <ProCard>
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </ProCard>
        </PageContainer>
    );
};

StudentShow.layout = (page) => <AppShell children={page} />;

export default StudentShow;
