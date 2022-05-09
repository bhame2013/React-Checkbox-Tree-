interface CheckBoxProps {
  id: string;
  name: string;
  SelectChildrens(id: string): void
}

export function CheckBox({ id, name, SelectChildrens }: CheckBoxProps) {

  function SelectCheckBox() {
    SelectChildrens(id)
  }

  return (
    <>
      <input
        type="checkbox"
        name={name}
        id={id}
        onChange={SelectCheckBox}
      />
      <label htmlFor={id} className="custom-unchecked">
        {name}
      </label>
    </>
  );
}
