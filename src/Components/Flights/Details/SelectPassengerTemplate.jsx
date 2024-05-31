import Dropdown from "./Dropdown";
import { useTranslation } from "react-i18next";
import { templateNames } from "../../../static";

function SelectPassengerTemplate() {
  const { t } = useTranslation();
  return (
    <div className="my-10">
      <div className="mb-2">მგზავრის შაბლონის არჩევა</div>
      <Dropdown
        title={t("name surname")}
        options={templateNames}
        type=""
        size="w-full"
      />
    </div>
  );
}

export default SelectPassengerTemplate;
