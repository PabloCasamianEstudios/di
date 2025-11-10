interface OptionProps {
  option: string;
}

export default function Option({ option }: OptionProps) {
  return <option value={option}>{option}</option>;
}
