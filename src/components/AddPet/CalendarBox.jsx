
import Calendar from "react-calendar";

/* eslint-disable react/prop-types */
const CalendarBox = ({ open, date, setDate }) => {
    
    if (!open) return null; 
  return (
      <div className="absolute">
      <Calendar className="bg-slate-200 mt-2 p-2 rounded-[30px] text-center" value={date} onChange={setDate} />
    </div>
  )
}

export default CalendarBox