export const subjectTeacherTableColumns = [
    {
        title: "Name",
        dataIndex: "name",
        render: (_, row) => `${row.prefix} ${row.firstname} ${row.lastname}`,
    },
    {
        title: "Email",
        dataIndex: "email",
    },
    {
        title: "Address",
        dataIndex: "address",
    },
];
