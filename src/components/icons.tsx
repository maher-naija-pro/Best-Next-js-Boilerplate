import { ArrowRight, LogIn, Settings, User, User2Icon, UserX2Icon, X } from "lucide-react"
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai"
import { BiLogoPostgresql } from "react-icons/bi"
import { BsChevronDown, BsChevronLeft, BsChevronRight, BsChevronUp, BsFire } from "react-icons/bs"
import { FaRegStar, FaRegLightbulb, FaCheck, FaCode, FaProjectDiagram } from "react-icons/fa"
import { FaStripe } from "react-icons/fa"
import { FaTools } from "react-icons/fa"
import { FaXTwitter, FaLinkedin, FaPeopleGroup, FaDiscord } from "react-icons/fa6"
import { FiLayers } from "react-icons/fi"
import { GiBookshelf } from "react-icons/gi"
import { IoIosDocument } from "react-icons/io"
import { IoMdMailUnread } from "react-icons/io"
import { IoAccessibility, IoGameControllerOutline } from "react-icons/io5"
import { IoSchoolSharp } from "react-icons/io5"
import { LuRadar, LuBarChartHorizontalBig } from "react-icons/lu"
import { MdConnectWithoutContact } from "react-icons/md"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import { PiBuildingsBold } from "react-icons/pi"
import { PiRocketLaunchDuotone } from "react-icons/pi"
import { RxDashboard } from "react-icons/rx"
import { RxDoubleArrowDown } from "react-icons/rx"
//stack
import { SiPrisma } from "react-icons/si"
import { SiTailwindcss } from "react-icons/si"
import { SiTypescript } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { TiHomeOutline } from "react-icons/ti"
import { VscDebugStart } from "react-icons/vsc"

export const Icons = {
  //stack
  prisma: SiPrisma,
  postgres: BiLogoPostgresql,
  nextjs: TbBrandNextjs,
  tailwindcss: SiTailwindcss,
  stripe: FaStripe,
  typescript: SiTypescript,
  //platform
  home: TiHomeOutline,
  login: LogIn,
  close: X,
  profile: User2Icon,
  employee: UserX2Icon,
  settings: Settings,
  user: User,
  arrowRight: ArrowRight,
  // Providers
  google: AiFillGoogleCircle,
  github: AiFillGithub,
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
  discord: FaDiscord,

  // Sections Icons
  dashboard: RxDashboard,
  // Navigation
  back: BsChevronLeft,
  next: BsChevronRight,
  up: BsChevronUp,
  down: BsChevronDown,

  // Common
  fire: BsFire,
  star: FaRegStar,
  bulb: FaRegLightbulb,
  check: FaCheck,
  radar: LuRadar,
  accessibility: IoAccessibility,
  people: FaPeopleGroup,
  scale: LuBarChartHorizontalBig,
  gamification: IoGameControllerOutline,
  code: FaCode,
  project: FaProjectDiagram,
  document: IoIosDocument,
  books: GiBookshelf,
  support: MdConnectWithoutContact,
  building: PiBuildingsBold,
  contact: IoMdMailUnread,
  start: VscDebugStart,
  school: IoSchoolSharp,
  doublearrow: RxDoubleArrowDown,
  Tools: FaTools,
  Layers: FiLayers,
  Rocket: PiRocketLaunchDuotone,
  doublearrowright: MdKeyboardDoubleArrowRight
}
