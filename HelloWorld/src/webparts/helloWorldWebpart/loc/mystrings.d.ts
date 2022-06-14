declare interface IHelloWorldWebpartWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'HelloWorldWebpartWebPartStrings' {
  const strings: IHelloWorldWebpartWebPartStrings;
  export = strings;
}
