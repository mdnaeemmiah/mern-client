
import Navbar from "@/components/shared/Navbar";



const CommonLayout = ({children} :{children:React.ReactNode}) => {
    return (
        <>
          <Navbar></Navbar>
          <div className="min-h-screen container mx-auto">
          {children}
          </div>
        </>
    );
};

export default CommonLayout; 