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
    ignorePatterns: ["private", "templates", ".obsidian", "Amorphic/**", "Exams/**", "Frontend/**", "Kanban/**"], // Folders to ignore
    defaultDateType: "modified", // Display 'modified' date by default. Can be 'created' or 'published'.
    theme: {
      cdnCaching: true, // Use CDN for fonts for faster loading
      typography: {
        header: "Schibsted Grotesk", // A clean sans-serif font for headers
        body: "Source Sans Pro", // A readable sans-serif font for body text
        code: "IBM Plex Mono", // A monospaced font for code blocks
      },
      colors: {
        lightMode: {
          light: "#faf8f8", // Page background
          lightgray: "#e5e5e5", // Borders
          gray: "#b8b8b8", // Graph links, heavier borders
          darkgray: "#4e4e4e", // Body text
          dark: "#2b2b2b", // Header text and icons
          secondary: "#284b63", // Link color
          tertiary: "#84a59d", // Hover states
          highlight: "rgba(143, 159, 169, 0.15)", // Internal link background, highlighted text
          textHighlight: "rgba(255, 215, 0, 0.3)", // Markdown highlighted text background (yellowish)
        },
        darkMode: {
          light: "#161618", // Page background
          lightgray: "#393639", // Borders
          gray: "#646464", // Graph links, heavier borders
          darkgray: "#d4d4d4", // Body text
          dark: "#ebebec", // Header text and icons
          secondary: "#7b97aa", // Link color
          tertiary: "#84a59d", // Hover states
          highlight: "rgba(143, 159, 169, 0.15)", // Internal link background, highlighted text
          textHighlight: "rgba(255, 215, 0, 0.3)", // Markdown highlighted text background (yellowish)
        },
      },
    },
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