"use client";
import React, { useContext } from "react";
import { Slider } from "@material-ui/core";
import { AppContext, ReducerActions } from "../context/app.context";
import { Refresh } from "@material-ui/icons";

export default function ParticleControls() {
  const { dispatch, state } = useContext(AppContext);

  const handleSliderChange =
    (parameter: string) => (event: any, newValue: number | number[]) => {
      dispatch({
        type: ReducerActions.UPDATE_PARAMETER,
        payload: { parameter, value: newValue as number },
      });
    };

  const getColorGradient = () => {
    return {
      background:
        "linear-gradient(to right, hsl(0, 100%, 50%), hsl(120, 100%, 50%), hsl(240, 100%, 50%), hsl(360, 100%, 50%))",
      height: "4px",
      borderRadius: "2px",
    };
  };

  return (
    <div className="w-64 bg-opacity-70 bg-black p-6 rounded-lg space-y-6">
      <div className="space-y-2">
        <label className="text-white text-sm">Speed</label>
        <Slider
          value={state.particleSpeed * 50}
          onChange={handleSliderChange("speed")}
          min={0}
          max={1000}
          className="text-white"
        />
      </div>

      <div className="space-y-2">
        <label className="text-white text-sm">Particle Count</label>
        <Slider
          value={state.particleCount}
          onChange={handleSliderChange("particleCount")}
          min={10}
          max={100}
          className="text-white"
        />
      </div>

      <div className="space-y-2">
        <label className="text-white text-sm">Size</label>
        <Slider
          value={state.particleSize}
          onChange={handleSliderChange("size")}
          min={1}
          max={40}
          className="text-white"
        />
      </div>

      {/* <div className="space-y-2">
        <label className="text-white text-sm">Line Distance</label>
        <Slider
          value={state.lineMaxDistance}
          onChange={handleSliderChange("lineDistance")}
          min={0}
          max={10000}
          className="text-white"
        />
      </div> 

      <div className="space-y-2">
        <label className="text-white text-sm">Color</label>
        <div style={getColorGradient()} />
        <Slider
          value={state.particleColor}
          onChange={handleSliderChange("color")}
          min={0}
          max={360}
          className="text-white"
        />
      </div>*/}
    </div>
  );
}
