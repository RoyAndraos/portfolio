import { createContext, useState } from "react";

export const ServicesContext = createContext("");
// handles services to be loaded
export const ServicesProvider = ({ children }) => {
  const [services, setServices] = useState([
    {
      _id: "01",
      name: "coupe femme",
      english: "women haircut",
      price: "30$",
      duration: "2",
    },
    {
      _id: "02",
      name: "coupe et lavage",
      english: "haircut and wash",
      price: "30$",
      duration: "2",
    },
    {
      _id: "03",
      name: "coupe homme",
      english: "haircut men",
      price: "25$",
      duration: "2",
    },
    {
      _id: "04",
      name: "combo coupe et barbe",
      english: "combo haircut and beard",
      price: "40$-50$",
      duration: "2",
    },
    {
      _id: "05",
      name: "age d'or",
      english: "age d'or",
      price: "22$",
      duration: "1",
    },
    {
      _id: "06",
      name: "coupe enfant",
      english: "haircut kids",
      price: "25$",
      duration: "1",
    },
    {
      _id: "07",
      name: "barbe avec tendeuse ou lame",
      english: "beard with razor or trimmer",
      price: "20$",
      duration: "1",
    },
    {
      _id: "08",
      name: "barbe avec serviette chaude",
      english: "beard with hot towel",
      price: "25$",
      duration: "1",
    },
  ]);
  return (
    <ServicesContext.Provider value={{ services, setServices }}>
      {children}
    </ServicesContext.Provider>
  );
};
