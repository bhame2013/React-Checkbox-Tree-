import { CheckBox } from "components/checkbox";

import { TreeItem } from "interfaces/treeItem";

function CreateTree(treeItem: TreeItem[]) {
  return treeItem.map((item) => {
    if (item.children !== {}) {
      return (
        <li key={item.id}>
          <CheckBox id={item.id} name={item.name} />

          <ul>{CreateTree(Object.values(item.children) as TreeItem[])}</ul>
        </li>
      );
    }

    return (
      <li key={item.id}>
        <CheckBox id={item.id} name={item.name} />
      </li>
    );
  });
}

function GetValuesSelecteds() {
  const allInputs = document.querySelectorAll(`input`);

  const filterAllCheckeds = Array.from(allInputs)
    .filter((input) => input.checked === true)
    .map((input) => input.id);

  return filterAllCheckeds;
}

const NodeArray = (selector: string, parent = document) =>
  [].slice.call(parent.querySelectorAll(selector));

//tentei bastante achar a tipagem correta para o "check" porém não encontrei uma que entrasse em conformidade com o parentNode + ser um tipo de EventTarget, desculpe vou ficar devendo
function OnChangeCheckboxTree(check: any) {
  
  //Pega todos os inputs que estão dentro do li e seleciona eles
  const children = NodeArray("input", check.parentNode);

  children.forEach((child) => {

    if(child.indeterminate) {
      child.indeterminate = false
    }

    return (child.checked = check.checked)
  });
  //---------------------------------------------------------------

  //pega na DOM o ul mais próximo que será o seu container e logo após faz um "parentNode" para pegar o elemento pai que será o li e acha o input "pai"
  const parent = check.closest(["ul"]).parentNode.querySelector("input");

  //pega o li pai atráves do input subindo um nível na hierarquia do DOM e depois seleciona todos os ul dentro dele
  //e logo após usando o método NodeArray função criada para procurar todos os itens atráves do parametro passado ele irá buscar os inputs lá dentro
  const siblings = NodeArray(
    "input",
    parent.closest("li").querySelector(["ul"])
  );

  //retorna um array booleano com os estados dos checks
  const checkStatus = siblings.map((check) => check.checked);

  //verifica se todos os itens dentro da "matriz" são verdadeiros caso sejam retorna verdadeiro
  const every = checkStatus.every(Boolean);

  //verifica se pelo menos um item dentro da "matriz" é true, caso seja retorna verdadeiro
  const some = checkStatus.some(Boolean);

  //se todos os itens selecionados anteriormente passarem no teste atráves do every ele seleciona o pai que é o "parent"
  parent.checked = every;

  //caso não passe o pai será indeterminado
  parent.indeterminate = !every && every !== some;

  check = check != parent ? parent : false;

  return GetValuesSelecteds();
}

export { GetValuesSelecteds, CreateTree, OnChangeCheckboxTree };
