import  AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./type";

type Props = {
    children : React.ReactNode;
    setSelectedPage:(value: SelectedPage) => void
}
const ActionsButtons = ({children, setSelectedPage}: Props) => {
  return (
      <AnchorLink
        className="rounded-md text-white bg-black px-10 py-2 hover:bg-red-800 hover:text-white"
        onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
              {children}
      </AnchorLink>
  )
}

export default ActionsButtons