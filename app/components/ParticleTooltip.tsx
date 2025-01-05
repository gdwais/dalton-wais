"use client";
import React, { ReducerAction, useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import { MinusIcon, PlusIcon, Settings2Icon } from "lucide-react";
import {
  ArrowBack,
  ArrowRightAltRounded,
  Refresh,
  Settings,
  SettingsBackupRestoreSharp,
  ZoomIn,
  ZoomOut,
  Speed,
  SlowMotionVideo,
} from "@material-ui/icons";
import { AppContext, ReducerActions } from "../context/app.context";
import { Slider } from "@material-ui/core";

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
      "& .MuiSpeedDialAction-staticTooltipLabel": {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        color: "white",
        boxShadow: "none",
        border: "none",
        width: "120px",
        whiteSpace: "nowrap",
        textAlign: "left",
        padding: "4px 8px",
        borderRadius: "4px",
      },
      "& .MuiSpeedDialAction-fab": {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.85)",
        },
      },
    },
    sliderContainer: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      padding: "8px 16px",
      borderRadius: "4px",
      width: "200px",
      marginLeft: "8px",
    },
    slider: {
      color: "white",
      width: "100%",
    },
    label: {
      color: "white",
      marginBottom: "4px",
    },
  }),
);

export default function ParticleTooltip() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [icon, setIcon] = React.useState(<Settings2Icon />);
  const { dispatch, state } = useContext(AppContext);

  const handleSliderChange =
    (action: string) => (event: any, newValue: number | number[]) => {
      dispatch({
        type: ReducerActions.UPDATE_PARAMETER,
        payload: { parameter: action, value: newValue },
      });
    };

  const actions = [
    {
      icon: <Speed style={{ fill: "#3f729b" }} />,
      name: "Speed",
      control: (
        <div className={classes.sliderContainer}>
          <Slider
            className={classes.slider}
            value={state.particleSpeed * 50}
            onChange={handleSliderChange("speed")}
            min={0}
            max={100}
            valueLabelDisplay="auto"
          />
        </div>
      ),
    },
    {
      icon: <PlusIcon style={{ fill: "#3b5998" }} />,
      name: "Particle Count",
      control: (
        <div className={classes.sliderContainer}>
          <Slider
            className={classes.slider}
            value={state.particleCount}
            onChange={handleSliderChange("particleCount")}
            min={10}
            max={1000}
            valueLabelDisplay="auto"
          />
        </div>
      ),
    },
    {
      icon: <ZoomIn style={{ fill: "#3b5998" }} />,
      name: "Size",
      control: (
        <div className={classes.sliderContainer}>
          <Slider
            className={classes.slider}
            value={state.particleSize}
            onChange={handleSliderChange("size")}
            min={1}
            max={20}
            valueLabelDisplay="auto"
          />
        </div>
      ),
    },
    {
      icon: <ArrowBack style={{ fill: "#3b5998" }} />,
      name: "Magnetism",
      control: (
        <div className={classes.sliderContainer}>
          <Slider
            className={classes.slider}
            value={state.magnetism * 8.33}
            onChange={handleSliderChange("magnetism")}
            min={0}
            max={100}
            valueLabelDisplay="auto"
          />
        </div>
      ),
    },
    {
      icon: (
        <Refresh
          style={{ fill: "#3f729b" }}
          onClick={() => dispatch({ type: ReducerActions.RESET_COUNT })}
        />
      ),
      name: "",
    },
  ];

  const handleOpen = () => {
    setOpen(true);
    setIcon(<Settings2Icon style={{ fill: "#d24769" }} />);
  };

  const handleClose = () => {
    if (!open) return;
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
        transitionDuration={0}
        onMouseLeave={() => {}}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.control || action.name}
            tooltipOpen
            tooltipPlacement="right"
            onMouseLeave={(e) => e.stopPropagation()}
            FabProps={{
              onMouseEnter: (e) => e.stopPropagation(),
            }}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
