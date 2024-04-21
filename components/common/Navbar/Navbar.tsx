import React from "react";
import classNames from "classnames";

type Props = {
  variant: "horizontal" | "vertical";
  item: string | string[];
};

const renderMenuItems = (items: string[]) => {
  return items?.map((item, index) => (
    <div key={index} className="w-[180px] p-2 shadow-xl bg-white rounded-lg flex justify-center cursor-pointer">
      <span className="rounded-lg">{item}</span>
    </div>
  ));
};

const variantClassName = (variant: "horizontal" | "vertical"): string => {
  if (variant === "vertical") return "flex-col";
  return "flex-row";
};

const Navbar = ({ variant = "horizontal", item }: Props) => {
  console.log({ classNames: variantClassName(variant),variant });
  return (
    <section
      className={classNames('bg-slate-300',
        { "h-full w-[240px] flex items-start justify-center gap-2 ": variant === "vertical" },
        { "w-full flex justify-end ": variant === "horizontal" }
      )}
    >
      <div
        className={classNames(
          "flex gap-8 p-4 items-center",
          variantClassName(variant)
        )}
      >
        {Array.isArray(item) ? (
          renderMenuItems(item as string[])
        ) : (
            <div  className="w-[180px] p-2 shadow-xl bg-white rounded-lg flex justify-center cursor-pointer">
            <span className="rounded-lg">{item}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
