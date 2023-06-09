import React from "react";
import { format } from "date-fns";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";

const BookingModal = ({ date, treatment, setTreatment }) => {
  // For Update User In Modal
  const [user, loading, error] = useAuthState(auth);
  const { slots } = treatment;
  //   Form Submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log("Form Submitted", slot);
    // For Modal Close
    setTreatment(null);
  };

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-primary text-lg">
            You Are About To Book: {treatment.name}
          </h3>
          <form onSubmit={handleFormSubmit} className="grid grid-cols-1">
            <input
              type="text"
              disabled
              value={format(date, "PPP")}
              className="input mt-4 input-bordered w-full max-w-lg"
            />
            {/* Tricky Part */}
            <select
              name="slot"
              className="select select-bordered w-full mt-4 max-w-lg"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            {/* Tricky Part */}

            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName}
              className="input mt-4 input-bordered w-full max-w-lg"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email}
              className="input mt-4 input-bordered w-full max-w-lg"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input mt-4 input-bordered w-full max-w-lg"
            />
            <input
              type="submit"
              value="Submit"
              className=" mt-4 btn text-white font-bold w-full max-w-lg"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
