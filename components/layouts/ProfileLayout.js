import Footer from "@/sections/Footer";
import TopNav from "@/sections/TopNav";
import { getLayout as getSiteLayout } from './SiteLayout'

const ProfileLayout = ({ children }) => (
  <div className='profile-layout'>
    <div className="profile-layout__container">
      <TopNav />
      {children}
      <Footer />
    </div>
  </div>
)

export const getLayout = page =>
  getSiteLayout(<ProfileLayout>{page}</ProfileLayout>)

export default ProfileLayout