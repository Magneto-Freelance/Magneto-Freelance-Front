import { Switch } from "@nextui-org/react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";


function Switchh() {
  return (
    <Switch
      defaultSelected
      size="lg"
      color="success"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    >
      Dark mode
    </Switch>
  );
}

export default Switchh;