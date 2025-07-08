// SWAPPED ORIGINAL DESTRUCTURING OF RADIX TOOLTIP FOR BASE UI TOOLTIP
// RADIX TOOLTIP HAS HORRIBLE UNADDRESSED PERFORMANCE ISSUES
import * as React from "react";
import { Tooltip as BaseTooltip } from "@base-ui-components/react/tooltip";
import { cn } from "@/_lib/utils";

function TooltipProvider({ children, ...props }: React.ComponentProps<typeof BaseTooltip.Provider>) {
  return (
    <BaseTooltip.Provider data-slot="tooltip-provider" {...props}>
      {children}
    </BaseTooltip.Provider>
  );
}

function Tooltip({ delay = 0, hoverable = false, ...props }: React.ComponentProps<typeof BaseTooltip.Root>) {
  return <BaseTooltip.Root data-slot="tooltip" delay={delay} hoverable={hoverable} {...props} />;
}

function TooltipTrigger({ ...props }: React.ComponentProps<typeof BaseTooltip.Trigger>) {
  return <BaseTooltip.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 8,
  side = "top",
  align = "center",
  children,
  ...props
}: React.ComponentProps<typeof BaseTooltip.Popup> & {
  sideOffset?: number;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
}) {
  return (
    <BaseTooltip.Portal>
      <BaseTooltip.Positioner side={side} align={align} sideOffset={sideOffset}>
        <BaseTooltip.Popup
          data-slot="tooltip-content"
          className={cn("bg-primary text-primary-foreground z-50 rounded-md px-3 py-1.5 text-xs", className)}
          {...props}>
          {children}
          <BaseTooltip.Arrow className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
            <div className="h-2 w-2 rotate-45 bg-primary"></div>
          </BaseTooltip.Arrow>
        </BaseTooltip.Popup>
      </BaseTooltip.Positioner>
    </BaseTooltip.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
