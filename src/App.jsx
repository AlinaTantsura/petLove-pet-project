// import { LoadingPage } from './components/LoadingPage'
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Homepage"))
const News = lazy(() => import("./pages/Newspage"));
const Notices = lazy(() => import("./pages/Noticespage"));
const Friends = lazy(() => import("./pages/Friendspage"));
const Register = lazy(() => import("./pages/Registerpage"));
const Login = lazy(() => import("./pages/LoginPage"));
const Error = lazy(()=>import("./pages/Errorpage"))

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
