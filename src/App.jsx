import {
  Button,
  defaultTheme,
  Flex,
  Provider,
  SearchField,
  View,
  MenuTrigger,
  ActionButton,
  Menu,
  Item,
  Well,
  Link,
  Badge,
  StatusLight,
  Meter,
  Text,
  Divider,
} from "@adobe/react-spectrum";
import Alert from "@spectrum-icons/workflow/Alert";
import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Tickets from "./pages/Tickets";
import SingleTicket from "./pages/SingleTicket";
import Home from "@spectrum-icons/workflow/Home";

function App() {
  let navigate = useNavigate();

  return (
    <Provider theme={defaultTheme} router={{ navigate }}>
      <View
        minHeight={"100dvh"}
        maxWidth={992}
        minWidth={320}
        marginX={"auto"}
        paddingX={"size-100"}
      >
        <View width={"100%"} paddingY={"size-150"}>
          <ActionButton isQuiet onPress={() => navigate("/")}>
            <Home />
            <Text>Home</Text>
          </ActionButton>
        </View>
        <Divider size="S" />
        <Routes>
          <Route index element={<Navigate to={"tickets"} />} />
          <Route path="tickets">
            <Route index element={<Tickets />} />
            <Route path="test" element={<SingleTicket />} />
          </Route>
        </Routes>
      </View>
    </Provider>
  );
}

export default App;
