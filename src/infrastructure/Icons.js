import {
  IconLogout,
  IconMoonStars,
  IconSun,
  IconHome2 as IconHome,
  IconBrandAppleArcade,
} from "@tabler/icons";

import Icon from "@/components/_basics/Icon";

const Icons = (function () {
  return {
    icon_logout: IconLogout,
    icon_moonStars: IconMoonStars,
    icon_sun: IconSun,
    icon_game: IconBrandAppleArcade,
    icon_home: IconHome,
  };
})();

export default Icons;
export { Icon as MyIcon };
