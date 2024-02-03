import CmsLayout from "@/app/components/shared/layout/cms"
const Home = ()=>{
  console.log(process.env.npm_package_name)
  return (
    <>
      <CmsLayout>
         <h1>i am cms layout</h1>
      </CmsLayout>
    </>
  )
}

export default Home