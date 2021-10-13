import { ReactEmbeddedGoogleCalendar } from "react-embedded-google-calendar";

const Calendar = () => {
  return (
    <div>
      <ReactEmbeddedGoogleCalendar
        publicUrl={process.env.CALENDAR_LINK}
        height={500}
      ></ReactEmbeddedGoogleCalendar>
    </div>
  );
};

export default Calendar;
