import { useContext, useEffect, useState } from "react";
import { ReservationContext } from "../../../contexts/ReservationContext";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { NotificationContext } from "../../../contexts/NotficationContext";
import { isEqual } from "../../../helpers";
const SaveDelete = ({ formData, initialFormData, initialNote, note }) => {
  // useContext: notification, reservations
  const { setNotification } = useContext(NotificationContext);
  const { reservations, setReservations } = useContext(ReservationContext);
  const [hasNoteChanged, setHasNoteChanged] = useState(initialNote !== note);
  const [sendSMS, setSendSMS] = useState(true);
  const [isFormDataDifferent, setIsFormDataDifferent] = useState(
    !isEqual(formData, initialFormData)
  );

  useEffect(() => {
    // Update hasNoteChanged inside the useEffect
    setHasNoteChanged(initialNote !== note);
    setIsFormDataDifferent(!isEqual(formData, initialFormData));
  }, [note, initialNote, formData, initialFormData]);

  const params = useParams()._id;
  const navigate = useNavigate();

  // function: delete reservation from database and context
  const handleDeleteReservation = (e) => {
    setNotification("Reservation deleted successfully");
    setReservations(
      reservations.filter((reservation) => reservation._id !== params)
    );

    navigate("/projects/hollywoodBarberShop/schedule");
  };

  // function: save reservation to database and context
  const handleSaveReservationEdit = (e) => {
    e.preventDefault();
    if (hasNoteChanged) {
      setNotification("Note updated successfully");
      setReservations(
        reservations.map((reservation) => {
          if (reservation._id === params) {
            return formData;
          }
          return reservation;
        })
      );
      setNotification("Reservation updated successfully");
      navigate("/projects/hollywoodBarberShop/schedule");
    }
  };
  return (
    <ButtonWrapper>
      <CheckboxWrapper>
        <input
          type="checkbox"
          defaultChecked={sendSMS}
          onClick={() => {
            setSendSMS(!sendSMS);
          }}
        />
        <label>Send SMS</label>
      </CheckboxWrapper>
      <Delete onClick={(e) => handleDeleteReservation(e)}>Delete</Delete>
      <SaveChanges
        onClick={(e) => handleSaveReservationEdit(e)}
        disabled={!isFormDataDifferent && !hasNoteChanged}
      >
        Save
      </SaveChanges>
    </ButtonWrapper>
  );
};
const Delete = styled.button`
  background-color: #ad0606;
  border: none;
  border-radius: 10px;
  color: whitesmoke;
  padding: 10px;
  transition: 0.3s ease-in-out;
  width: 100px;
  font-size: 1.1rem;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.95);
  }
`;

const SaveChanges = styled.button`
  background-color: #035e3f;
  border: none;
  border-radius: 10px;
  color: whitesmoke;
  padding: 10px;
  width: 100px;
  font-size: 1.1rem;
  transition: 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.95);
  }
  &:disabled {
    background-color: grey;
    color: whitesmoke;
    border: 2px solid transparent;
    cursor: default;
    &:hover {
      cursor: default;
      opacity: 1;
    }
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0;
  color: #035e3f;
  width: 7vw;
`;
export default SaveDelete;
