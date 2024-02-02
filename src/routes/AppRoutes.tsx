//THIS FILE HANDLES THE WHOLE PAGE ROUTES OF THE APPLICATION
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Home2, InviteFrnd, LastPage, ReferralCode, SocialFeed } from "../pages";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/step2" element={<Home2 />} />
        <Route path="/social" element={<SocialFeed />} />
        <Route path="/invite" element={<InviteFrnd />} />
        <Route path="/code" element={<ReferralCode />} />
        <Route path="/last" element={<LastPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes