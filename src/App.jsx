import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./screens/DashBoard/dashboard";
import Createcourse from "./screens/CreatingCourse/create-course";
import Testseries from "./screens/Test_Series/testseries";
import Createnewtest from "./screens/Test_Series/create-new-test";
import Login from "./screens/SignIn/log-in";
import Courses from "./screens/Course/courses";
import Query from "./screens/Query/query";
import Contentcourse from "./screens/CreatingCourse/content-course";
import Studentdetails from "./screens/Course/student-details";
import Liveclass from "./screens/LiveClass/live-class";
import Settings from "./screens/Settings/settings";
import Review from "./screens/Review/review";
import Referral from "./screens/Referrals/referrals";
import Createtests from "./screens/Test_Series/test";
import Layout from "./components/Common/layout";
import Facuilty from "./screens/Managment/Facuilty";
import Instructor from "./screens/Managment/Instructor";
import FreeCourse from "./screens/Course/FreeCourse";
import StudentDetails from "./screens/StudentDetails/StudentDetails";
import { useAuth } from "./hooks/use-auth";

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Layout>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/createcourse" element={<Createcourse />} />
                  <Route path="/testseries" element={<Testseries />} />
                  <Route path="/createnewtest" element={<Createnewtest />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/query" element={<Query />} />
                  <Route path="/contentcourse" element={<Contentcourse />} />
                  <Route path="/studentdetails" element={<Studentdetails />} />
                  <Route path="/liveclass" element={<Liveclass />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/reviews" element={<Review />} />
                  <Route path="/referral" element={<Referral />} />
                  <Route path="/tests" element={<Createtests />} />
                  <Route path="/faculty" element={<Facuilty />} />
                  <Route path="/freecourse" element={<FreeCourse/>} />
                  <Route path="/studentdetailspage" element={<StudentDetails/>} />
                  <Route path="/instructors" element={<Instructor />} />
                </Routes>
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;