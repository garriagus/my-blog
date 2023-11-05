"use client";

type Props = {
    children: string | string
  }

export const CopyButton = ({ children }: Props) => {
  const textToCopy = children;
  function copyText(textToCopy: string) {  
    navigator.clipboard.writeText(textToCopy);
  }

  return (
    <div className="flex justify-end w-1/2 h-screen items-center">
      <button onClick={() => copyText(children)}>Click me</button>
    </div>
  );
}
