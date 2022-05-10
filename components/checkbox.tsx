import { useTree } from "src/contexts/tree";

interface CheckBoxProps {
  id: string;
  name: string;
}

export function CheckBox({ id, name }: CheckBoxProps) {

  const { OnChangeTree } = useTree()

  return (
    <>
      <input type="checkbox" name={name} id={id} onChange={OnChangeTree} />
      <label htmlFor={id} className="custom-unchecked">
        {name}
      </label>
    </>
  );
}
