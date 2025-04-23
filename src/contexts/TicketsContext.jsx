import React, { createContext, useContext, useReducer, useMemo } from "react";
import { tickets } from "../db";
import { nanoid } from "nanoid";

// Create context
const TicketsContext = createContext();

// Utility for generating IDs
const generateId = () => nanoid();

// Initial state
const initialState = {
  tickets,
  filters: {},
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TICKETS":
      return { ...state, tickets: action.payload };
    case "ADD_TICKET":
      return { ...state, tickets: [...state.tickets, action.payload] };
    case "UPDATE_TICKET":
      return {
        ...state,
        tickets: state.tickets.map((ticket) =>
          ticket.id === action.payload.id ? action.payload : ticket
        ),
      };
    case "DELETE_TICKET":
      return {
        ...state,
        tickets: state.tickets.filter((ticket) => ticket.id !== action.payload),
      };
    case "SET_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.key]: action.payload.value,
        },
      };
    case "CLEAR_FILTERS":
      return { ...state, filters: {} };
    case "CLEAR_FILTER":
      const newFilters = { ...state.filters };
      delete newFilters[action.payload];
      return { ...state, filters: newFilters };
    default:
      return state;
  }
};

// Provider
export const TicketsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filteredTickets = useMemo(() => {
    return state.tickets.filter((ticket) => {
      const { title, type, priority, status } = state.filters;

      return (
        (!title || ticket.title.toLowerCase().includes(title.toLowerCase())) &&
        (!type || ticket.type === type) &&
        (!priority || ticket.priority === priority) &&
        (!status || ticket.status === status)
      );
    });
  }, [state.tickets, state.filters]);

  // Actions
  const createTicket = (ticket) => {
    dispatch({
      type: "ADD_TICKET",
      payload: { id: generateId(), ...ticket },
    });
  };

  const updateTicket = (ticket) => {
    dispatch({ type: "UPDATE_TICKET", payload: ticket });
  };

  const deleteTicket = (id) => {
    dispatch({ type: "DELETE_TICKET", payload: id });
  };

  const getTicketById = (id) => {
    return state.tickets.find((ticket) => ticket.id === id);
  };

  const setFilter = (key, value) => {
    dispatch({ type: "SET_FILTER", payload: { key, value } });
  };

  const clearAllFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  const clearFilterByKey = (key) => {
    dispatch({ type: "CLEAR_FILTER", payload: key });
  };

  return (
    <TicketsContext.Provider
      value={{
        tickets: state.tickets,
        filters: state.filters,
        filteredTickets,
        createTicket,
        updateTicket,
        deleteTicket,
        getTicketById,
        setFilter,
        clearAllFilters,
        clearFilterByKey,
      }}
    >
      {children}
    </TicketsContext.Provider>
  );
};

// Hook to use the context
export const useTickets = () => useContext(TicketsContext);
