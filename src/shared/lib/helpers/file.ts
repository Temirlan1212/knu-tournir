export function getImageData(fileList?: FileList) {
  if (!fileList || typeof window === "undefined") return;
  try {
    const displayUrl = URL?.createObjectURL(fileList![0]);
    return { files: fileList, displayUrl };
  } catch (error) {}
}
