import { Routes, Route } from "react-router-dom";
import NavBar from "./Navbar";
import WebsiteTools from "./websiteTools/WebsiteTools";
import Schedule from "./schedule/Schedule";
import TakeTimeOff from "./availability/TakeTimeOff";
import EditRsvp from "./schedule/rsvpComponents/editRsvpFolder/EditRsvp";
import { NotificationContext } from "./contexts/NotficationContext";
import { useContext } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import TimeSelect from "./availability/TimeSelect";

const AppBarbershop = () => {
  const { notification, setNotification } = useContext(NotificationContext);

  useEffect(() => {
    if (notification !== "") {
      setTimeout(() => {
        setNotification("");
      }, 3000);
    }
  }, [notification, setNotification]);

  return (
    <div>
      <NavBar />
      {notification !== "" && <Notification>{notification}</Notification>}
      <Routes>
        <Route path="/websiteTools" element={<WebsiteTools />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/availability" element={<TimeSelect />} />
        <Route path="/timeOff/:barberId" element={<TakeTimeOff />} />
        <Route path="/schedule/:_id" element={<EditRsvp />} />
      </Routes>
    </div>
  );
};
const Notification = styled.div`
  position: fixed;
  font-family: "Roboto", sans-serif;
  z-index: 1000;
  bottom: 0;
  right: 0;
  width: 300px;
  height: 80px;
  background-color: #e7e7e7;
  color: #035e3f;
  padding: 16px;
  margin: 16px;
  border-top: 5px solid #035e3f;
  border-radius: 3px;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 1px;
`;
export default AppBarbershop;
