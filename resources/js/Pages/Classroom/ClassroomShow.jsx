import { PageContainer, ProCard } from "@ant-design/pro-components";
import { router } from "@inertiajs/react";
import {
    Button,
    Descriptions,
    Dropdown,
    message,
    Popconfirm,
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
import StudentListCard from "../../Components/Students/StudentListCard";
import SubjectListCard from "../../Components/Subjects/SubjectListCard";
import { ClassroomSubjectTeachersTable } from "../../Components/Classroom/ClassroomSubjectTeachersTable";

const ClassroomShow = ({ classroom, students, subjects, teacherSubjects }) => {
    console.log("teachers: ", teacherSubjects);
    const onChange = (key) => {
        console.log(key);
    };

    const dropdownOptions = [
        {
            key: "1",
            label: "Attach students",
        },
        {
            key: "2",
            label: "Attach teacher",
        },
    ];

    const items = [
        {
            key: "0",
            label: "Summary",
            children: <ClassroomSubjectTeachersTable data={teacherSubjects} />,
        },
        {
            key: "1",
            label: (
                <span>
                    <AiOutlineUsergroupAdd /> Students
                </span>
            ),
            children: <StudentListCard students={students} />,
        },
        {
            key: "2",
            label: "Subjects",
            children: (
                <SubjectListCard
                    classroom={classroom}
                    subjects={classroom.subjects}
                />
            ),
        },
        {
            key: "3",
            label: "Teachers",
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
            breadcrumb={{
                routes: [
                    {
                        path: "/classrooms",
                        breadcrumbName: "Classrooms",
                    },
                    {
                        path: "/",
                        breadcrumbName: "Detail",
                    },
                ],
            }}
            extra={
                <>
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
                    </Space>
                </>
            }
        >
            <ProCard>
                <Descriptions
                    title="Classroom info"
                    extra={
                        <React.Fragment>
                            <Dropdown.Button
                                menu={{
                                    items: dropdownOptions,
                                }}
                            >
                                Options
                            </Dropdown.Button>
                        </React.Fragment>
                    }
                >
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
