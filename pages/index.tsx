import json from "src/utils/tree-data.json";

import * as S from "src/styles/tree";

import { CreateTree } from "src/helper/tree";

import { useTree } from "src/contexts/tree";

export default function HomePage() {
  const treeJsonParsed = Object.values(json);

  const { tree } = useTree();

  return (
    <S.Tree>
      <ul>{CreateTree(treeJsonParsed)}</ul>

      {tree.length > 0 && (
        <ol>
          {tree.map((iten) => (
            <li key={iten}>{iten}</li>
          ))}
        </ol>
      )}

      {
        tree.length === 0 && (
          <p>Nada por aqui ;(</p>
        )
      }
    </S.Tree>
  );
}
