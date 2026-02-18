import { cn } from "@/lib/cn";
import { ArrowRight } from "lucide-react";

export function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={cn(
        "group flex items-center cursor-pointer gap-1.5 bg-button-primary text-white pl-4 pr-1.5 py-1.5 rounded-full font-medium font-satoshi shadow-[0px_0px_38px_0px_rgba(156,99,73,0.28)]",
        className,
      )}
    >
      <span className="-mt-0.5">{children}</span>

      <div className="group-hover:bg-white/10 group-hover:-rotate-45 duration-300 transition rounded-full p-1.5">
        <ArrowRight size={14} strokeWidth={2.5} />
      </div>
    </button>
  );
}
