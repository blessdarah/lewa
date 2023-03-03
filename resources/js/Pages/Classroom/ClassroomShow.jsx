import { PageContainer, ProCard } from "@ant-design/pro-components";
import { router } from "@inertiajs/react";
import { Button, Descriptions, message, Popconfirm, Space, Tabs } from "antd";
import React from "react";
import {
    AiOutlineDelete,
    AiOutlineEdit,
    AiOutlineGroup,
    AiOutlineUsergroupAdd,
} from "react-icons/ai";
import BackButton from "../../Components/Common/BackButton";
import AppShell from "../../Layouts/AppShell";

const ClassroomShow = ({ classroom }) => {
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
        router.delete(`/classrooms/${classroom.id}`);
        message.success("Classroom deleted successfully");
    };

    return (
        <PageContainer
            title="Classroom detail"
            extra={
                <>
                    <BackButton />
                </>
            }
        >
            <ProCard
                extra={[
                    <Space>
                        <Button
                            icon={<AiOutlineEdit />}
                            onClick={() =>
                                router.get(`/classrooms/${classroom.id}/edit`)
                            }
                        >
                            Edit
                        </Button>
                        <Popconfirm
                            title="Delete the classroom"
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
                    </Space>,
                ]}
            >
                <Descriptions title="Classroom info">
                    <Descriptions.Item label="Code">
                        {classroom.code}
                    </Descriptions.Item>
                    <Descriptions.Item label="Name">
                        {classroom.name}
                    </Descriptions.Item>
                    <Descriptions.Item label="Description">
                        {classroom.description}
                    </Descriptions.Item>
                </Descriptions>

                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </ProCard>
        </PageContainer>
    );
};

ClassroomShow.layout = (page) => <AppShell children={page} />;

export default ClassroomShow;
