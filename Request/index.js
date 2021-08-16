import Request from "./Request";
import content from "./Entity/content";

const base_url = process.env.VUE_APP_BASE_URL;

const request = new Request(base_url);
export const Content = new content(request);
