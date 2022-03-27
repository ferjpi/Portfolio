export function formatDate(date) {
  if (!date) return ""

  const d = new Date(date)
  const [year, month, day] = [
    d.getFullYear(),
    d.toLocaleString("en-US", { month: "short" }),
    d.getDate(),
  ]
  return `${month}, ${day} ${year}`
}
