// import { LoadingPage } from './components/LoadingPage'
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import MyNotices from "./components/Profile/MyNotices";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/auth/authSelectors";
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

const Addpet = lazy(() => import("./pages/Addpetpage"))
const Home = lazy(() => import("./pages/Homepage"))
const News = lazy(() => import("./pages/Newspage"));
const Notices = lazy(() => import("./pages/Noticespage"));
const Friends = lazy(() => import("./pages/Friendspage"));
const Register = lazy(() => import("./pages/Registerpage"));
const Login = lazy(() => import("./pages/LoginPage"));
const Profile = lazy(() => import("./pages/Profilepage"))
const Error = lazy(()=>import("./pages/Errorpage"))

function App() {
  const { token } = useSelector(selectUser);
  return (
    <>
      <ReactNotifications />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/register" element={token ? <Navigate to="/profile" /> : <Register />} />
        <Route path="/login" element={token ? <Navigate to="/profile" /> :<Login />} />
        <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />}>
          <Route index element={<MyNotices />} />
          <Route path="viewed" element={<MyNotices />} />
        </Route>
        <Route path="/add-pet" element={token ? <Addpet /> : <Navigate to="/login" />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
      </>
  );
}

export default App;
