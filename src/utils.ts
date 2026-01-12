/**
 * Normalize data for response to ensure consistent structure
 */
export const normalize = (data: unknown) => {
  if (data === undefined) return null;
  if (
    typeof data === "string" ||
    typeof data === "number" ||
    typeof data === "boolean"
  ) {
    return { value: data };
  }
  return data;
};
