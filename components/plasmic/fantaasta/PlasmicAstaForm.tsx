// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xdSnfxWCziyzb8tBiGitqa
// Component: TXm06OyomR
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import SettingInput from "../../SettingInput"; // plasmic-import: JGXUTtU5D6Eq/component
import Button from "../../Button"; // plasmic-import: ILa2cLxyoTg0/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_fantaasta.module.css"; // plasmic-import: xdSnfxWCziyzb8tBiGitqa/projectcss
import * as sty from "./PlasmicAstaForm.module.css"; // plasmic-import: TXm06OyomR/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: Gng1eaWxMrAo/icon

export type PlasmicAstaForm__VariantMembers = {
  state: "empty" | "completed";
};

export type PlasmicAstaForm__VariantsArgs = {
  state?: MultiChoiceArg<"empty" | "completed">;
};

type VariantPropType = keyof PlasmicAstaForm__VariantsArgs;
export const PlasmicAstaForm__VariantProps = new Array<VariantPropType>(
  "state"
);

export type PlasmicAstaForm__ArgsType = {};
type ArgPropType = keyof PlasmicAstaForm__ArgsType;
export const PlasmicAstaForm__ArgProps = new Array<ArgPropType>();

export type PlasmicAstaForm__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  settingOne?: p.Flex<"div">;
  settingTwo?: p.Flex<"div">;
  settingInput?: p.Flex<typeof SettingInput>;
  textarea?: p.Flex<"textarea">;
  button?: p.Flex<typeof Button>;
};

export interface DefaultAstaFormProps {
  state?: MultiChoiceArg<"empty" | "completed">;
  className?: string;
}

function PlasmicAstaForm__RenderFunc(props: {
  variants: PlasmicAstaForm__VariantsArgs;
  args: PlasmicAstaForm__ArgsType;
  overrides: PlasmicAstaForm__OverridesType;
  dataFetches?: PlasmicAstaForm__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox)}
      >
        <div
          data-plasmic-name={"settingOne"}
          data-plasmic-override={overrides.settingOne}
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.settingOne
          )}
        >
          {"Nome Asta"}
        </div>

        <input
          className={classNames(defaultcss.input, sty.textbox___44Lwq)}
          placeholder={"None" as const}
          size={1 as const}
          type={"text" as const}
          value={"" as const}
        />

        <div
          data-plasmic-name={"settingTwo"}
          data-plasmic-override={overrides.settingTwo}
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.settingTwo
          )}
        >
          {"Numero Partecipanti"}
        </div>

        <SettingInput
          data-plasmic-name={"settingInput"}
          data-plasmic-override={overrides.settingInput}
          className={classNames("__wab_instance", sty.settingInput)}
        />

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.text__ziATb
          )}
        >
          {"Budget Inziale Asta "}
        </div>

        <input
          className={classNames(defaultcss.input, sty.textbox__ugddB)}
          placeholder={"Numero Crediti" as const}
          size={1 as const}
          type={"text" as const}
          value={"" as const}
        />

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.text__nF2Bn
          )}
        >
          {"Impostazioni Rose"}
        </div>

        <div
          className={classNames(
            defaultcss.all,
            defaultcss.__wab_text,
            sty.text__nvD6
          )}
        >
          {"Numero Totale Calciatori Rosa"}
        </div>

        <input
          className={classNames(defaultcss.input, sty.textbox__v72Qt)}
          placeholder={"Numero Giocatori" as const}
          size={1 as const}
          type={"text" as const}
          value={"" as const}
        />

        <textarea
          data-plasmic-name={"textarea"}
          data-plasmic-override={overrides.textarea}
          className={classNames(defaultcss.textarea, sty.textarea)}
          disabled={true}
        />

        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames("__wab_instance", sty.button)}
          colors={"indigo" as const}
          slot={
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.text__z8CH
              )}
            >
              {"Crea"}
            </div>
          }
        />
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "freeBox",
    "settingOne",
    "settingTwo",
    "settingInput",
    "textarea",
    "button"
  ],
  freeBox: [
    "freeBox",
    "settingOne",
    "settingTwo",
    "settingInput",
    "textarea",
    "button"
  ],
  settingOne: ["settingOne"],
  settingTwo: ["settingTwo"],
  settingInput: ["settingInput"],
  textarea: ["textarea"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  settingOne: "div";
  settingTwo: "div";
  settingInput: typeof SettingInput;
  textarea: "textarea";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAstaForm__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAstaForm__VariantsArgs;
    args?: PlasmicAstaForm__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicAstaForm__Fetches;
  } & Omit<PlasmicAstaForm__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAstaForm__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicAstaForm__ArgProps,
      internalVariantPropNames: PlasmicAstaForm__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicAstaForm__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAstaForm";
  } else {
    func.displayName = `PlasmicAstaForm.${nodeName}`;
  }
  return func;
}

export const PlasmicAstaForm = Object.assign(
  // Top-level PlasmicAstaForm renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    settingOne: makeNodeComponent("settingOne"),
    settingTwo: makeNodeComponent("settingTwo"),
    settingInput: makeNodeComponent("settingInput"),
    textarea: makeNodeComponent("textarea"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicAstaForm
    internalVariantProps: PlasmicAstaForm__VariantProps,
    internalArgProps: PlasmicAstaForm__ArgProps
  }
);

export default PlasmicAstaForm;
/* prettier-ignore-end */
