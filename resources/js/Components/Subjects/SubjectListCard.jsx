import { Button, Card, Modal, Transfer } from "antd";
import React, { useState } from "react";
import { SubjectTable } from "./SubjectTable";
import "./subject-styles.css";
import { router } from "@inertiajs/react";

const SubjectListCard = ({ classroom, subjects }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [targetKeys, setTargetKeys] = useState(
        classroom.subjects.map((subject) => subject.id)
    );

    console.log("classroom: ", classroom);
    const transferData = subjects.map((subject) => {
        return {
            key: subject.id,
            title: subject.title,
            description: subject.description,
        };
    });

    const handleOk = () => {
        router.put(`/classrooms/${classroom.id}?attach=subjects`, {
            subjects: targetKeys,
        });
    };

    /**
     * hanle change
     * @param {string[]} newTargetKeys
     */
    const handleChange = (newTargetKeys) => {
        setTargetKeys(newTargetKeys);
    };

    return (
        <>
            <Modal
                width={"50rem"}
                title="Attach subjects to this class"
                okText="Save"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={() => setIsModalOpen(false)}
            >
                <Transfer
                    dataSource={transferData}
                    key="code"
                    showSearch
                    // filterOption={filterOption}
                    targetKeys={targetKeys}
                    onChange={handleChange}
                    // onSearch={handleSearch}
                    render={(item) => item.title}
                />
            </Modal>
            <Card
                size="small"
                extra={
                    <Button onClick={() => setIsModalOpen(true)}>
                        Attach Subjects
                    </Button>
                }
            >
                <SubjectTable subjects={classroom.subjects} />
            </Card>
        </>
    );
};

export default SubjectListCard;
