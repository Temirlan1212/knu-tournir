export function getImageData(fileList?: FileList) {
  const dataTransfer = new DataTransfer();

  Array.from(fileList! || "").forEach((image) => dataTransfer.items.add(image));

  const files = dataTransfer.files;
  if (files?.length < 1) return null;
  const displayUrl = URL?.createObjectURL(fileList![0]);

  return { files, displayUrl };
}
