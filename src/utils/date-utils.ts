export function formatDate(dateString: string, fallback = "") {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return fallback;
  }

  return date.toLocaleDateString("pt-BR");
}
