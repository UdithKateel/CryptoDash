import React from "react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
} from "../components/ui/drawer";
import { Button } from "@chakra-ui/react";

const SideDrawer = ({ open, setOpen, children }) => {
  return (
    <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)} placement={'start'}>
      <DrawerBackdrop />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Menu</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          {/* Render children */}
          {children}
        </DrawerBody>
        <DrawerFooter>
          <DrawerCloseTrigger />
        </DrawerFooter>
      </DrawerContent>
    </DrawerRoot>
  );
};

export default SideDrawer;
