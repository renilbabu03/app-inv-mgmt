import { message, Space, Button, Table, Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import { useCategories } from "./hooks/useCategories";
import { useDeleteCategory } from "./hooks/useDeleteCategory";

export const Categories: React.FC = () => {
    const navigate = useNavigate();
    const { error: fetchError, loading, categories, refetch } = useCategories();
    const { deleteCategory, loading: deleting, error: deleteError } = useDeleteCategory();
    const { Title } = Typography
    const deleteCategoryById = async (id: number) => {
        try {
            await deleteCategory(id); // Call the hook's function
            message.success('Category deleted successfully');
            refetch(); // Refresh the categories list
        } catch (err: any) {
            message.error(`Failed to delete category: ${err.message}`);
        }
    };

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_: any, record: any) => (
                <Space size="middle">
                    <a onClick={() => deleteCategoryById(record.id)} >
                        Delete
                    </a>
                </Space>
            ),
        },
    ];

    if (loading) return <p>Loading...</p>;
    if (fetchError) return <p>Error: {fetchError}</p>;

    return (
        <>
            <Header className='bg-white flex justify-between items-center mb-3'>
                <Title level={2}>Category</Title>
                <Button
                    type="primary"

                    onClick={() => navigate('add')}

                >
                    Add
                </Button>
            </Header>
            {deleteError && <p style={{ color: 'red' }}>{deleteError}</p>}
            <Table dataSource={categories} columns={columns} />
        </>
    );
};
