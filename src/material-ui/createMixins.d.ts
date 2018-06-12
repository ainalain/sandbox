import * as React from "react";

declare module "@material-ui/core/styles/createMixins" {
  export interface Mixins {
    flexColumn: React.CSSProperties;
    flexRow: React.CSSProperties;
    flexCenter: React.CSSProperties;
    size100: React.CSSProperties;
    font16: React.CSSProperties;
  }

  export interface MixinsOptions extends Partial<Mixins> {
    style?: any;
    display?: string;
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    width?: string;
    height?: string;
  }
}
