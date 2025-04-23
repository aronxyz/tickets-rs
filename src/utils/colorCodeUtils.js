
export const getPriorityColorCode = (priority) => {
  const priorityColors = {
    low: "neutral",
    medium: "notice",
    high: "negative",
  };
  return priorityColors[priority] ?? "neutral";
};

export const getTypeColorCode = (type) => {
  const typeColors = {
    bug: "magenta",
    feature: "chartreuse",
    improvement: "indigo",
  };
  return typeColors[type] ?? "seafoam";
};

export const getStatusColorCode = (status) => {
  const statusColors = {
    open: "yellow",
    "in-progress": "indigo",
    blocked: "fuchsia",
    "in-review": "purple",
    completed: "seafoam",
  };
  return statusColors[status] ?? "neutral";
};
