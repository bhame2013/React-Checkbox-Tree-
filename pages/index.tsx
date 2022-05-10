import json from "src/utils/tree-data.json";

import { CreateTree } from "src/helper/tree";

import * as S from 'src/styles/tree'

export default function HomePage() {

  const Tree = Object.values(json);


  return (
    <S.Tree>
      <ul className="treeview">{CreateTree(Tree)}</ul>
    </S.Tree>
  );
}
