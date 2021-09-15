import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    components: {
        Text: {
            baseStyle: {
                color: "#102A43",
            },
        }
    },
    initialColorMode: "dark"
});

export default theme;