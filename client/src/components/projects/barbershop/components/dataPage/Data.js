import { useContext, useState } from "react";
import { ReservationContext } from "../contexts/ReservationContext";
import { ClientsContext } from "../contexts/ClientsContext";
import { useEffect } from "react";
import Cookies from "js-cookie";
import ServiceChart from "./ServiceChart";
import ClientChart from "./ClientChart";
import TimeSlotChart from "./TimeSlotChart";
import DataTypeBar from "./DataTypeBar";
import Loader from "../Loader";
import { UserContext } from "../contexts/UserContext";
import { ServicesContext } from "../contexts/ServicesContext";
import { EmployeeServicesContext } from "../contexts/EmployeeServicesContext";
import { TextContext } from "../contexts/TextContext";
import { LoginRoleContext } from "../contexts/LoginRoleContext";

const Data = () => {
  const [type, setType] = useState("week");
  const { reservations, setReservations } = useContext(ReservationContext);
  const { clients, setClients } = useContext(ClientsContext);
  const { setUserInfo, userInfo } = useContext(UserContext);
  const { setServices } = useContext(ServicesContext);
  const { setServicesEmp } = useContext(EmployeeServicesContext);
  const { setText } = useContext(TextContext);
  const { setRole } = useContext(LoginRoleContext);
  const [clientsData, setClientsData] = useState();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const currentDate = new Date();

    if (type === "week") {
      // Set the date to the Monday of the current week
      const dayOfWeek = currentDate.getDay();
      const difference = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // Calculate the difference to the previous Monday
      const monday = new Date(
        currentDate.setDate(currentDate.getDate() + difference)
      );
      setDate(monday);
    }

    if (type === "month") {
      // Set the date to the 1st of the current month
      const firstDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
      );
      setDate(firstDayOfMonth);
    }

    if (type === "year") {
      // Set the date to January 1st of the current year
      const firstDayOfYear = new Date(currentDate.getFullYear(), 0, 1);
      setDate(firstDayOfYear);
    }
  }, [type]);

  // go through clients and replace the reservations array (which usually is an array of ids) with the actual reservation objects
  useEffect(() => {
    if (clients && reservations) {
      const newClients = clients.map((client) => {
        const newReservations = client.reservations.map((reservation) => {
          return reservations.filter((res) => res._id === reservation)[0];
        });
        return { ...client, reservations: newReservations };
      });
      setClientsData(newClients);
    }
  }, [clients, reservations]);
  if (!clientsData) {
    return <Loader />;
  }
  return (
    <div>
      <DataTypeBar
        date={date}
        setDate={setDate}
        type={type}
        setType={setType}
      />
      <ServiceChart date={date} type={type} />
      <ClientChart clientsData={clientsData} type={type} date={date} />
      <TimeSlotChart />
    </div>
  );
};

export default Data;
