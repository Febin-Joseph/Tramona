import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Home2, InviteFrnd, LastPage, ReferralCode, SocialFeed } from "../pages";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="/step2" element={<Home2 />}></Route>
        <Route path="/social" element={<SocialFeed />}></Route>
        <Route path="/invite" element={<InviteFrnd />}></Route>
        <Route path="/code" element={<ReferralCode />}></Route>
        <Route path="/last" element={<LastPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes