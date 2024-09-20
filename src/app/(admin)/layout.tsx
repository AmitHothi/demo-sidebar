import Sidebar from '@/components/layout/sidebar';

const AdminLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => (
  <div className='w-full px-4 min-h-screen flex flex-1 overflow-hidden'>
    <Sidebar />
    <div className='p-4 h-full w-full'>{children}</div>
  </div>
);
export default AdminLayout;
