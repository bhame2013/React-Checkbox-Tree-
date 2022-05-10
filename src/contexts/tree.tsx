import {
  useState,
  createContext,
  ReactNode,
  useContext,
  useCallback,
  ChangeEvent,
} from "react";

import { OnChangeCheckboxTree } from "src/helper/tree";

interface ProvidersProps {
  children: ReactNode;
}

interface TreeContext {
  tree: string[];
  OnChangeTree: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TreeContext = createContext<TreeContext>(undefined);

function TreeProvider({ children }: ProvidersProps) {
  const [tree, setTree] = useState<string[]>([]);

  const OnChangeTree = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const data = OnChangeCheckboxTree(e.target);

    setTree(data);
  }, []);

  return (
    <TreeContext.Provider value={{ tree, OnChangeTree }}>
      {children}
    </TreeContext.Provider>
  );
}

function useTree() {
  const context = useContext(TreeContext);

  if (context === undefined) {
    throw new Error("useTree() must be used within a TreeProvider");
  }
  return context;
}

export { TreeProvider, useTree };
