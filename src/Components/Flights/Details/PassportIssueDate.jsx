import Dropdown from "./Dropdown";

import {
  months,
  daysData,
  yearsData,
  countriesData,
  genderData,
} from "../../../static";

function BirthDateLayout() {
  return (
    <div className="flex gap-10">
      {/* <div className="mb-1 text-sm text-gray-500 font-semibold outline-none">
        qlesa
        <span className={`${true ? "text-green-500" : "text-red-500"}`}>
          {true ? "✓" : "*"}
        </span>
      </div> */}
      <div className="flex w-1/2">
        <div className="flex gap-2.5">
          <Dropdown
            title={"Month"}
            options={months}
            type="passportIssueMonth"
            size="w-32"
          />
          <Dropdown
            title={"Day"}
            options={daysData}
            type="passportIssueDay"
            size="w-20"
          />
          <Dropdown
            title={"Year"}
            options={yearsData}
            type="passportIssueYear"
            size="w-24"
          />
        </div>
      </div>
      <div className="flex w-1/2 gap-5">
        <Dropdown title={"Country"} options={countriesData} type="country" />
        <Dropdown title={"Sex"} options={genderData} type="sex" />
      </div>
    </div>
  );
}

export default BirthDateLayout;
