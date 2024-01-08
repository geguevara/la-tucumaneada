import { AiOutlineCheck } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";
import { GrInbox } from "react-icons/gr";

import { CancelStyled, CheckStyled, PendingStyled } from "./OrderStatus.styles";

const OrderStatus = ({ status }) => {
  return (
    <div>
      {status === "check" && (
        <CheckStyled>
          <AiOutlineCheck />
        </CheckStyled>
      )}
      {status === "pending" && (
        <PendingStyled>
          <GrInbox />
        </PendingStyled>
      )}
      {status === "cancel" && (
        <CancelStyled>
          <MdOutlineCancel />
        </CancelStyled>
      )}
    </div>
  );
};

export default OrderStatus;