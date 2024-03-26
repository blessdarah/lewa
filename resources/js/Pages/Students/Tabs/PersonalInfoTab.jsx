import React from 'react'
import { Row, Col, List, Typography } from 'antd'

export const PersonalInfoTab = ({ student, classroom }) => {
    const data = [
        {
            lable: "Name",
            value: `${student.name} ${student.surname}`
        },
        {
            lable: "Classroom",
            value: classroom.name
        },
        {
            lable: "Has disability?",
            value: student.is_disabled
        },
        {
            lable: "Age",
            value: new Date().getFullYear() - new Date(student.dob).getFullYear()
        },
        {
            lable: "Address",
            value: student.address
        },
        {
            lable: "Date of birth",
            value: student.dob
        },
        {
            lable: "Place of birth",
            value: student.pob
        },
        {
            lable: "Country",
            value: student.country
        },
        {
            lable: "Region",
            value: student.region
        },
        {
            lable: "City/Town",
            value: student.city
        },
        {
            lable: "Email",
            value: student.email
        },
    ]
    return (
        <div>
            <List
                bordered
                size='small'
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item key={index} >
                        <Row gutter={[16, 16]} style={{ width: '100%' }}>
                            <Col span={6}>
                                <Typography.Text strong>{item.lable}</Typography.Text>
                            </Col>
                            <Col span={14}>
                                <Typography.Text>{item.value}</Typography.Text>
                            </Col>
                        </Row>
                    </List.Item>
                )}
            />

        </div>
    )
}
