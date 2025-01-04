import AppSidebar from "./sidebar"
import Header from "./header"
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";

    const getTitle = () => {
        switch (location.pathname) {
          case '/':
            return 'Dashboard';
          case '/createcourse':
            return 'Create Course';
          case '/testseries':
            return 'Test Series';
          case '/createnewtest':
            return 'Create New Test';
          case '/login':
            return 'Login';
          case '/courses':
            return 'Courses';
          case '/query':
            return 'Query';
          case '/contentcourse':
            return 'Content Course';
          case '/studentdetails':
            return 'Student Details';
          case '/liveclass':
            return 'Live Class';
          case '/settings':
            return 'Settings';
          case '/reviews':
            return 'Reviews';
          case '/refferal':
            return 'Referral';
          case '/tests':
            return 'Tests';
          case '/faculty':
            return 'Faculties';
          case '/instructors':
            return 'Inscructors';
          case '/freecourse':
            return 'Free Course';
          default:
             return 'Admin Panel'; 
        }
      };
  return (
    <div>
        <div className="flex h-screen font-outfit">
      {!isLoginPage && <AppSidebar />}

      <div className={`flex-1  flex flex-col overflow-y-auto ${isLoginPage ? "" : "pl-[215px]"}`}>
        {!isLoginPage && <Header Title={getTitle()} />}
        <div className="flex-1">{children}</div>
      </div>
    </div>
    </div>
  )
}

export default Layout
