import { extendTheme } from "@chakra-ui/react";

import IconButton from "./IconButton";

const theme = extendTheme({
    fonts: {
        body: "Roboto"
    },
    components: {
        IconButton,
    },
});

export default theme;