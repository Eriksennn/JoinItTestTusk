import { Navigate, Route, Routes } from "react-router-dom";
import { Path } from "./Path";
import { Calendar } from "@/screens";

export const NavigationParams = () => {
  return (
    <Routes>
      <Route path='*' element={<Navigate to={Path.CALENDAR} replace />} />
      <Route path={Path.CALENDAR} element={<Calendar />} />
    </Routes>
  );
};
