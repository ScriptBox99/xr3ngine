import React, { Component } from "react";
import PropTypes from "prop-types";
import NodeEditor from "./NodeEditor";
import ColorInput from "../inputs/ColorInput";
import InputGroup from "../inputs/InputGroup";
import ImageInput from "../inputs/ImageInput";
import CompoundNumericInput from "../inputs/CompoundNumericInput";
import NumericInputGroup from "../inputs/NumericInputGroup";
import Vector3Input from "../inputs/Vector3Input";
import SelectInput from "../inputs/SelectInput";
import * as EasingFunctions from "@mozillareality/easing-functions";
import { SprayCan } from "@styled-icons/fa-solid/SprayCan";
import { camelPad } from "@xr3ngine/engine/src/editor/functions/utils";

const CurveOptions = Object.keys(EasingFunctions).map(name => ({
  label: camelPad(name),
  value: name
}));

type ParticleEmitterNodeEditorProps = {
  editor: any,
  node: any,
}

export default class ParticleEmitterNodeEditor extends Component<ParticleEmitterNodeEditorProps> {
  static propTypes = {
    editor: PropTypes.object,
    node: PropTypes.object
  };

  static iconComponent = SprayCan;

  static description = "Particle emitter to create particles.";

  updateParticles() {
    for (const node of this.props.editor.selected) {
      node.updateParticles();
    }
  }

  onChangeColorCurve = colorCurve => {
    this.props.editor.setPropertySelected("colorCurve", colorCurve);
  };

  onChangeVelocityCurve = velocityCurve => {
    this.props.editor.setPropertySelected("velocityCurve", velocityCurve);
  };

  onChangeStartColor = startColor => {
    this.props.editor.setPropertySelected("startColor", startColor);
    this.updateParticles();
  };

  onChangeMiddleColor = middleColor => {
    this.props.editor.setPropertySelected("middleColor", middleColor);
  };

  onChangeEndColor = endColor => {
    this.props.editor.setPropertySelected("endColor", endColor);
  };

  onChangeStartOpacity = startOpacity => {
    this.props.editor.setPropertySelected("startOpacity", startOpacity);
  };

  onChangeMiddleOpacity = middleOpacity => {
    this.props.editor.setPropertySelected("middleOpacity", middleOpacity);
  };

  onChangeEndOpacity = endOpacity => {
    this.props.editor.setPropertySelected("endOpacity", endOpacity);
  };

  onChangeSrc = src => {
    this.props.editor.setPropertySelected("src", src);
  };

  onChangeSizeCurve = sizeCurve => {
    this.props.editor.setPropertySelected("sizeCurve", sizeCurve);
  };

  onChangeStartSize = startSize => {
    this.props.editor.setPropertySelected("startSize", startSize);
    this.updateParticles();
  };

  onChangeEndSize = endSize => {
    this.props.editor.setPropertySelected("endSize", endSize);
  };

  onChangeSizeRandomness = sizeRandomness => {
    this.props.editor.setPropertySelected("sizeRandomness", sizeRandomness);
    this.updateParticles();
  };

  onChangeStartVelocity = startVelocity => {
    this.props.editor.setPropertySelected("startVelocity", startVelocity);
  };

  onChangeEndVelocity = endVelocity => {
    this.props.editor.setPropertySelected("endVelocity", endVelocity);
  };

  onChangeAngularVelocity = angularVelocity => {
    this.props.editor.setPropertySelected("angularVelocity", angularVelocity);
  };

  onChangeParticleCount = particleCount => {
    this.props.editor.setPropertySelected("particleCount", particleCount);
    this.updateParticles();
  };

  onChangeLifetime = lifetime => {
    this.props.editor.setPropertySelected("lifetime", lifetime);
    this.updateParticles();
  };

  onChangeAgeRandomness = ageRandomness => {
    this.props.editor.setPropertySelected("ageRandomness", ageRandomness);
    this.updateParticles();
  };

  onChangeLifetimeRandomness = lifetimeRandomness => {
    this.props.editor.setPropertySelected("lifetimeRandomness", lifetimeRandomness);
    this.updateParticles();
  };

