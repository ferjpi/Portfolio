export function formatDate(date) {
  if (!date) return ""

  const d = new Date(date)
  const [year, month, day] = [
    d.getFullYear(),
    d.toLocaleString("default", { month: "short" }),
    d.getDate(),
  ]
  return `${month}, ${day} ${year}`
}
