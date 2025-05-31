import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Musings", // Feel free to change this
    pageTitleSuffix: "🪴", // Optional suffix for page titles in browser tabs
    enableSPA: true, // Enables single-page application routing for faster navigation
    enablePopovers: true, // Enables popover previews for internal links
    analytics: null, // Disable analytics by default, configure if needed (e.g., { provider: 'google', tagId: 'G-XXXXXXXXXX' })
    locale: "en-US", // Set the locale for your site
    baseUrl: "adithya-vimalan.github.io/obsidian-quartz", // Replace with your actual deployment URL (e.g., example.com or username.github.io/my-notes)
    ignorePatterns: ["private", "templates", ".obsidian", "Amorphic/**", "Exams/**", "FrontEnd/**", "Kanban/**", "Excalidraw/**", ".excalidraw", "Clippings/**", "CS 61A/**"], // Folders to ignore
    defaultDateType: "modified", // Display 'modified' date by default. Can be 'created' or 'published'.
    theme: {
      cdnCaching: true,
      typography: {
        header: "IBM Plex Mono",    // Monospaced font for headers
        body: "IBM Plex Mono",      // Monospaced font for body
        code: "Fira Code",          // Or stick with IBM Plex Mono if preferred
      },
      colors: {
        lightMode: { // Solarized Light
          light: "#fdf6e3",         // base3 - Page background
          lightgray: "#eee8d5",     // base2 - Borders, UI elements
          gray: "#93a1a1",          // base1 - Comments, secondary content, graph links
          darkgray: "#586e75",     // base01 - Body text
          dark: "#cb4b16",          // orange - Header text and icons (distinct accent)
          secondary: "#268bd2",     // blue - Link color
          tertiary: "#859900",     // green - Hover states for links, accents
          highlight: "rgba(238, 232, 213, 0.6)", // base2 with alpha - Internal link background
          textHighlight: "rgba(181, 137, 0, 0.25)", // Solarized yellow (b58900) with alpha for ==highlight==
        },
        darkMode: { // Dracula
          light: "#282a36",         // Background - Page background
          lightgray: "#44475a",     // Current Line - Borders, UI elements
          gray: "#6272a4",          // Comment - Graph links, secondary content
          darkgray: "#f8f8f2",     // Foreground - Body text
          dark: "#bd93f9",          // Purple - Header text and icons
          secondary: "#8be9fd",     // Cyan - Link color
          tertiary: "#ff79c6",     // Pink - Hover states for links
          highlight: "rgba(68, 71, 90, 0.6)", // Current Line with alpha - Internal link background
          textHighlight: "rgba(241, 250, 140, 0.35)", // Dracula Yellow (f1fa8c) with alpha for ==highlight==
        },
      },
    }
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // Give priority to frontmatter dates, then filesystem
      }),
      Plugin.Latex(),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }), // For Obsidian-specific markdown features
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      // Plugin.Citations(), // If you use citations
      Plugin.Description(),
      Plugin.HardLineBreaks(), // Respect hard line breaks like Obsidian
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config