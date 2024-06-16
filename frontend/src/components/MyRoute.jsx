import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ClassSchedule from "../pages/ClassSchedule";
import MembershipPlans from "../pages/MemberPlan";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Dashboard from "../pages/DashBoard";
import EnrolledClasses from "./EnrolledClasses";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "../features/users/UserProfile";
import PaymentPage from "./PaymentPage";
import SuccessPage from "./SuccessPage";

const MyRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/class-schedule" element={<ClassSchedule />} />
      <Route path="/membership-plans" element={<MembershipPlans />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/success" element={<SuccessPage />} />

      <Route
        path="/dashboard/*" // indicates that this route can match any path that starts with /dashboard/
        element={
          <ProtectedRoute>
            {" "}
            {/* to ensure that only auth users can access the dashboard */}{" "}
            <Dashboard />{" "}
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="enrolled-classes" replace />} />
        {/* index-renders when the parent route matches but none of the child routes do */}
        {/* replace - replaces the current entry in the history stack instead of adding new one. this is useful to  prevent the user from using the back button to navigate to the previous URL */}
        <Route path="enrolled-classes" element={<EnrolledClasses />} />
        <Route path="profile" element={<Profile />} />
        {/* <Route path='settings' element={<Settings/>}/> */}
        {/* <Route path="/dashboard/enrolled-classes" element={<EnrolledClasses />} /> */}
      </Route>
    </Routes>
  );
};

export default MyRoute;
