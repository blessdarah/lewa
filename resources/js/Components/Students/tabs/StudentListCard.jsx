import { Button, Card, Form, Modal, Select } from "antd";
import React, { useState } from "react";
import { StudentTable } from "./StudentTable";

const ParentInfo = ({ student }) => {
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
                <Form name="attach_parent">
                    <Button htmlType="submit">Attach parent</Button>
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

export default ParentInfo;
