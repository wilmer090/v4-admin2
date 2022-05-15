export type SidebarItemProps = {
  key?: number;
  Icon?: React.ReactNode;
  title: string;
  to?: string;
};

export type SidebarMenuProps = SidebarItemProps & {
  children: SidebarItemProps[];
};
