export const teacherTableColumns = [
    {
        title: "Name",
        render: (_, row) => `${row.prefix} ${row.firstname} ${row.lastname}`,
    },
    {
        title: "Gender",
        dataIndex: "gender",
    },
    {
        title: "Email",
        dataIndex: "email",
    },
    {
        title: "Phone number",
        dataIndex: "phone_number",
    },
    {
        title: "Address",
        dataIndex: "address",
    },
];
