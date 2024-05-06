export const truncateArray = (
  arr: any[],
  { max, min }: { max?: number; min?: number }
) => (Array.isArray(arr) ? arr?.slice(min || 0, max) : arr);
export const truncateText = ({
  text,
  maxLength,
  endText,
}: {
  text: string;
  maxLength: number;
  endText?: string;
}) => {
  if (typeof "" !== typeof text) return;
  if (text?.length <= maxLength) {
    return text;
  }

  return text?.slice(0, maxLength) + endText || "...";
};
