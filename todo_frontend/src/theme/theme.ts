import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const colors = {
    gruvbox: {
        bg: "#282828",        // Background
        fg: "#ebdbb2",        // Foreground
        red: "#cc241d",
        green: "#98971a",
        yellow: "#d79921",
        blue: "#458588",
        purple: "#b16286",
        aqua: "#689d6a",
        gray: "#a89984",
        orange: "#d65d0e",
    },
};

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

const theme = extendTheme({
    config,
    styles: {
        global: {
            body: {
                bg: colors.gruvbox.bg,
                color: colors.gruvbox.fg,
            },
        },
    },
    colors: {
        brand: {
            50: colors.gruvbox.yellow,
            100: colors.gruvbox.orange,
            200: colors.gruvbox.red,
            300: colors.gruvbox.green,
            400: colors.gruvbox.aqua,
            500: colors.gruvbox.blue,
            600: colors.gruvbox.purple,
            700: colors.gruvbox.gray,
            800: colors.gruvbox.bg,
            900: colors.gruvbox.fg,
        },
    },
    components: {
        Modal: {
            baseStyle: {
                dialog: {
                    bg: colors.gruvbox.bg,
                    color: colors.gruvbox.fg,
                },
                header: {
                    bg: colors.gruvbox.bg,
                    color: colors.gruvbox.fg,
                },
                footer: {
                    bg: colors.gruvbox.bg,
                    color: colors.gruvbox.fg,
                },
                closeButton: {
                    color: colors.gruvbox.fg,
                    _hover: {
                        bg: colors.gruvbox.red,
                    },
                },
            },
        },
        Button: {
            baseStyle: {
                fontWeight: "bold",
                textTransform: "uppercase",
            },
            variants: {
                solid: (props: { colorMode: string }) => ({
                    bg: props.colorMode === 'dark' ? colors.gruvbox.blue : colors.gruvbox.green,
                    color: colors.gruvbox.fg,
                    _hover: {
                        bg: props.colorMode === 'dark' ? colors.gruvbox.aqua : colors.gruvbox.yellow,
                    },
                }),
            },
        },
    },
        Input: {
            baseStyle: {
                field: {
                    bg: colors.gruvbox.bg,
                    color: colors.gruvbox.fg,
                    borderColor: colors.gruvbox.gray,
                    hover: {
                        borderColor: colors.gruvbox.aqua,
                    },
                    focus: {
                        borderColor: colors.gruvbox.blue,
                    },
                },
            },
        },
        Textarea: {
            baseStyle: {
                bg: colors.gruvbox.bg,
                color: colors.gruvbox.fg,
                borderColor: colors.gruvbox.gray,
                _hover: {
                    borderColor: colors.gruvbox.aqua,
                },
                _focus: {
                    borderColor: colors.gruvbox.blue,
                },
            },
        },
        Card: {
            baseStyle: {
                borderWidth: "1px",
                borderRadius: "lg",
                boxShadow: "md",
                p: 4,
                bg: colors.gruvbox.bg,
                color: colors.gruvbox.fg,
            },
            variants: {
                outline: {
                    borderColor: "brand.700",
                },
            },
        },

});

export default theme;