  render() {
    return (
      <NodeEditor {...this.props} description={ParticleEmitterNodeEditor.description}>
        { /* @ts-ignore */ }
        <NumericInputGroup
          name="Particle Count"
          min={1}
          smallStep={1}
          mediumStep={1}
          largeStep={1}
          value={this.props.node.particleCount}
          onChange={this.onChangeParticleCount}
        />

        { /* @ts-ignore */ }
        <InputGroup name="Image">
          <ImageInput value={this.props.node.src} onChange={this.onChangeSrc} />
        </InputGroup>

        { /* @ts-ignore */ }
        <NumericInputGroup
          name="Age Randomness"
          info="The amount of variation between when particles are spawned."
          min={0}
          smallStep={0.01}
          mediumStep={0.1}
          largeStep={1}
          value={this.props.node.ageRandomness}
          onChange={this.onChangeAgeRandomness}
          unit="s"
        />

        { /* @ts-ignore */ }
        <NumericInputGroup
          name="Lifetime"
          info="The maximum age of a particle before it is respawned."
          min={0}
          smallStep={0.01}
          mediumStep={0.1}
          largeStep={1}
          value={this.props.node.lifetime}
          onChange={this.onChangeLifetime}
          unit="s"
        />

        { /* @ts-ignore */ }
        <NumericInputGroup
          name="Lifetime Randomness"
          info="The amount of variation between particle lifetimes."
          min={0}
          smallStep={0.01}
          mediumStep={0.1}
          largeStep={1}
          value={this.props.node.lifetimeRandomness}
          onChange={this.onChangeLifetimeRandomness}
          unit="s"
        />

        { /* @ts-ignore */ }
        <InputGroup name="Size Curve">
          { /* @ts-ignore */ }
          <SelectInput options={CurveOptions} value={this.props.node.sizeCurve} onChange={this.onChangeSizeCurve} />
        </InputGroup>

        { /* @ts-ignore */ }
        <NumericInputGroup
          name="Start Particle Size"
          min={0}
          smallStep={0.01}
          mediumStep={0.1}
          largeStep={1}
          value={this.props.node.startSize}
          onChange={this.onChangeStartSize}
          unit="m"
        />

        { /* @ts-ignore */ }
        <NumericInputGroup
          name="End Particle Size"
          min={0}
          smallStep={0.01}
          mediumStep={0.1}
          largeStep={1}
          value={this.props.node.endSize}
          onChange={this.onChangeEndSize}
          unit="m"
        />

        { /* @ts-ignore */ }
        <NumericInputGroup
          name="Size Randomness"
          info="The amount of variation between particle starting sizes."
          min={0}
          smallStep={0.01}
          mediumStep={0.1}
          largeStep={1}
          value={this.props.node.sizeRandomness}
          onChange={this.onChangeSizeRandomness}
          unit="m"
        />

        { /* @ts-ignore */ }
        <InputGroup name="Color Curve">
          { /* @ts-ignore */ }
          <SelectInput options={CurveOptions} value={this.props.node.colorCurve} onChange={this.onChangeColorCurve} />
        </InputGroup>

        { /* @ts-ignore */ }
        <InputGroup name="Start Color">
          { /* @ts-ignore */ }
          <ColorInput value={this.props.node.startColor} onChange={this.onChangeStartColor} />
        </InputGroup>

        { /* @ts-ignore */ }
        <InputGroup name="Start Opacity">
          <CompoundNumericInput
            min={0}
            max={1}
            step={0.01}
            value={this.props.node.startOpacity}
            onChange={this.onChangeStartOpacity}
          />
        </InputGroup>

        { /* @ts-ignore */ }
        <InputGroup name="Middle Color">
          { /* @ts-ignore */ }
          <ColorInput value={this.props.node.middleColor} onChange={this.onChangeMiddleColor} />
        </InputGroup>

        { /* @ts-ignore */ }
        <InputGroup name="Middle Opacity">
          <CompoundNumericInput
            min={0}
            max={1}
            step={0.01}
            value={this.props.node.middleOpacity}
            onChange={this.onChangeMiddleOpacity}
          />
        </InputGroup>

        { /* @ts-ignore */ }
        <InputGroup name="End Color">
          { /* @ts-ignore */ }
          <ColorInput value={this.props.node.endColor} onChange={this.onChangeEndColor} />
        </InputGroup>

        { /* @ts-ignore */ }
        <InputGroup name="End Opacity">
          <CompoundNumericInput
            min={0}
            max={1}
            step={0.01}
            value={this.props.node.endOpacity}
            onChange={this.onChangeEndOpacity}
          />
        </InputGroup>

        { /* @ts-ignore */ }
        <InputGroup name="Velocity Curve">
          { /* @ts-ignore */ }
          <SelectInput
            options={CurveOptions}
            value={this.props.node.velocityCurve}
            onChange={this.onChangeVelocityCurve}
          />
        </InputGroup>

        { /* @ts-ignore */ }
        <InputGroup name="Start Velocity">
          <Vector3Input
            value={this.props.node.startVelocity}
            smallStep={0.01}
            mediumStep={0.1}
            largeStep={1}
            onChange={this.onChangeStartVelocity}
          />
        </InputGroup>

        { /* @ts-ignore */ }
        <InputGroup name="End Velocity">
          <Vector3Input
            value={this.props.node.endVelocity}
            smallStep={0.01}
            mediumStep={0.1}
            largeStep={1}
            onChange={this.onChangeEndVelocity}
          />
        </InputGroup>

        { /* @ts-ignore */ }
        <NumericInputGroup
          name="Angular Velocity"
          min={-100}
          smallStep={1}
          mediumStep={1}
          largeStep={1}
          value={this.props.node.angularVelocity}
          onChange={this.onChangeAngularVelocity}
          unit="°/s"
        />
      </NodeEditor>
    );
  }
}