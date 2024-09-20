import { HiOutlineUserGroup } from "react-icons/hi";
import { BsPersonAdd } from "react-icons/bs";
import { BsColumnsGap } from "react-icons/bs";
import { MdOutlineAnalytics } from "react-icons/md";
import { MdCampaign } from "react-icons/md";

export const Paths = [
  {
    to: "dashboard",
    icons: [<BsColumnsGap size={35} />, <BsColumnsGap size={28} />],

    label: "Dashboard",
  },

  {
    to: "employee",
    icons: [<HiOutlineUserGroup size={35} />, <HiOutlineUserGroup size={28} />],
    label: "Employee",
  },

  {
    to: "add-employee",
    icons: [<BsPersonAdd size={35} />, <BsPersonAdd size={28} />],
    label: "Add Employee",
  },
  {
    to: "analytics",
    icons: [<MdOutlineAnalytics size={35} />, <MdOutlineAnalytics size={28} />],
    label: "Analytics",
  },
  {
    to: "announcement",
    icons: [<MdCampaign size={35} />, <MdCampaign size={28} />],
    label: "Announcement",
  },
];
