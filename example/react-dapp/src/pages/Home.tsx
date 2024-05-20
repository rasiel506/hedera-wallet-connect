import {
  AccountId,
  Hbar,
  TransactionId,
  TransferTransaction,
} from "@hashgraph/sdk";
import {
  Stack,
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  executeTransaction,
  signTransaction,
  hc,
} from "../services/hashconnect";
import { AppStore } from "../store";

export const Home = () => {
  const { accountIds: connectedAccountIds, isConnected } = useSelector(
    (state: AppStore) => state.hashconnect
  );

  const [fromAccountId, setFromAccountId] = useState("");
  const [toAccountId, setToAccountId] = useState("");

  return (
    <Stack spacing={1}>
      {connectedAccountIds.map((accountId) => (
        <Box key={accountId}>
          <Typography>Account ID: {accountId}</Typography>
        </Box>
      ))}
      {!isConnected && <Typography>NONE</Typography>}
      {isConnected && (
        <Stack maxWidth="400px" spacing={1} pt={8}>
          <Typography>Log in using Admin Wallet to access the App</Typography>
        

          
        </Stack>
      )}
    </Stack>
  );
};
