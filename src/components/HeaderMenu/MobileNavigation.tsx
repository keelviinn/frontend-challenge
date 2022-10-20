import { NavLink } from "./NavLinks"
import { CgMenuRound, CgCloseO } from 'react-icons/cg'

interface MobileNavigationProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const MobileNavigation = ({ setOpen, open }: MobileNavigationProps) => {
  const HamburgerIcon = () => {
    return (
      <CgMenuRound
        className="Hamburger"
        size={40}
        color="white"
        onClick={() => setOpen(!open)}
      />
    )
  }

  const CloseIcon = () => {
    return (
      <CgCloseO
        className="Hamburger"
        size={40}
        color="white"
        onClick={() => setOpen(!open)}
      />
    )
  }

  return (
    <nav className="MobileNavigation">
      {open ? <CloseIcon /> : <HamburgerIcon />}
      {open && <NavLink open={open} setOpen={setOpen} isMobile={true} />}
    </nav>
  )
}