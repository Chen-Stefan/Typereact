import React, { ReactElement, ReactNode } from "react";
import "./App.css";

// Conventional props
function Header({ title }: { title: string }) {
  return <h1>{title}</h1>;
}

function HeaderWithContent({ children }: { children: ReactNode }): ReactElement {
  return <h1>{children}</h1>;
}

function App() {
  return (
    <div>
      <Header title={"hello"}></Header>
      <HeaderWithContent><strong>Hi</strong></HeaderWithContent>
    </div>
  );
}

export default App;
