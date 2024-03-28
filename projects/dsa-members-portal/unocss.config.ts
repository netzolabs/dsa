import { defineUnocssConfig } from "netzo/plugins/unocss/plugin.ts";
import { presetNetzo } from "netzo/plugins/unocss/preset-netzo.ts";

export default defineUnocssConfig({
  url: import.meta.url,
  presets: [
    presetNetzo({
      radius: 0.8,
      // "zinc" | "slate" | "stone" | "gray" | "neutral" | "red" | "rose" | "orange" | "green" | "blue" | "yellow" | "violet"
      color: "green",
    }),
  ],
});