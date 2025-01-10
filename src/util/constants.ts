export const DATE_OF_BIRTH = new Date("2003-10-12");

export const REPOSITORY_LINK = "https://github.com/1blckhrt/website";

export const DISCORD_ID = "800222752572702731";

export const LANYARD_URL = `https://api.lanyard.rest/v1/users/${DISCORD_ID}`;

export const STATUS_COLORS: Record<string, string> = {
  online: "green",
  idle: "yellow",
  dnd: "red",
  offline: "gray",
};

export const TIME_FORMAT_OPTIONS = {
  timeZone: "America/New_York",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
} as const satisfies Intl.DateTimeFormatOptions;
