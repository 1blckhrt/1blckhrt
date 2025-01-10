export const DATE_OF_BIRTH = new Date("2003-10-12");

export const REPOSITORY_LINK = "https://github.com/1blckhrt/website";

export const SOCIAL_MEDIA_LINKS = {
  Email: "mailto:blckhrt.music111@gmail.com",
  GitHub: "https://github.com/1blckhrt",
  Instagram: "https://www.instagram.com/1blckhrt/",
  YouTube: "https://www.youtube.com/@1blckhrt",
  SoundCloud: "https://soundcloud.com/1blckhrt",
  DiscordServer: "https://discord.gg/ZThGWV4tWU",
};

export const TIME_FORMAT_OPTIONS = {
  timeZone: "America/New_York",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
} as const satisfies Intl.DateTimeFormatOptions;
