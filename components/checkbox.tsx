import { useTree } from "src/contexts/tree";

interface CheckBoxProps {
  id: string;
  name: string;
}

export function CheckBox({ id, name }: CheckBoxProps) {

  const { onChangeTree } = useTree()

  return (
    <>
      <input type="checkbox" name={name} id={id} onChange={onChangeTree} />
      <label htmlFor={id} className="custom-unchecked">
        {name}
      </label>
    </>
  );
}
