export function formatDate(dateString: string, fallback = "") {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return fallback;
  }

  const formattedDate = date.toLocaleDateString("pt-BR");
  const formattedTime = date.toLocaleTimeString("pt-BR");

  return `${formattedDate} - ${formattedTime}`;
}
