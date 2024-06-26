import { PageContainer, ProCard } from "@ant-design/pro-components";
import { router } from "@inertiajs/react";
import { Button, Descriptions, message, Popconfirm, Space, Tabs } from "antd";
import React from "react";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import AppShell from "../../Layouts/AppShell";
import { SubjectTable } from "../../Components/Subjects/SubjectTable";
import { ClassroomTable } from "../../Components/Classroom/ClassroomTable";

const TeacherShow = ({ teacher, classrooms }) => {
  classrooms.map((item) => (item.students = []));
  console.log("classrooms: ", classrooms);
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: (
        <span>
          <AiOutlineUsergroupAdd /> Classrooms
        </span>
      ),
      children: <ClassroomTable classrooms={classrooms} />,
    },
    {
      key: "2",
      label: "Subjects",
      children: <SubjectTable subjects={teacher.subjects} />,
    },
    {
      key: "3",
      label: "Notes",
      children: `Content of Tab Pane 3`,
    },
  ];

  const handleDelete = (e) => {
    router.delete(`/teachers/${teacher.id}`);
    message.success("Teacher deleted successfully");
  };

  return (
    <PageContainer
      title="Teacher detail"
      breadcrumb={{
        routes: [
          {
            path: "/teachers",
            breadcrumbName: "Teachers",
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
                router.get(`/teachers/${teacher.id}/edit`)
              }
            >
              Edit
            </Button>
            <Popconfirm
              title="Delete the teacher"
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
        <Descriptions title="Teacher info">
          <Descriptions.Item label="Name">
            {`${teacher.prefix} ${teacher.lastname} ${teacher.firstname}`}
          </Descriptions.Item>
          <Descriptions.Item label="Tell">
            {teacher.phone_number}
          </Descriptions.Item>
          <Descriptions.Item label="Addres">
            {teacher.address}
          </Descriptions.Item>
        </Descriptions>

        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </ProCard>
    </PageContainer>
  );
};

TeacherShow.layout = (page) => <AppShell children={page} />;

export default TeacherShow;
