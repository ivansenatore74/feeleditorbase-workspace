declare module '@wemake4u/feel-editor-base' {

  interface FeelEntryBase {
    name: string;
    detail?: string;
    info?: string | HTMLElement | (() => string | HTMLElement);
  }

  export interface FeelFunctionParam {
    name: string;
    type?: string;
  }

  export type FeelEntry = FeelVariable | FeelFunction;

  export interface FeelVariable extends FeelEntryBase {
    isList?: boolean;
    entries?: FeelEntry[];
  }

  export interface FeelFunction extends FeelEntryBase {
    type: 'function';
    params?: FeelFunctionParam[];
    boost?: number
  }

  export type FeelDialect = 'expression' | 'unaryTests';

  export interface FeelEditorOptions {
    dialect?: FeelDialect;
    parserDialect?: FeelDialect;
    container: HTMLElement;
    contentAttributes?: Record<string, string>;
    tooltipContainer?: HTMLElement;
    onChange?: (value: string) => void;
    onKeyDown?: (event: KeyboardEvent) => void;
    onLint?: (issues: any[]) => void;
    placeholder?: string;
    readOnly?: boolean;
    value?: string;
    builtins?: FeelFunction[];
    variables?: FeelEntry[];
    extensions: any;
  }

  export default class FeelEditor {
    constructor(options: FeelEditorOptions);

    getValue(): string;
    setValue(value: string): void;

    focus(): void;

    getSelection(): {
      start: number;
      end: number;
    };

    setPlaceholder(placeholder: string): void;

    setVariables(variables: FeelEntry[]): void;
  }

}
