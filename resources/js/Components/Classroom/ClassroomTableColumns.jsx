export const classroomTableColumns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Code",
        dataIndex: "code",
        key: "code",
    },
    {
        title: "Description",
        dataIndex: "description",
        key: "description",
    },
    {
        title: "Enrollment",
        key: "enrollment",
        render: (_, row) => row.students.length,
    },
];
