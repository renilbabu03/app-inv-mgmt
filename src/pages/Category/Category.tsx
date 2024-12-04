import { message, Space, Button, Table } from "antd";
import { Header } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import { useCategories } from "../../hooks/Category/useCategories";
import { useDeleteCategory } from "../../hooks/Category/useDeleteCategory";

export const Categories: React.FC = () => {
    const navigate = useNavigate();
    const { error: fetchError, loading, categories, refetch } = useCategories();
    const { deleteCategory, loading: deleting, error: deleteError } = useDeleteCategory();

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
            <Header style={{ padding: 0, background: 'white' }}>
                <Button
                    type="primary"
                    style={{
                        fontSize: '16px',
                        float: 'right',
                    }}
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
