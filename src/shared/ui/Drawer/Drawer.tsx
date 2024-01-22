import { createPortal } from 'react-dom';
import { FC, useEffect, useRef, useState } from 'react';

import { IModal, useT } from '@/shared/lib';
import { DrawerModal } from './DrawerModal';
import { DrawerBackground } from './DrawerBackground';
import { DrawerContent } from './DrawerContent';
import { DrawerTitle } from './DrawerTitle';
import { DrawerClose } from './DrawerClose';
import { DrawerBody } from './DrawerBody';
import { DrawerHead } from './DrawerHead';

const DrawerComponent: FC<IModal> = ({
  title,
  open,
  loading,
  onClose,
  children,
}) => {
  const [show, setShow] = useState(false);
  const timeout = useRef<NodeJS.Timeout>();
  const t = useT();

  useEffect(() => {
    clearTimeout(timeout.current);
    if (open === true) {
      document.body.style.paddingRight = `${
        window.innerWidth - document.body.clientWidth
      }px`;
      document.body.style.overflow = 'hidden';
      setShow(true);
    } else {
      document.body.style.paddingRight = '';
      document.body.style.overflow = '';
      timeout.current = setTimeout(() => setShow(false), 200);
    }
  }, [open]);

  useEffect(() => {
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

export const Drawer = (props: IModal) => {
  return createPortal(<DrawerComponent {...props} />, document.body);
};
