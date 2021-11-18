// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xdSnfxWCziyzb8tBiGitqa
// Component: TjWE54Gs_7oW
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
import Button from "../../Button"; // plasmic-import: ILa2cLxyoTg0/component
import ListItem from "../../ListItem"; // plasmic-import: I5LTwhtpH7uf/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: F-KkpFIKCuog/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_fantaasta.module.css"; // plasmic-import: xdSnfxWCziyzb8tBiGitqa/projectcss
import * as sty from "./PlasmicValuesSection2Dark.module.css"; // plasmic-import: TjWE54Gs_7oW/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: Gng1eaWxMrAo/icon
import Icon17Icon from "./icons/PlasmicIcon__Icon17"; // plasmic-import: XGEWJsAsZQXH/icon
import Icon16Icon from "./icons/PlasmicIcon__Icon16"; // plasmic-import: ZHsGtcpBsGnf/icon

export type PlasmicValuesSection2Dark__VariantMembers = {};

export type PlasmicValuesSection2Dark__VariantsArgs = {};
type VariantPropType = keyof PlasmicValuesSection2Dark__VariantsArgs;
export const PlasmicValuesSection2Dark__VariantProps =
  new Array<VariantPropType>();

export type PlasmicValuesSection2Dark__ArgsType = {
  foreground?: React.ReactNode;
};

type ArgPropType = keyof PlasmicValuesSection2Dark__ArgsType;
export const PlasmicValuesSection2Dark__ArgProps = new Array<ArgPropType>(
  "foreground"
);

export type PlasmicValuesSection2Dark__OverridesType = {
  root?: p.Flex<"section">;
  foreground?: p.Flex<"div">;
};

export interface DefaultValuesSection2DarkProps {
  foreground?: React.ReactNode;
  className?: string;
}

function PlasmicValuesSection2Dark__RenderFunc(props: {
  variants: PlasmicValuesSection2Dark__VariantsArgs;
  args: PlasmicValuesSection2Dark__ArgsType;
  overrides: PlasmicValuesSection2Dark__OverridesType;
  dataFetches?: PlasmicValuesSection2Dark__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <p.Stack
      as={"section"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"foreground"}
        data-plasmic-override={overrides.foreground}
        hasGap={true}
        className={classNames(defaultcss.all, sty.foreground)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__koK4V)}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__qYcHw
                  )}
                >
                  {"Freedoms"}
                </div>

                <h2
                  className={classNames(
                    defaultcss.h2,
                    defaultcss.__wab_text,
                    sty.h2__wuOin
                  )}
                >
                  {"Open by design"}
                </h2>

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__i02V
                  )}
                >
                  {
                    "Vitae sed sem a justo mauris potenti a primis vivamus justo tempor viverra adipiscing convallis fusce odio condimentum mi parturient ultricies."
                  }
                </div>

                <Button
                  children2={
                    <Icon17Icon
                      className={classNames(defaultcss.all, sty.svg___5SmFm)}
                      role={"img"}
                    />
                  }
                  className={classNames("__wab_instance", sty.button__saSeQ)}
                  endIcon={"endIcon" as const}
                  flat={"flat" as const}
                  linkLabel={"linkLabel" as const}
                  noGap={"noGap" as const}
                  slot={
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text__z0B3Y
                      )}
                    >
                      {"Learn more"}
                    </div>
                  }
                />
              </p.Stack>

              <div className={classNames(defaultcss.all, sty.freeBox__lMvCf)}>
                <ListItem
                  bottomBorder={"dark" as const}
                  className={classNames("__wab_instance", sty.listItem___2Azbf)}
                  slot={
                    <Icon16Icon
                      className={classNames(defaultcss.all, sty.svg__w2OEi)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__gAu5R
                    )}
                  >
                    {"Built on capability"}
                  </div>
                </ListItem>

                <ListItem
                  bottomBorder={"dark" as const}
                  className={classNames("__wab_instance", sty.listItem__s6Hj4)}
                  slot={
                    <Icon16Icon
                      className={classNames(defaultcss.all, sty.svg__cQtOi)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__wceBl
                    )}
                  >
                    {"Highly energetic"}
                  </div>
                </ListItem>

                <ListItem
                  bottomBorder={"dark" as const}
                  className={classNames("__wab_instance", sty.listItem___1WJyy)}
                  slot={
                    <Icon16Icon
                      className={classNames(defaultcss.all, sty.svg___7Whxh)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__tDkkD
                    )}
                  >
                    {"100% transparency and accountability"}
                  </div>
                </ListItem>

                <ListItem
                  bottomBorder={"dark" as const}
                  className={classNames("__wab_instance", sty.listItem___9NqbB)}
                  slot={
                    <Icon16Icon
                      className={classNames(defaultcss.all, sty.svg__t4J3)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__lawI1
                    )}
                  >
                    {"Refreshing clarity"}
                  </div>
                </ListItem>

                <ListItem
                  className={classNames("__wab_instance", sty.listItem__eClo)}
                  slot={
                    <Icon16Icon
                      className={classNames(defaultcss.all, sty.svg__cDJoA)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__kAyTj
                    )}
                  >
                    {"Modern results"}
                  </div>
                </ListItem>
              </div>
            </React.Fragment>
          ),
          value: args.foreground
        })}
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "foreground"],
  foreground: ["foreground"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "section";
  foreground: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicValuesSection2Dark__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicValuesSection2Dark__VariantsArgs;
    args?: PlasmicValuesSection2Dark__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicValuesSection2Dark__Fetches;
  } & Omit<PlasmicValuesSection2Dark__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicValuesSection2Dark__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicValuesSection2Dark__ArgProps,
      internalVariantPropNames: PlasmicValuesSection2Dark__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicValuesSection2Dark__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicValuesSection2Dark";
  } else {
    func.displayName = `PlasmicValuesSection2Dark.${nodeName}`;
  }
  return func;
}

export const PlasmicValuesSection2Dark = Object.assign(
  // Top-level PlasmicValuesSection2Dark renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    foreground: makeNodeComponent("foreground"),

    // Metadata about props expected for PlasmicValuesSection2Dark
    internalVariantProps: PlasmicValuesSection2Dark__VariantProps,
    internalArgProps: PlasmicValuesSection2Dark__ArgProps
  }
);

export default PlasmicValuesSection2Dark;
/* prettier-ignore-end */
