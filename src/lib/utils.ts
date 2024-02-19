export function removeFileExtension(filename: string): string {
  const lastDotIndex = filename.lastIndexOf(".");
  if (lastDotIndex === -1) {
    // If there's no dot in the filename, return the filename as is
    return filename;
  } else {
    // Otherwise, return the filename without the extension
    return filename.substring(0, lastDotIndex);
  }
}
