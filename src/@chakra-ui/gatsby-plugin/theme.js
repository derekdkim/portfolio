import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    components: {
        Text: {
            baseStyle: {
                fontWeight: "bold",
            },
            variants: {
                nav: {
                    fontWeight: "bold",
                    fontSize: "xl",
                    ml: "8",
                }
            }
        }
    }
});

export default theme;