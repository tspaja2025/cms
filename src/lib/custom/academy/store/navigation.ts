import { goto } from "$app/navigation";
import { writable } from "svelte/store";

export type Page = "dashboard" | "my-courses" | "course-details";

export const selectedCourseId = writable<number | null>(null);

export function navigateTo(page: Page, courseId?: number) {
  let path = `/admin/academy/${page}`;
  if (page === "course-details" && courseId !== undefined) {
    path += `/${courseId}`;
    selectedCourseId.set(courseId);
  }

  goto(path);
}
