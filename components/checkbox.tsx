import { OnChangeCheckboxTree } from "src/helper/tree";

interface CheckBoxProps {
  id: string;
  name: string;
}

export function CheckBox({ id, name }: CheckBoxProps) {
  return (
    <>
      <input type="checkbox" name={name} id={id} onChange={(e) => OnChangeCheckboxTree(e.target)} />
      <label htmlFor={id} className="custom-unchecked">
        {name}
      </label>
    </>
  );
}
