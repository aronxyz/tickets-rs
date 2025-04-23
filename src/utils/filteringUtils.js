export const filterTickets = (tickets, filters) => {
    return tickets.filter(ticket => {
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true;
        return String(ticket[key]).toLowerCase().includes(String(value).toLowerCase());
      });
    });
  };