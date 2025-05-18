
type Hex = `#${string}`;                 // hex‐string like “#ffee00”
type ColorMap = Record<string, Hex>;    // { ui:'#282c34', … } etc.

interface CustomThemeAPI {
    /* reactive data objects */
    data: {
        id:            string;
        name:          string;
        author:        string;
        customized:    boolean;
        borders:       boolean;
        main_font:     string;
        headline_font: string;
        code_font:     string;
        css:           string;
        thumbnail:     string;
        colors:        ColorMap;
    };

    themes:             Array<Record<string, unknown>>;
    defaultColors:      ColorMap;
    sideloaded_themes:  string[];

    setup(): void;
    setupDialog(): void;
    customizeTheme(): void;
    updateColors(): void;
    updateSettings(): void;
    loadThumbnailStyles(): void;
    loadTheme(theme: Record<string, unknown>): void;
    import(file: { content: string; name: string; path: string }): void;

    dialog?: unknown;
    dialog_is_setup?: boolean;
    remote_themes_loaded?: boolean;

    [key: string]: unknown;
}

declare const CustomTheme: CustomThemeAPI;
