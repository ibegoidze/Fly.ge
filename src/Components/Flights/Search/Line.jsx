import HoizontalLine from "../../../assets/Flights/Search/Line.png";
function Line() {
  return (
    <div className="IMAGE  h-2 flex items-center">
      <div className="h-4 w-4 relative right-6">
        <div className="absolute h-full w-full bg-backgroundGray rounded-full"></div>
        <div className="absolute right-0 h-full w-2 bg-backgroundGray rounded-r-full shadow-inner"></div>
      </div>
      <div>
        <img src={HoizontalLine} alt="" />
      </div>
      <div className="h-4 w-4 relative left-6">
        <div className="absolute h-full w-full bg-backgroundGray rounded-full"></div>
        <div className="absolute left-0 h-full w-2 bg-backgroundGray rounded-l-full shadow-inner"></div>
      </div>
    </div>
  );
}

export default Line;
