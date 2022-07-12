import React, { ReactElement, ReactNode } from "react";
import "./App.css";

// Conventional props
function Heading({ title }: { title: string }) {
  return <h1>{title}</h1>;
}

function HeadingWithContent({ children }: { children: ReactNode }): ReactElement {
  return <h1>{children}</h1>;
}

const defaulfContainerProps = {
  heading: <strong>My heading</strong>
}

function Container({heading, children} : {children: ReactNode} & typeof defaulfContainerProps): ReactElement {
  return <div><h1>{heading}</h1>{children}</div>
}
// Children 指的是两个tag中间夹的内容
Container.defaultProps = defaulfContainerProps

function App() {
  return (
    <div>
      <Heading title={"hello"}></Heading>
      <HeadingWithContent><strong>Hi</strong></HeadingWithContent>
      <Container>Food</Container>  
    </div>
  );
}

export default App;
