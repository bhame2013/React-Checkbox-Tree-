import json from "src/utils/tree-data.json";

import { TreeItem } from "interfaces";

import { CheckBox } from "components/checkbox";

export default function HomePage() {
  
  const Tree = Object.values(json);

  function SelectChildrens(id: string) {
    const childrensOfInputSelected = document.querySelectorAll(
      `.${"c" + id} input`
    );
    const valueCheckboxSelected = (
      childrensOfInputSelected[0] as HTMLInputElement
    ).checked;

    childrensOfInputSelected.forEach((children: HTMLInputElement) => {
      children.checked = valueCheckboxSelected;
    });

    const allInputs= document.querySelectorAll(`input`);

    const filterAllCheckeds = Array.from(allInputs).filter((input => input.checked === true)).map((input) => input.id)

    console.log(filterAllCheckeds)
  }

  function NewTree(treeItem: TreeItem[]) {
    return treeItem.map((item) => {
      if (item.children !== {}) {
        return (
          <li key={item.id} className={"c" + item.id}>
            <CheckBox
              id={item.id}
              name={item.name}
              SelectChildrens={SelectChildrens}
            />

            <ul>{NewTree(Object.values(item.children) as TreeItem[])}</ul>
          </li>
        );
      }

      return (
        <li key={item.id} className={item.id}>
          <CheckBox
            id={item.id}
            name={item.name}
            SelectChildrens={SelectChildrens}
          />
        </li>
      );
    });
  }

  return (
    <div>
      <h2>Treeview with Custom Checkboxes and Indeterminate State</h2>

      <ul className="treeview">{NewTree(Tree)}</ul>
    </div>
  );
}
