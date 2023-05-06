import { PageContainer, ProCard } from "@ant-design/pro-components";
import { router } from "@inertiajs/react";
import { Button, Descriptions, message, Popconfirm, Space, Tabs } from "antd";
import React from "react";
import {
    AiOutlineDelete,
    AiOutlineEdit,
    AiOutlineUsergroupAdd,
} from "react-icons/ai";
import BackButton from "../../Components/Common/BackButton";
import AppShell from "../../Layouts/AppShell";

const SubjectShow = ({ subject }) => {
    const onChange = (key) => {
        console.log(key);
    };

    const items = [
        {
            key: "1",
            label: (
                <span>
                    <AiOutlineUsergroupAdd /> Students
                </span>
            ),
            children: `Content of Tab Pane 1`,
        },
        {
            key: "2",
            label: "Teachers",
            children: `Content of Tab Pane 2`,
        },
        {
            key: "3",
            label: "Subjects",
            children: `Content of Tab Pane 3`,
        },
    ];
    const handleDelete = (e) => {
        router.delete(`/subjects/${subject.id}`);
        message.success("Subject deleted successfully");
    };

    return (
        <PageContainer
            title="Subject detail"
            extra={
                <Space>
                    <Button
                        icon={<AiOutlineEdit />}
                        onClick={() =>
                            router.get(`/subjects/${subject.id}/edit`)
                        }
                    >
                        Edit
                    </Button>
                    <Popconfirm
                        title="Delete the subject"
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
            <ProCard extra={[]}>
                <Descriptions title="Subject info">
                    <Descriptions.Item label="Code">
                        {subject.code}
                    </Descriptions.Item>
                    <Descriptions.Item label="Name">
                        {subject.name}
                    </Descriptions.Item>
                    <Descriptions.Item label="Description">
                        {subject.description}
                    </Descriptions.Item>
                    <Descriptions.Item label="Coefficient">
                        {subject.coefficient}
                    </Descriptions.Item>
                </Descriptions>

                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </ProCard>
        </PageContainer>
    );
};

SubjectShow.layout = (page) => <AppShell children={page} />;

export default SubjectShow;
