import React from "react";
import { PageComponent } from "./PageContainerStyles";

function PageContainer({ children }) {
  return <PageComponent>{children}</PageComponent>;
}

export default PageContainer;
