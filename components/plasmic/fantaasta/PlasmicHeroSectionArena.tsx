// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xdSnfxWCziyzb8tBiGitqa
// Component: Uev3p9VZayM
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
import Navigation from "../../Navigation"; // plasmic-import: 3pqoTJs_Sosu/component
import Button from "../../Button"; // plasmic-import: ILa2cLxyoTg0/component
import LoginFrom from "../../LoginFrom"; // plasmic-import: p3a1HfRCrQ1/component
import NewAstaForm from "../../NewAstaForm"; // plasmic-import: wfDe24iI-Nf/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: F-KkpFIKCuog/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_fantaasta.module.css"; // plasmic-import: xdSnfxWCziyzb8tBiGitqa/projectcss
import * as sty from "./PlasmicHeroSectionArena.module.css"; // plasmic-import: Uev3p9VZayM/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: Gng1eaWxMrAo/icon

export type PlasmicHeroSectionArena__VariantMembers = {};

export type PlasmicHeroSectionArena__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeroSectionArena__VariantsArgs;
export const PlasmicHeroSectionArena__VariantProps =
  new Array<VariantPropType>();

export type PlasmicHeroSectionArena__ArgsType = {
  foreground?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicHeroSectionArena__ArgsType;
export const PlasmicHeroSectionArena__ArgProps = new Array<ArgPropType>(
  "foreground",
  "children"
);

export type PlasmicHeroSectionArena__OverridesType = {
  root?: p.Flex<"div">;
  hero3?: p.Flex<"div">;
  img?: p.Flex<"img">;
  background3?: p.Flex<"div">;
  foreground?: p.Flex<"div">;
  pulsantiTab?: p.Flex<"div">;
  form?: p.Flex<"div">;
  newAstaForm?: p.Flex<typeof NewAstaForm>;
  table?: p.Flex<"div">;
  header?: p.Flex<"div">;
  asteContainer?: p.Flex<"div">;
};

export interface DefaultHeroSectionArenaProps {
  foreground?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

function PlasmicHeroSectionArena__RenderFunc(props: {
  variants: PlasmicHeroSectionArena__VariantsArgs;
  args: PlasmicHeroSectionArena__ArgsType;
  overrides: PlasmicHeroSectionArena__OverridesType;
  dataFetches?: PlasmicHeroSectionArena__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.freeBox__p2Ac)}>
        {p.renderPlasmicSlot({
          defaultContents: (
            <Navigation
              className={classNames("__wab_instance", sty.navigation__iyf6A)}
              hideCta={"hideCta" as const}
            >
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img___4FOwv)}
                src={"/plasmic/fantaasta/images/image13.svg"}
              />
            </Navigation>
          ),

          value: args.children
        })}
      </div>

      <div
        data-plasmic-name={"hero3"}
        data-plasmic-override={overrides.hero3}
        className={classNames(defaultcss.all, sty.hero3)}
      >
        <img
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(defaultcss.img, sty.img)}
          src={
            "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80" as const
          }
        />

        <div
          data-plasmic-name={"background3"}
          data-plasmic-override={overrides.background3}
          className={classNames(defaultcss.all, sty.background3)}
        />

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__fAlT)}
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
                    className={classNames(defaultcss.all, sty.freeBox__cMkAi)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(defaultcss.all, sty.freeBox__hPl9N)}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.text__brYd7
                        )}
                      >
                        <span
                          className={
                            "plasmic_default__all plasmic_default__span"
                          }
                        >
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ textDecoration: "underline" }}
                          >
                            {"Arena"}
                          </span>
                        </span>
                      </div>
                    </p.Stack>
                  </p.Stack>

                  <LoginFrom
                    arena={"arena" as const}
                    className={classNames(
                      "__wab_instance",
                      sty.loginFrom__sZfNj
                    )}
                  />
                </React.Fragment>
              ),
              value: args.foreground
            })}
          </p.Stack>

          <div
            data-plasmic-name={"pulsantiTab"}
            data-plasmic-override={overrides.pulsantiTab}
            className={classNames(defaultcss.all, sty.pulsantiTab)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.freeBox__tzlo)}
            >
              <Button
                className={classNames("__wab_instance", sty.button___0STW)}
                colors={"blue" as const}
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__ctiS3
                    )}
                  >
                    {"Crea Asta"}
                  </div>
                }
              />

              <Button
                className={classNames("__wab_instance", sty.button__ikBtr)}
                colors={"blue" as const}
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text___60LZi
                    )}
                  >
                    {"Partecipa Asta"}
                  </div>
                }
              />
            </p.Stack>
          </div>

          <div
            data-plasmic-name={"form"}
            data-plasmic-override={overrides.form}
            className={classNames(defaultcss.all, sty.form)}
          >
            <NewAstaForm
              data-plasmic-name={"newAstaForm"}
              data-plasmic-override={overrides.newAstaForm}
              className={classNames("__wab_instance", sty.newAstaForm)}
            />
          </div>

          <div
            data-plasmic-name={"table"}
            data-plasmic-override={overrides.table}
            className={classNames(defaultcss.all, sty.table)}
          >
            <div
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames(defaultcss.all, sty.header)}
            >
              <div className={classNames(defaultcss.all, sty.column___8Gl1O)}>
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__wkoHf
                  )}
                >
                  {"Nome Asta"}
                </div>
              </div>

              <div className={classNames(defaultcss.all, sty.column__fri9N)}>
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__c3HjO
                  )}
                >
                  {"Amministratore"}
                </div>
              </div>

              <div className={classNames(defaultcss.all, sty.column___69WF)}>
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__rugVy
                  )}
                >
                  {"Numero Partecipanti"}
                </div>
              </div>

              <div className={classNames(defaultcss.all, sty.column___9BKRi)}>
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__uPqVm
                  )}
                >
                  {"Budget Iniziale"}
                </div>
              </div>

              <div className={classNames(defaultcss.all, sty.column__mAnJc)} />
            </div>

            <p.Stack
              as={"div"}
              data-plasmic-name={"asteContainer"}
              data-plasmic-override={overrides.asteContainer}
              hasGap={true}
              className={classNames(defaultcss.all, sty.asteContainer)}
            />
          </div>
        </p.Stack>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "hero3",
    "img",
    "background3",
    "foreground",
    "pulsantiTab",
    "form",
    "newAstaForm",
    "table",
    "header",
    "asteContainer"
  ],
  hero3: [
    "hero3",
    "img",
    "background3",
    "foreground",
    "pulsantiTab",
    "form",
    "newAstaForm",
    "table",
    "header",
    "asteContainer"
  ],
  img: ["img"],
  background3: ["background3"],
  foreground: ["foreground"],
  pulsantiTab: ["pulsantiTab"],
  form: ["form", "newAstaForm"],
  newAstaForm: ["newAstaForm"],
  table: ["table", "header", "asteContainer"],
  header: ["header"],
  asteContainer: ["asteContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  hero3: "div";
  img: "img";
  background3: "div";
  foreground: "div";
  pulsantiTab: "div";
  form: "div";
  newAstaForm: typeof NewAstaForm;
  table: "div";
  header: "div";
  asteContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeroSectionArena__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeroSectionArena__VariantsArgs;
    args?: PlasmicHeroSectionArena__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHeroSectionArena__Fetches;
  } & Omit<PlasmicHeroSectionArena__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeroSectionArena__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHeroSectionArena__ArgProps,
      internalVariantPropNames: PlasmicHeroSectionArena__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHeroSectionArena__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeroSectionArena";
  } else {
    func.displayName = `PlasmicHeroSectionArena.${nodeName}`;
  }
  return func;
}

export const PlasmicHeroSectionArena = Object.assign(
  // Top-level PlasmicHeroSectionArena renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    hero3: makeNodeComponent("hero3"),
    img: makeNodeComponent("img"),
    background3: makeNodeComponent("background3"),
    foreground: makeNodeComponent("foreground"),
    pulsantiTab: makeNodeComponent("pulsantiTab"),
    form: makeNodeComponent("form"),
    newAstaForm: makeNodeComponent("newAstaForm"),
    table: makeNodeComponent("table"),
    header: makeNodeComponent("header"),
    asteContainer: makeNodeComponent("asteContainer"),

    // Metadata about props expected for PlasmicHeroSectionArena
    internalVariantProps: PlasmicHeroSectionArena__VariantProps,
    internalArgProps: PlasmicHeroSectionArena__ArgProps
  }
);

export default PlasmicHeroSectionArena;
/* prettier-ignore-end */
