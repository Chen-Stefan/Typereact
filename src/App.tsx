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

type ContainerProps = {children: ReactNode} & typeof defaulfContainerProps

function Container({heading, children} : ContainerProps): ReactElement {
  return <div><h1>{heading}</h1>{children}</div>
}
// Children 指的是两个tag中间夹的内容
Container.defaultProps = defaulfContainerProps

// Functional props
function TextWithNumber({
  children
} : {
  children: (num: number) => ReactNode
}) {
  const [state, setState] = React.useState<number>(1)
  
  return (
    <div>
      <div>
        {children(state)}
      </div>
      <div><button onClick={() => setState(state + 1)}>Add</button></div>
    </div>
  )
}
function App() {
  return (
    <div>
      <Heading title={"hello"}></Heading>
      <HeadingWithContent><strong>Hi</strong></HeadingWithContent>
      <Container>Food</Container>  
      <TextWithNumber>{(num: number) => <div>Today's lucky number is {num}</div>}</TextWithNumber>
    </div>
  );
}

export default App;
