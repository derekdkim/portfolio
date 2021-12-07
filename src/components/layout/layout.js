import React from "react";
// Chakra UI
import { ChakraProvider, Box } from "@chakra-ui/react";
// Importing FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faPaperPlane,
  faBars,
  faHome,
  faProjectDiagram,
  faAddressBook,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLightbulb,
  faGrinWink,
  faKeyboard,
} from "@fortawesome/free-regular-svg-icons";
// Font
import "@fontsource/roboto";

import theme from "../../themes/theme";
import NavBar from "../nav";
import Footer from "../footer";

library.add(
  fab,
  faLightbulb,
  faEnvelope,
  faPhone,
  faPaperPlane,
  faBars,
  faHome,
  faProjectDiagram,
  faGrinWink,
  faAddressBook,
  faKeyboard,
  faArrowLeft
);

const Layout = ({ pageTitle, children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Box m={{ base: "4", md: "16" }}>
        <title>{pageTitle}</title>
        <NavBar />
        <Box m={{ base: "4", md: "20", lg: "7rem" }}>{children}</Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
};

export default Layout;
