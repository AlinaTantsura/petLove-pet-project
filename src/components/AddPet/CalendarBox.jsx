/* eslint-disable react/prop-types */
const CalendarBox = ({ open }) => {
    const dateNow = new Date();
    // console.log(dateNow.getFullYear());
    // console.log(dateNow.getMonth() + 1);
    // console.log(dateNow.getDate());
    if (!open) return null; 
  return (
      <div className="absolute">
          {dateNow.getFullYear()}
    </div>
  )
}

export default CalendarBox