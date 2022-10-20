import { motion } from "framer-motion";
import { Button } from "../Button";
import * as S from "./headerMenu.styles";

interface NavLinkProps {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  isMobile?: boolean;
}

export const NavLink = ({ setOpen, open, isMobile = false }: NavLinkProps) => {
  const handleOnClick = () => {
    isMobile && setOpen && setOpen(!open);
  };

  const animation = {
    from: { opacity: 0, y: -40 },
    to: { opacity: 1, y: 0 },
  };

  return (
    <S.HeaderMenu>
      <motion.li
        initial={animation.from}
        animate={animation.to}  
        transition={{ duration: 0.5, delay: 0.2 }}
        onClick={handleOnClick}
        key="1"
      >
        <S.HeaderLink href="/">ABOUT US</S.HeaderLink>
      </motion.li>
      <motion.li
        initial={animation.from}
        animate={animation.to}
        transition={{ duration: 0.5, delay: 0.3 }}
        onClick={handleOnClick}
        key="2"
      >
        <S.HeaderLink href="/">KNOWLEDGE BASE</S.HeaderLink>
      </motion.li>
      <motion.li
        initial={animation.from}
        animate={animation.to}
        transition={{ duration: 0.5, delay: 0.4 }}
        onClick={handleOnClick}
        key="3"
      >
        <Button variant="primary">SUBMIT YOUR CASE</Button>
      </motion.li>
      <motion.li
        initial={animation.from}
        animate={animation.to}
        transition={{ duration: 0.5, delay: 0.5 }}
        onClick={handleOnClick}
        key="4"
      >
        <Button variant="secondary">(347) 560-4064</Button>
      </motion.li>
    </S.HeaderMenu>
  );
};
