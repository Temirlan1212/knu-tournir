export function formatISODateToDDMMYYYY(isoString: string) {
  const date = new Date(isoString);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed
  const day = date.getDate().toString().padStart(2, "0");

  const formattedDate = `${day}.${month}.${year}`;

  return formattedDate;
}

export function formatISODate(isoString: string) {
  const date = new Date(isoString);

  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formattedHours = hours % 12 || 12; // Convert 0 to 12 for midnight
  const ampm = hours >= 12 ? "вечера" : "утра";

  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  const formattedDate = `${month} ${day}, ${year}, ${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;

  return formattedDate;
}
