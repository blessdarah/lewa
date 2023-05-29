import { Button, Card, Modal, Transfer } from "antd";
import React, { useState } from "react";
import { SubjectClassroomTable } from "./SubjectClassroomTable";
import { router } from "@inertiajs/react";

const SubjectClassroomList = ({ subject, classrooms }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [targetKeys, setTargetKeys] = useState(
        subject.classrooms.map((classroom) => classroom.id)
    );

    const transferData = classrooms.map((classroom) => {
        return {
            key: classroom.id,
            title: classroom.code,
            description: classroom.description,
        };
    });

    const handleOk = () => {
        router.put(`/subjects/${subject.id}?attach=classrooms`, {
            classrooms: targetKeys,
        });
        setIsModalOpen(false);
    };

    return (
        <>
            <Modal
                title="Attach classroom to subject"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={() => setIsModalOpen(false)}
            >
                <Transfer
                    dataSource={transferData}
                    key="code"
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
                <SubjectClassroomTable classrooms={subject.classrooms} />
            </Card>
        </>
    );
};

export default SubjectClassroomList;
