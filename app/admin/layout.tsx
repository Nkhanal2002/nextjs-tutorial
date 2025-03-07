import React from "react";
interface Props {
  children: React.ReactNode;
}
const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex mx-2 items-center">
      <aside className="bg-slate-200 p-4 mr-2">Aside Content</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
