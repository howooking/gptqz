export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="px-8 mx-auto container">{children}</div>;
}
