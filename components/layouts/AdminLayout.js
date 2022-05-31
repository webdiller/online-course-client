import TopNav from '@/sections/TopNav'
import { getLayout as getSiteLayout } from './SiteLayout'

const AdminLayout = ({ children }) => {
  return (
    <div className='admin-layout'>
      <div className="admin-layout__container">
        <TopNav />
        {children}
      </div>
    </div>
  )
}

export const getLayout = page =>
  getSiteLayout(<AdminLayout>{page}</AdminLayout>)

export default AdminLayout