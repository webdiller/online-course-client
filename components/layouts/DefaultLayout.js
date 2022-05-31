import Footer from "@/sections/Footer";
import TopNav from "@/sections/TopNav";
import { getLayout as getSiteLayout } from './SiteLayout'

const DefaultLayout = ({ children }) => (
  <div className='default-layout'>
    <div className="default-layout__container">
      <TopNav />
      {children}
      <Footer />
    </div>
  </div>
)

export const getLayout = page =>
  getSiteLayout(<DefaultLayout>{page}</DefaultLayout>)

export default DefaultLayout