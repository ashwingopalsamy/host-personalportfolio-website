import { useMediaQuery, breakpoints } from "./use-media-query"

export function useIsMobile() {
  // Now utilizing our breakpoints from use-media-query
  return useMediaQuery(breakpoints.sm)
}