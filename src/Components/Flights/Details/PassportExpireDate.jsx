import Dropdown from "./Dropdown";

import {
  months,
  daysData,
  yearsData,
  countriesData,
  genderData,
} from "../../../static";

function PassportExpireDate() {
  return (
    <div className="flex gap-10">
      <div className="flex w-1/2">
        <div className="flex gap-2.5">
          <Dropdown
            title={"Month"}
            options={months}
            type="passportExpiryMonth"
            size="w-32"
          />
          <Dropdown
            title={"Day"}
            options={daysData}
            type="passportExpiryDay"
            size="w-20"
          />
          <Dropdown
            title={"Year"}
            options={yearsData}
            type="passportExpiryYear"
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

export default PassportExpireDate;
