import CmsLayout from "@/app/components/shared/layout/cms"
const Home = ()=>{
  const app = {
    name: process.env.npm_package_name,
    version: process.env.npm_package_version
  }
  return (
    <>
      <CmsLayout app={app} />
    </>
  )
}

export default Home