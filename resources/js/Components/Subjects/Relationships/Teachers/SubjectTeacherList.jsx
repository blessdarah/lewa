import { Button, Card, Modal, Transfer } from "antd";
import React, { useState } from "react";
import { SubjectTeacherTable } from "./SubjectTeacherTable";
import { router } from "@inertiajs/react";

const SubjectTeacherList = ({ subject, teachers }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [targetKeys, setTargetKeys] = useState(
        subject.teachers.map((teacher) => teacher.id)
    );

    const transferData = teachers.map((teacher) => {
        return {
            key: teacher.id,
            title: `${teacher.firstname} ${teacher.lastname}`,
            description: teacher.description,
        };
    });

    const handleOk = () => {
        router.put(`/subjects/${subject.id}?attach=teachers`, {
            teachers: targetKeys,
        });
        setIsModalOpen(false);
    };

    return (
        <>
            <Modal
                title="Attach teacher to subject"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={() => setIsModalOpen(false)}
            >
                <Transfer
                    dataSource={transferData}
                    key="email"
                    showSearch
                    targetKeys={targetKeys}
                    onChange={(newKeys) => setTargetKeys(newKeys)}
                    render={(item) => item.title}
                />
            </Modal>
            <Card
                size="small"
                extra={
                    <Button onClick={() => setIsModalOpen(true)}>
                        Attach class
                    </Button>
                }
            >
                <SubjectTeacherTable teachers={subject.teachers} />
            </Card>
        </>
    );
};

export default SubjectTeacherList;
