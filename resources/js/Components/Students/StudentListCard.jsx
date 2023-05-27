import { Button, Card, Form, Modal, Select } from "antd";
import React, { useState } from "react";
import { StudentTable } from "./StudentTable";

const StudentListCard = ({ students }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Modal
                title="Attach students to this class"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form name="attach_student_form">
                    <Form.List name="students">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map((field) => (
                                    <Form.Item label="Select classroom">
                                        <Select>
                                            <Select.Option value="1">
                                                School 1
                                            </Select.Option>
                                            <Select.Option value="2">
                                                School 2
                                            </Select.Option>
                                            <Select.Option value="3">
                                                School 3
                                            </Select.Option>
                                        </Select>
                                    </Form.Item>
                                ))}
                                <Button onClick={() => add()}>Add</Button>
                            </>
                        )}
                    </Form.List>
                    <Button htmlType="submit">Attach</Button>
                </Form>
            </Modal>
            <Card
                size="small"
                extra={<Button onClick={showModal}>Attach Students</Button>}
            >
                <StudentTable students={students} />
            </Card>
        </>
    );
};

export default StudentListCard;
