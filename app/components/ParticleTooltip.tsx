"use client";
import React, { ReducerAction, useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { MinusIcon, PlusIcon, Settings2Icon } from "lucide-react";
import {
  ArrowBack,
  ArrowRightAltRounded,
  Refresh,
  Settings,
  SettingsBackupRestoreSharp,
} from "@material-ui/icons";
import { AppContext, ReducerActions } from "../context/app.context";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: 1,
      color: "grey",
    },
    root: {
      height: 0,
      flexGrow: 1,
    },
    speedDial: {
      position: "fixed",
      bottom: theme.spacing(2),
      left: theme.spacing(2),
    },
  }),
);

export default function ParticleTooltip() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [icon, setIcon] = React.useState(<Settings2Icon />);

  const { dispatch } = useContext(AppContext);

  const actions = [
    {
      icon: (
        <PlusIcon
          style={{ fill: "#3b5998" }}
          onClick={() => handleClick(ReducerActions.INCREMENT_COUNT)}
        />
      ),
      name: "More Particles",
    },
    {
      icon: (
        <MinusIcon
          style={{ fill: "#00acee" }}
          onClick={() => handleClick(ReducerActions.DECREMENT_COUNT)}
        />
      ),
      name: "Less Particles",
    },
    {
      icon: (
        <Refresh
          style={{ fill: "#3f729b" }}
          onClick={() => handleClick(ReducerActions.RESET_COUNT)}
        />
      ),
      name: "Reset",
    },
  ];

  const handleClick = (action: ReducerActions) => {
    //handleClose();

    dispatch({ type: action });
  };

  const handleOpen = () => {
    setOpen(true);
    setIcon(<Settings2Icon style={{ fill: "#d24769" }} />);
  };

  const handleClose = () => {
    setOpen(false);
    setIcon(<Settings2Icon />);
  };

  return (
    <div className={classes.root}>
      <Backdrop open={open} className={classes.backdrop} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        className={classes.speedDial}
        icon={icon}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        FabProps={{
          color: "default",
          size: "small",
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            id={action.name}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipPlacement="right"
          />
        ))}
      </SpeedDial>
    </div>
  );
}
