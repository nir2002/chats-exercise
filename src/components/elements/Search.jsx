import Input from "../base/Input";

export const Search = (props) => (
  <div className={props.className}>
    <Input {...props} type="search" placeholder="Search..." />
  </div>
);
