import type { Story } from "../../storyline/types";
import { stories } from "../../storyline";

export const getStory = (id: string): Story | undefined => {
  return stories.find((story) => story.id === id);
};
