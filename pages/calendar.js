import Calendar from "../components/calendar";
import Navbar from "../components/navbar";

const CalendarPage = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-12">
        <Calendar />
      </div>
    </div>
  );
};

export default CalendarPage;
