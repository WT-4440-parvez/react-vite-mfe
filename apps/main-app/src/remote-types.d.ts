declare module 'utilityApp/Button' {
  import { ButtonProps } from './shared-types';
  export const Button: React.FC<ButtonProps>;
  export default Button;
}

declare module 'utilityApp/Card' {
  import { CardProps } from './shared-types';
  export const Card: React.FC<CardProps>;
  export default Card;
}

declare module 'utilityApp/Input' {
  import { InputProps } from './shared-types';
  export const Input: React.FC<InputProps>;
  export default Input;
}

declare module 'utilityApp/Modal' {
  import { ModalProps } from './shared-types';
  export const Modal: React.FC<ModalProps>;
  export default Modal;
}

declare module 'utilityApp/Table' {
  import { TableProps } from './shared-types';
  export const Table: React.FC<TableProps<any>>;
  export default Table;
}

declare module 'utilityApp/Tabs' {
  import { TabsProps } from './shared-types';
  export const Tabs: React.FC<TabsProps>;
  export default Tabs;
}

declare module 'utilityApp/HeroButton' {
  export const HeroButton: React.FC<HeroButtonProps>;
  export default HeroButton;
}
