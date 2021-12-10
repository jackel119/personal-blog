import { useMediaQuery } from "react-responsive";

export function useIsMobile(): boolean {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile;
}
