"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import { useNavbar } from "./useNavbar";
import Link from "next/link";
import Dialogshow from "../../Login/dialog";

export default function MenuAppBar() {
  const { auth, handleMenu } = useNavbar();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#212121", display: "flex" }}
      >
        <Toolbar>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt=""
              height={50}
              width={50}
              className="mx-4"
            />
          </Link>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
          >
            Thetigerteamacademy
          </Typography>
          {auth && (
            <div>
              {/* <AccountCircle /> */}
              <Dialogshow />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
