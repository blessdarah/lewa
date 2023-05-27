export const studentTableColumns = [
    {
        title: "Name",
        dataIndex: "name",
        render: (_, row) => row.name + row.surname,
    },
    {
        title: "Class",
        dataIndex: "classroom_id",
        render: (_, row) => row.classroom.code ?? "na",
    },
    {
        title: "Gender",
        dataIndex: "gender",
    },
    {
        title: "Date of birth",
        dataIndex: "dob",
    },
    {
        title: "Place of birth",
        dataIndex: "pob",
    },
];
