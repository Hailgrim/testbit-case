import { createPortal } from "react-dom";
import React from "react";

import { IModal } from "../../lib/types";
import DrawerModal from "./DrawerModal";
import DrawerBackground from "./DrawerBackground";
import DrawerContent from "./DrawerContent";
import DrawerHead from "./DrawerHead";
import DrawerTitle from "./DrawerTitle";
import DrawerClose from "./DrawerClose";
import DrawerBody from "./DrawerBody";
import useT from "../../hooks/useT";

const DrawerComponent: React.FC<IModal> = ({ title, open, loading, onClose, children }) => {
  const [show, setShow] = React.useState(false);
  const timeout = React.useRef<NodeJS.Timeout>();
  const t = useT();

  React.useEffect(() => {
    clearTimeout(timeout.current);
    if (open === true) {
      setShow(true);
    } else {
      timeout.current = setTimeout(() => setShow(false), 200);
    }
  }, [open]);

  React.useEffect(() => {
    return () => {
      clearTimeout(timeout.current);
    };
  }, []);

  return (
    <>
      {show && (
        <DrawerModal $open={open}>
          <DrawerBackground onClick={onClose} />
          <DrawerContent $open={open}>
            <DrawerHead>
              <DrawerTitle title={title}>{title}</DrawerTitle>
              <DrawerClose title={t.close} onClick={onClose} />
            </DrawerHead>
            <DrawerBody $loading={loading}>{!loading && children}</DrawerBody>
          </DrawerContent>
        </DrawerModal>
      )}
    </>
  );
};

const Drawer = (props: IModal) => {
  return createPortal(<DrawerComponent {...props} />, document.body)
};
export default Drawer;
